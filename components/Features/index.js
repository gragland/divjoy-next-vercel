import React from "react";
import "./styles.scss";

function Features(props) {
  return (
    <div className="Features">
      {props.items.map((item, index) => (
        <div
          className="Features__columns columns is-variable is-8 is-vcentered has-text-centered-mobile"
          key={index}
        >
          <div className="column is-half">
            <h3 className="Features__title title has-text-weight-bold is-spaced is-3">
              {item.title}
            </h3>
            <p className="subtitle">{item.description}</p>
          </div>
          <div className="column">
            <figure className="Features__image image">
              <img src={item.image} alt={item.title} />
            </figure>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Features;
