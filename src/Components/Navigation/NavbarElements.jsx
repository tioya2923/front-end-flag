import { FaBars } from 'react-icons/fa';
import styled from 'styled-components';
import { NavLink as Link } from "react-router-dom";

export const Nav = styled.nav `
position: absolute;
left: 0%;
right: 0%;
top: 0%;
display: flex;
justify-content: space-between;
padding: 0.2rem calc((100vw - 1000px) / 2);
height: 50px;
background: #232536;

`  
;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  font-family: 'Inter';
  color: #FFFFFF;
  height: 100%;
  font-weight: 400;
  cursor: pointer;
  &.active {
    color: #808808;
  }
  
  
`;
  
export const Bars = styled(FaBars)`
  display: none;
  color: #808880;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
  
  
`;
  
export const NavMenu = styled.div`
position: sticky;
display: flex;
align-items: center;
margin-right: -24px;

  
  
`;
  
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  
`;
  
export const NavBtnLink = styled(Link)`
  border-radius: none;
  background: #FFFFFF;
  padding: 10px 22px;
  color: #232536;
  text-decoration: none; 
  border: none;
  display: flex;
  align-items: center; 
  font-weight: 700;
`;