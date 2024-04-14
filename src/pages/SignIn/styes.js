import styled from "styled-components"
import backgroundImg from '../../assets/bg-login.jpg'

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: stretch;
`

export const Form = styled.form`
  padding: 0 136px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  > h1 {
    font-size: 48px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > h2 {
    margin: 48px 0;
    font-size: 24px;
  }

  > p {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 14px;
  }

  a {
    text-align: center;
    display: inline-flex;
    margin: 42px auto 0 auto;
  }
`

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`