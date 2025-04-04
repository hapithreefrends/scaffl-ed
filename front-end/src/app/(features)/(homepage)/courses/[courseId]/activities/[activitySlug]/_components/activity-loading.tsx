import { Center, Title } from "@mantine/core";

/**
 * A React functional component that displays a loading screen for an activity.
 * It centers the content both vertically and horizontally using Mantine"s `Center` component.
 * The loading message is displayed as a title using Mantine"s `Title` component.
 * This component is intended to be used while the activity data is being fetched or processed.
 *
 * @component
 * @example
 * return (
 *   <ActivityLoading />
 * )
 */

export default function ActivityLoading() {
  return (
    <Center h="100vh"> 
      <Title>LOADING...</Title>
    </Center>
  );
}
