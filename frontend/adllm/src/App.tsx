import '@aws-amplify/ui-react/styles.css'; // Import Amplify UI styles
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import RootLayout from './pages/Root';
import GeminiChat from './pages/Gemini';
import Analysis from './pages/Analysis';
import Home from './pages/Home';
import { Chatbot } from './components/Chatbot';
import RagUpload from './pages/RagUpload';



const router = createBrowserRouter([
    {
        path: '/', element: <RootLayout/>, children: [
            { path: '/', element: <Home/>},
            { path: '/Home', element: <Home/>},
            { path: 'Gemini', element: <GeminiChat />},
            { path: 'ChatGPT', element: <Chatbot/>},
            { path: 'Llama', element: <GeminiChat />},
            { path: 'Analysis', element: <Analysis />},
            { path: 'RAG-Data', element: <RagUpload />},
        ]
    }
])
// Main App Component
const App = () => {

    return (
        <RouterProvider router={router}/>
    );
};

export default App;
