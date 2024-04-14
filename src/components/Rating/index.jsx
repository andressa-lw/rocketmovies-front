import { Container } from "./styles"

import { IoIosStar, IoMdStarOutline } from "react-icons/io"

export function Rating({ grade, isSmall }) {
  let stars = []
  for (let cont = 1; cont <= 5; cont++) {
    if (cont <= grade) {
      stars.push(<IoIosStar key={cont} />)
    } else {
      stars.push(<IoMdStarOutline key={cont} />)
    }
  }

  return <Container isSmall={isSmall}>{stars}</Container>
}
