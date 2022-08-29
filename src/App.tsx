//libraries
import { Route, Routes } from "react-router-dom";
//components
import { Header, Home, NotFound } from "components";
//utils
import { Routing } from "utils/constants";
//styles
import "./index.scss";

export const App = (): JSX.Element => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path={Routing.home} element={<Home />} />
        <Route path={Routing.notFound} element={<NotFound />} />
      </Routes>
    </div>
  );
};
