import DragAndDropItem from "./DragAndDropItem";
import { data } from "utils/dummyData";

export default function Index() {
  return (
    <div>
      <DragAndDropItem data={data} />
    </div>
  );
}
