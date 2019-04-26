const connection = require('./connection')

module.exports = {
    getBoards
}

function getBoards(testDb) {
    const db = testDb || connection

    return db('boards')
}

function createBoard(board, testDb){
    const db = testDb || connection;

    return;
}

function getBoard(boardId, testDb) {
    const db = testDb || connection

    return db('boards').where(id, boardId);
}

function createColumn(testDb) {
    const db = testDb || connection

    return db('boards')
}

function editColumn(testDb) {
    const db = testDb || connection

    return db('boards')
}

function deleteColumn(testDb) {
    const db = testDb || connection

    return db('boards')
}

function addCard(testDb) {
    const db = testDb || connection

    return db('boards')
}

function editCard(testDb) {
    const db = testDb || connection

    return db('boards')
}

function deleteCard(testDb) {
    const db = testDb || connection

    return db('boards')
}

function moveCard(testDb) {
    const db = testDb || connection
    //moves card from one column to another
    return db('boards')
}