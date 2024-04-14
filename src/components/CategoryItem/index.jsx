import { Container } from "./style";
import { GoPlus, GoX } from "react-icons/go";

export function CategoryItem({isNew, value, onClick, ...rest}) {
  return (
    <Container isNew={isNew}>
      <input type="text" value={value} readOnly={!isNew} {...rest} />
      <button onClick={onClick} type="button">
        {isNew ? <GoPlus /> : <GoX /> }
      </button>
    </Container>
  )
}