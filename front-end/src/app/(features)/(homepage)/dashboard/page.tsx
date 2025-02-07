import Welcome from "./_components/welcome"
import { Stack } from "@mantine/core"

export default function Dashboard () {
    return (
        <Stack p={"lg"}>
        <Welcome name="Adrian" affirmation=""/>
        </Stack>
    )
}