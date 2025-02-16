import { useSuspenseQuery } from "@tanstack/react-query"

const mockContentData = [
    {
        id: "1",
        type: "lesson",
        name: "Primitive Data Types",
        description: "Explore Java’s basic data types like int, double, boolean.",
        xp: 100,
        slug: "primitive-data-types"
    },
    {
        id: "2",
        type: "activity",
        name: "Hello, Scaffy!",
        description: "",
        xp: 100,
        slug: "hello-scaffy"
    },
    {
        id: "3",
        type: "lesson",
        name: "Declaring Data Types",
        description: "Learn how to declare and initialize variables.",
        xp: 100,
        slug: "declaring-data-types"
    },
    {
        id: "4",
        type: "activity",
        name: "Declare now!",
        description: "",
        xp: 100,
        slug: "declare-now"
    },
    {
        id: "5",
        type: "lesson",
        name: "Type Conversion",
        description: "Understand how to convert data types in Java.",
        xp: 100,
        slug: "type-conversion"
    },
    {
        id: "6",
        type: "activity",
        name: "Type, type, type!",
        description: "",
        xp: 100,
        slug: "type-type-type"
    }
]

export default function useContent(id: string){
    return (
        useSuspenseQuery({
            queryKey: ["content", id],
            queryFn: async () => {
                await new Promise((resolve) => setTimeout(resolve, 1000))

                const content = mockContentData.find((item) => item.id === id)
                if (!content) throw Error("Content not found")

                return content
            }
        })
    )
}