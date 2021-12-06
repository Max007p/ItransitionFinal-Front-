import { useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import * as React from 'react';
import ReviewService from '../services/review.service';
import Rating from '@mui/material/Rating';
import userService from '../services/user.service';
import { useNavigate } from 'react-router';

function ReviewForm(){
    const { reviewID } = useParams();
    const { userID } = useParams();
    const [reviewFromDb, setReview] = React.useState([]);
    let navigate = useNavigate();
  
    const getReview = () => {
      ReviewService.getReviewById(reviewID).then((response) => setReview(response.data))
    }

    const handleSubmitUpdate = React.useCallback(async() => {
        const title = document.getElementById("title").value;
        const text = document.getElementById("text").value;
        const rating = document.getElementById("rating").value;
        const reviewGroups = ["BOOKS", "FILMS"];
        const reviewTags = ["nice", "cool"];
        userService.updateReview(userID, reviewID, rating, title, text, reviewGroups, reviewTags).then((response) => {if (response.status === 200) navigate(`/user/${userID}/`);});
    }, [])

    React.useEffect(() => {
        getReview();
    }, [])

    return (
        <div>
            <Typography variant="h6" gutterBottom>
            {reviewID ? "Страница редактирования" : "Страница написания обзора"}
            </Typography>
            <Divider/>
            <Stack
                component="form"
                spacing={2}
                noValidate 
                autoComplete="off"
                marginTop={2}
                marginLeft={2}
                marginRight={2}
            >
                <TextField
                    id="title"
                    label="Название"
                    fullWidth
                    multiline
                    variant="filled"
                    defaultValue={reviewFromDb.title}
                />
                <TextField
                    id="text"
                    label="Текст"
                    multiline
                    rows={20}
                    fullWidth
                    variant="filled"
                    defaultValue={reviewFromDb.text}
                />
                <Typography variant="subtitle1" paragraph>
                    Ваша оценка
                </Typography>
                <Rating id="rating" max={10} key="anykey" defaultValue={reviewID ? reviewFromDb.reviewRating : 0} precision={0.5}/>
                <Button
                size="small"
                variant="outlined"
                color="success"
                aria-label="Agreemance"
                component="span"
                onClick={handleSubmitUpdate}>{reviewID ? "Отредактировать" : "Подтвердить"}</Button>
            </Stack>
        </div>
        );
}

//Здесь еще с картинками че нить придумать, сделать когда будешь соединять фронт с бэк

export default ReviewForm;