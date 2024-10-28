import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { jsx as _jsx} from "react/jsx-runtime.js"
import React from 'react'
import App from './App.jsx'

function MyApp() {
  return (
    <div>
      <h1>custom app</h1>
    </div>
  )
}

// const ReactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'click me to visit google'
// }

// const AnotherElement = (
//   <a href="https://google.com" target='_blank'>google</a>
// )

const anotherUser = "chai aur react";

const ReactElement = React.createElement( //bable inject the this method create element
  'a' ,
  {
    href:'https://google.com' , target:'_blank'
  },
  'click me to visit google',
  anotherUser
)

createRoot(document.getElementById('root')).
render(
  // MyApp()

  // <MyApp/>
  // <App/>
  ReactElement
  
)
