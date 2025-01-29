export default async function ChildUI () {
    const asyncFetch = async () => {
        await new Promise ((resolve) => setTimeout(resolve, 4000));
        return "THEN THIS ONE"
    }

    const data = asyncFetch()

    return (
        <h2>{data}</h2>
    )
}