import Sidebar from "~/components/Sidebar";
import Title from "~/components/Title";
import { data } from "utils/list-pagination";

export default function index() {
  return (
    <Sidebar>
      <Title />
      <div className="children">
        {data.map((item, id) => {
          return (
            <div key={item.title} className="children-item" id={`#${item.id}`}>
              <h3>
                {id + 1}. {item.title}
              </h3>
              <item.element />
            </div>
          );
        })}
      </div>
    </Sidebar>
  );
}
