import styled from "styled-components";
import Image from "next/image";
import React from "react";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 9em;
  padding: 0 45px;

  border-bottom: 1px solid #1f1f1f47;
`
export const TopHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60%;
  
`

export const BottomHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const MenuItem = styled.div`
  font-size: 12pt;
  font-weight: 500;
  width: 130px;
  text-align: center;
  height: 3.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.textSecondary};
  font-family: Ubuntu;

  &:hover {
    color: ${props => props.theme.colors.text};
    cursor: pointer;
    box-shadow: inset 0 -2px    ${props => props.theme.colors.primary}; 
  }
`

export const StyledLogo = styled.div`
  font-weight: 700;
  font-size: 20pt;
  font-family: Ubuntu, sans-serif;
  color: ${props => props.theme.colors.text};
`

export const StyledInput = styled.input`
  height: 2.7em;
  width: 450px;
  border: none;
  background-color: #dedede;
  padding-left: 8px;
  border-radius: 5px;
  color: ${props => props.theme.colors.text};
  font-size: 12pt;
  &:focus {
    outline: ${props => props.theme.colors.primary} solid 2px ;
    //border: 2px solid ${props => props.theme.colors.primary};
  }

  transition: all .2s;

  @media (max-width: 1080px) {
    width: 300px;
  }

  @media (max-width: 700px) {
    width: 200px;
  }

  @media (max-width: 600px) {
    display: none;
  }
`
export const EnterAndBag = styled.div`
  width: 140px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 0px solid;
  color: ${props => props.theme.colors.text};

  @media (max-width: 1080px) {
    width: 100px;
  }
`

export const EnterAccountLink = styled.span`
  font-weight: 400;
  font-size: 13pt;
  font-family: Ubuntu;
  cursor: pointer;
`

