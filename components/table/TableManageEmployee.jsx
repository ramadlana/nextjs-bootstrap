import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function TableManageEmploye() {
  // Default tableconf state
  const defaultTableConf = {
    searchBy: "",
    searchString: "",
    sort: { sortBy: "id", sortMethod: "asc" },
    page: 1,
    maxPerpage: 15,
    tableHead: [
      { headTitle: "ID", headKey: "id" },
      { headTitle: "Username", headKey: "username" },
      { headTitle: "Email", headKey: "email" },
      { headTitle: "Role", headKey: "roles" },
    ],
  };

  // State
  const [isLoading, setLoading] = useState(false);
  const [tableRows, setTableRows] = useState();
  const [err, setErr] = useState(false);
  const [tableConf, setTableConf] = useState(defaultTableConf);

  // Reff
  const searchInputRef = useRef();

  //  **************************  PRELOAD FUNCTION  **************************
  // Use Effect - Load data when page Load
  useEffect(() => {
    setLoading(true);
    fetch(
      `${process.env.BACKEND_SERVER}/dashboard/admin-user?page=${defaultTableConf.page}&maxPerpage=${defaultTableConf.maxPerpage}&sortBy=${defaultTableConf.sort.sortBy}&sortMethod=${defaultTableConf.sort.sortMethod}`,
      {
        headers: {
          "Content-Type": "application/json",
          "x-access-token": localStorage.getItem("access_token"),
        },
      }
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
  }, [
    defaultTableConf.maxPerpage,
    defaultTableConf.page,
    defaultTableConf.sort.sortBy,
    defaultTableConf.sort.sortMethod,
  ]);

  //  **************************  FETCH FUNCTION  **************************
  // Get data when page already load - For pagination and other

  function getData(route_params) {
    setLoading(true);
    fetch(
      `${process.env.BACKEND_SERVER}/dashboard/admin-user?${route_params}`,
      {
        headers: {
          "Content-Type": "application/json",
          "x-access-token": localStorage.getItem("access_token"),
        },
      }
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

  //  **************************  HANDLER FUNCTION START **************************

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

  //  **************************  ERROR HANDLER **************************
  // If any error return error
  if (err) return <p>Error happen {err}</p>;

  //  **************************  LOADER HANDLER **************************
  // If tablerows is loading
  if (!tableRows) {
    return (
      <div className="text-center">
        <div className="progress progress-sm">
          <div className="progress-bar progress-bar-indeterminate"></div>
        </div>
        <div className="d-flex justify-content-center m-2">Loading Page</div>
      </div>
    );
  }

  //  **************************  ROW LOADING HANDLER **************************
  // Render if loading, embed in loaded page as renderloading, so no page reload again
  function renderLoading() {
    if (isLoading) {
      return (
        <div className="text-center">
          <div className="progress progress-sm">
            <div className="progress-bar progress-bar-indeterminate"></div>
          </div>
          <div className="d-flex justify-content-center m-2">
            Loading Table Data
          </div>
        </div>
      );
    }
    if (tableRows.length === 0) {
      return (
        <div>
          <p className="text-center">No Result</p>
        </div>
      );
    }
    return null;
  }

  //  **************************  RENDER TABLE HANDLER **************************
  // If Loaded
  return (
    <div>
      {/* Search Bar */}
      <div className="input-group input-group-sm mb-3">
        <button
          className="btn btn-outline-primary dropdown-toggle"
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
          className="btn btn-outline-primary"
          onClick={() => handleSearchInput(searchInputRef.current.value)}
        >
          Search
        </button>
      </div>
      {/* End Of Search Bar */}

      <div className="table-responsive">
        <table className="table table-vcenter card-table table-nowrap">
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
                  <Link href={`/customer/${item.id}`}>
                    <a>
                      <span className="badge badge-outline text-blue">
                        {item.id}
                      </span>
                    </a>
                  </Link>
                </td>

                {/* Regular Table Data */}
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.roles}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Render Loading Spinner */}
        {renderLoading()}
      </div>

      <div className="card-footer d-flex align-items-center">
        <p className="m-0 text-muted">
          Displaying {tableConf.maxPerpage} data | Page: {tableConf.page} |
          sorty by : {tableConf.sort.sortBy} | method:{" "}
          {tableConf.sort.sortMethod}
        </p>
        <ul className="pagination m-0 ms-auto">
          <li
            className="page-item disabled"
            onClick={() => handlePagination("prev")}
            style={{ cursor: "pointer" }}
          >
            <a className="page-link" tabIndex={-1} aria-disabled="true">
              {/* Download SVG icon from http://tabler-icons.io/i/chevron-left */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <desc>
                  Download more icon variants from
                  https://tabler-icons.io/i/chevron-left
                </desc>
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <polyline points="15 6 9 12 15 18" />
              </svg>
              prev
            </a>
          </li>
          {[1, 2, 3, 4, 5, 6].map((num) => {
            return (
              <li className="page-item" key={num}>
                <a
                  className="page-link"
                  style={{ cursor: "pointer" }}
                  onClick={() => handlePaginationNumber(num)}
                >
                  {num}
                </a>
              </li>
            );
          })}
          <li
            className="page-item"
            onClick={() => handlePagination("next")}
            style={{ cursor: "pointer" }}
          >
            <a className="page-link">
              next{" "}
              {/* Download SVG icon from http://tabler-icons.io/i/chevron-right */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <desc>
                  Download more icon variants from
                  https://tabler-icons.io/i/chevron-right
                </desc>
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <polyline points="9 6 15 12 9 18" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
