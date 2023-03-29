import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  border: 1px solid green;

  padding: 2.5rem 3rem;

  svg{
    color: ${props => props.theme.colors["gray-100"]};
  }


`