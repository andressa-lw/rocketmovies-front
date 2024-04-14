import styled from "styled-components"

export const Section = styled.header`
  grid-area: header;
  padding-block: 30px;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_200};

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 64px;
  }

  h1 {
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 24px;
    font-weight: 700;
  }
`

export const Profile = styled.div`
  display: flex;
  align-items: center;
  column-gap: 16px;

  > img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    object-fit: cover;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    line-height: 24px;

    a {
      color: ${({ theme }) => theme.COLORS.WHITE};
    }

    strong {
      font-size: 14px;
      font-weight: 700;
      text-wrap: nowrap;
    }

    button {
      font-size: 14px;
      font-weight: 400;
      background: transparent;
      border: 0;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }
`
