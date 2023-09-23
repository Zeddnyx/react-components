import { Link } from "react-router-dom";
import { data } from "utils/homepage";

export default function Homepage() {
  return (
    <div className="container-home">
      {data.map((item) => {
        return (
          <Link key={item.title} to={item.slug}>
            <div className="item-home">
              <img src={item.image} alt={item.title} />
              <h2>{item.title}</h2>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
