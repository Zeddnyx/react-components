interface ITable {
  data: {
    id: number;
    name: string;
    description: string;
  }[];
}

export default function Table({ data }: ITable) {
  return (
    <table className="table-auto w-full">
      <thead>
        <tr>
          <th className="p-2 text-left">id</th>
          <th className="p-2 text-left">Name</th>
          <th className="p-2 text-left">Description</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id} className="border border-gray-400">
            <td className="p-2 text-left">{item.id}</td>
            <td className="p-2 text-left">{item.name}</td>
            <td className="p-2 text-left">{item.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
