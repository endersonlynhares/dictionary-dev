import styled from "styled-components";

export const DictionaryContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 3rem;
  flex-direction: column;

  header{
    display: flex;
    flex: 1;
    gap: 10px;
    align-items: center;
    justify-content: space-between;

    h1{
      font-size: 4rem;
      color: ${props => props.theme.colors["base-text"]};
    }

    span{
      font-size: 2rem;
      font-weight: bold;
      color: ${props => props.theme.colors["primary-500"]};
    }

    button{
      width: 5rem;
      height: 5rem;
      img{
        width: 5rem;
        height: 5rem;
      }
      border: 0;
      background: none;
      cursor: pointer;
    }
    
  }
`