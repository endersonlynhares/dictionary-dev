import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 2.5rem 3rem;

  svg{
    color: ${props => props.theme.colors["gray-100"]};
  }

  div{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;
  }


`