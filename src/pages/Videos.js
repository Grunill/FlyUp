import VideoData from "../model/VideoData";
import MyActivityFilter from "../components/MyActivityFilter";
import { useState } from "react";

const Videos = () => {
  const [activity, setActivity] = useState("All");

  //Import VideoData and Filter By Activity then Sort By Year Descending
  const videoDataFilteredActivitySortedYearDesc = VideoData.filter((value) => {
    return activity === "All" ? true : value.activity === activity;
  }).sort((a, b) => {
    return b.year - a.year;
  });

  // This function is passed to MyActivityFilter and attached to each Filter Button
  const activityFilterHandler = (activityValue) => {
    setActivity(activityValue);
  };

  return (
    <div className="container">
      <div className="well">
        <div className="container">
          <MyActivityFilter onActivityFilterHandler={activityFilterHandler} />
          <div className="row">
            {videoDataFilteredActivitySortedYearDesc.map(
              ({ id, title, url, image, activity, year }) => {
                return (
                  <div key={id} className="col-sm-6 col-md-4">
                    <br></br>
                    <h6>{title}</h6>
                    <h6 style={{ fontSize: "0.5rem" }}>
                      {activity} {`(${year})`}
                    </h6>
                    <a
                      href={`http://youtu.be/${url}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        alt="video"
                        src={`images/${image}`}
                        className="img-fluid"
                        style={{ border: "5px solid firebrick" }}
                      ></img>
                    </a>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videos;
