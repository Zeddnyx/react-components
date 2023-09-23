import ScrollSnap from "components/ScrollSnap";

interface IScrool {
  data: {
    id: number;
    name: string;
    description: string;
  }[];
}

 export default function Scroll1({ data }: IScrool) {
  return (
    <div>
      <ScrollSnap data={data} />
    </div>
  )
}
