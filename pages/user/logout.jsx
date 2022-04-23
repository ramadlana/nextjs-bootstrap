import useSWR from "swr";
import axios from "axios";
import Navbar from "../../components/Navbar";

const fetcherAxios = async (...args) =>
  axios
    .get(...args)
    .then((res) => res)
    .catch((err) => (err.response ? err.response : err));

export default function Logout({ cookies }) {
  localStorage.clear();
  window.location.href = "/";
}
