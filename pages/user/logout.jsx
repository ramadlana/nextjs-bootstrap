export default function Logout() {
  if (typeof window !== "undefined") {
    // Perform localStorage action
    localStorage.clear();
    window.location.href = "/";
  }
  return <h4>Please wait..</h4>;
}
