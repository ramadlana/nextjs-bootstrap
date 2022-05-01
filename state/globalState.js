import create from "zustand";

// WARNING
// set must call inside function otherwise loop occur, because its re render DOM when changes

// Long Text Default state
const defaultTableState = {
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
};

// With Zustand All Atoms can be stored in one place
const useStore = create((set) => ({
  //   Bears State
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),

  //   User State
  userState: [],
  setUserState: (data) => set({ userState: data }),

  //   Table Example
  exampleTableState: defaultTableState,
  setExampleTableState: (data) => set({ exampleTableState: data }),

  // PROD

  // add subs form state
  addSubsFormState: {},
  setAddSubsFormState: (data) => set({ addSubsFormState: data }),
}));

// You can create another store useCustomStore here, and dont forget to export it

export { useStore };
