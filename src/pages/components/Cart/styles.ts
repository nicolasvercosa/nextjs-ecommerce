import Image from "next/image";
import styled from "styled-components";

export const Background = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  background-color: #2a2a2a6f;
  width: 100vw;
  height: 100vh;

  backdrop-filter: blur(0.8px);
`;

export const Container = styled.div`
  position: fixed;
  width: 25vw;
  min-width: 325px;
  height: 100vh;
  padding-top: 24px;
  padding-left: 5px;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: ${(props) => props.theme.colors.background};
  z-index: 1200;
`;

export const Header = styled.span`
  font-size: 14pt;
  font-weight: 500;
 
`

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 345px;
  margin: 15px auto;
  border: 1px solid ${props => props.theme.colors.hover};

  @media (max-width: 1080px) {
    width: 300px;
  }
`;

export const Title = styled.span`
  font-size: 11pt;
  font-weight: 400;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const BookCover = styled(Image)``;

export const Price = styled.span`
  font-weight: 500;
  margin-top: 10px;
`;

export const Count = styled.span`
  font-weight: 300;
  display: flex;
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
`;

export const FlexColumn = styled.div`
  width: 160px;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CounterButton = styled.button`
  width: 26px;
  height: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;

  color: ${props => props.theme.colors.textSecondary};

  &:hover {
    background-color: ${props => props.theme.colors.hover}; 
  }
`

export const ItemCounter = styled.div`
  width: 90px;
  border: 1px solid ${props => props.theme.colors.hover};;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

