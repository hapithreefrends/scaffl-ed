import achiever from "../../_assets/achiever.png";
import explorer from "../../_assets/explorer.png";
import scholar from "../../_assets/scholar.png";
import champion from "../../_assets/champion.png";
import innovator from "../../_assets/innovator.png";
import builder from "../../_assets/builder.png";
import trailblazer from "../../_assets/trailblazer.png";
import visionary from "../../_assets/visionary.png";
import legend from "../../_assets/legend.png";

import { Flex, Stack, Title, Text } from "@mantine/core";

export default function Badges() {
    const badges = [
        { src: achiever.src, label: "Achiever" },
        { src: explorer.src, label: "Explorer" },
        { src: scholar.src, label: "Scholar" },
        { src: champion.src, label: "Champion" },
        { src: innovator.src, label: "Innovator" },
        { src: builder.src, label: "Builder" },
        { src: trailblazer.src, label: "Trailblazer" },
        { src: visionary.src, label: "Visionary" },
        { src: legend.src, label: "Legend" },
    ];

    return (
        <Stack>
            <Title size="h4" >BADGES</Title>
            <Flex
                wrap="wrap"
                justify="flex-start"
                gap="xs"

            >
                {badges.map((badge, index) => (
                    <Flex
                        key={index}
                        direction="column"
                        align="center"
                        style={{
                            border: "2px solid #ddd",
                            borderRadius: "10%",
                            padding: "12px",
                            width: "100px",
                            margin: "8px",
                        }}
                    >
                        <img
                            width={80}
                            height={80}
                            src={badge.src}
                            alt={badge.label}
                        />
                        <Text size="sm" mt="xs">
                            {badge.label}
                        </Text>
                    </Flex>
                ))}
            </Flex>
        </Stack>
    );
}