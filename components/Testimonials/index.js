import React from "react";
import CenteredColumns from "./../CenteredColumns";
import Avatar from "./../Avatar";
import "./styles.scss";

function Testimonials(props) {
  return (
    <CenteredColumns>
      {props.items.map((item, index) => (
        <div className="column is-flex" key={index}>
          <div className="Testimonials__card card is-flex">
            <div className="Testimonials__card-content card-content has-text-centered is-flex">
              <div className="Testimonials__avatar-wrapper">
                <Avatar image={item.avatar} size={96} alt={item.name} />
              </div>
              <p className="Testimonials__quote">"{item.bio}"</p>
              <div className="Testimonials__info">
                <div className="has-text-weight-bold">{item.name}</div>
                <div className="Testimonials__company link is-size-7">
                  {item.company}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </CenteredColumns>
  );
}

export default Testimonials;
