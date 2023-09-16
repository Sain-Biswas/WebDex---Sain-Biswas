import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
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