// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
  <div>
   <h3 className='text-3xl font-bold underline'> Snapslides</h3>
   <p>For your Quick Instagram Posts</p>
  </div>
  <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center gap-x-4">
  <div class="shrink-0">
    {/* <img class="size-12" src="/img/logo.svg" alt="ChitChat Logo"> */}
  </div>
  <div>
    <div class="text-xl font-medium text-black">ChitChat</div>
    <p class="text-slate-500">You have a new message!</p>
  </div>
</div>
    </>
  )
}

export default App
