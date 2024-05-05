/* @refresh reload */
import { render } from 'solid-js/web'
import './index.css'

import { Route, Router } from '@solidjs/router'
import App from './App'
import AboutPage from './pages/AboutPage'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'

const root = document.getElementById('root')

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  )
}

render(
  () => (
    <Router root={App}>
      <Route path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="*404" component={NotFound} />
    </Router>
  ),
  root!,
)
