import React from 'react'
import { observer } from 'mobx-react-lite'

// store
import threadsStore from 'store/threadsStore'
const store = new threadsStore()

// components
import { Container } from 'layouts'

const HomePage = observer(() => {
  React.useEffect(() => store.fetchThreads(), [])

  // error
  const renderError = store.status === 'error' && <p>connection error</p>
  // loading
  const renderLoading = store.status === 'pending' && <p>loading ....</p>
  // content
  const renderContent = store.status === 'done' && (
    <div>
      {store.threads &&
        store.threads.length > 0 &&
        store.threads.map((item) => (
          <a key={item.id} href={item.url}>
            {item.title}
          </a>
        ))}
    </div>
  )

  return (
    <Container>
      <h1 className='ui-title-1'>Home Page</h1>

      {renderError}
      {renderLoading}
      {renderContent}
    </Container>
  )
})

export default HomePage
