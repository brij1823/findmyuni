import { Box, Grid, TextField } from "@mui/material";
import Mentor from "../../components/Mentor";
import SearchFilterDropdown from "../../components/SearchFilterDropdown";
import { useEffect, useState } from "react";
import axios from 'axios';


const SearchStudents = () => {

    const [mentors, setMentors] = useState([]);
    const [searchText, setSearchText] = useState("")

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        try {
            const response = await axios.get('https://ec30-70-50-195-236.ngrok-free.app/searchstudents');
            console.log("API Response:")
            setMentors(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    const listOfUniversities = ["University of ABC", "University of PQR"]
    const listofCourses = ["MACS", "MEng"]

    const filteredData = mentors.filter((item) =>
        item.first_name.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <div>
            <Box sx={{ p: 5 }}>
                <Box sx={{ mb: 3 }}>
                    <Grid container direction="row" spacing={3} >
                        <Grid item md={8}>
                            <Box sx={{ width: "100%" }}>
                                <TextField placeholder="Search by name" value={searchText} onChange={(e) => { setSearchText(e.target.value) }} fullWidth />
                            </Box>
                        </Grid>
                        <Grid item flex={2}>
                            <SearchFilterDropdown filterLabel={'Select University'} availableFilters={listOfUniversities} />
                        </Grid>
                        <Grid item flex={2}>
                            <SearchFilterDropdown filterLabel={'Select Course name'} availableFilters={listofCourses} />
                        </Grid>
                    </Grid>
                </Box>

                <Grid item container spacing={5} className="grid" justifyContent="center">
                    {
                        filteredData.map((mentor) => {
                            return (
                                <Grid item>
                                    <Mentor mentor={mentor} />

                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Box>

        </div>

    )
}

export default SearchStudents;