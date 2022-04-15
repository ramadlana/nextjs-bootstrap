import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist();

const tableState = atom({
  key: "tableState",
  default: "",
  effects_UNSTABLE: [persistAtom],
});
