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
  {
    id: "3",
    name: "Control Structures",
    progress: 67,
    description:
      "Discover how to declare and use variables in Java. Understand data types such as integers, strings, booleans, and how they interact within Java code.",
      modules: ["5", "2", "1", "4", "6", "3"],
  },
  {
    id: "4",
    name: "User-defined Functions",
    progress: 12,
    description:
      "Learn how to handle input and output in Java, from getting user input to saving information in files, using simple tools like scanners and file writers.",
      modules: ["4", "5", "3", "6", "2", "1"],
  },
];

export default function useChapter(chapterid: string) {
    
  return useSuspenseQuery({
    queryKey: ["chapters", chapterid],
    queryFn: async () => {
        await new Promise((resolve) => setTimeout(resolve, 1000));

      const chapter = mockChaptersData.find((item) => item.id === chapterid);
      if (!chapter) throw Error("Chapter not found");

      return chapter;
    },
  });
}
