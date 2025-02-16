import { useSuspenseQuery } from "@tanstack/react-query";

const mockChaptersData = [
  {
    id: "1",
    name: "Variables and Data Types",
    progress: 50,
    description:
      "Discover how to declare and use variables in Java. Understand data types such as integers, strings, booleans, and how they interact within Java code.",
      modules: ["1", "2", "3", "4", "5", "6"],
  },
  {
    id: "2",
    name: "Input and Output",
    progress: 60,
    description:
      "Learn how to handle input and output in Java, from getting user input to saving information in files, using simple tools like scanners and file writers.",
      modules: ["1", "2", "3", "4", "5", "6"],
  },
];

export default function useChapter(id: string) {
    
  return useSuspenseQuery({
    queryKey: ["chapters", id],
    queryFn: async () => {
        await new Promise((resolve) => setTimeout(resolve, 1000));

      const chapter = mockChaptersData.find((item) => item.id === id);
      if (!chapter) throw Error("Chapter not found");

      return chapter;
    },
  });
}
