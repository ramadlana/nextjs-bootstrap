import Router from "next/router";
import NavbarMember from "../../components/NavbarMember";
import { useStore } from "../../state/globalState";

export default function BearCounter() {
  const bears = useStore((state) => state.bears);
  const increasePopulation = useStore((state) => state.increasePopulation);
  return (
    <>
      <NavbarMember></NavbarMember>
      <div className="container">
        <h1>{bears} around here ...</h1>
        <button className="btn btn-primary" onClick={increasePopulation}>
          one up
        </button>
        <button className="btn btn-primary" onClick={Router.back}>
          Back
        </button>
      </div>
    </>
  );
}

function Controls() {}
