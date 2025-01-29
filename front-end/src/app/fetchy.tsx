export default async function FetchUI () {
    const fetchData = async () => {
        await new Promise((resolve) => {
            setTimeout(resolve, 2000);
        });

        return "HELLO WORLD";
    }

    const message = await fetchData();

    return <h1>{message}</h1>
}