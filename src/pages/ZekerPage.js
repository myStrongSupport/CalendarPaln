import { useLoaderData } from "react-router-dom";
import classes from "./ZekerPage.module.css";
import Zeker from "../components/Zeker/Zeker.jsx";
import Counter from "../components/Counter/Counter";
const ZekerPage = () => {
  const mentions = useLoaderData();
  return (
    <div className={classes.container}>
      <Zeker zekerDay={mentions} />
      <Counter />
    </div>
  );
};

export default ZekerPage;

export const loader = async () => {
  const response = await fetch("http://localhost:3000/Zeker");
  if (!response.ok) {
    throw new Error("something went wrong");
  } else {
    return response;
  }
};
