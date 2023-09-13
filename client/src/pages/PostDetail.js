import { useParams } from "react-router-dom";

function PostDetail() {
  const { id } = useParams();

  return (
    <div className="">
      <p className="text-center text-3xl mt-20">The post id is {id}</p>
    </div>
  );
}

export default PostDetail;
