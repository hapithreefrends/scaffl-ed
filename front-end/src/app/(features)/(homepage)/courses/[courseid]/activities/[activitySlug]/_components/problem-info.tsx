import classes from "../_styles/problem-info.module.css";
import parse, { DOMNode, domToReact, Element } from "html-react-parser";
import { Group, Stack, Text, Title, Code } from "@mantine/core";

interface ProblemInfoProps {
  title: string;
  description: string;
  xp: number;
}

export default function ProblemInfo({
  title,
  description,
  xp,
}: ProblemInfoProps) {
  const options = {
    replace: (domNode: DOMNode) => {
      if (domNode instanceof Element) {
        if (domNode.name === "p") {
          return <Text>{domToReact(domNode.children as DOMNode[])}</Text>;
        }

        if (domNode.name === "code") {
          return <Code>{domToReact(domNode.children as DOMNode[])}</Code>;
        }
      }
    },
  };


    return (
      <Stack mah="100%">
        <Group gap="space-between">
          <Title order={2}>{title}</Title>
          <Title order={6}>{xp} XP</Title>
        </Group>
        <div>{parse(description, options)}</div>
      </Stack>
    );
}
