import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Text = styled.span`
  margin-right: 20px;
`;
export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: teal;
  }
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
