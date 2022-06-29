import CategoryTitle from "./CategoryTitle";
import List from "./List";

const Section = ({ title = "", urlList = [] }) => {
  return (
    <>
      <main className="container">
        <CategoryTitle title={title} />

        <div className="list_picture">
          <List urlList={urlList} />
        </div>
      </main>
    </>
  );
};

export default Section;
