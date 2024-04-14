import { MdArrowBack } from "react-icons/md"
import { Header } from "../../components/Header"
import { Buttons, Categories, Container, Form } from "./style"
import { ButtonText } from "../../components/ButtonText"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { Textarea } from "../../components/Textarea"
import { CategoryItem } from "../../components/CategoryItem"
import { useState } from "react"
import { api } from "../../services/api"
import { useNavigate } from "react-router-dom"

export function New() {
  const [tags, setTags] = useState([])
  const [newTags, setNewTags] = useState("")

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [rating, setRating] = useState(0)

  const navigate = useNavigate()

  function handleAddTag() {
    setTags((prevState) => [...prevState, newTags])
    setNewTags("")
  }

  function handleRemoveTag(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted))
  }

  async function handleNewMovie() {
    if (!title) {
      return alert("Digite o título do filme")
    }

    if (!rating) {
      return alert("Digite a nota do filme")
    }

    if (newTags) {
      return alert(
        "Você deicou uma tag no campo para adicionar, mas não clicou em adicionar."
      )
    }

    await api.post("/movies", {
      title,
      description,
      rating,
      tags,
    })

    alert("Filme criado com sucesso!")
    navigate("/")
  }

  return (
    <Container>
      <Header />

      <main className="container">
        <Form>
          <header>
            <ButtonText icon={MdArrowBack} title="Voltar" to="/" />
            <h1>Meus filmes</h1>
          </header>

          <div className="group">
            <Input
              placeholder="Título"
              onChange={(e) => setTitle(e.target.value)}
            />
            <Input
              placeholder="Sua nota (de 0 a 5)"
              type="number"
              min="0"
              max="5"
              onChange={(e) => setRating(e.target.value)}
            />
          </div>

          <Textarea
            placeholder="Observações"
            onChange={(e) => setDescription(e.target.value)}
          />

          <p>Marcadores</p>

          <Categories>
            {tags.map((tag, index) => (
              <CategoryItem
                key={String(index)}
                value={tag}
                onClick={() => handleRemoveTag(tag)}
              />
            ))}

            <CategoryItem
              isNew
              placeholder="Nova categoria"
              onChange={(e) => setNewTags(e.target.value)}
              value={newTags}
              onClick={handleAddTag}
            />
          </Categories>

          <Buttons>
            <Button title="Excluir filme" isdark={true} isfull={true} to="/" />
            <Button
              title="Salvar alterações"
              isfull={true}
              onClick={handleNewMovie}
            />
          </Buttons>
        </Form>
      </main>
    </Container>
  )
}
