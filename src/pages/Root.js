import Layout from "../components/Layout/Layout";
import classes from "./Root.module.css";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <Layout>
      {/* <Navbar /> */}
      <main className={classes.main}>
        <Outlet />
      </main>
    </Layout>
  );
};

export default Root;
