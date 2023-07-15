import { Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import { useState } from "react";


const SearchFilterDropdown = (props) => {

    const { filterLabel, availableFilters } = props
    const [selectedValue, setSelectedValue] = useState("")

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    return (
        <div>
            <FormControl fullWidth>
                <InputLabel>{filterLabel}</InputLabel>
                <Select
                    value={selectedValue}
                    label={filterLabel}
                    onChange={handleChange}
                    fullWidth
                >{
                        availableFilters.map((filter) => {
                            return <MenuItem value={filter}>{filter}</MenuItem>
                        })
                    }
                </Select>
            </FormControl>


        </div>
    )
}

export default SearchFilterDropdown;