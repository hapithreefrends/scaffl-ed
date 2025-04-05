import { Stack, Combobox, InputBase, Input } from "@mantine/core";
import { useUpdateUserProfileFormContext } from "./update-user-profile-form-context";
import { useFindAllDegreePrograms, useFindAllSchools } from "@/app/(features)/_hooks/use-constants";
import useSchoolsCombobox from "../_hooks/use-schools-combobox";
import useDegreeProgramsCombobox from "../_hooks/use-degree-programs-combobox";

export function AcademicDetails() {
    const form = useUpdateUserProfileFormContext();

    const { data: schoolsList } = useFindAllSchools();
    const { data: degreeProgramsList } = useFindAllDegreePrograms();

    const schoolProps = form.getInputProps(
        `school_id`
    );
    const {
        schoolSearch,
        setSchoolSearch,
        schoolCombobox,
        schoolOptions,
    } = useSchoolsCombobox(schoolsList);

    const degreeProgramProps = form.getInputProps(
        `degree_program_id`
    );

    const {
        degreeProgramSearch,
        setDegreeProgramSearch,
        degreeProgramCombobox,
        degreeProgramOptions,
    } = useDegreeProgramsCombobox(degreeProgramsList);

    return (
        <Stack style={{ overflowY: "auto" }}>
            <Combobox
                store={schoolCombobox}
                withinPortal={false}
                onOptionSubmit={(value) => {
                    form.setFieldValue(
                        `school_id`,
                        value
                    );

                    schoolCombobox.closeDropdown();
                }}
            >
                <Combobox.Target>
                    <InputBase
                        component="button"
                        type="button"
                        pointer
                        rightSection={<Combobox.Chevron />}
                        onClick={() => schoolCombobox.toggleDropdown()}
                        rightSectionPointerEvents="none"
                        withAsterisk
                        label="School"
                        required
                    >
                        {schoolsList?.find(
                            (s) => s.id == schoolProps.defaultValue
                        )?.name || <Input.Placeholder>Pick a School</Input.Placeholder>}
                    </InputBase>
                </Combobox.Target>

                <Combobox.Dropdown>
                    <Combobox.Search
                        value={schoolSearch}
                        onChange={(event) =>
                            setSchoolSearch(event.currentTarget.value)
                        }
                        placeholder="Search schools"
                    />
                    <Combobox.Options>
                        {schoolOptions &&
                            schoolOptions.length > 0 ? (
                            schoolOptions
                        ) : (
                            <Combobox.Empty>Nothing found</Combobox.Empty>
                        )}
                    </Combobox.Options>
                </Combobox.Dropdown>
            </Combobox>
            <Combobox
                store={degreeProgramCombobox}
                withinPortal={false}
                onOptionSubmit={(value) => {
                    form.setFieldValue(
                        `degree_program_id`,
                        value
                    );

                    degreeProgramCombobox.closeDropdown();
                }}
            >
                <Combobox.Target>
                    <InputBase
                        component="button"
                        type="button"
                        pointer
                        rightSection={<Combobox.Chevron />}
                        onClick={() => degreeProgramCombobox.toggleDropdown()}
                        rightSectionPointerEvents="none"
                        withAsterisk
                        label="Degree Program"
                        required
                    >
                        {degreeProgramsList?.find(
                            (dp) => dp.id == degreeProgramProps.defaultValue
                        )?.name || <Input.Placeholder>Pick a Degree Program</Input.Placeholder>}
                    </InputBase>
                </Combobox.Target>

                <Combobox.Dropdown>
                    <Combobox.Search
                        value={degreeProgramSearch}
                        onChange={(event) =>
                            setDegreeProgramSearch(event.currentTarget.value)
                        }
                        placeholder="Search degree programs"
                    />
                    <Combobox.Options>
                        {degreeProgramOptions &&
                            degreeProgramOptions.length > 0 ? (
                            degreeProgramOptions
                        ) : (
                            <Combobox.Empty>Nothing found</Combobox.Empty>
                        )}
                    </Combobox.Options>
                </Combobox.Dropdown>
            </Combobox>
        </Stack>
    )
}