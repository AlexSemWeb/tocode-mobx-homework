// reddit
// reddit -> threads

import getData from './getData'

export default {
  // GET
  async get() {
    const res = await getData('https://www.reddit.com/r/reactjs.json')
    return res
  },
  // PUT
  // update(id, item) {},
  // POST
  // store() {},
  // DELETE
  // destroy() {},
}
