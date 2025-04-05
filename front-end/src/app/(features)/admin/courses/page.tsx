"use client"

import { usePathname, useRouter } from "next/navigation";

import { useState, useEffect, Suspense } from "react";

import { Badge, Button, Center, Stack, Group, ActionIcon, Text } from "@mantine/core";
import { openConfirmModal } from "@mantine/modals";
import { IconClick, IconPlus, IconEye, IconEdit, IconTrash } from "@tabler/icons-react";
import { DataTable, DataTableColumn } from "mantine-datatable";

import { ICourseFull } from "@/app/_models/course";
import { useDeleteCourseById, useFindAllCourses } from "./_hooks/use-courses";

import classes from "./_styles/page.module.css";

const PAGE_SIZE = 10;

export default function Page() {
  const router = useRouter();
  const pathname = usePathname();

  const { data, isLoading } = useFindAllCourses();
  const deleteCourse = useDeleteCourseById();

  const [page, setPage] = useState<number>(1);
  const [records, setRecords] = useState<ICourseFull[] | undefined>(data?.slice(0, PAGE_SIZE));

  const [selectedRecords, setSelectedRecords] = useState<ICourseFull[]>([]);

  useEffect(() => {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE;
    setRecords(data?.slice(from, to));
  }, [data, page]);

  const columns: DataTableColumn<ICourseFull>[] = [
    {
      accessor: "name",
      title: "Name"
    },
    {
      accessor: "experience",
      title: "Experience",
      render: (record) => {
        return <span className={classes.xp}>{record.experience} XP</span>
      }
    },
    {
      accessor: "difficulty.name",
      title: "Difficulty",
      render: (record) => {
        const color: Record<string, string> = {
          "Easy": "green",
          "Medium": "yellow",
          "Hard": "red",
        };

        return <Badge color={color[record.difficulty.name] ?? "gray"}>{record.difficulty.name}</Badge>;
      }
    },
    {
      accessor: "programming_language.name",
      title: "Programming Language"
    },
    {
      accessor: "actions",
      title: (
        <Center>
          <IconClick size={16} />
        </Center>
      ),
      width: "0%",
      render: (record) => {
        return (
          <Group gap={4} justify="right" wrap="nowrap">
            <ActionIcon
              size="sm"
              variant="transparent"
              color="teal"
              onClick={(e) => {
                e.stopPropagation();
                router.push(`${pathname}/${record.id}`);
              }}
            >
              <IconEye size={32} />
            </ActionIcon>

            <ActionIcon
              size="sm"
              variant="transparent"
              color="violet"
              onClick={(e) => {
                e.stopPropagation();
                router.push(`${pathname}/${record.id}/edit`);
              }}
            >
              <IconEdit size={32} />
            </ActionIcon>

            <ActionIcon
              size="sm"
              variant="transparent"
              color="red"
              onClick={(e) => {
                e.stopPropagation();

                openConfirmModal({
                  title: "Confirm Deletion",
                  centered: true,
                  children: (
                    <Text>
                      Are you sure you want to delete the course <strong>{record.name}</strong>?
                    </Text>
                  ),
                  labels: { confirm: "Delete course", cancel: "No, don't delete it!" },
                  confirmProps: { color: "red" },
                  onConfirm: () => deleteCourse.mutate(record.id),
                });
              }}
            >
              <IconTrash size={32} />
            </ActionIcon>

          </Group>
        );
      }
    }
  ];

  return (
    <Stack w="100%">
      <Button
        fullWidth
        leftSection={<IconPlus size={16} />}
        onClick={() => router.push(`${pathname}/new`)}
      >
        Create New Course
      </Button>

      <Suspense fallback={<div>Loading...</div>}>
        <DataTable
          withTableBorder
          withColumnBorders
          striped
          highlightOnHover
          pinLastColumn
          minHeight={500}

          verticalAlign="center"
          scrollAreaProps={{ type: "never" }}

          totalRecords={data?.length}
          recordsPerPage={PAGE_SIZE}
          page={page}
          onPageChange={(p) => setPage(p)}

          selectedRecords={selectedRecords}
          onSelectedRecordsChange={setSelectedRecords}

          columns={columns}
          records={records}

          fetching={isLoading}
        />
      </Suspense>
    </Stack>
  );
}