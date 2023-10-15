import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.error('putDb not implemented');
// Connecting to the database and it's version which is 1
const connect = await openDB('jate', 1);
// creating a action and giving the database privileges
const action = connect.transaction('jate', 'readwrite');
// opening the object store
const open = action.objectStore('jate');
// .add() method passes the content
const info = open.put({ id: 1, value: content});
// confirms the request.
const confirm = await request;
console.log('The data was saved to the db', confirm );
};
// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.error('getDb not implemented');
// Connecting to the database again
const connect = await openDB('jate', 1);
// creating an action and giving it privileges in the db
const action = connect.transaction('jate', 'readonly');
// opening the object store
const open = action.objectStore('jate');
// use .getAll() to get all of the data
const info = open.getAll();

const confirm = await request;
console.log('confirm.value', confirm);
return confirm.value;
};

initdb();
