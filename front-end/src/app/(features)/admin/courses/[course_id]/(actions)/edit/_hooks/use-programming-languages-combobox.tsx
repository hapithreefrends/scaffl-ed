import { useState } from "react";

import { IProgrammingLanguage } from "@/app/_models/_enums/programming-language";

import { Combobox, useCombobox } from "@mantine/core";

export default function useProgrammingLanguagesCombobox(
  programmingLanguagesList: IProgrammingLanguage[] | undefined
) {
  const [programmingLanguageSearch, setProgrammingLanguageSearch] =
    useState("");

  const programmingLanguageOptions = programmingLanguagesList
    ?.filter((item) =>
      item.name
        .toLowerCase()
        .includes(programmingLanguageSearch.toLowerCase().trim())
    )
    .map((item) => (
      <Combobox.Option value={item.id} key={item.id}>
        {item.name}
      </Combobox.Option>
    ));

  const programmingLanguageCombobox = useCombobox({
    onDropdownClose: () => {
      programmingLanguageCombobox.resetSelectedOption();
      programmingLanguageCombobox.focusTarget();
      setProgrammingLanguageSearch("");
    },

    onDropdownOpen: () => {
      programmingLanguageCombobox.focusSearchInput();
    },
  });

  return {
    programmingLanguageSearch,
    setProgrammingLanguageSearch,
    programmingLanguageCombobox,
    programmingLanguageOptions,
  };
}
