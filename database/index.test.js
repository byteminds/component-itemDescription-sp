const mongoose = require('mongoose');

describe('insert', () => {
  let db;

  beforeAll(async () => {
    connection = await mongoose.connect('mongodb://localhost/testingUsers', {
      useNewUrlParser: true,
    });
    db = await mongoose.connection;
  });

  afterAll(async done => {
    await db.dropDatabase();
    await db.close();
    done();
  });

  it('should insert a doc into collection', async () => {
    const users = db.collection('testingUsers');

    const mockUser = {_id: 'some-user-id', name: 'Spark'};
    await users.insertOne(mockUser);

    const insertedUser = await users.findOne({_id: 'some-user-id'});
    expect(insertedUser).toEqual(mockUser);
  });
});