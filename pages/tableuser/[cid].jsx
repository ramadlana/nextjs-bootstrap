import { useRouter } from "next/router";

export default function Editid() {
  const router = useRouter();
  const { cid } = router.query;

  return (
    <>
      <p>User ID: {cid}</p>
      <button onClick={() => router.back()}>Back</button>
    </>
  );
}
