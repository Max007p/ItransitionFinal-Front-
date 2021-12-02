import { useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function ReviewForm(){
    const { reviewID } = useParams();

    return (
        <div>
            <Typography variant="h6" gutterBottom>
            Страница редактирования обзора
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
                    variant="filled"
                />
                <TextField
                    id="description"
                    label="Текст"
                    multiline
                    rows={20}
                    fullWidth
                    variant="filled"
                />
                <Button
                size="small"
                variant="outlined"
                color="success"
                aria-label="Agreemance"
                component="span">{reviewID ? "Отредактировать" : "Подтвердить"}</Button>
            </Stack>
        </div>
        );
}

//Здесь еще с картинками че нить придумать, сделать когда будешь соединять фронт с бэк

export default ReviewForm;