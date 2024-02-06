import React, { useEffect, useState } from "react";
import Link from "next/link";
import ScrollspyNav from "react-scrollspy-nav";
import sidebarContent from "../../data/sidebar";
import Image from "next/image";
import logo from "../../public/img/logo/imagotipo-dark.svg";
import logo2 from "../../public/img/logo/imagotipo-light.svg";

// sidebar footer bottom content
const sidebarFooterContent = {
  name: "Johnson",
  email: "support@gmail.com",
  emailRef: "mailto:ib-themes21@gmail.com",
};

const HeaderHorizontal = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [navbar, setNavbar] = useState(false);


  return (
    <div className={"d-none"}>
      <div className="mob-header">
        <button className="toggler-menu" onClick={handleClick}>
          <div className={click ? "active" : ""}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
      {/* End Mobile Header */}

      <div
        className={click ? "edina_tm_sidebar  menu-open" : "edina_tm_sidebar"}
      >
        <div className="sidebar_inner">
          <div className="logo">
            <Link href="/">
              <Image className="logo_light" src={logo} alt="brand" />
              <Image className="logo_dark" src={logo2} alt="brand" />
            </Link>
          </div>
          {/* End .logo */}

          <div className="menu">
              <ul className="anchor_nav">

                  <li >
                    <div className="list_inner">
                      <a
                        href={"#about"}
                        className={""}
                      >
                        <img
                          className="svg custom"
                          src={`img/svg/human.svg`}
                          alt="icon"
                        />
                          Acerca de mí
                      </a>
                    </div>
                  </li>

              </ul>
          </div>
          {/* End .menu */}

          <div className="author">
            <div className="inner">
              <div className="image">
                <div
                  className="main"
                  style={{
                    backgroundImage: "url(img/about/avatar.jpg)",
                  }}
                ></div>
              </div>
              <div className="short">
                <h3>{sidebarFooterContent.name}</h3>
                <a href={sidebarFooterContent.emailRef}>
                  {sidebarFooterContent.email}
                </a>
              </div>
            </div>
          </div>
          {/* End author */}
        </div>
      </div>
    </div>
  );
};

export default HeaderHorizontal;
