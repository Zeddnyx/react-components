import PaginationTable from "./PaginationTable";
import { data } from "utils/dummyData";
import AnimationSection from "./AnimationSection";
import DropDownSection from "./DropDownSection";
import Form from "./Form";
import PaginationSection from "./PaginationSection";
import NotifySection from "./NotifySection";
import ScrollSnap from "./ScrollSnap";


export default function Homepage() {
  return (
    <div className="max-w-xl mx-auto px-5 grid gap-10">
      <Form />
      <DropDownSection />
      <AnimationSection />
      <PaginationSection />
      <PaginationTable data={data} />
      <NotifySection />
      <ScrollSnap />
    </div>
  );
}
