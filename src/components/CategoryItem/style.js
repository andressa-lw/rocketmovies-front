import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({theme, isNew}) => isNew ? 'transparent' : theme.COLORS.GRAY_700};
  color: ${({theme, isNew}) => isNew ? theme.COLORS.WHITE : theme.COLORS.GRAY_150};
  border: ${({theme, isNew}) => isNew ? `1px dashed ${theme.COLORS.GRAY_150}` : 'none'};
  border-radius: 10px;
  padding-right: 16px;

  > button {
    border: none;
    background: none;

    svg {
      color: ${({theme}) => theme.COLORS.PINK};
      font-size: 20px
    }
  }

  > input {
    height: 56px;
    width: 100%;
    padding: 12px;
    color: ${({theme}) => theme.COLORS.WHITE};
    background: transparent;
    border: 0;

    &::placeholder {
      color: ${({theme}) => theme.COLORS.GRAY_150};
    }
  }
`