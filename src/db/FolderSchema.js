import Realm from 'realm';

class Folder extends Realm.Object {
  static schema = {
    name: 'Folder',
    properties: {
      _id: 'objectId',
      folder_name: 'string',
      set_count: {type: 'int', default: 10},
    },
    primaryKey: '_id',
  };
}

export default Folder;
