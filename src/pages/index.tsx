import { Link } from "react-router-dom";
import { data } from "utils/homepage";

export default function Homepage() {
  return (
    <div className="container-home">
      {data.map((item) => {
        return (
          <Link key={item.title} to={item.slug}>
            <div className="item-home">
              {/*<img src={item.image} alt={item.title} /> */}
              <div className="w-full bg-gray_alt h-40 flex justify-center items-center rounded">
                <i>
                  <item.icons size={80} color="#fff" />
                </i>
              </div>
              <h2>{item.title}</h2>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
