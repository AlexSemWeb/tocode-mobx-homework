// Main app store
// threadsStore.js

import { makeAutoObservable } from 'mobx'

class threadsStore {
  threads = null

  constructor() {
    makeAutoObservable(this)
  }

  fetchThreads() {
    // ... api request
  }
}

export default threadsStore
