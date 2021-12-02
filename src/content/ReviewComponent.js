import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

function ReviewComponent(props) {
  const { review } = props;

  return (
    <Grid item xs={9} md={6}>
      <CardActionArea component="a" href={"reviews/" + review.id}>
        <Card sx={{ display: 'flex' }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {review.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {review.date}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {review.description}
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: 100, display: { xs: 'none', sm: 'block' } }}
            image={review.image}
            alt={review.imageLabel}
          />
        </Card>
      </CardActionArea>
    </Grid>
  );
}

ReviewComponent.propTypes = {
  review: PropTypes.shape({
    id: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired
  }).isRequired,
};

export default ReviewComponent;