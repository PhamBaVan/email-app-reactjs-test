import { Outlet, Navigate } from "react-router-dom";

interface Props {
  auth: boolean;
}

const PrivateRoute = ({ auth }: Props) => {
  return auth ? <Outlet /> : <Navigate to={"/login"} />;
};

export default PrivateRoute;
