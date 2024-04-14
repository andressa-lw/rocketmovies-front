import { Link } from "react-router-dom"
import styled from "styled-components"

export const Container = styled(Link)`
  color: ${({ theme }) => theme.COLORS.PINK};
  display: inline-flex;
  align-items: center;
  gap: 8px;

  > svg {
    font-size: 18px;
  }
`
