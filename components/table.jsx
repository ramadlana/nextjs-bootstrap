export default function Table() {
  const tableData = {
    cols: [
      { colName: "no" },
      { colName: "firstName" },
      { colName: "lastName" },
      { colName: "Handle" },
    ],
    rows: [
      { no: 1, firstName: "mark", lastName: "Otto", handle: "@mto" },
      { no: 2, firstName: "mark", lastName: "Otto2", handle: "@mto" },
      { no: 3, firstName: "mark", lastName: "Otto3", handle: "@mto" },
      { no: 4, firstName: "mark", lastName: "Otto4", handle: "@mto" },
      { no: 5, firstName: "mark", lastName: "Otto5", handle: "@mto" },
    ],
  };

  return (
    <div>
      <div className="container shadow-sm">
        <table className="table table-hover">
          <thead>
            <tr>
              {tableData.cols.map((c) => {
                return (
                  <th key={c.colName} scope="col">
                    {c.colName}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {tableData.rows.map((row) => {
              return (
                <tr key={row.no}>
                  <td>{row.no}</td>
                  <td>{row.firstName}</td>
                  <td>{row.lastName}</td>
                  <td>{row.handle}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
