"use client";

import {
  approach,
  challenges,
  goals,
  introduction,
  introductionLinks,
  lessonsLearned,
  nextSteps,
  result,
  roleTimeline,
  unexpectedChallenges,
} from "../constants/casestudy";
import SquareButton from "../reuse/SquareButton";
import Milestones from "./Milestones";
import TextBox from "./TextBox";

const Background = () => {
  return (
    <section className="gap-8 items-center py-16 bg-primary dark:bg-secondary z-20">
      <div className="flexDown">
        {introduction.map((content, index) => (
          <TextBox
            key={index}
            title={content.title}
            descriptions={content.descriptions}
          />
        ))}
        <div className="flex gap-4">
          {introductionLinks.map((social, index) => (
            <SquareButton
              key={index}
              target="_blank"
              stylesButton="border-dark dark:border-dark hover:bg-secondary dark:hover:bg-primary"
              stylesIcon="text-dark dark:text-dark"
              link={social.link}
              icon={social.icon}
              label={social.label}
            />
          ))}
        </div>
      </div>

      {goals.map((content, index) => (
        <TextBox
          key={index}
          title={content.title}
          descriptions={content.descriptions}
        />
      ))}

      {roleTimeline.map((content, index) => (
        <TextBox
          key={index}
          title={content.title}
          descriptions={content.descriptions}
        />
      ))}

      <div className="flexDown">
        {challenges.map((content, index) => (
          <TextBox
            key={index}
            title={content.title}
            descriptions={content.descriptions}
          />
        ))}
      </div>

      {approach.map((content, index) => (
        <TextBox
          key={index}
          title={content.title}
          descriptions={content.descriptions}
        />
      ))}

      <Milestones />

      <div className="flexDown">
        {unexpectedChallenges.map((content, index) => (
          <TextBox
            key={index}
            title={content.title}
            descriptions={content.descriptions}
          />
        ))}
      </div>

      <div className="flexDown">
        {result.map((content, index) => (
          <TextBox
            key={index}
            title={content.title}
            descriptions={content.descriptions}
          />
        ))}
      </div>

      <div className="flexDown">
        {lessonsLearned.map((content, index) => (
          <TextBox
            key={index}
            title={content.title}
            descriptions={content.descriptions}
          />
        ))}
      </div>

      <div className="flexDown">
        {nextSteps.map((content, index) => (
          <TextBox
            key={index}
            title={content.title}
            descriptions={content.descriptions}
          />
        ))}
      </div>
    </section>
  );
};

export default Background;
