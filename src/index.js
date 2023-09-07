import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import FetchCards from "./Components/HomeCard/FetchCards";
import AboutUs from './Components/AboutUs/AboutUs'
import Types from './Components/Types/Types'
import SinglePokeDetails from './Components/Pokemon_Details_Single/SinglePokeDetails';
import Moves from './Components/Moves/Moves';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path="" element={<FetchCards nameIdInitial={1} nameIdFinal={20} />} />
      <Route path="types" element={<Types />} />
      <Route path="about" element={<AboutUs />} />
      <Route path='pokemon/:id' element={<SinglePokeDetails />} />
      <Route path='move/:id' element={<Moves />} />
      <Route path='type/:id' element={<Types />} />
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
