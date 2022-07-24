import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 200px;
  height: 100vh;
  background-color: white;
`;
export const Header = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 10px 20px;
  margin: 20px 0;
  font-size: 20px;
  font-weight: bold;
  border-radius: 5px;
  color: #0281ff;
`;
export const Menu = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Item = styled.li`
  width: 90%;
  & > a {
    text-decoration: none;
    color: black;
    display: block;

    text-align: center;
    font-weight: bold;
    border-radius: 5px;
    margin: 10px 0;
    font-size: 14px;
    padding: 8px 5px;
  }
`;
