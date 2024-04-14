import styled from "styled-components"

export const Container = styled.div`
  padding: 20px 24px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
  margin-bottom: 8px;

  > svg {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    width: 20px;
    height: 20px;
  }

  > input {
    width: 100%;
    border: none;
    outline: none;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    background-color: transparent;
  }
`
