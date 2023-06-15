import styled from 'styled-components';
import { NavLink as Link } from "react-router-dom";

  
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 10px;
  justify-content: flex-end;
  margin-left: 45px;
  max-with: 1440px;
  
  
`;
  
export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #ff8c00;
  padding: 2px;
  color:#0000ff;
  text-decoration: none; 
  border: none;
  display: flex;
  align-items: center; 
  font-weight: 700;
  font-size: 25px;
  
`;