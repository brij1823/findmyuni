import { Box, Grid } from "@mui/material";
import Mentor from "../../components/MentorCard";

const SearchStudents = () => {
    const mentors = ["1", "2", "3", "1", "2", "3", "1", "2", "3", "1", "2", "3",]
    return (
        <div>
            <Box sx={{ p: 5 }}>
                <Grid item container spacing={5} className="grid" justifyContent="center">
                    {
                        mentors.map((mentor) => {
                            return (
                                <Grid item>
                                    <Mentor />
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