const Sequelize = require('sequelize');
const conn = new Sequelize('postgres://localhost:5432/bookmarks')

const Bookmark = conn.define('bookmark', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    URL: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    category: {
        type: Sequelize.STRING,
        allowNull: false,
    }
})

const data = [
    {
      name: 'LinkedIn',
      URL: 'http://www.linkedin.com',
      category: 'jobs'
    },
    {
      name: 'Indeed',
      URL: 'http://www.indeed.com',
      category: 'jobs'
    },
    {
      name: 'Amazon',
      URL: 'http://www.amazon.com',
      category: 'shopping'
    },
    {
      name: 'W3C Shools - Javascript',
      URL: 'https://www.w3schools.com/jsref/default.asp',
      category: 'coding'
    },
    {
      name: 'Target',
      URL: 'http://www.shopping.com',
      category: 'shopping'
    },
    {
      name: 'The Weeknd',
      URL: 'https://www.theweeknd.com/',
      category: 'music'
    },
    {
      name: 'Stack Overflow',
      URL: 'https://stackoverflow.com/',
      category: 'coding'
    },
  ]

const syncAndSeed = async() => {
    await conn.sync( { force: true } )

    data.map (async(bm) => {await Bookmark.create(bm)})
}

syncAndSeed()