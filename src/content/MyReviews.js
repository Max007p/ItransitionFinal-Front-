import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from "react-router-dom";
import ReviewService from '../services/review.service';
import * as React from 'react';
import { useParams } from 'react-router-dom';

const columns = [
    {   
        field: 'reviewId',
        headerName: 'ID',
        width: 90,
        editable: false,
        sortable: true,
    },
    {
        field: 'title',
        headerName: 'Название',
        width: 400,
        editable: false,
        sortable: true,
    },
    {
        field: 'creation',
        headerName: 'Дата создания',
        type: 'date',
        width: 200,
        editable: false,
        sortable: true,
    },
    {
        field: 'usersRating',
        headerName: 'Рейтинг',
        type: 'number',
        width: 110,
        editable: false,
        sortable: true,
    }
  ];

function MyReviews(){
    const {userID} = useParams();
    let navigate = useNavigate();

    const [reviewFromDb, setReview] = React.useState([]);
  
    const getReview = () => {
      ReviewService.getUsersReviewsList(userID).then((response) => setReview(response.data))
    }

    React.useEffect(() => {
        getReview();
    }, [])

    return (
        <div>
            <Typography variant="h6" gutterBottom>
            Мои обзоры
            </Typography>
            <Divider/>
            <div style={{height: 700, width: '100%', marginTop: 10 }}>
                <DataGrid
                    rows={reviewFromDb}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                    onRowDoubleClick={(params) => {
                        navigate("my_reviews/" + params.row.reviewId + "/edit");
                    }}
                    getRowId={row => row.reviewId}
                />
            </div>
        </div>
        );
}

export default MyReviews;
