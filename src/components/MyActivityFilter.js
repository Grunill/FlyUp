import ActivityData from "../model/ActivityData";

const MyActivityFilter = ({ onActivityFilterHandler }) => {
  return (
    <div className="well">
      {ActivityData.map(({ id, title }) => {
        return (
          <button
            key={id}
            type="button"
            className="btn btn-dark btn-sm"
            style={{ marginBottom: "5px", marginRight: "5px" }}
            onClick={() => {
              onActivityFilterHandler(`${title}`);
            }}
          >
            {title}
          </button>
        );
      })}
    </div>
  );
};

export default MyActivityFilter;
