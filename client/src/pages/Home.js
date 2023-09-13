import { Link } from "react-router-dom";
import DUMMY_DATA from "../DUMMY_DATA.json";

//grid center 出来ない
function Home() {
  return (
    <div className=" w-4/5 h-auto grid grid-cols-3 gap-6 mt-3">
      {DUMMY_DATA.map((data, key) => (
        <Link
          to={`/post/${data.id}`}
          className="w-full h-30 bg-white rounded-lg drop-shadow-md overflow-hidden"
          key={key}
        >
          <img
            src={data.image}
            alt={data.title}
            className="object-cover w-full h-30"
          ></img>
          <div className=" p-4">
            <div className=" text-xl bold">{data.title}</div>
            <div className=" text-sm">{data.date}</div>
            <div className="">{data.content}</div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Home;
