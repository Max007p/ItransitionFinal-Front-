import { Outlet } from "react-router-dom";
import Header from '../static_content/Header';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useParams } from 'react-router-dom';
import * as React from 'react';
import authService from '../services/auth.service';
import Stack from '@mui/material/Stack';

function User(){
  const {userID} = useParams();
  const [button, buttonHandler] = React.useState(false);
  const sections = [
    { title: 'Мои обзоры', url: `/user/${userID}/` },
    { title: 'Написать обзор', url: `/user/${userID}/create_review` },
    { title: 'Админ панель', url: `/user/${userID}/admin` }
  ];



  const handleChange = (e) => {
    buttonHandler(true);
    if (button == true){
      authService.logout();
      window.location = "/";
    }
  };

    return (
      <div>
        <Container maxWidth="lg">
          <Header title="Профиль" sections={sections}/>
          <Outlet/>
          <Stack
                component="form"
                spacing={2}
                noValidate 
                autoComplete="off"
                marginTop={2}
            >
          <Button size="small" variant="outlined" color="error" component="span" onClick={handleChange}>Выйти из аккаунта</Button>
          </Stack>
        </Container>
      </div>
      );
}

export default User;