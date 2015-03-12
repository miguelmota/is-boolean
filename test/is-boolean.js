var test = require('tape');
var isBoolean = require('../is-boolean');

test('isBoolean', function (t) {
  t.plan(15);

  t.true(isBoolean(false));
  t.true(isBoolean(true));
  t.true(isBoolean(new Boolean(1)));
  t.true(isBoolean(!!'foo'));
  t.true(isBoolean(!'foo'));
  t.false(isBoolean(''));
  t.false(isBoolean([]));
  t.false(isBoolean(0));
  t.false(isBoolean(null));
  t.false(isBoolean(undefined));
  t.false(isBoolean(1));
  t.false(isBoolean({}));
  t.false(isBoolean(function() {}));
  t.false(isBoolean(/foo/gi));
  t.false(isBoolean(NaN));
});
