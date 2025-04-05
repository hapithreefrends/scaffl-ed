"use client"

import { Title, Menu, Divider, Text, List, Code, Container } from "@mantine/core";
import { useParams, useRouter } from "next/navigation";

import classes from "./page.module.css";

export default function Lesson() {
  const { courseId, lessonSlug } = useParams();
  const router = useRouter();

  console.log("COURSE ID : " + courseId);
  console.log("LESSON ID : " + lessonSlug);

  const navigateToTopic = (topic) => {
    // Navigate to the selected topic
    router.push(`/topics/${topic}`);
  };

  const mockTableOfContents = [
    {
      title: "Variables and Data Types",
      slug: "variables-and-data-types"
    },
    {
      title: "Input and Output",
      slug: "input-and-output"
    },
    {
      title: "Type Conversion",
      slug: "type-conversion"
    },
    {
      title: "Numeric Types",
      slug: "numeric-types"
    },
    {
      title: "Strings",
      slug: "strings"
    },
    {
      title: "Booleans",
      slug: "booleans"
    },
    {
      title: "Operators",
      slug: "operators"
    },
    {
      title: "Tuples",
      slug: "tuples"
    },
    {
      title: "Sets",
      slug: "sets"
    }
  ]

  return (
    <>
      <div style={{ display: "flex", width: "100%", height: "100vh" }}>
        {/* Sidebar */}
        <div style={{ width: 250, display: "flex", flexDirection: "column" }}>
          <Title order={2}>Topics</Title>
          <Divider my="sm" />
          <Menu width={250} position="left" >
            {mockTableOfContents.map((topic, index) => (
              <Menu.Item className={classes.tocItem} key={index} onClick={() => navigateToTopic(topic.slug)}>
                {topic.title}
              </Menu.Item>
            ))}
          </Menu>
        </div>

        {/* Content Area */}
        <div style={{ flex: 1, padding: "20px" }}>
          <Container>
            <Title pt="xl">Variables and Data Types</Title>
            <Text size="lg">Course: {courseId}</Text>
            <Text size="lg">Lesson: {lessonSlug}</Text>

            <Divider my="sm" />
            <section>
              <Title order={3}>What is a Variable?</Title>
              <Text>
                A variable is a container for storing data values. In programming, variables are used to store information such as numbers, strings, or other types of data that can change during program execution.
              </Text>
              <Text>
                In most programming languages, variables must be declared before they can be used. The declaration specifies the name of the variable and sometimes the data type.
              </Text>
            </section>

            <Divider my="sm" />
            <section>
              <Title order={3}>Data Types</Title>
              <Text>
                Data types define the type of value a variable can hold. The most common data types in many programming languages include:
              </Text>
              <List>
                <List.Item><strong>Integer</strong>: Whole numbers (e.g., 1, 2, 100)</List.Item>
                <List.Item><strong>Float</strong>: Decimal numbers (e.g., 3.14, 0.99)</List.Item>
                <List.Item><strong>String</strong>: Sequence of characters (e.g., &quot;Hello, World!&quot;)</List.Item>
                <List.Item><strong>Boolean</strong>: True or False values (e.g., true, false)</List.Item>
                <List.Item><strong>Object</strong>: Complex data structures (e.g., &#123;name: &quot;John&quot;, age: 30&#125;)</List.Item>
                <List.Item><strong>Array</strong>: A collection of values (e.g., &#91;1, 2, 3, 4&#93;)</List.Item>
              </List>
            </section>

            <Divider my="sm" />
            <section>
              <Title order={3}>Variable Declaration</Title>
              <Text>
                In most programming languages, you declare a variable by specifying its type and then its name:
              </Text>
              <Code block>
                {`let age = 30; // Integer variable`}
              </Code>
              <Text>
                Or in some languages, it could also be declared like this:
              </Text>
              <Code block>
                {`int age = 30; // Integer variable`}
              </Code>
            </section>

            <Divider my="sm" />
            <section>
              <Title order={3}>Examples</Title>
              <Text>
                Below are some examples of declaring and using variables:
              </Text>
              <Text>
                <strong>Example 1: Integer Variable</strong>
              </Text>
              <Code block>
                {`let num = 10; // Integer`}
              </Code>
              <Text>
                <strong>Example 2: String Variable</strong>
              </Text>
              <Code block>
                {`let greeting = "Hello, World!"; // String`}
              </Code>
              <Text>
                <strong>Example 3: Boolean Variable</strong>
              </Text>
              <Code block>
                {`let isStudent = true; // Boolean`}
              </Code>
            </section>

            <Divider my="sm" />
            <section>
              <Title order={3}>Type Conversion</Title>
              <Text>
                Type conversion refers to changing a variable"s data type. You can convert between types explicitly or implicitly, depending on the language:
              </Text>
              <Text>
                <strong>Example of explicit type conversion:</strong>
              </Text>
              <Code block>
                {`let num = "100"; // String`}
              </Code>
              <Code block>
                {`let convertedNum = Number(num); // Convert to Number`}
              </Code>
              <Text>
                This example converts a string ("100") to a number using the `Number()` function.
              </Text>
            </section>
          </Container>
        </div>
      </div>
    </>
  );
}
