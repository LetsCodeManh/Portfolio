import { processMilestone } from "../constants/casestudy";
import Timeline from "../reuse/Timeline";

const Milestones = () => {
  return (
    <div className="flexDown gap-8">
      <h1 className="biggerText dark:text-dark">| Process & Milestones</h1>
      <ol className="relative border-l border-gray-200 dark:border-gray-700">
        {processMilestone.map((content, index) => (
          <Timeline
            title={content.title}
            description={content.description}
            key={index}
          />
        ))}
      </ol>
    </div>
  );
};

export default Milestones;
