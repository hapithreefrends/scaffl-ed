import medal from "../../_assets/medal.png";
import ribbon from "../../_assets/ribbon.png";
import trophy from "../../_assets/trophy.png";

import classes from "../../_styles/welcome.module.css";
import { Flex, Stack, Title, Text } from "@mantine/core";

export default function Achievements() {
    return (
        <Stack>
            <Flex
                justify="flex-end"
                style={{
                    border: "2px solid #ccc",
                    borderRadius: "8px",
                    padding: "16px",
                }}
            >
                <img
                    width={80}
                    height={80}
                    src={trophy.src}
                    alt="Scaffy courses greeting hello"
                />
                <Stack>
                    <Title size="h4">5 Courses Finished</Title>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</Text>
                </Stack>
            </Flex>
            <Flex
                justify="flex-end"
                style={{
                    border: "2px solid #ccc",
                    borderRadius: "8px",
                    padding: "16px",
                }}
            >
                <img
                    width={80}
                    height={80}
                    src={medal.src}
                    alt="Scaffy courses greeting hello"
                />
                <Stack>
                    <Title size="h4">10 Languages Explored</Title>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</Text>
                </Stack>
            </Flex>
            <Flex
                justify="flex-end"
                style={{
                    border: "2px solid #ccc",
                    borderRadius: "8px",
                    padding: "16px",
                }}
            >
                <img
                    width={80}
                    height={80}
                    src={ribbon.src}
                    alt="Scaffy courses greeting hello"
                />
                <Stack>
                    <Title size="h4">100 Exercises Solved</Title>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</Text>
                </Stack>
            </Flex>
        </Stack>
    );
}