const connection = require('./connection')

module.exports = {
    getBoards
}

function getBoards(testDb) {
    const db = testDb || connection

    return db('boards')
}