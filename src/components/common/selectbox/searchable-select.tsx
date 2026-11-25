
"use client";

import Select from "react-select";

interface Option {
    value: string | number;
    label: string;
}

interface SearchableSelectProps {
    options: Option[];
    value: string | number;
    onChange: (value: string) => void;
    placeholder?: string;
    isClearable?: boolean;
}

export default function SearchableSelect({
    options,
    value,
    onChange,
    placeholder = "Search or select...",
    isClearable = true,
}: SearchableSelectProps) {
    const selectedOption =
        options.find((item) => String(item.value) === String(value)) || null;

    return (
        <Select
            options={options}
            value={selectedOption}
            onChange={(selectedOption) =>
                onChange(selectedOption?.value?.toString() || "")
            }
            placeholder={placeholder}
            isClearable={isClearable}
            isSearchable
            noOptionsMessage={() => "No options found"}
            styles={{
                control: (base, state) => ({
                    ...base,
                    minHeight: "44px",
                    borderRadius: "10px",
                    borderColor: state.isFocused ? "#AA0C51" : "#d1d5db",
                    boxShadow: "none",
                    "&:hover": {
                        borderColor: "#AA0C51",
                    },
                }),
                menu: (base) => ({
                    ...base,
                    zIndex: 50,
                }),
                option: (base, state) => ({
                    ...base,
                    backgroundColor: state.isSelected
                        ? "#AA0C51"
                        : state.isFocused
                            ? "#fce7f3"
                            : "white",
                    color: state.isSelected ? "white" : "#374151",
                    fontSize: "14px",
                }),
            }}
        />
    );
}
