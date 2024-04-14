import styled from "styled-components"

export const Container = styled.div`
  display: grid;
  width: 100%;
  min-height: 100vh;
  grid-template-rows: 105px auto;
  row-gap: 40px;
  grid-template-areas:
    "header"
    "content";
`

export const TopTitle = styled.section`
  display: flex;
  align-items: center;
  column-gap: 20px;
  margin: 24px 0;

  h1 {
    font-size: 36px;
    font-weight: 500;
  }
`

export const Infos = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 40px;

  .user-infos,
  .note-infos {
    display: flex;
    align-items: center;
    gap: 8px;
    justify-content: center;
  }

  img {
    width: 16px;
    height: 16px;

    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_200};
  }

  svg {
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`

export const Tags = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
`
export const Description = styled.div`
  margin: 40px 0;

  p {
    text-align: justify;
    & + p {
      margin-top: 20px;
    }
  }
`
