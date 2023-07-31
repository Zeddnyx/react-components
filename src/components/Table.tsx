interface TableProps {
  data: any;
}

export default function Table({ data }: TableProps) {
  return (
    <table className="table-auto w-full">
      <thead>
        <tr>
          <th className="p-2 text-left">id</th>
          <th className="p-2 text-left">Name</th>
          <th className="p-2 text-left">location</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item: any) => (
          <tr key={item.id} className="border border-gray-400">
            <td className="p-2 text-left">{item.id}</td>
            <td className="p-2 text-left">{item.name}</td>
            <td className="p-2 text-left">{item.location}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
