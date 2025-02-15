import { useSuspenseQuery, useQuery } from "@tanstack/react-query"

const mockChapterList = [
    {id: "1"},
    {id: "2"},
]

export default function useChapterList(courseid: string) {
    return useSuspenseQuery({
        queryKey: ["courseid", courseid],
        queryFn: async () => {
            await new Promise((resolve) => setTimeout(resolve, 2000)) 

            return mockChapterList
        }
    })
}