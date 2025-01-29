import { Suspense } from "react";
import ChildUI from "./childUI";
import Loading from "./loading";
import ChildOfChildContainer from "./child_of_child/page";

export default function ChildContainer() {
  return (
    <>
      <Suspense fallback={<Loading />}>{<ChildUI />}</Suspense>
      <ChildOfChildContainer />
    </>
  );
}
