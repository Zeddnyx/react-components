import { Link } from "react-router-dom";
import { data } from "utils/homepage";

export default function Homepage() {
  return (
    <div className="container-home">
      {data.map((item) => {
        return (
          <Link key={item.title} to={item.slug}>
            <div className="item-home">
              <div className="icon-home">
                <i>
                  <item.icons size={80} color="#fff" />
                </i>
              </div>
              <h3>{item.title}</h3>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
