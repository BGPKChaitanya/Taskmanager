const ShowTask = (props) => {
  const { ta, filterTask } = props;
  const TaskFilter = () => {
    filterTask(ta.displayText);
  };
  return (
    <div>
      <button type="button" onClick={TaskFilter}>
        {ta.displayText}
      </button>
    </div>
  );
};

export default ShowTask;
