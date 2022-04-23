import useSWR from "swr";

import Navbar from "../../components/Navbar";

export default function Logout({ cookies }) {
  localStorage.clear();
  window.location.href = "/";
}
