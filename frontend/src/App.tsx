import { QueryClientProvider, QueryClient} from 'react-query'
import './App.css'
import Layout from './ui/components/shared/Layout';

const reactQueryClient =  new QueryClient();

function App() {

  return (
    <>
        <QueryClientProvider client={reactQueryClient}>
        <Layout />
        </QueryClientProvider>
    </>
  )
}

export default App
