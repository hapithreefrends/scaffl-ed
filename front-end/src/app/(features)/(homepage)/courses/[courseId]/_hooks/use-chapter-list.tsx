import { useSuspenseQuery } from "@tanstack/react-query"

const mockChapterList = [
    {id: "1"},
    {id: "2"},
]

const mockChapterList2 = [
    {id: "3"},
    {id: "4"},
]

export default function useChapterList(courseId: string) {
    return useSuspenseQuery({
        queryKey: ["courseId", courseId],
        queryFn: async () => {
            await new Promise((resolve) => setTimeout(resolve, 2000)) 

            return courseId === "1" ? mockChapterList : mockChapterList2;
        }
    })
}