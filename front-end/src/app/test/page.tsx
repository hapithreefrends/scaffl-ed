import Link from 'next/link'
import NextPageChild  from './test-child/page'

export default async function NextPage() {
  await new Promise((resolve) => {
    setTimeout(resolve, 0);
  });
  return (
    <>
      <h1>NEXT PAGE</h1>
      <button>
        <Link href="/">BACK TO HOME</Link>
      </button>

      <NextPageChild/>
    </>
  );
  // throw Error("ERROR!")
}
