import { useState } from "react";

import { ISchool } from "@/app/_models/_enums/school";

import { Combobox, useCombobox } from "@mantine/core";

export default function useSchoolsCombobox(
  schoolsList: ISchool[] | undefined
) {
  const [schoolSearch, setSchoolSearch] =
    useState("");

  const schoolOptions = schoolsList
    ?.filter((item) =>
      item.name
        .toLowerCase()
        .includes(schoolSearch.toLowerCase().trim())
    )
    .map((item) => (
      <Combobox.Option value={item.id} key={item.id}>
        {item.name}
      </Combobox.Option>
    ));

  const schoolCombobox = useCombobox({
    onDropdownClose: () => {
      schoolCombobox.resetSelectedOption();
      schoolCombobox.focusTarget();
      setSchoolSearch("");
    },

    onDropdownOpen: () => {
      schoolCombobox.focusSearchInput();
    },
  });

  return {
    schoolSearch,
    setSchoolSearch,
    schoolCombobox,
    schoolOptions,
  };
}
