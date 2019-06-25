const { MongoClient } = require('mongodb');

describe('insert', () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect('mongodb://localhost/testingUsers', {
      useNewUrlParser: true,
    });
    db = await connection.db(global.testingUsers);
  });

  afterAll(async () => {
    await connection.close();
    await db.close();
  });

  it('should insert a doc into collection', async () => {
    const users = db.collection('testingUsers');

    const mockUser = {_id: 'some-user-id', name: 'Spark'};
    await users.insertOne(mockUser);

    const insertedUser = await users.findOne({_id: 'some-user-id'});
    expect(insertedUser).toEqual(mockUser);
  });
});