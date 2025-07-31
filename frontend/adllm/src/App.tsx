import '@aws-amplify/ui-react/styles.css'; // Import Amplify UI styles
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import RootLayout from './pages/Root';
import GeminiChat from './pages/Gemini';
import Analysis from './pages/Analysis';
import Home from './pages/Home';
import RagUpload from './pages/RagUpload';
import { GptChatbot } from './components/GptChatbot';



const router = createBrowserRouter([
    {
        path: '/', element: <RootLayout/>, children: [
            { path: '/', element: <Home/>},
            { path: '/Home', element: <Home/>},
            { path: 'Gemini', element: <GeminiChat />},
            { path: 'ChatGPT', element: <GptChatbot/>},
            { path: 'Llama', element: <h1>TODO Implement Llama functionality</h1>},
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
