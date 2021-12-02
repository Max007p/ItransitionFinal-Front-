import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import ReviewComponent from '../content/ReviewComponent';

const tags = {
  tags: [ 
      "ПОД ПИВО",
      "КАЛ",
      "КИНО"
    ]
};

const lastReviews = [
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

function Home(){
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
            {lastReviews.map((review) => (
                <ReviewComponent key={review.id} review={review} />
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
              <ReviewComponent key={review.id} review={review}/>
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
            {tags.tags.map((value) => (
              <Chip key={value} label={value} clickable/>
            ))}
          </Stack>
        </div>
      );
}

export default Home;