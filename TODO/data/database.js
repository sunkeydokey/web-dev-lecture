const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

let database;

async function initDb() {
  const client = await MongoClient.connect('mongodb://127.0.0.1:27017');
  database = client.db('TO-DO');
}

function getDb() {
  if (!database) {
    throw new Error('데이터베이스를 연결해주세요.');
  }

  return database;
}

module.exports = {
  initDb: initDb,
  getDb: getDb,
};
