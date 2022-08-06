import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;
  border: 1px;
  height: 2.5em;
  padding-left: 16px;
  color: ${(props) => props.theme.colors.textSecondary};
  font-family: Ubuntu;
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.text};
    background-color: ${(props) => props.theme.colors.hover};
    transition: .3s;
  }

    
`;
