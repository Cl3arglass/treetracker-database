'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db) {
  return db.addColumn('trees', 'status', {
    type: 'string',
    notNull: true,
    defaultValue: 'planted'
  });
};

exports.down = function(db) {
  return db.removeColumn('trees', 'status');
};

exports._meta = {
  "version": 1
};
