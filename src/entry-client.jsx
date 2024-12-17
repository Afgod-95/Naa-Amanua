import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import ErrorBoundary from './utils/ErrorBoundary.jsx'


ReactDOM.hydrateRoot(
    document.getElementById('root'),
    <StrictMode>
        <ErrorBoundary>
            <BrowserRouter >
                <App />
            </BrowserRouter>
        </ErrorBoundary>
    </StrictMode>,
)
