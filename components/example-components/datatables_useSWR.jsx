// // for client side rendering every request
import useSWR from "swr";
import axios from "axios";
import Link from "next/link";

// client side rendering SWR
// Fetcher
const fetcherAxios = async (...args) =>
  axios
    .get(...args)
    .then((res) => res)
    .catch((err) => (err.response ? err.response : err));

//   Export Page
export default function DatatablesUseSWR() {
  //   use data + error because used fetch
  const { data, error } = useSWR(
    [
      `https://jsonplaceholder.typicode.com/users`,
      {
        headers: {
          "Content-Type": "application/json",
          "x-access_token": localStorage.getItem("access_token"),
        },
      },
    ],
    fetcherAxios
  );

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  function onClick(fn) {
    fn;
  }

  const tableData = {
    colKeys: ["id", "name", "username", "email", "phone"],
    cols: [
      { colName: "Edit" },
      { colName: "id" },
      { colName: "name" },
      { colName: "username" },
      { colName: "email" },
      { colName: "phone" },
    ],
    rows: data.data,
  };

  function renderCell(rows) {
    return (
      <>
        <td>
          <Link href={`/${rows.id}`}>Edit</Link>
        </td>
        {tableData.colKeys.map((key) => (
          <td key={Math.random(0, 1000)}>{rows[`${key}`]}</td>
        ))}
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
