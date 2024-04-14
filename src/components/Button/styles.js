import { Link } from "react-router-dom"
import styled from "styled-components"

export const Container = styled(Link)`
  width: ${({ isfull }) => (isfull ? "100%" : "fit-content")};
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 8px;
  padding: 12px 32px;
  margin-top: 16px;
  border-radius: 8px;
  font-weight: 500;
  border: 0;
  color: ${({ theme, isdark }) =>
    isdark ? theme.COLORS.PINK : theme.COLORS.GRAY_900};
  background-color: ${({ theme, isdark }) =>
    isdark ? theme.COLORS.GRAY_900 : theme.COLORS.PINK};

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`
