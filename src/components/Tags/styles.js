import styled from "styled-components"

export const Container = styled.span`
  font-weight: 400;
  font-size: 12px;
  padding: 5px 16px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  border-radius: 8px;
`
