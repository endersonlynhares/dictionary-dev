import styled from "styled-components";

export const MeaningContainer = styled.div`
  margin-top: 4rem;
  width: 100%;

  h3{
    font-size: 2.2rem;
    display: flex;
    align-items: center;
    gap: 15px;
    color: ${props => props.theme.colors["base-text"]};

    &:after{
      content: "";
      width: 100%;
      border: 1px solid #B5B5B5;
    }
  }

  div{
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    
    span{
      font-size: 1.8rem;
      color: ${props => props.theme.colors["base-text-secondary"]};
    }
    
    ul {
      margin-top: 1.4rem;
      margin-left: 2.5rem;
      list-style: none;
      
    }

    ul li{
      display: flex;
      align-items: center;
      color: ${props => props.theme.colors["base-text"]};
    }
    li + li{
      margin-top: 0.8rem;
    }


    ul li:before {
      content: '•';
      margin: 0 10px;
      font-size: 20px;
      color: ${props => props.theme.colors["primary-500"]};
    }

    ul > ul{
      ul li:before {
        content: '◦';
        margin: 0 10px;
        font-size: 20px;
        color: ${props => props.theme.colors["primary-500"]};
      }
    }

  }

`