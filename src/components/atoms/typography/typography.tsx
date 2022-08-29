interface IProps {
  classname?: string;
  children: string | JSX.Element | JSX.Element[];
}

export const Typography = ({ classname, children }: IProps) => {
  return <p className={classname}>{children}</p>;
};
