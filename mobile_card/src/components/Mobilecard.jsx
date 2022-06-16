import Headings from "./Headings";
import List from "./List";

const Mobilecard = (props) => {
  console.log("in Card Components", props);

  const { headings, list } = props;
  return (
    <>
      <Headings headings = {headings} />
      <List list = {list} />
    </>
  );
};

export default Mobilecard;
