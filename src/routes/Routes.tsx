import { Route, RouteProps, Routes } from "react-router-dom";
import { allAdminRoutes } from ".";
import Layout from "@/layout/Layout";

const AllRoutes = (props: RouteProps) => {
  return (
    <Routes>
      {allAdminRoutes.map((route, idx) => (
        <Route
          path={route.path}
          element={<Layout {...props}>{route.element}</Layout>}
          key={idx}
        />
      ))}
    </Routes>
  );
};

export default AllRoutes;
