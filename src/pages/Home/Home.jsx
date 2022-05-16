import React from 'react'
import { observer } from 'mobx-react-lite'

// store
import threadsStore from 'store/threadsStore'
const store = new threadsStore()

// components:
import { Container } from 'layouts'

// icons:
import { ReactComponent as UserIcon } from 'assets/img/user.svg'
import { ReactComponent as MessageIcon } from 'assets/img/message.svg'

const HomePage = observer(() => {
  React.useEffect(() => store.fetchThreads(), [])

  // error
  const renderError = store.status === 'error' && <p>connection error</p>
  // loading
  const renderLoading = store.status === 'pending' && <p>loading ....</p>
  // content
  const renderContent = store.status === 'done' && (
    <div className='TreadList'>
      {store.threads
        ? store.threads.map((tread) => (
            <div key={tread.id} className='TreadItem'>
              {tread.thumbnail.width && (
                <img
                  src={tread.thumbnail.src}
                  alt={tread.title}
                  style={{
                    width: tread.thumbnail.width,
                    height: tread.thumbnail.height,
                  }}
                />
              )}

              <a
                className='ui-title-4 ui-link mb-4'
                href={tread.url}
                target='_blank'
              >
                {tread.score > 40 && '🔥  '}
                {tread.title}
              </a>

              <div className='flex flex-wrap justify-between'>
                <div className='TreadMeta'>
                  <p className='flex items-center mb-2'>
                    <UserIcon className='mr-1' />
                    By {tread.author}
                  </p>
                  <p className='flex items-center'>
                    <MessageIcon className='mr-1' />
                    {tread.comments} comments
                  </p>
                </div>
              </div>
            </div>
          ))
        : 'threads not found'}
    </div>
  )

  return (
    <Container>
      <h1 className='ui-title-1 mb-8 text-center'>Last treads</h1>

      {renderError}
      {renderLoading}
      {renderContent}
    </Container>
  )
})

export default HomePage
