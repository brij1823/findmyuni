import { Box, Grid, Button, TextField, Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import Mentor from "../../components/Mentor";
import { useEffect, useState } from "react";
import axios from 'axios';


const SearchStudents = () => {

    const [mentors, setMentors] = useState([]);
    const [searchText, setSearchText] = useState("")

    const [selectedCourse, setSelectedCourse] = useState("")
    const [selectedUniversity, setSelectedUniversity] = useState("")
    const [filteredData, setFilteredData] = useState([])

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        try {
            const response = await axios.get('https://ec30-70-50-195-236.ngrok-free.app/searchstudents');
            console.log("API Response:")
            setMentors(response.data);
            setFilteredData(response.data)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    const listOfUniversities = ["University of ABC", "University of PQR"]
    const listofCourses = ["Computer Science", "Business Administration"]

    const handleFilterData = (searchText, selectedCourse, selectedUniversity) => {

        const tempData = mentors.filter((item) => {
            if (searchText) return item.first_name.toLowerCase().includes(searchText.toLowerCase())
            else return item
        }).filter((item) => {
            if (selectedCourse) return item.course_name === selectedCourse
            else return item
        }).filter((item) => {
            if (selectedUniversity) return item.university_name === selectedUniversity
            else return item
        })

        setFilteredData(tempData)
    }

    const handleCourseChange = (event) => {
        setSelectedCourse(event.target.value)
        handleFilterData(searchText, event.target.value, selectedUniversity);
    }

    const handleUniversityChange = (event) => {
        setSelectedUniversity(event.target.value)
        handleFilterData(searchText, selectedCourse, event.target.value);

    }

    const handleSearchTextChange = (event) => {
        setSearchText(event.target.value)
        handleFilterData(event.target.value, selectedCourse, selectedUniversity);
    }

    const clearFilters = () => {
        setSearchText('')
        setSelectedCourse('')
        setSelectedUniversity('')
        setFilteredData(mentors)
    }



    return (
        <div>
            <Box sx={{ p: 5 }}>
                <Box sx={{ mb: 3 }}>
                    <Grid container direction="row" spacing={3} >
                        <Grid item md={8}>
                            <Box sx={{ width: "100%" }}>
                                <TextField placeholder="Search by name" value={searchText} onChange={handleSearchTextChange} fullWidth />
                            </Box>
                        </Grid>
                        <Grid item flex={2}>
                            <FormControl fullWidth>
                                <InputLabel>{'Select Course name'}</InputLabel>
                                <Select
                                    value={selectedCourse}
                                    label={'Select Course name'}
                                    onChange={handleCourseChange}
                                    fullWidth>
                                    {
                                        listofCourses.map((course) => {
                                            return <MenuItem value={course}>{course}</MenuItem>
                                        })
                                    }
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item flex={2}>
                            <FormControl fullWidth>
                                <InputLabel>{'Select University'}</InputLabel>
                                <Select
                                    value={selectedUniversity}
                                    label={'Select University'}
                                    onChange={handleUniversityChange}
                                    fullWidth>
                                    {
                                        listOfUniversities.map((university) => {
                                            return <MenuItem value={university}>{university}</MenuItem>
                                        })
                                    }
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item flex={1}>
                            <Button sx={{height:'56px'}} onClick={clearFilters}  variant='contained'>{'CLEAR'}</Button>

                        </Grid>
                    </Grid>
                </Box>

                <Grid item container spacing={5} className="grid" justifyContent="center">

                    {
                        filteredData.length > 0 &&

                        filteredData.map((mentor) => {
                            return (
                                <Grid item>
                                    <Mentor mentor={mentor} />
                                </Grid>
                            )
                        })

                    }
                    {
                        filteredData.length === 0 && <Box sx={{ my: 5 }}>No mentors found</Box>
                    }
                </Grid>
            </Box>

        </div>

    )
}

export default SearchStudents;