import { Box, Divider, Grid, Typography } from "@mui/material"

const Mentor = (props) => {
    const { mentor } = props
    return (
        <Box sx={{ borderRadius: "10px", height: 250, width: 300, boxShadow: 5, }} >
            <Grid direction="column">
                <Grid item>
                    <Grid item>
                        <Box sx={{ px: 2, py: 1 }}>
                            <Grid container direction="row" justifyContent="space-between" alignItems="center">
                                <Grid item>
                                    {mentor.first_name}
                                </Grid>
                                <Grid item>
                                    <Box
                                        component="img"
                                        sx={{
                                            height: 60,
                                            width: 60,
                                        }}
                                        alt="User Avatar"
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN78CpRzSTUUff5o1OYVFfjffTcMni8IPY6nuF9qE&s"
                                    />
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>

                </Grid>

                <Divider />
                <Box sx={{ p: 2 }}>

                    <Grid item>
                        <Typography>
                            {mentor.university_name}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography fontSize={14}>
                            {mentor.course_name}
                        </Typography>
                    </Grid>

                </Box>
            </Grid>


        </Box>
    )
}

export default Mentor;