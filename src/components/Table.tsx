interface ITable {
  data: {
    id: number;
    name: string;
    description: string;
  }[];
}

export default function Table({ data }: ITable) {
  return (
    <div className="container-table">
      <div className="container-table-2">
        <div className="container-table-3">
          <div className="container-table-4">
            <table className="table">
              <thead>
                <tr className="tr">
                  <th className="item-table">id</th>
                  <th className="item-table">Name</th>
                  <th className="item-table">Description</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item.id} className="border border-gray">
                    <td className="item-table">{item.id}</td>
                    <td className="item-table">{item.name}</td>
                    <td className="item-table">{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
