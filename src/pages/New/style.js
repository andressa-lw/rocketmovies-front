import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-height: 100vh;
  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas: "header" "content";
`

export const Form = styled.form`
  margin: 38px auto;

  > header {
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-bottom: 40px;
  }

  > .group {
    display: flex;
    gap: 40px
  }

  > p {
    font-size: 20px;
    font-weight: 400;
    color: ${({theme}) => theme.COLORS.GRAY_150};
    margin-bottom: 24px;
  }
`

export const Categories = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  background: ${({theme}) => theme.COLORS.GRAY_900};
  gap: 24px;
`

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  margin-top: 40px;
`