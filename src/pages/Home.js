import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import ReviewComponent from '../content/ReviewComponent';
import ReviewService from '../services/review.service';
import TagService from '../services/tag.service';
import * as React from 'react';

function Home(){
  const [lastReviews, setLastReviews] = React.useState([]);
  const [popularReviews, setPopularReviews] = React.useState([]);
  const [tags, setTags] = React.useState([]);

  React.useEffect(() => {
    ReviewService.getLatestReviews(4).then((response) => setLastReviews(response.data));
    ReviewService.getPopularReviews(4).then((response) => setPopularReviews(response.data));
    TagService.getAllTags(10).then((response) => setTags(response.data));
  }, []);

    return (
        <div>
          <Typography variant="h6" gutterBottom>
            Популярные посты
          </Typography>
          <Divider/>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="stretch"
            spacing={3}
            sx={{marginBottom: 2, marginTop: 0}}
          >
            {popularReviews.map((review) => (
                <ReviewComponent key={review.reviewId} review={review} />
              ))}
          </Grid>
          <Typography variant="h6" gutterBottom>
            Последние посты
          </Typography>
          <Divider/>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="stretch"
            spacing={3}
            sx={{marginBottom: 2, marginTop: 0}}
          >
            {lastReviews.map((review) => (
              <ReviewComponent key={review.reviewId} review={review}/>
            ))}
          </Grid>
          <Typography variant="h6" gutterBottom>
            Тэги
          </Typography>
          <Divider/>
          <Stack
            direction="row"
            justifyContent="center"
            spacing={2}
            sx={{marginBottom: 2, marginTop: 2}}
          >
            {tags.map((value) => (
              <Chip key={value} label={value} clickable/>
            ))}
          </Stack>
        </div>
      );
}

export default Home;