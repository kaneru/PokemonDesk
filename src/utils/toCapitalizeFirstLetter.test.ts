import toCapitalizeFirstLetter from './toCapitalizeFirstLetter';

describe('toCapitalizeFirstLetter', () => {
  test('Должен принять строку, где все буквы строчные, и вернуть ту же строку только первая буква — прописная', () => {
    const str = toCapitalizeFirstLetter('привет, мир!');
    expect(str).toEqual('Привет, мир!');
  });

  test('Должен принять строку, где все буквы прописные, и вернуть ту же строку только первая буква — прописная', () => {
    const str = toCapitalizeFirstLetter('ПРИВЕТ, МИР!');
    expect(str).toEqual('Привет, мир!');
  });

  test('Должен принять строку, где первая буква — прописная, и вернуть ту же строку', () => {
    const str = toCapitalizeFirstLetter('Привет, мир!');
    expect(str).toEqual('Привет, мир!');
  });

  test('Должен принять пустую строку и вернуть пустую строку', () => {
    const str = toCapitalizeFirstLetter('');
    expect(str).toEqual('');
  });
});
