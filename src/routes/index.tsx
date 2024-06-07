import { lazy } from "react";
import { Navigate, RouteProps } from "react-router-dom";

const Principal = lazy(() => import("../pages/dashboards/Principal"));
const RegisterEmployee = lazy(() => import("../pages/Personal/register"));

export type RoutesProps = {
  path: RouteProps["path"];
  name: string;
  element: RouteProps["element"];
};

const dashboardRoutes: RoutesProps[] = [
  {
    path: "/",
    name: "Home Page",
    element: <Navigate to="/dashboards/principal" />,
  },
  {
    path: "/dashboards/principal",
    name: "Principal",
    element: <Principal />,
  },
  {
    path: "/personal/register",
    name: "Register",
    element: <RegisterEmployee />,
  },
];

const allAdminRoutes = [...dashboardRoutes];

export { allAdminRoutes };
