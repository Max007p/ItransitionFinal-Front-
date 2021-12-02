import { Outlet } from "react-router-dom";
import './App.css';
import Header from './static_content/Header';
import Container from '@mui/material/Container';

const sections = [
  { title: 'Главная', url: '/' },
  { title: 'Обзоры', url: '/reviews' },
];

function App() {
  return (
    <div>
      <Container maxWidth="lg">
        <Header title="Кинопоиск" sections={sections}/>
        <Outlet/>
      </Container>
    </div>
  );
}

export default App;
