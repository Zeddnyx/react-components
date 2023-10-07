import { data } from "utils/list-dnd";
import Sidebar from "components/Sidebar";
import Title from "~/components/Title";

export default function Index() {
  return (
    <Sidebar>
      <div className="children">
        <Title />
        {data?.map((item, id) => (
          <div key={item.title} className="children-item" id={item.id}>
            <h3>
              <span className="text-blue">{id + 1}.</span> {item.title}
            </h3>
            <item.element />
          </div>
        ))}
      </div>
    </Sidebar>
  );
}
