import { Link } from "react-router-dom"
import { Input } from "../Input"
import { Section, Profile } from "./styles"
import { useAuth } from "../../hooks/auth"
import { api } from "../../services/api"
import { useNavigate } from "react-router-dom"

import avatarPlaceholder from "../../assets/avatar_placeholder.svg"

export function Header({ search, setSearch }) {
  const { signOut, user } = useAuth()
  const navigate = useNavigate()

  function handleSignOut() {
    navigate("/")
    signOut()
  }

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder

  return (
    <Section>
      <div className="container">
        <Link to="/">
          <h1>RocketMovies</h1>
        </Link>

        <Input
          placeholder="Pesquisar pelo título"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />

        <Profile>
          <div>
            <Link to="/profile">
              <strong>{user.name}</strong>
            </Link>
            <button onClick={handleSignOut}>Sair</button>
          </div>

          <img src={avatarUrl} alt="Foto {user.name}" />
        </Profile>
      </div>
    </Section>
  )
}
