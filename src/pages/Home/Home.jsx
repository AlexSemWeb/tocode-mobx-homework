import React from 'react'
import fetchReddit from 'utils/fetchReddit'

// store
import threadsStore from 'store/threadsStore'
const store = new threadsStore()

// components
import { Container } from 'layouts'

const HomePage = () => {
  const [arr, setArr] = React.useState([])

  React.useEffect(() => {
    fetchReddit
      .get()
      .then((res) => setArr(res))
      .catch((err) => console.log(err))
      .finally(() => console.log('done'))
  }, [])

  return (
    <Container>
      <h1 className='ui-title-1'>Home Page</h1>
      {/* {arr &&
        arr.data &&
        arr.data.children.map((item) => <p>{item.data.title}</p>)} */}

      {arr &&
        arr.length > 0 &&
        arr.map((item) => (
          <a key={item.id} href={item.url}>
            {item.title}
          </a>
        ))}
    </Container>
  )
}

export default HomePage
