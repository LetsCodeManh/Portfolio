import React from "react";

type Props = {
  title: string;
  descriptions: string[];
};

const TextBox = ({ title, descriptions }: Props) => {
  return (
    <div className="flexDown">
      <h1 className="biggerText dark:text-dark">| {title}</h1>
      <div className="flexDown">
        {descriptions.map((description, index) => (
          <p key={index}>{description}</p>
        ))}
      </div>
    </div>
  );
};

export default TextBox;
