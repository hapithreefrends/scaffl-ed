import Link from 'next/link'
import fetchUI from './fetchy';
import FetchUI from './fetchy';
import { Suspense } from 'react';
import LoadingMessage from './loadMessage';
import ChildContainer from './child_folder/page';

export default function Home() {
	return (
    <>
		<Suspense fallback={<LoadingMessage/>}>
      <FetchUI/>
		</Suspense>

    <ChildContainer/>

    <button>
			<Link href='/test'>CLICK ME</Link>
		</button>
    </>
	);
  // throw Error("ERROR!")
}