import CategoryTitle from "./CategoryTitle";
import List from "./List";

const Section = ({ title = "", urlList = [] }) => {
  return (
    <>
      <main>
        <div className="container">
          <CategoryTitle title={title} />

          <div className="list_picture">
            <List urlList={urlList} />
          </div>
        </div>
      </main>
    </>
  );
};

export default Section;
