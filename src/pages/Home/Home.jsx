import React from 'react'

// store
import threadsStore from 'store/threadsStore'

// components
import { Container } from 'layouts'

const store = new threadsStore()

const handleFetchData = () => {
  fetch('https://www.reddit.com/r/reactjs.json')
    .then((res) => res.json())
    .then((json) => console.log(json))
}

const HomePage = () => {
  return (
    <Container>
      <h1 className='ui-title-1'>Home Page</h1>
      <button onClick={handleFetchData}>fetch</button>
    </Container>
  )
}

export default HomePage
