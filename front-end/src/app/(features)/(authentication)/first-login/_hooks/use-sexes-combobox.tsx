import { useState } from "react";

import { ISex } from "@/app/_models/_enums/sex";

import { Combobox, useCombobox } from "@mantine/core";

export default function useSexesCombobox(
  sexesList: ISex[] | undefined
) {
  const [sexSearch, setSexSearch] =
    useState("");

  const sexOptions = sexesList
    ?.filter((item) =>
      item.name
        .toLowerCase()
        .includes(sexSearch.toLowerCase().trim())
    )
    .map((item) => (
      <Combobox.Option value={item.id} key={item.id}>
        {item.name}
      </Combobox.Option>
    ));

  const sexCombobox = useCombobox({
    onDropdownClose: () => {
      sexCombobox.resetSelectedOption();
      sexCombobox.focusTarget();
      setSexSearch("");
    },

    onDropdownOpen: () => {
      sexCombobox.focusSearchInput();
    },
  });

  return {
    sexSearch,
    setSexSearch,
    sexCombobox,
    sexOptions,
  };
}
