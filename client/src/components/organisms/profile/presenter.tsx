import React, { FC } from 'react';
import Follow from '../../atoms/follow';
import Label from '../../atoms/label';
import { Main, Icon, Username, Description } from './style';

const Presenter: FC<any> = ({ userData }) => {
  return (
    <Main>
      <Icon></Icon>
      <Username>
        <Label>{userData && userData.username}</Label>
      </Username>
      <Follow />
      <Description>
        <Label>{userData && userData.description}</Label>
      </Description>
    </Main>
  );
};

export default Presenter;
