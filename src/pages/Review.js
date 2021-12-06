import { useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ReviewComponent from '../content/ReviewComponent';
import ReviewService from '../services/review.service';
import TagService from '../services/tag.service';
import * as React from 'react';
import Rating from '@mui/material/Rating';
import PropTypes from 'prop-types';

function Review() {
    const {reviewID} = useParams();
    const [reviewFromDb, setReview] = React.useState([]);
  
    const getReview = () => {
      ReviewService.getReviewById(reviewID).then((response) => setReview(response.data))
    }

    React.useEffect(() => {
        getReview();
    }, [])
    
    return (
        <div>
            <Typography component="h2" variant="h5">
              {reviewFromDb.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {reviewFromDb.creation}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {reviewFromDb.text}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              Оценка автора
            </Typography>
            <Rating key="anykey" max={10} value={reviewFromDb.reviewRating ? reviewFromDb.reviewRating : 0} precision={0.5} readOnly/>
            <Typography variant="subtitle1" paragraph>
              Оценка пользователей
            </Typography>
            <Rating key="anykey" value={reviewFromDb.usersRating ? reviewFromDb.usersRating : 0} precision={0.5} readOnly/>
        </div>
      );
}



export default Review;

