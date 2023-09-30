interface IScrool {
  data: {
    id: number;
    name: string;
    description: string;
  }[];
}

export default function ScrollSnap({ data }: IScrool) {
  return (
    <div className="container-snap">
      {data.map((item) => {
        return <div key={item.id} className="child-snap hide-scrollbar"></div>;
      })}
    </div>
  );
}
