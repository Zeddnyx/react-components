import Sidebar from "~/components/Sidebar";
import Title from "~/components/Title";
import { data } from "data/list-slider";
import { data as dummy } from "data/dummyData";

export default function index() {
  return (
    <Sidebar>
      <div className="children">
        <Title />
        {data.map((item, id) => {
          return (
            <div key={item.title} className="children-item" id={`#${item.id}`}>
              <h3>
                <span className="text-blue">{id + 1}.</span> {item.title}
              </h3>
              <item.element data={dummy} />
            </div>
          );
        })}
      </div>
    </Sidebar>
  );
}
