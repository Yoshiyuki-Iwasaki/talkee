import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Main = styled(Link)`
  padding: 10px;
  width: 250px;
  background: #fff;
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(0, -50%);
  width: 250px;
  background: #fff;
  box-sizing: border-box;
}`;
export const Icon = styled.p`
  margin: 0 auto;
  width: 70px;
  height: 70px;
  background: #000;
  border-radius: 35px;
`;
export const UserName = styled.p`
  margin-top: 10px;
  text-align: center;
`;
export const Description = styled.p`
  margin-top: 10px;
`;
