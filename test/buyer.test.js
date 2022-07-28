const { item } = require('../buyer/logic');

test('test if the function return one element object', function () {
  let products = [
    {
      id: '1a',
      name: 'shirt',
    },
    {
      id: '1b',
      name: 'shirt',
    },
  ];
  expect(item('1a', products)).toBe({
    id: '1a',
    name: 'shirt',
  });
});
