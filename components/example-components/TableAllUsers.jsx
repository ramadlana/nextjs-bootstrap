import { useEffect, useRef, useState } from "react";
import _ from "lodash";
import Link from "next/link";

export default function TableAllUsers() {
  // Default tableconf state
  const defaultTableConf = {
    searchBy: "",
    searchString: "",
    sort: { sortBy: "id", sortMethod: "asc" },
    page: 1,
    maxPerpage: 10,
    tableHead: [
      { headTitle: "ID", headKey: "id" },
      { headTitle: "Name", headKey: "name" },
      { headTitle: "Address", headKey: "address" },
      { headTitle: "Country", headKey: "country.country" },
    ],
  };

  // State
  const [isLoading, setLoading] = useState(false);
  const [tableRows, setTableRows] = useState();
  const [err, setErr] = useState(false);
  const [tableConf, setTableConf] = useState(defaultTableConf);

  // Reff
  const searchInputRef = useRef();

  // Use Effect - Load data when page Load
  useEffect(() => {
    setLoading(true);
    fetch(
      `${process.env.BACKEND_SERVER}/dashboard/alluser-pagination?page=${defaultTableConf.page}&maxPerpage=${defaultTableConf.maxPerpage}&sortBy=${defaultTableConf.sort.sortBy}&sortMethod=${defaultTableConf.sort.sortMethod}`,
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
      `${process.env.BACKEND_SERVER}/dashboard/alluser-pagination?${route_params}`,
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

  // Handle Pagination (NEXT PREV), call get data and pass route parameter after '?' as argument
  function handlePagination(direction) {
    let copyTableConf = { ...tableConf };
    if (copyTableConf.page >= 1 && direction === "next")
      copyTableConf.page += 1;
    if (copyTableConf.page > 1 && direction === "prev") copyTableConf.page -= 1;
    setTableConf(copyTableConf);
    getData(
      `page=${copyTableConf.page}&maxPerpage=${copyTableConf.maxPerpage}&searchBy=${copyTableConf.searchBy}&searchString=${copyTableConf.searchString}&sortBy=${copyTableConf.sort.sortBy}&sortMethod=${copyTableConf.sort.sortMethod}`
    );
  }
  // Handle Pagination (NumberClick)
  function handlePaginationNumber(num) {
    let copyTableConf = { ...tableConf };
    copyTableConf.page = num;
    setTableConf(copyTableConf);
    getData(
      `page=${copyTableConf.page}&maxPerpage=${copyTableConf.maxPerpage}&searchBy=${copyTableConf.searchBy}&searchString=${copyTableConf.searchString}&sortBy=${copyTableConf.sort.sortBy}&sortMethod=${copyTableConf.sort.sortMethod}`
    );
  }

  // Handle Search By Option
  function handleSearchBy(searchBy) {
    let copyTableConf = { ...tableConf };
    copyTableConf.searchBy = searchBy;
    setTableConf(copyTableConf);
  }

  // Handle Sort
  function handleSort(sortBy) {
    let copyTableConf = { ...tableConf };
    copyTableConf.sort = {
      sortBy: sortBy,
      sortMethod: tableConf.sort.sortMethod === "asc" ? "desc" : "asc",
    };
    setTableConf(copyTableConf);
    getData(
      `page=${copyTableConf.page}&maxPerpage=${copyTableConf.maxPerpage}&searchBy=${copyTableConf.searchBy}&searchString=${copyTableConf.searchString}&sortBy=${copyTableConf.sort.sortBy}&sortMethod=${copyTableConf.sort.sortMethod}`
    );
  }

  // Handle Search Input Text
  function handleSearchInput(searchString) {
    let copyTableConf = { ...tableConf };
    copyTableConf.page = 1;
    copyTableConf.searchString = searchString;
    setTableConf(copyTableConf);
    getData(
      `page=${copyTableConf.page}&maxPerpage=${copyTableConf.maxPerpage}&searchBy=${copyTableConf.searchBy}&searchString=${copyTableConf.searchString}&sortBy=${defaultTableConf.sort.sortBy}&sortMethod=${defaultTableConf.sort.sortMethod}`
    );
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
          <p>Loading Table Data</p>
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
          Search By {tableConf.searchBy}
        </button>
        <ul className="dropdown-menu">
          {tableConf.tableHead.map((head) => (
            <li key={head.headKey}>
              <a
                className="dropdown-item"
                style={{ cursor: "pointer" }}
                onClick={() => handleSearchBy(head.headKey)}
              >
                {head.headTitle}
              </a>
            </li>
          ))}
        </ul>

        {/* Search Input */}
        <input
          type="text"
          className="form-control form-control-sm"
          aria-label="Text input with dropdown button"
          ref={searchInputRef}
        />
        <button
          className="btn btn-primary"
          onClick={() => handleSearchInput(searchInputRef.current.value)}
        >
          Search
        </button>
      </div>
      {/* End Of Search Bar */}

      {/* Render Loading Spinner */}
      {renderLoading()}
      <table className="table table-hover">
        {/* Table Head */}
        <thead>
          <tr>
            {tableConf.tableHead.map((head) => {
              return (
                <th
                  key={head.headKey}
                  style={{ cursor: "pointer" }}
                  onClick={() => handleSort(head.headKey)}
                >
                  {head.headTitle}
                  <span>
                    <i
                      className={
                        tableConf.sort.sortBy === head.headKey
                          ? "bi bi-filter"
                          : ""
                      }
                    ></i>
                  </span>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {/* Table Rows */}
          {tableRows.map((item) => (
            <tr key={item.id}>
              {/* Computed and need further process Table Data */}
              <td>
                <Link href={`/tableuser/${item.id}`}>
                  <a>
                    <span className="badge rounded-pill bg-secondary ">
                      {item.id}
                    </span>
                  </a>
                </Link>
              </td>
              {/* Regular Table Data */}
              <td>{item.name}</td>
              <td>{item.address}</td>
              <td>{item.country.country}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      {/* Pagination  */}
      <p>
        Displaying Page: {tableConf.page} - Sort By : {tableConf.sort.sortBy}{" "}
        {tableConf.sort.sortMethod}
      </p>

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
