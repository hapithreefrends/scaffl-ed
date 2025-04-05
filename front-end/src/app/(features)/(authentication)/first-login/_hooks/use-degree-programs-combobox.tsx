import { useState } from "react";

import { IDegreeProgram } from "@/app/_models/_enums/degree-program";

import { Combobox, useCombobox } from "@mantine/core";

export default function useDegreeProgramsCombobox(
  degreeProgramsList: IDegreeProgram[] | undefined
) {
  const [degreeProgramSearch, setDegreeProgramSearch] =
    useState("");

  const degreeProgramOptions = degreeProgramsList
    ?.filter((item) =>
      item.name
        .toLowerCase()
        .includes(degreeProgramSearch.toLowerCase().trim())
    )
    .map((item) => (
      <Combobox.Option value={item.id} key={item.id}>
        {item.name}
      </Combobox.Option>
    ));

  const degreeProgramCombobox = useCombobox({
    onDropdownClose: () => {
      degreeProgramCombobox.resetSelectedOption();
      degreeProgramCombobox.focusTarget();
      setDegreeProgramSearch("");
    },

    onDropdownOpen: () => {
      degreeProgramCombobox.focusSearchInput();
    },
  });

  return {
    degreeProgramSearch,
    setDegreeProgramSearch,
    degreeProgramCombobox,
    degreeProgramOptions,
  };
}
