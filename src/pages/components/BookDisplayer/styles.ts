import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 300px 300px 300px 300px;
  width: 100%;
  padding: 45px;
  row-gap: 35px;
  height: fit-content;
  justify-content: center;
  transition:  2s;

  @media (max-width: 1080px) {
    grid-template-columns: 300px 300px 300px;
    

  }

  @media (max-width: 800px) {
    grid-template-columns: 300px 300px;
  }

  @media (max-width: 500px) {
    grid-template-columns: 300px;
  }
`;


export const Item = styled.div`
  height: 23em;
  width: 190px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: auto;
  border-radius: 4px;
  padding: 8px;
  &:hover {
    transition: ease-in-out 0.5s;
    box-shadow: 0px 6px 40px 10px ${(props) => props.theme.colors.hover};
  }
`;

export const BookCover = styled(Image)`
  cursor: pointer;
 
  
`;

export const BookTitle = styled.span`
  font-size: 12pt;
  font-weight: 600;
  font-family: Ubuntu, sans-serif;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  cursor: pointer;
  color: ${(props) => props.theme.colors.text};
  margin-top: 5px;
  margin-bottom: 8px;
  &:hover {
    color: ${(props) => props.theme.colors.secondary};
  }
`;

export const BookAutor = styled.span`
  color: ${(props) => props.theme.colors.secondary};
`;

export const BookPrice = styled.span`
  font-size: 10pt;
  color: ${(props) => props.theme.colors.textSecondary};
`;

export const BuyButton = styled.button`
  width: 100%;
  height: 3em;
  border-radius: 4px;
  border: 2px solid #4C9F70;
  font-size: 10pt;
  font-weight: 600;
  background-color: transparent;
  color: #23ad5f;
  margin-top: 5px;
  cursor: pointer;
  &:hover {
   background-color:  #23ad5f ;
   color: white;
  }
`;
