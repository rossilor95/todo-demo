import React from 'react'
import ReactDOM from 'react-dom/client'
import TodoDemoApp from './components/TodoDemoApp'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <TodoDemoApp/>
  </React.StrictMode>,
)
