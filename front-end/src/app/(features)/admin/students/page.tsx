"use client"

import { usePathname, useRouter } from "next/navigation";

import { useState, useEffect, Suspense } from "react";

import { Badge, Button, Center, Stack, Group, ActionIcon } from "@mantine/core";
import { openModal } from "@mantine/modals";
import { IconClick, IconEye, IconTrash } from "@tabler/icons-react";
import { DataTable, DataTableColumn } from "mantine-datatable";

import { IUserFull } from "@/app/_models/user";
import { useDeleteUserById, useFindAllUsers } from "./_hooks/use-users";

const PAGE_SIZE = 10;

export default function Page() {
  const router = useRouter();
  const pathname = usePathname();

  const { data, isLoading } = useFindAllUsers();
  const deleteUser = useDeleteUserById();

  const [page, setPage] = useState<number>(1);
  const [records, setRecords] = useState<IUserFull[] | undefined>(data?.slice(0, PAGE_SIZE));

  const [selectedRecords, setSelectedRecords] = useState<IUserFull[]>([]);

  useEffect(() => {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE;
    setRecords(data?.slice(from, to));
  }, [data, page]);

  const columns: DataTableColumn<IUserFull>[] = [
    {
      accessor: "full_name",
      title: "Full Name",
      render: (record) => {
        if (!(record.profile && record.profile.first_name && record.profile.last_name)) {
          return <Badge color="gray">No Record</Badge>;
        }

        return <span>{record.profile?.first_name} {record.profile?.last_name}</span>;
      }
    },
    {
      accessor: "account_status.name",
      title: "Account Status",
      render: (record) => {
        const color: Record<string, string> = {
          "Allowed": "green",
          "Suspended": "yellow",
          "Banned": "red",
        };

        if (!(record.profile && record.account_status)) {
          return <Badge color="gray">No Record</Badge>;
        }

        return <Badge color={color[record.account_status.name] ?? "gray"}>{record.account_status.name}</Badge>;
      }
    },
    {
      accessor: "sex.name",
      title: "Sex",
      render: (record) => {
        const color: Record<string, string> = {
          "Male": "blue",
          "Female": "pink",
        };
        
        if (!(record.profile && record.profile.sex)) {
          return <Badge color="gray">No Record</Badge>;
        }

        return <Badge color={color[record.profile.sex.name] ?? "gray"}>{record.profile.sex.name}</Badge>;
      }
    },
    {
      accessor: "school.name",
      title: "School",
      render: (record) => {
        if (!(record.profile && record.profile.school)) {
          return <Badge color="gray">No Record</Badge>;
        }

        return <span>{record.profile?.school.name}</span>;
      }
    },
    {
      accessor: "degree_program.name",
      title: "Degree Program",
      render: (record) => {
        if (!(record.profile && record.profile.college_program)) {
          return <Badge color="gray">No Record</Badge>;
        }

        return <span>{record.profile?.college_program.name}</span>;
      }
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
              color="red"
              onClick={(e) => {
                e.stopPropagation();

                openModal({
                  title: "Confirm Deletion",
                  centered: true,
                  children: (
                    <>
                      <p>Are you sure you want to delete this item?</p>
                      <Button color="red" onClick={() => deleteUser.mutate(record.id)}>
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