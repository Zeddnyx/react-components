import DragAndDropItem from "./DragAndDropItem";
import { data } from "data/dummyData";

export default function Index() {
  return (
    <div>
      <DragAndDropItem data={data} />
    </div>
  );
}
