import React from "react";
import Section from "./Section";
import Link from "next/link";
import "./Footer.scss";

function Footer(props) {
  return (
    <Section
      color={props.color}
      size={props.size}
      backgroundImage={props.backgroundImage}
      backgroundImageOpacity={props.backgroundImageOpacity}
    >
      <div className="FooterComponent__container container">
        <div className="brand left">
          <Link href="/">
            <a>
              <img src={props.logo} alt="Logo"></img>
            </a>
          </Link>
        </div>
        <div className="links right">
          <Link href="/about">
            <a>About</a>
          </Link>

          <Link href="/faq">
            <a>FAQ</a>
          </Link>

          <Link href="/contact">
            <a>Contact</a>
          </Link>

          <a
            target="_blank"
            href="https://medium.com"
            rel="noopener noreferrer"
          >
            Blog
          </a>
        </div>
        <div className="social right">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon">
              <i className="fab fa-twitter"></i>
            </span>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon">
              <i className="fab fa-facebook-f"></i>
            </span>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon">
              <i className="fab fa-instagram"></i>
            </span>
          </a>
        </div>
        <div className="copyright left">{props.copyright}</div>
      </div>
    </Section>
  );
}

export default Footer;
