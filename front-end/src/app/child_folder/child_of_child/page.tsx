import { Suspense } from "react";
import ChildOfChildUI from "./childOfChild";
import Loading from "./loading";

export default function ChildOfChildContainer () {
    return (
        <Suspense fallback={<Loading/>}>
            <ChildOfChildUI/>
        </Suspense>
    )
}