import { Link } from "react-router-dom";
import { data } from "data/homepage";

export default function Homepage() {
  return (
    <div className="container-home">
      {data.map((item) => {
        return (
          <Link key={item.title} to={item.slug}>
            <div className="item-home">
              <div className="icon-home">
                <item.icons color="#fff" className="h-14 w-14 md:h-16 md:w-16" />
              </div>
              <h3>{item.title}</h3>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
