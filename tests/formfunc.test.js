const form = require('../src/formfunc');

test('transform string list to object list', () => {
  expect(form.transformList("hei, 5\nhallo, 10")).toEqual({hei: 5, hallo: 10});
});