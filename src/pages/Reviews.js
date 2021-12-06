import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ReviewComponent from '../content/ReviewComponent';
import * as React from 'react';
import ReviewService from '../services/review.service';

function Reviews(){
  const [foundReviews, setFoundReviews] = React.useState([]);
  const [textFilter, setTextFilter] = React.useState("");
  React.useEffect(() => {
    ReviewService.getFilteredReviews(textFilter).then((response) => setFoundReviews(response.data));
  }, [textFilter]);

  const handleChange = (e) => {
    setTextFilter(e.target.value);
  };

    return (<div>
                <Typography variant="h6"
                gutterBottom
                align="center">
                    Обзоры
                </Typography>
                <TextField 
                id="search-field"
                label="Search field"
                type="search"
                placeholder="Найдите обзор"
                margin="normal"
                autoFocus={true}
                defaultValue="Title"
                onChange={handleChange}
                fullWidth={true}/>
                <Divider/>
                <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="stretch"
                    spacing={3}
                    sx={{marginBottom: 2, marginTop: 0}}
                >
                    {foundReviews.map((review) => (
                    <ReviewComponent key={review.reviewId} review={review}/>
                    ))}
                </Grid>
            </div>
            );
}

export default Reviews;