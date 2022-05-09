import React from 'react'

// store
import threadsStore from 'store/threadsStore'

// components
import { Container } from 'layouts'

const store = new threadsStore()

const HomePage = () => {

  store.fetchThreads()
  return (
    <Container>
      <h1 className='ui-title-1'>Home Page</h1>
    </Container>
  )
}

export default HomePage
