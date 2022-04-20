import { atom, selector } from "recoil";

const userState = atom({
  key: "userState",
  default: [],
});

const nameState = atom({
  key: "nameState",
  default: "",
});

const exampleState = atom({
  key: "exampleState",
  default: [],
});

const listNameState = atom({
  key: "listNameState",
  default: [
    {
      id: 1,
      value: "1",
      desc: "",
    },
    {
      id: 2,
      value: "2",
      desc: "",
    },
    {
      id: 3,
      value: "3",
      desc: "",
    },
  ],
});
export { nameState, listNameState, exampleState, userState };
