import { MdArrowBack, MdOutlineCameraAlt } from "react-icons/md"
import { Avatar, Container, Form } from "./style"
import { Input } from "../../components/Input"
import { useAuth } from "../../hooks/auth"

import {
  MdOutlineEmail,
  MdLockOutline,
  MdOutlinePermIdentity,
} from "react-icons/md"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import { useState } from "react"

import avatarPlaceholder from "../../assets/avatar_placeholder.svg"
import { api } from "../../services/api"

export function Profile() {
  const { user, updateProfile } = useAuth()

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [passwordOld, setPasswordOld] = useState()
  const [passwordNew, setPasswordNew] = useState()

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder
  const [avatar, setAvatar] = useState(avatarUrl)
  const [avatarFile, setAvatarFile] = useState(null)

  async function handleUpdate() {
    const updated = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld,
    }

    const userUpdated = Object.assign(user, updated)

    await updateProfile({ user: userUpdated, avatarFile })
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0]
    setAvatarFile(file)

    const imagePreview = URL.createObjectURL(file)
    setAvatar(imagePreview)
  }

  return (
    <Container>
      <header>
        <ButtonText icon={MdArrowBack} title="Voltar" to="/" />
      </header>

      <Form>
        <Avatar>
          <img src={avatar} alt="Foto do usuário" />
          <label htmlFor="avatar">
            <MdOutlineCameraAlt />

            <input id="avatar" type="file" onChange={handleChangeAvatar} />
          </label>
        </Avatar>

        <Input
          type="text"
          placeholder="Nome"
          icon={MdOutlinePermIdentity}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="email"
          placeholder="email"
          icon={MdOutlineEmail}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Senha atual"
          icon={MdLockOutline}
          onChange={(e) => setPasswordOld(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Nova senha"
          icon={MdLockOutline}
          onChange={(e) => setPasswordNew(e.target.value)}
        />

        <Button title="Salvar" isFull onClick={handleUpdate} />
      </Form>
    </Container>
  )
}
