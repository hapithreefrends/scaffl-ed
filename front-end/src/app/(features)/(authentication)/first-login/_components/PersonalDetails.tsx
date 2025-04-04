import { Stack, TextInput, Combobox, InputBase, Input } from '@mantine/core';
import { DateInput } from '@mantine/dates';
import { useUpdateUserProfileFormContext } from './update-user-profile-form-context';
import useSexesCombobox from '../_hooks/use-sexes-combobox';
import { useFindAllSexes } from '@/app/(features)/_hooks/use-constants';

export function PersonalDetails() {
    const form = useUpdateUserProfileFormContext();

    const { data: sexesList } = useFindAllSexes();

    const sexProps = form.getInputProps(
        `sex_id`
    );

    const {
        sexSearch,
        setSexSearch,
        sexCombobox,
        sexOptions,
    } = useSexesCombobox(sexesList);

    return (
        <Stack style={{ overflowY: "auto" }}>
            <TextInput
                withAsterisk
                label="First Name"
                placeholder="John"
                required
                {...form.getInputProps('first_name')}
            />
            <TextInput
                withAsterisk
                label="Last Name"
                placeholder="Doe"
                required
                {...form.getInputProps('last_name')}
            />
            <DateInput
                withAsterisk
                label="Birth Date"
                required
                {...form.getInputProps('birthday')}
            />
            <Combobox
                store={sexCombobox}
                withinPortal={false}
                onOptionSubmit={(value) => {
                    form.setFieldValue(
                        `sex_id`,
                        Number(value)
                    );

                    sexCombobox.closeDropdown();
                }}
            >
                <Combobox.Target>
                    <InputBase
                        component="button"
                        type="button"
                        pointer
                        rightSection={<Combobox.Chevron />}
                        onClick={() => sexCombobox.toggleDropdown()}
                        rightSectionPointerEvents="none"
                        withAsterisk
                        label="Sex"
                        required
                    >
                        {sexesList?.find(
                            (pl) => pl.id == sexProps.defaultValue
                        )?.name || <Input.Placeholder>Pick a Sex</Input.Placeholder>}
                    </InputBase>
                </Combobox.Target>

                <Combobox.Dropdown>
                    <Combobox.Search
                        value={sexSearch}
                        onChange={(event) =>
                            setSexSearch(event.currentTarget.value)
                        }
                        placeholder="Search sexes"
                    />
                    <Combobox.Options>
                        {sexOptions &&
                            sexOptions.length > 0 ? (
                            sexOptions
                        ) : (
                            <Combobox.Empty>Nothing found</Combobox.Empty>
                        )}
                    </Combobox.Options>
                </Combobox.Dropdown>
            </Combobox>
        </Stack>
    );
}