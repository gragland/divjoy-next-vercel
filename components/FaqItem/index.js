import React, { useState } from "react";
import "./styles.scss";

function FaqItem(props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="FaqItem" onClick={() => setExpanded(!expanded)}>
      <div className="title is-spaced is-4">
        <span className="FaqItem__icon icon is-size-5 has-text-primary">
          <i
            className={
              "fas" +
              (expanded ? " fa-minus" : "") +
              (!expanded ? " fa-plus" : "")
            }
          />
        </span>
        {props.question}
      </div>

      {expanded && <div className="subtitle">{props.answer}</div>}
    </article>
  );
}

export default FaqItem;
