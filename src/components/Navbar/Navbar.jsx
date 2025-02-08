import { useState } from "react";
import "./navbar.scss";
import { clsx } from "clsx";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  function isOpen() {
    setOpen((prevVal) => !prevVal);
  }
  const menuOpenedClass = clsx({
    "menu active": open,
    menu: !open,
  });
  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="" />
          <span>RonEstate</span>
        </a>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contacts</a>
        <a href="/">Agents</a>
      </div>

      <div className="right">
        <a href="/">Sign in</a>
        <a href="/" className="register">
          Sign up
        </a>
        <div className="menuIcon">
          <img src="/menu.png" alt="" onClick={isOpen} />
        </div>
        <div className={menuOpenedClass}>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Agents</a>
          <a href="">Sign in </a>
          <a href="/">Sign up</a>
        </div>
      </div>
    </nav>
  );
}
