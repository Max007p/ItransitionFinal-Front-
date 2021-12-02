import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from "react-router-dom";

const columns = [
    {   
        field: 'id',
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
        field: 'date',
        headerName: 'Дата создания',
        type: 'date',
        width: 200,
        editable: false,
        sortable: true,
    },
    {
        field: 'rating',
        headerName: 'Рейтинг',
        type: 'number',
        width: 110,
        editable: false,
        sortable: true,
    },
    {
        field: 'likes',
        headerName: 'Лайки',
        type: 'number',
        width: 110,
        editable: false,
        sortable: true,
    },
  ];
  
  const rows = [
    {
        id: 1,
        title: 'StarWars: kek republic',
        date: '2021-02-13',
        description: 'Под пиво пойдет.',
        image: 'https://source.unsplash.com/random',
        rating: 5,
        likes: 10
      },
      {
        id: 2,
        title: 'StarWars: kek republic1',
        date: '2021-02-14',
        description: 'Под пиво не пойдет.',
        image: 'https://source.unsplash.com/random',
        rating: 4.85,
        likes: 10
      },
      {
        id: 3,
        title: 'StarWars: kek republic2',
        date: '2021-02-15',
        description: 'Под пиво не пойдет.',
        image: 'https://source.unsplash.com/random',
        rating: 5,
        likes: 10
      },
      {
        id: 4,
        title: 'StarWars: kek republic3',
        date: '2021-02-16',
        description: 'Под пиво не пойдет.',
        image: 'https://source.unsplash.com/random',
        rating: 5,
        likes: 10
      }
  ];

function MyReviews(){
    let navigate = useNavigate();
    return (
        <div>
            <Typography variant="h6" gutterBottom>
            Мои обзоры
            </Typography>
            <Divider/>
            <div style={{height: 700, width: '100%', marginTop: 10 }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                    onRowDoubleClick={(params) => {
                        navigate("my_reviews/" + params.row.id + "/edit");
                    }}
                />
            </div>
        </div>
        );
}

export default MyReviews;
