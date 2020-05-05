import React from "react";
import "./Pricing.scss";

function Pricing(props) {
  return (
    <div className="columns is-centered is-variable is-4">
      {props.items.map((item, index) => (
        <div
          className="Pricing__column column is-one-third-desktop"
          key={index}
        >
          <div
            className={
              "Pricing__card card" +
              (item.emphasized === true ? " emphasized" : "")
            }
          >
            <div className="Pricing__card-content card-content">
              <div className="Pricing__name has-text-weight-bold">
                {item.name}
              </div>
              <div className="Pricing__price has-text-weight-bold">
                <span className="Pricing__price-symbol is-size-3">$</span>
                <span className="is-size-1">{item.price}</span>
                <span className="Pricing__price-month is-size-4">/m</span>
              </div>
              <p className="Pricing__description">{item.description}</p>
              <button
                className="Pricing__button button is-medium is-primary"
                onClick={() => props.onChoosePlan(item.id)}
              >
                {props.buttonText}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Pricing;
