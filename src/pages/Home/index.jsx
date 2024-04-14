import { Button } from "../../components/Button"
import { Header } from "../../components/Header"

import { GoPlus } from "react-icons/go"

import { Cards, TopTitle } from "./styles"
import { Card } from "../../components/Card"
import { useEffect, useState } from "react"
import { api } from "../../services/api"
import { useNavigate } from "react-router-dom"

export function Home() {
  const [search, setSearch] = useState("")
  const [movies, setMovies] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    async function fetchMovies() {
      const response = await api.get(`/movies?title=${search}`)
      setMovies(response.data)
    }

    fetchMovies()
  }, [search])

  function handleDetails(id) {
    navigate(`/movie/${id}`)
  }

  return (
    <>
      <Header search={search} setSearch={setSearch} />

      <main>
        <div className="container">
          <TopTitle>
            <h1>Meus filmes</h1>
            <Button title="Adicionar filme" icon={GoPlus} to="/new" />
          </TopTitle>

          <Cards>
            {movies.map((movie) => (
              <Card
                key={String(movie.id)}
                data={movie}
                onClick={() => handleDetails(movie.id)}
              />
            ))}
          </Cards>
        </div>
      </main>
    </>
  )
}
