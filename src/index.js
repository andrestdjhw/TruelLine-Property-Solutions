import Person from "./scripts/Person"
import ExampleReactComponent from "./scripts/ExampleReactComponent"
import React from "react"
import ReactDOM from "react-dom/client"
import Navbar from "./scripts/Navbar"

const person1 = new Person("Brad")
if (document.querySelector("#render-react-example-here")) {
  const root = ReactDOM.createRoot(document.querySelector("#render-react-example-here"))
  root.render(<ExampleReactComponent />)
}


if (document.querySelector("#ajs-navbar")) {
  ReactDOM.createRoot(document.querySelector("#ajs-navbar")).render(<Navbar />)
}