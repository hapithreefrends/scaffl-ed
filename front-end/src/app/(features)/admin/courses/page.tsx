'use client'

import { usePathname, useRouter } from 'next/navigation';

import { useState, useEffect } from 'react';

import { Button, Stack, Group, ActionIcon, TextInput } from '@mantine/core';
import { openModal, closeAllModals } from '@mantine/modals';
import { IconPlus, IconEye, IconEdit, IconTrash } from '@tabler/icons-react';
import { DataTable, DataTableColumn } from 'mantine-datatable';

import { ICourse } from '@/app/_models/course';

const PAGE_SIZE = 10;

export default function Page() {
  const router = useRouter();
  const pathname = usePathname();

  const data: ICourse[] = [
    {
      id: "d3a1f334-b531-4a0f-91b3-5b8c3d6b6b72",
      name: "Introduction to Programming",
      description: "Learn the basics of programming in Python.",
      experience: 1,
      difficultyId: 1,
      programmingLanguageId: 1,
    },
    {
      id: "8be163b9-e2a4-401f-bb0a-8ff56f634c56",
      name: "Advanced Web Development",
      description: "Dive deep into JavaScript, HTML, and CSS to build dynamic websites.",
      experience: 3,
      difficultyId: 2,
      programmingLanguageId: 2,
    },
    {
      id: "f024e4c9-cb26-4f5b-8b7c-f9e6bbf703b3",
      name: "Data Structures and Algorithms",
      description: "Understand and implement common data structures and algorithms.",
      experience: 2,
      difficultyId: 2,
      programmingLanguageId: 3,
    },
    {
      id: "de6456b0-61a9-42a7-b83c-3f78b404c7f9",
      name: "Machine Learning Fundamentals",
      description: "Get started with machine learning using Python and TensorFlow.",
      experience: 2,
      difficultyId: 2,
      programmingLanguageId: 1,
    },
    {
      id: "cd2b3a97-d153-42d9-8995-4bc47b348230",
      name: "Mobile App Development with Flutter",
      description: "Build cross-platform apps with Flutter and Dart.",
      experience: 2,
      difficultyId: 2,
      programmingLanguageId: 4,
    },
    {
      id: "be163f0a-d708-46cf-8fe0-13a9f149e8f3",
      name: "Cloud Computing with AWS",
      description: "Learn cloud computing concepts and how to use AWS services.",
      experience: 2,
      difficultyId: 3,
      programmingLanguageId: 5,
    },
    {
      id: "b2db70ab-1b66-46d8-9c4b-5c506d6b07b2",
      name: "Introduction to Cybersecurity",
      description: "Learn the basics of cybersecurity and how to protect your systems.",
      experience: 1,
      difficultyId: 1,
      programmingLanguageId: 6,
    },
    {
      id: "cb7687f0-8c7f-4388-b234-50824d978f99",
      name: "Database Design and SQL",
      description: "Master SQL and learn how to design efficient databases.",
      experience: 2,
      difficultyId: 2,
      programmingLanguageId: 7,
    },
    {
      id: "742cda3e-e57f-408a-aab2-7844a13cfc64",
      name: "Advanced Data Science",
      description: "Deep dive into advanced data science techniques and statistical models.",
      experience: 3,
      difficultyId: 3,
      programmingLanguageId: 1,
    },
    {
      id: "af6a2a78-e741-42ea-98d2-cf67db9f37da",
      name: "Game Development with Unity",
      description: "Learn how to create 2D and 3D games using Unity.",
      experience: 2,
      difficultyId: 2,
      programmingLanguageId: 8,
    }
  ];

  const [page, setPage] = useState<number>(1);
  const [records, setRecords] = useState<ICourse[]>(data.slice(0, PAGE_SIZE));

  const [selectedRecords, setSelectedRecords] = useState<ICourse[]>([]);

  useEffect(() => {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE;
    setRecords(data.slice(from, to));
  }, [page]);

  const columns: DataTableColumn<ICourse>[] = [
    {
      accessor: "id",
      title: "ID"
    },
    {
      accessor: "name",
      title: "Name"
    },
    {
      accessor: "description",
      title: "Description"
    },
    {
      accessor: "experience",
      title: "Experience"
    },
    {
      accessor: "difficultyId",
      title: "Difficulty"
    },
    {
      accessor: "programmingLanguageId",
      title: "Programming Language"
    },
    {
      accessor: "actions",
      title: "Actions",
      render: (record) => {
        return (
          <Group gap={4} justify="right" wrap="nowrap">
            <ActionIcon
              size="sm"
              variant="transparent"
              color="teal"
              onClick={(e) => {
                e.stopPropagation();
                router.push(`${pathname}/${record.id}/view`);
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

                openModal({
                  title: 'Confirm Deletion',
                  centered: true,
                  children: (
                    <>
                      <p>Are you sure you want to delete this item?</p>
                      <Button color="red" onClick={() => router.push(`${pathname}/${record.id}/delete`)}>
                        Delete
                      </Button>
                    </>
                  ),
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
        onClick={() => {
          router.push(`${pathname}/new`);
        }}
      >
        Create New Course
      </Button>

      <DataTable
        withTableBorder
        withColumnBorders
        striped
        highlightOnHover
        pinLastColumn

        verticalAlign="center"
        scrollAreaProps={{ type: 'never' }}

        totalRecords={data.length}
        recordsPerPage={PAGE_SIZE}
        page={page}
        onPageChange={(p) => setPage(p)}

        selectedRecords={selectedRecords}
        onSelectedRecordsChange={setSelectedRecords}

        columns={columns}
        records={records}
      />
    </Stack>

  );
}