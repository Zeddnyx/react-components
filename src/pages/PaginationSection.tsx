import Pagination from "components/Pagination";
import { data } from "utils/dummyData"

export default function PaginationSection() {
  return (
    <div>
      <h2>Pagination Section</h2>
      <Pagination data={data} />
    </div>
  );
}

