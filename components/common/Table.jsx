// // for client side rendering every request
import Link from "next/link";
import { useState, useRef } from "react";
import { useRecoilState } from "recoil";
import { exampleTableState } from "../../state/tableState";

//   Export Page
export default function TableCommon({ tableData }) {
  const [, setTableData] = useRecoilState(exampleTableState);
  const searchInputRef = useRef(null);

  // Handle Search By
  function handleSearchBy(searchBy) {
    let newTableData = { ...tableData };
    newTableData.searchBy = searchBy;
    setTableData(newTableData);
  }

  // Handle Search Input
  function handleSearchInput(searchString) {
    let newTableData = { ...tableData };
    newTableData.searchString = searchString;
    setTableData(newTableData);
  }

  // Handle Sort
  function handleSort(sortBy) {
    let newTableData = { ...tableData };
    newTableData.sort = {
      sortBy: sortBy,
      sortMode: tableData.sort.sortMode === "ASC" ? "DESC" : "ASC",
    };
    setTableData(newTableData);
  }

  // function Next and Prev
  function handlePagination(direction) {
    let newTableData = { ...tableData };
    if (newTableData.page >= 1 && direction === "next") newTableData.page += 1;
    if (newTableData.page > 1 && direction === "prev") newTableData.page -= 1;
    setTableData(newTableData);
  }

  function renderColl(col) {
    if (tableData.sort.sortBy === col.colKey) {
      return (
        <th
          key={col.colLabel}
          scope="col"
          onClick={() => handleSort(col.colKey)}
        >
          {col.colLabel}
          <span>
            <i
              className={
                tableData.sort.sortMode === "ASC"
                  ? "bi bi-arrow-down-circle mx-2"
                  : "bi bi-arrow-up-circle mx-2"
              }
            ></i>
          </span>
        </th>
      );
    }
    return (
      <th key={col.colLabel} scope="col" onClick={() => handleSort(col.colKey)}>
        {col.colLabel}
      </th>
    );
  }

  function renderCell(rows) {
    return (
      <>
        {/* Custom Rows Before Computed Rows, Excluded it from tableColumn, and put into TableHead */}
        <td>
          <Link href={`/${rows.id}`}>Edit</Link>
        </td>
        {/* Computed Rows */}
        {tableData.tableColumn.map((key) => (
          <td key={Math.random(0, 1000)}>{rows[`${key.colKey}`]}</td>
        ))}
        {/* End Of Computed Rows */}

        {/* Custom Rows After Computed Rows, Excluded it from tableColumn, and put into TableHead*/}
      </>
    );
  }

  return (
    <div>
      {JSON.stringify(tableData)}
      {/* Search Bar */}
      <div className="container shadow-sm">
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
            <li>
              {tableData.tableHead.map((menu) => (
                <a
                  key={menu.colKey}
                  className="dropdown-item"
                  onClick={() => handleSearchBy(menu.colKey)}
                  href="#"
                >
                  {menu.colLabel}
                </a>
              ))}
            </li>
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
        <table className="table table-hover">
          <thead>
            <tr>
              {tableData.tableHead.map((col) => {
                return renderColl(col);
              })}
            </tr>
          </thead>
          <tbody>
            {tableData.rows.map((row) => {
              return <tr key={row.id}>{renderCell(row)}</tr>;
            })}
          </tbody>
        </table>
        {/* Pagination  */}
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <a
                className="page-link"
                href="#"
                onClick={() => handlePagination("prev")}
              >
                Previous
              </a>
            </li>
            <li className="page-item">
              <a
                className="page-link"
                href="#"
                onClick={() => handlePagination("next")}
              >
                Next
              </a>
            </li>
          </ul>
        </nav>
        {/* End Of Pagination */}
      </div>
    </div>
  );
}
