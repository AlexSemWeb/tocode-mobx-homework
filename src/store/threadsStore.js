// Main app store
// threadsStore.js

import { makeAutoObservable } from 'mobx'
import fetchReddit from 'utils/fetchReddit'

class threadsStore {
  threads = null
  status = 'pending' // pending done error

  constructor() {
    makeAutoObservable(this)
  }

  fetchThreads() {
    !this.threads &&
      fetchReddit
        .get()
        .then((res) => {
          this.threads = res
          this.status = 'done'
        })
        .catch((err) => {
          this.status = 'error'
          console.log(err)
        })
  }
}

export default threadsStore
