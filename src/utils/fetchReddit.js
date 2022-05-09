import getData from './fetch'

export default {
  async fetchData() {
    const res = await getData('https://www.reddit.com/r/reactjs.json')
    const rebuildRes = await res.data.children
    return rebuildRes
  },
}
