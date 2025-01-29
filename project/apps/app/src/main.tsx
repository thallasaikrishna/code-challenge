import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Store } from './Store'
import { Provider } from 'react-redux'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(<Provider store={Store}><App /></Provider>)
