'use client';
import React from 'react';
import 'react-calendar-heatmap/dist/styles.css';
import '../../_styles/dashboard.css';
import { Flex, Box, Stack, Title, Text } from "@mantine/core";

export default function Details() {

    return (
        <>
            <Stack gap="0px">
                <Title size="h3">Adrian Cruz</Title>
                <Text>Builder</Text>
                <Text>Computer Science</Text>
            </Stack>

            <Stack>
                <Title size="h4">ABOUT</Title>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et*.
                    Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et. Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
            </Stack>
        </>
    );
};

