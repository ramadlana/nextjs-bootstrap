import dynamic from "next/dynamic";

const MigrasiSubsForm = dynamic(
  () => import("../components/form/MigrasiSubs"),
  { ssr: false }
);

export default function MigrasiCustomer() {
  return (
    <>
      <MigrasiSubsForm></MigrasiSubsForm>
    </>
  );
}
