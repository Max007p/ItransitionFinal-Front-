import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ReviewComponent from '../content/ReviewComponent';

const foundReviews = [
    {
        id: 1,
        title: 'StarWars: kek republic',
        date: '2021-02-12',
        description: 'Под пиво пойдет.',
        image: 'https://source.unsplash.com/random',
        rating: 5,
        likes: 10
      },
      {
        id: 2,
        title: 'StarWars: kek republic1',
        date: '2021-02-12',
        description: 'Под пиво не пойдет.',
        image: 'https://source.unsplash.com/random',
        rating: 5,
        likes: 10
      },
      {
        id: 3,
        title: 'StarWars: kek republic2',
        date: '2021-02-12',
        description: 'Под пиво не пойдет.',
        image: 'https://source.unsplash.com/random',
        rating: 5,
        likes: 10
      },
      {
        id: 4,
        title: 'StarWars: kek republic3',
        date: '2021-02-12',
        description: 'Под пиво не пойдет.',
        image: 'https://source.unsplash.com/random',
        rating: 5,
        likes: 10
      }
  ];

function Reviews(){
    return (<div>
                <Typography variant="h6"
                gutterBottom
                align="center">
                    Обзоры
                </Typography>
                <TextField id="search-field"
                label="Search field"
                type="search"
                placeholder="Найдите рецензию"
                margin="normal"
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
                    <ReviewComponent key={review.id} review={review}/>
                    ))}
                </Grid>
            </div>
            );
}

export default Reviews;