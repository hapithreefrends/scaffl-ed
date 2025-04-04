import { useState } from "react";

import { Badge, Combobox, useCombobox } from "@mantine/core";
import { IDifficulty } from "@/app/_models/_enums/difficulty";

export default function useDifficultiesCombobox(
  difficultiesList: IDifficulty[] | undefined
) {
  const [difficultySearch, setDifficultySearch] = useState("");

  const difficultyOptions = difficultiesList
    ?.filter((item) =>
      item.name.toLowerCase().includes(difficultySearch.toLowerCase().trim())
    )
    .map((item) => {
      const color: Record<string, string> = {
        Easy: "green",
        Medium: "yellow",
        Hard: "red",
      };

      return (
        <Combobox.Option value={`${item.id}`} key={item.id}>
          <Badge color={color[item.name]}>{item.name}</Badge>
        </Combobox.Option>
      );
    });

  const difficultyCombobox = useCombobox({
    onDropdownClose: () => {
      difficultyCombobox.resetSelectedOption();
      difficultyCombobox.focusTarget();
      setDifficultySearch("");
    },

    onDropdownOpen: () => {
      difficultyCombobox.focusSearchInput();
    },
  });

  return {
    difficultySearch,
    setDifficultySearch,
    difficultyCombobox,
    difficultyOptions,
  };
}
