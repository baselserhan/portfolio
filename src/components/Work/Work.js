import WorkCardData from "../WorkCardData/WorkCradData";
import WorkCard from "../WorkCard/WorkCard";

const Work = () => {
  return (
    <div className="work-container">
      <div className="project-heading">Projects</div>
      <div className="project-container">
        {WorkCardData.map((val, ind) => {
          return (
            <WorkCard
              key={ind}
              imgsrc={val.imgsrc}
              title={val.title}
              text={val.text}
              view={val.view}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Work;
