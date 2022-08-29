//libraries
import { Link } from "react-router-dom";

interface Props {
  path: "/";
  children: JSX.Element | JSX.Element[];
}

export const Logo = ({ path, children }: Props) => {
  return <Link to={path}>{children}</Link>;
};
