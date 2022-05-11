// Main app store
// threadsStore.js

import { makeAutoObservable } from 'mobx'

class threadsStore {
  threads = null

  constructor() {
    makeAutoObservable(this)
  }

  fetchThreads() {}
}

export default threadsStore
