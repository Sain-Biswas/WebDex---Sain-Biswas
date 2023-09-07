import './App.css';
import FetchCards from "./Components/HomeCard/FetchCards";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './Components/NavBar/NavBar';
import AboutUs from './Components/AboutUs/AboutUs'
import Types from './Components/Types/Types'
import SinglePokeDetails from './Components/Pokemon_Details_Single/SinglePokeDetails';
import Moves from './Components/Moves/Moves';

function App() {
    const client = new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: true,
            },
        },
    });

    return (
        <Router>
            <QueryClientProvider client={client} >
                <NavBar />
                <Routes>
                    <Route path="/" element={<FetchCards nameIdInitial={1} nameIdFinal={20} />} />
                    <Route path="/types" element={<Types />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path='/pokemon/:id' element={<SinglePokeDetails />} />
                    <Route path='/move/:id' element={<Moves />} />
                    <Route path='/type/:id' element={<Types />} />
                </Routes>
            </QueryClientProvider>
        </Router>
    );
}

export default App;
