import React from 'react'
import fetchReddit from 'utils/fetchReddit'

// store
import threadsStore from 'store/threadsStore'
const store = new threadsStore()

// components
import { Container } from 'layouts'

const HomePage = () => {
  fetchReddit
    .get()
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
    .finally(() => console.log('done'))

  return (
    <Container>
      <h1 className='ui-title-1'>Home Page</h1>
    </Container>
  )
}

export default HomePage
