// reddit
// reddit -> threads
import getData from './getData'

export default {
  // GET
  async get() {
    const res = await getData('https://www.reddit.com/r/reactjs.json')
    const resChildren = await res.data.children
    const nextRes = []

    // build new data
    resChildren.forEach((el) => {
      nextRes.push({
        id: el.data.id,
        url: el.data.url,
        title: el.data.title,
        // extra info
        score: el.data.score,
        author: el.data.author,
        comments: el.data.num_comments,
        // image (thumbnail)
        thumbnail: {
          src: el.data.thumbnail,
          width: el.data.thumbnail_width,
          height: el.data.thumbnail_height,
        },
      })
    })

    // console.log('original', res)
    // console.log('next', nextRes)
    return nextRes
  },
}
