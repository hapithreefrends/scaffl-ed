import { useSuspenseQuery } from "@tanstack/react-query"

export default function useActivity(id: string) {
    
    /*
    * This is a custom hook that fetches the activity data from the server.
    * It uses the useSuspenseQuery hook to fetch the data.
    * The queryKey is an array that contains the query name and the id of the activity.
    * The queryFn is an async function that fetches the data from the server.
    * The function uses the setTimeout function to simulate a delay of 1 second.
    * The function returns the activity data.
    * Everything is hardcoded for now.
    * Actual implementation will be added later.
    */

    return useSuspenseQuery({
        queryKey: ["activity", id],
        queryFn: async () => {
            await new Promise((resolve) => setTimeout(resolve, 1000))
            // return {
            //     id: "1",
            //     type: "activity",
            //     name: "Hello, Scaffy!",
            //     description: "",
            //     xp: 100,
            //     slug: "hello-scaffy"
            // }

            // TO BE ADDED
        }
    })
}