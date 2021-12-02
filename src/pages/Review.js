import { useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

function Review(params) {
    const { reviewID } = useParams();
    return (
        <div>
            <Typography variant="h6" gutterBottom>
            Title name
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {reviewID}
            </Typography>
            <Divider/>
            <Typography variant="subtitle1" paragraph>
                Description
            </Typography>
        </div>
      );
}

export default Review;

