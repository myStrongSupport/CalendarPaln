import { useState } from "react";
import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { BsInfoSquare } from "react-icons/bs";
import { FaMosque } from "react-icons/fa";
import img from "../../assets/Image/luffy.jpg";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const navbarToggleHandler = () => {
    setToggle((state) => !state);
  };
  const navbar = (
    <nav className={classes.navbar}>
      <div className={classes.container}>
        <div className={classes.user}>
          <div className={classes["user-img"]}>
            <img src={img} alt="" />
          </div>
          <h4>حامد حسینی</h4>
        </div>
        <ul className={classes.list}>
          <li>
            <Link to="salavat">
              <FaMosque />
            </Link>
          </li>
          <li>
            <Link to="calendar">
              <IoCalendarNumberOutline />
            </Link>
          </li>
          <li>
            <Link to="info">
              <BsInfoSquare />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
  return (
    <header className={classes.header}>
      <div className={classes.hamburger}>
        <RxHamburgerMenu size={"30px"} onClick={navbarToggleHandler} />
      </div>
      {toggle && navbar}
    </header>
  );
};

export default Navbar;
