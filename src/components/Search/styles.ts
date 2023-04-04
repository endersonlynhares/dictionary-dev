import styled from "styled-components";

export const SearchContainer = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;

  button{
    display: flex;
    align-items: center;
    position: absolute;
    right: 1.5rem;
    z-index: 0;
    background: 0;
    border: 0;
    cursor: pointer;
  }

  svg{
    color: ${props => props.theme.colors["primary-500"]};

  }

  input{
    flex: 1;  
    background: ${props => props.theme.colors["base-input"]};
    border: 0;
    color: ${props => props.theme.colors["base-text"]};
    height: 4.5rem;
    border-radius: 15px;
    padding: 10px;
    padding-left: 3rem ;
    font-size: 2rem;
    font-weight: bold;
  }

`