import Sidebar from "~/components/Sidebar";
import {data} from "utils/list-pagination"

export default function index() {
  return (
    <Sidebar>
        {data.map((item) => {
          return (
            <div key={item.title} className="children-item" id={`#${item.id}`}>
              <h2>{item.title}</h2>
              <item.element />
            </div>
          );
        })}
    </Sidebar>
  );
}
