import { atom, selector } from "recoil";

const exampleTableState = atom({
  key: "exampleTableState",
  default: {
    searchBy: "",
    searchString: "",
    sort: { sortBy: "firstName", sortMode: "ASC" },
    page: 1,
    maxPerpage: 10,
    tableHead: [
      { colLabel: "ID", colKey: "id" },
      { colLabel: "First Name", colKey: "firstName" },
      { colLabel: "Last Name", colKey: "lastName" },
      { colLabel: "Handle", colKey: "handle" },
    ],
    tableColumn: [
      { colName: "First Name", colKey: "firstName" },
      { colName: "Last Name", colKey: "lastName" },
      { colName: "Handle", colKey: "handle" },
    ],
    rows: [
      { id: 1, firstName: "mark", lastName: "Otto", handle: "@mto" },
      { id: 2, firstName: "mark", lastName: "Otto2", handle: "@mto" },
      { id: 3, firstName: "mark", lastName: "Otto3", handle: "@mto" },
      { id: 4, firstName: "mark", lastName: "Otto4", handle: "@mto" },
      { id: 5, firstName: "mark", lastName: "Otto5", handle: "@mto" },
    ],
  },
});

export { exampleTableState };
