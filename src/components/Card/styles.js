import styled from "styled-components"

export const Container = styled.div`
  border-radius: 16px;
  background: rgba(255, 133, 155, 0.05);
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  cursor: pointer;

  h2 {
    font-size: 24px;
    font-weight: 700;
  }

  p {
    color: ${({ theme }) => theme.COLORS.GRAY_150};
    font-size: 15px;
  }

  a {
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`

export const Tags = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 16px;
`
