import { GoArrowLeft, GoClock } from "react-icons/go"
import { useParams, useNavigate } from "react-router-dom"

import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { Rating } from "../../components/Rating"
import { Tag } from "../../components/Tags"

import { Container, Infos, TopTitle, Tags, Description } from "./styles"
import { useEffect, useState } from "react"
import { api } from "../../services/api"
import { useAuth } from "../../hooks/auth"

import avatarPlaceholder from "../../assets/avatar_placeholder.svg"
import { Button } from "../../components/Button"

export function Details() {
  const [data, setData] = useState(null)
  const params = useParams()
  const navigate = useNavigate()
  const { user } = useAuth()
  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder

  useEffect(() => {
    async function fetchMovie() {
      const response = await api.get(`/movies/${params.id}`)
      setData(response.data)
    }
    fetchMovie()
  }, [])

  function handleBack() {
    navigate(-1)
  }

  async function handleDeleteMovie() {
    const confirm = window.confirm("Tem certeza de querer excluir o Filme?")
    if (confirm) {
      const response = await api.delete(`/movies/${params.id}`)
      setData(response.data)
      navigate("/")
    }
  }

  return (
    <Container>
      <Header />

      {data && (
        <main>
          <div className="container">
            <ButtonText
              onClick={handleBack}
              title="Voltar"
              icon={GoArrowLeft}
            />

            <TopTitle>
              <h1>{data.title}</h1>
              <Rating grade={data.rating} />
            </TopTitle>

            <Infos>
              <div className="user-infos">
                <img src={avatarUrl} alt="Foto {user.name}" />
                <p>{user.name}</p>
              </div>

              <div className="note-infos">
                <GoClock />
                <p>{data.created_at}</p>
              </div>
            </Infos>

            {data.tags && (
              <Tags>
                {data.tags.map((tag) => (
                  <Tag name={tag.name} key={String(tag.id)} />
                ))}
              </Tags>
            )}

            <Description>
              <p>{data.description}</p>
            </Description>

            <Button title="Excluir filme" onClick={handleDeleteMovie} />
          </div>
        </main>
      )}
    </Container>
  )
}
