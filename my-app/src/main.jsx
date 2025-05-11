import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import { TodoPage } from './pages/todo'
import { Provider } from "react-redux";
import { store } from "./stores/index.js"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <TodoPage />
    </Provider>
  </StrictMode>
)
