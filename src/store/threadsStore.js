// Main app store
// threadsStore.js

import { makeAutoObservable } from 'mobx'
import fetchReddit from 'utils/fetchReddit'

class threadsStore {
  threads = null

  constructor() {
    makeAutoObservable(this)
  }

  fetchThreads() {
    fetchReddit
      .fetchData()
      .then((res) => {
        this.threads = res
        console.log(this.threads)
      })
      .catch((err) => console.log(err))
  }
}

export default threadsStore
