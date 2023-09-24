import Sidebar from "~/components/Sidebar";
import { data } from "utils/list-slider";
import { data as dummy } from "utils/dummyData";

export default function index() {
  return (
    <Sidebar>
      <div className="children">
        {data.map((item, id) => {
          return (
            <div key={item.title} className="children-item" id={`#${item.id}`}>
              <h3>
                {id + 1}. {item.title}
              </h3>
              <item.element data={dummy} />
            </div>
          );
        })}
      </div>
    </Sidebar>
  );
}
