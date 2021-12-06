import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Rating from '@mui/material/Rating';

function ReviewComponent(props) {
  const {review} = props;


  return (
    <Grid item xs={9} md={6}>
      <CardActionArea component="a" href={"reviews/" + review.reviewId}>
        <Card sx={{ display: 'flex' }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {review.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {review.creation}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {review.text.substring(0, 20) + "..."}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              Оценка пользователей
            </Typography>
            <Rating name="read-only" value={review.usersRating} precision={0.5} readOnly />
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: 100, display: { xs: 'none', sm: 'block' } }}
            image="https://source.unsplash.com/random"
            alt="Any picture there"
          />
        </Card>
      </CardActionArea>
    </Grid>
  );
}

ReviewComponent.propTypes = {
  review: PropTypes.shape({
    reviewId: PropTypes.number.isRequired,
    creation: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired,
};

export default ReviewComponent;