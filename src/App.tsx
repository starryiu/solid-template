import { A } from '@solidjs/router'
import { type ParentComponent } from 'solid-js'

const App: ParentComponent = (props) => {
  return (
    <div class="flex flex-col items-center justify-center">
      <h2 class="py-20 text-center text-4xl text-green-700">Hello solid!</h2>
      <ul>
        <li>solid</li>
        <li>solid-router</li>
        <li>solid-transition-group</li>
        <li>tailwindcss</li>
        <li>eslint</li>
        <li>prettier</li>
      </ul>
      <nav class="space-x-2.5 p-4">
        <A href="/" activeClass="text-red-500" end={true}>
          Home
        </A>
        <A href="/about" activeClass="text-red-500" end={true}>
          About
        </A>
      </nav>
      <div class="p-4">{props.children}</div>
    </div>
  )
}

export default App
