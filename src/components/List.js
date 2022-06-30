const List = ({ urlList = [] }) => {
  //   const array = props.urlList;

  return urlList.map((url) => {
    return (
      <div className="pictures">
        <img src={url} alt=" titre de film"></img>
      </div>
    );
  });
};

export default List;
