import { useSuspenseQuery } from "@tanstack/react-query"

const mockChapterList = [
    {id: "1"},
    {id: "2"},
]

const mockChapterList2 = [
    {id: "3"},
    {id: "4"},
]

export default function useChapterList(courseid: string) {
    return useSuspenseQuery({
        queryKey: ["courseid", courseid],
        queryFn: async () => {
            await new Promise((resolve) => setTimeout(resolve, 2000)) 

            return courseid === "1" ? mockChapterList : courseid === "2" ? mockChapterList2 : [{},{}];
        }
    })
}