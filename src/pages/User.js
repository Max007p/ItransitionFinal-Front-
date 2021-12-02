import { Outlet } from "react-router-dom";
import Header from '../static_content/Header';
import Container from '@mui/material/Container';

const sections = [
  { title: 'Мои обзоры', url: '/user/1/' },
  { title: 'Написать обзор', url: '/user/1/create_review' },
  { title: 'Админ панель', url: '/user/1/admin' }
];

function User(){
    return (
      <div>
        <Container maxWidth="lg">
          <Header title="Профиль" sections={sections}/>
          <Outlet/>
        </Container>
      </div>
      );
}

export default User;