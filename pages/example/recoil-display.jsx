import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import NavbarMember from "../../components/NavbarMember";
import { nameState } from "../../state/allState";

export default function RecoilDisplay() {
  const router = useRouter();
  const [recoilData, setRecoilData] = useRecoilState(nameState);
  return (
    <>
      <NavbarMember></NavbarMember>
      <div className="container">
        <h1>{recoilData}</h1>
        <button onClick={() => router.back()}>Back</button>
      </div>
    </>
  );
}
