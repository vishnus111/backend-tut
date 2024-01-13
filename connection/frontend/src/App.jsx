import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {

  const [joke, setjoke] = useState(second)



  useEffect(() => {
    axios.get("http://localhost:3000")
      .then((resposne) => {
        setjoke(resposne.data)

      })
      .catch((error) => {
        console.log(error)
      })
  })


  return (
    <>
      <h1>
        hloo
      </h1>
      <p>
        jokes:{jokes.length}
      </p>

      {
        jokes.map((joke, index) => {
          <div>
            <h3>
              {joke.title}
            </h3>
            <p>
              {joke.content}
            </p>
          </div>
        })
      }
      )
    </>

export default App