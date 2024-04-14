import { useState } from "react"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import { Input } from "../../components/Input"
import { Background, Container, Form } from "./styes"
import { useNavigate } from "react-router-dom"

import {
  MdOutlineEmail,
  MdLockOutline,
  MdOutlinePermIdentity,
  MdArrowBack,
} from "react-icons/md"
import { api } from "../../services/api"

export function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos")
    }

    api
      .post("/users", { name, email, password })
      .then(() => {
        alert("Usuário cadastrado com sucesso!")
        navigate("/")
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message)
        } else {
          alert("Não foi possível cadastrar!")
        }
      })
  }

  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Crie sua conta</h2>

        <Input
          type="text"
          placeholder="Nome"
          icon={MdOutlinePermIdentity}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="email"
          placeholder="E-mail"
          icon={MdOutlineEmail}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Senha"
          icon={MdLockOutline}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button title="Cadastrar" isfull={true} onClick={handleSignUp} />

        <ButtonText icon={MdArrowBack} to="/" title="Voltar para o login" />
      </Form>

      <Background />
    </Container>
  )
}
