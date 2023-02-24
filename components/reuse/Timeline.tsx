import React from "react";

type Props = {
  title: string;
  description: string;
};

const Timeline = ({ title, description }: Props) => {
  return (
    <li className="mb-10 ml-4">
      <div className="absolute w-3 h-3 bg-primary rounded-full -left-1.5 mt-2 border border-secondary dark:border-dark dark:bg-primary" />
      <h2 className="bigText text-dark dark:text-dark">{title}</h2>
      <p className="text-gray-500 dark:text-primary">{description}</p>
    </li>
  );
};

export default Timeline;
