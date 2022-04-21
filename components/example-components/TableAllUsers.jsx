import { useEffect, useRef, useState } from "react";
import _ from "lodash";
import Link from "next/link";

// Default tableconf state
const defaultTableConf = {
  searchBy: "",
  searchString: "",
  sort: { sortBy: "firstName", sortMode: "ASC" },
  page: 1,
  maxPerpage: 10,
  tableHead: [
    { headTitle: "ID", headKey: "id" },
    { headTitle: "Name", headKey: "name" },
    { headTitle: "Address", headKey: "address" },
    { headTitle: "Country", headKey: "country.country" },
  ],
};

export default function TableAllUsers() {
  const [isLoading, setLoading] = useState(false);
  const [tableRows, setTableRows] = useState();
  const [err, setErr] = useState(false);
  const [tableConf, setTableConf] = useState(defaultTableConf);

  // Reference Column
  const searchInputRef = useRef();

  // Use Effect - Load data when page Load
  useEffect(() => {
    setLoading(true);
    fetch(
      "http://localhost:8000/dashboard/alluser-pagination?page=1&maxPerpage=10",
      { credentials: "include" }
    )
      .then((res) => res.json())
      .then(({ data }) => {
        setTableRows(data);
        setLoading(false);
      })
      .catch((err) => {
        setErr(err.message);
        setLoading(false);
      });
  }, []);

  // Get data when page already load - For pagination and other
  function getData(route_params) {
    setLoading(true);
    fetch(
      `http://localhost:8000/dashboard/alluser-pagination?${route_params}`,
      { credentials: "include" }
    )
      .then((res) => res.json())
      .then(({ data }) => {
        setTableRows(data);
        setLoading(false);
      })
      .catch((err) => {
        setErr(err.message);
        setLoading(false);
      });
  }

  // Handle Pagination, call get data and pass route parameter after '?' as argument
  function handlePagination(direction) {
    let copyTableConf = { ...tableConf };
    if (copyTableConf.page >= 1 && direction === "next")
      copyTableConf.page += 1;
    if (copyTableConf.page > 1 && direction === "prev") copyTableConf.page -= 1;
    setTableConf(copyTableConf);
    getData(
      `page=${copyTableConf.page}&maxPerpage=${copyTableConf.maxPerpage}&searchBy=address&searchString=${copyTableConf.searchString}`
    );
  }

  // Handle Search Input
  function handleSearchInput(searchString) {
    let copyTableConf = { ...tableConf };
    copyTableConf.page = 1;
    copyTableConf.searchString = searchString;
    setTableConf(copyTableConf);
    getData(
      `page=${copyTableConf.page}&maxPerpage=${copyTableConf.maxPerpage}&searchBy=address&searchString=${copyTableConf.searchString}`
    );
    console.log(searchString);
  }

  // If any error return error
  if (err) return <p>Error happen {err}</p>;

  // If tablerows is loading
  if (!tableRows) {
    return (
      <div className="text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only"></span>
        </div>
        <p>Loading Data</p>
      </div>
    );
  }

  // Render if loading, embed in loaded page as renderloading, so no page reload again
  function renderLoading() {
    if (isLoading) {
      return (
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only"></span>
          </div>
          <p>Loading Data</p>
        </div>
      );
    }
    return null;
  }

  // If Loaded
  return (
    <div>
      {/* Search Bar */}
      <div className="input-group input-group-sm mb-3">
        <button
          className="btn btn-outline-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Search By
        </button>
        <ul className="dropdown-menu">
          <li></li>
        </ul>

        {/* Search Input */}
        <input
          type="text"
          className="form-control form-control-sm"
          aria-label="Text input with dropdown button"
          ref={searchInputRef}
          onChange={() => handleSearchInput(searchInputRef.current.value)}
        />
      </div>
      {/* End Of Search Bar */}

      {renderLoading()}
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Address</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {tableRows.map((item) => (
            <tr key={item.id}>
              <td>
                <Link href={`/tableuser/${item.id}`}>
                  <a>
                    <span className="badge rounded-pill bg-secondary ">
                      {item.id}
                    </span>
                  </a>
                </Link>
              </td>
              <td>{item.name}</td>
              <td>{item.address}</td>
              <td>{item.country.country}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      {/* Pagination  */}
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <a
              className="page-link"
              style={{ cursor: "pointer" }}
              onClick={() => handlePagination("prev")}
            >
              Previous
            </a>
          </li>
          <li className="page-item">
            <a
              className="page-link"
              style={{ cursor: "pointer" }}
              onClick={() => handlePagination("next")}
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
      {/* End Of Pagination */}
    </div>
  );
}
