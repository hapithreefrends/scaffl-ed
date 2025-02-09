import {
  Card,
  Divider,
  Group,
  Skeleton
} from "@mantine/core";

export default function CourseCardSkeleton() {
  return (
    <Card
      withBorder
      radius="md"
      w={335}
      h={335}
      p={24}
    >
      <Group justify="flex-start" mb={18}>
        <Skeleton radius="xl" w={"30%"} h={30}/>
      </Group>
      <Skeleton radius="xl" h={26} mb={18}/>
      <Skeleton radius="xl" w={"40%"} h={18} mb={18}/>
      <Skeleton radius="xl" h={16} mb={10}/>
      <Skeleton radius="xl" h={16} mb={10}/>
      <Skeleton radius="xl" h={16} mb={10}/>
      <Skeleton radius="xl" w={"50%"} h={16} mb={12}/>
      <Divider />
    </Card>
  );
}
