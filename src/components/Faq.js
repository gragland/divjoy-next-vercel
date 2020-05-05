import React from "react";
import FaqItem from "./FaqItem";

function Faq(props) {
  return (
    <>
      {props.items.map((item, index) => (
        <FaqItem
          question={item.question}
          answer={item.answer}
          key={index}
        ></FaqItem>
      ))}
    </>
  );
}

export default Faq;
