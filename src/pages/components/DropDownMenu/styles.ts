import styled from "styled-components";

interface ContainerProps {
  hide?: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: absolute;
  top: 144px;
  right: 38%;
  width: 220px;
  height: fit-content;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  box-shadow: 0 15px 30px -10px ${(props) => props.theme.colors.text};
  transition: all ease 0.5s;
  background-color: ${(props) => props.theme.colors.background};
  z-index: 1;
  > * {
    &:last-child {
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  }

  @media (max-width: 1120px) {
    right: 34%;
  }

  @media (max-width: 950px) {
    right: 30%;
  }

  @media (max-width: 900px) {
    right: 30%;
  }

  @media (max-width: 700px) {
    right: 15%;
  }
`;
