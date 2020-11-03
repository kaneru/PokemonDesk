// Task-1

type TypeConcatFn = (first: string, second: string) => string;

const concat: TypeConcatFn = (first, second) => {
  return first + ' ' + second;
};

concat('Hello', 'World!');

// Task-2

interface MyHometaskInterface {
  howIDoIt: string;
  simeArray: [string, string, number];
  withData: [
    {
      howIDoIt: string;
      simeArray: [string, number];
    },
  ];
}

const MyHometask: MyHometaskInterface = {
  howIDoIt: 'I Do It Wel',
  simeArray: ['string one', 'string two', 42],
  withData: [{ howIDoIt: 'I Do It Wel', simeArray: ['string one', 23] }],
};

// Task-3

interface MyArray<T> {
  [n: number]: T;

  reduce<U>(callbackFn: (acc: T, currItem: T) => U): U;
}

const tsArray: MyArray<number> = [1, 2, 3];

console.log(tsArray.reduce((acc, currItem) => acc + currItem));
