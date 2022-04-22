import { useRouter } from "next/router";
import NavbarMember from "../../components/NavbarMember";

export default function Editid() {
  const router = useRouter();
  const { cid } = router.query;

  return (
    <>
      <NavbarMember></NavbarMember>
      <div className="container">
        <p>User ID: {cid}</p>
        <p style={{ color: "blue" }}>
          Query params : {JSON.stringify(router.query)}
        </p>
        <p>
          cid come from pages [cid].jsx and the rest come from router query
          after '?' mark
        </p>
        <button className="btn btn-primary" onClick={() => router.back()}>
          Back
        </button>
      </div>
    </>
  );
}
