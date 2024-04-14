import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import { Input } from "../../components/Input"
import { Background, Container, Form } from "./styes"

import { useAuth } from "../../hooks/auth"

import { MdOutlineEmail, MdLockOutline } from "react-icons/md"
import { useState } from "react"

export function SignIn() {
  const { signIn } = useAuth()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function handleSignIn() {
    signIn({ email, password })
  }

  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>

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

        <Button title="Entrar" isfull={true} onClick={handleSignIn} />

        <ButtonText to="/register" title="Criar conta" />
      </Form>

      <Background />
    </Container>
  )
}
