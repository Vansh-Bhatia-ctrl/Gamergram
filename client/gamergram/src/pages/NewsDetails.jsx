import { useParams } from "react-router-dom";

const NewsDetails = () => {
  const { newsID } = useParams();
  return (
    <>
      <p className="">News Details Page</p>
    </>
  );
};

export default NewsDetails;
