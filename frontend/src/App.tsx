import { QueryClientProvider, QueryClient} from 'react-query'
import './App.css'
import AppRoutes from './AppRoutes';

const reactQueryClient =  new QueryClient();

function App() {

  return (
    <>
        <QueryClientProvider client={reactQueryClient}>
          <AppRoutes />
          
        </QueryClientProvider>
    </>
  )
}

export default App
