import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import dayjs from "dayjs";

export default function TableRadcheck() {
  // Default tableconf state
  const defaultTableConf = {
    searchBy: "",
    searchString: "",
    sort: { sortBy: "id", sortMethod: "asc" },
    page: 1,
    maxPerpage: 10,
    tableHead: [
      { headTitle: "ID", headKey: "id" },
      { headTitle: "Username", headKey: "username" },
      { headTitle: "Expiry Date", headKey: "expirydate" },
      { headTitle: "Email", headKey: "email" },
      { headTitle: "Address", headKey: "address" },
      { headTitle: "First Name", headKey: "first_name" },
      { headTitle: "Last Name", headKey: "last_name" },
      { headTitle: "Phone", headKey: "phone" },
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
      `${process.env.BACKEND_SERVER}/dashboard/all-radius-user?page=${defaultTableConf.page}&maxPerpage=${defaultTableConf.maxPerpage}&sortBy=${defaultTableConf.sort.sortBy}&sortMethod=${defaultTableConf.sort.sortMethod}`,
      {
        headers: {
          "Content-Type": "application/json",
          "x-access_token": localStorage.getItem("access_token"),
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
  }, []);

  // Get data when page already load - For pagination and other
  function getData(route_params) {
    setLoading(true);
    fetch(
      `${process.env.BACKEND_SERVER}/dashboard/all-radius-user?${route_params}`,
      {
        headers: {
          "Content-Type": "application/json",
          "x-access_token": localStorage.getItem("access_token"),
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
    if (tableRows.length === 0) {
      return (
        <div>
          <p className="text-center">No Result</p>
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
        <table className="table table-vcenter card-table">
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
                      <span className="badge rounded-pill bg-secondary ">
                        {item.id}
                      </span>
                    </a>
                  </Link>
                </td>
                {/* Regular Table Data */}
                <td>{item.username}</td>
                <td>
                  {dayjs(item.expirydate).format("DD-MM-YYYY HH:mm:ss WIB")}
                </td>
                <td>{item.email}</td>
                <td>{item.address}</td>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Render Loading Spinner */}
        {renderLoading()}
      </div>
      <br />
      {/* Pagination  */}
      <p>
        Displaying Page: {tableConf.page} - Sort By : {tableConf.sort.sortBy}{" "}
        {tableConf.sort.sortMethod}
      </p>

      <nav aria-label="Page navigation example">
        <ul className="pagination m-0 ms-auto">
          <li className="page-item">
            <a
              className="page-link"
              style={{ cursor: "pointer" }}
              onClick={() => handlePagination("prev")}
            >
              Previous
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
