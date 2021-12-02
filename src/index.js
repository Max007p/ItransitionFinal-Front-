import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import User from './pages/User';
import Reviews from './pages/Reviews';
import App from './App';
import Home from './pages/Home';
import MyReviews from './content/MyReviews';
import AdminPanel from './content/AdminPanel';
import Review from './pages/Review';
import ReviewForm from './pages/ReviewForm';
window.$name = null;

ReactDOM.render((
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}>
        <Route index element={<Home/>}/>
        <Route path="reviews" element={<Reviews/>}/>
        <Route path="reviews/:reviewID" element={<Review/>} />
      </Route>
      <Route path="/user/:userID/" element={<User/>}>
        <Route index element={<MyReviews/>}/>
        <Route path="admin" element={<AdminPanel/>}/>
        <Route path="my_reviews/:reviewID/edit" element={<ReviewForm/>}/>
        <Route path="create_review" element={<ReviewForm/>}/>
      </Route>
      <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
    />
    </Routes>
  </BrowserRouter>
 ), document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();