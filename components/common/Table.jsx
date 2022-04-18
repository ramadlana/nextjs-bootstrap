// // for client side rendering every request

import Link from "next/link";

//   Export Page
export default function TableCommon({ data }) {
  const tableData = {
    searchBy: "",
    searchString: "",
    page: 1,
    maxPerpage: 10,
    colKeys: ["id", "firstName", "lastName", "Handle"],
    cols: [
      { colName: "id" },
      { colName: "first Name" },
      { colName: "last Name" },
      { colName: "Handle" },
    ],
    rows: [
      { id: 1, firstName: "mark", lastName: "Otto", handle: "@mto" },
      { id: 2, firstName: "mark", lastName: "Otto2", handle: "@mto" },
      { id: 3, firstName: "mark", lastName: "Otto3", handle: "@mto" },
      { id: 4, firstName: "mark", lastName: "Otto4", handle: "@mto" },
      { id: 5, firstName: "mark", lastName: "Otto5", handle: "@mto" },
    ],
  };

  function onClick(fn) {
    fn;
  }

  function renderCell(rows) {
    return (
      <>
        {/* Custom Rows Before Computed Rows */}
        <td>
          <Link href={`/${rows.id}`}>Edit</Link>
        </td>

        {/* Computed Rows */}
        {tableData.colKeys.map((key) => (
          <td key={Math.random(0, 1000)}>{rows[`${key}`]}</td>
        ))}
        {/* End Of Computed Rows */}

        {/* Custom Rows After Computed Rows */}
      </>
    );
  }

  return (
    <div>
      <div className="container shadow-sm">
        <table className="table table-hover">
          <thead>
            <tr>
              {tableData.cols.map((col) => {
                return (
                  <th key={col.colName} scope="col">
                    {col.colName}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {tableData.rows.map((row) => {
              return <tr key={row.id}>{renderCell(row)}</tr>;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
