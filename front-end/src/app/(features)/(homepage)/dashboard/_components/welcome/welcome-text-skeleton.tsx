import { Skeleton, Stack } from "@mantine/core";

export default function WelcomeTextSkeleton(){
    return (
        <Stack maw={"50%"} flex={1}>
            <Skeleton w={"30%"} radius="xl" h={34}/>
            <Skeleton w={"80%"} radius="xl" h={16}/>
            <Skeleton w={"80%"} radius="xl" h={16}/>
            <Skeleton w={"80%"} radius="xl" h={16}/>
            <Skeleton w={"50%"} radius="xl" h={16}/>
        </Stack>
    )
}