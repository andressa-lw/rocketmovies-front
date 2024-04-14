import styled from "styled-components"

export const Container = styled.textarea`
  padding: 20px 24px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  width: 100%;
  margin: 32px 0 40px 0;
  height: 274px;
  border: none;
  outline: none;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  resize: none;
`
