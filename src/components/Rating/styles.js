import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  justify-content: ${({ isSmall }) => (isSmall ? "flex-start" : "center")};
  gap: ${({ isSmall }) => (isSmall ? "6px" : "10px")};

  svg {
    font-size: ${({ isSmall }) => (isSmall ? "14px" : "24px")};
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`
