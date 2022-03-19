import React from 'react';
import Presenter from './presenter';
import { LabelType } from './type';

const Label: React.FC<LabelType> = ({ fs, cl, fw, lh, href, children }) => {
  return (
    <Presenter
      fs={fs}
      cl={cl}
      fw={fw}
      lh={lh}
      href={href}
      children={children}
    ></Presenter>
  );
};

export default Label;
