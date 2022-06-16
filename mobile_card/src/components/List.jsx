import Listitems from "./Listitems";

const List = (props) => {
  const { list } = props;
  return (
    <>
      {list.map((listitems) => (
        <Listitems listitems={listitems} />
      ))}
    </>
  );
};

export default List;
