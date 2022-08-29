import React from "react";

interface IProps {
  children: JSX.Element | JSX.Element[] | string;
  classname?: string;
}

export const Title = ({ children, classname }: IProps) => {
  return <h4 className={classname}>{children}</h4>;
};
