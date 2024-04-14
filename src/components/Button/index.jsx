import { Container } from "./styles"

export function Button({
  icon: Icon,
  title,
  isdark = false,
  isfull = false,
  loading = false,
  ...rest
}) {
  return (
    <Container disabled={loading} isdark={isdark} isfull={isfull} {...rest}>
      {Icon && <Icon />}
      {loading ? "Carregando..." : title}
    </Container>
  )
}
