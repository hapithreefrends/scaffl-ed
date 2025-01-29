export default async function ChildOfChildUI() {
    const asyncFetch = async () => {
        await new Promise((resolve) => setTimeout(resolve, 5000));

        return "Then this Child of Child"
    }

    const data = asyncFetch();
    return <h3>{data}</h3>
}