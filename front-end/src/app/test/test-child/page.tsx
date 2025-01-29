
export default async function NextPageChild() {
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
  return (
    <>
      <h5>CHILD OF NEXT PAGE</h5>
    </>
  );
  // throw Error("ERROR!")
}
