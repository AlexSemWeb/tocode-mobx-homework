// reddit
// reddit -> threads

import getData from './getData'

export default {
  // GET
  async get() {
    const res = await getData('https://www.reddit.com/r/reactjs.json')
    const resChildren = await res.data.children

    const nextRes = []
    resChildren.forEach((el) => {
      nextRes.push({
        id: el.data.id,
        title: el.data.title,
        url: el.data.url,
      })
      // nextRes.push(el.data)
    })

    console.log('original', res)
    console.log('next', nextRes)
    return nextRes
  },
  // PUT
  // update(id, item) {},
  // POST
  // store() {},
  // DELETE
  // destroy() {},
}
