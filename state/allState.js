import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist();

const userState = atom({
  key: "userState",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

const nameState = atom({
  key: "nameState",
  default: "",
});

const exampleState = atom({
  key: "exampleState",
  default: [],
  effects_UNSTABLE: [persistAtom],
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
  effects_UNSTABLE: [persistAtom],
});
export { nameState, listNameState, exampleState, userState };
