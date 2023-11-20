import capitalise from '../modules/capitalise';

it('should be capitalised', () => {
  expect(capitalise('cat')).toBe('Cat');
});
