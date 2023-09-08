import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet } from 'react-router-dom'
import NavBar from './Components/NavBar/NavBar';

function App() {
    const client = new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: true,
            },
        },
    });

    return (
        <QueryClientProvider client={client} >
            <NavBar />
            <Outlet />
        </QueryClientProvider>
    );
}

export default App;
