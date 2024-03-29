import React, { FC } from 'react';
import Presenter from './presenter';
import { selectsUsers } from '../../../slice/user/selector';
import { useSelector } from 'react-redux';

const Sidebar:FC = () => {
  const postData = useSelector(selectsUsers);

  return <Presenter postData={postData[0]} />;
};

export default Sidebar;
