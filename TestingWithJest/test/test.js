const upperCase = require('../upperCase.js');

describe("UperCase", () => {
    test("Obtener upperCase de hello", () => {
        expect(upperCase("hello")).toBe("HELLO");
    });

    beforeAll(() => console.log("Soy el beforeAll"));
    beforeEach(() => console.log("Soy el beforeEach"));
    afterAll(() => console.log("Soy el afterAll"));
    afterEach(() => console.log("Soy el afterEach"));
});

describe.each([
    [1, 1, 2],
    [1, 2, 3],
    [2, 1, 3],
  ])('.add(%i, %i)', (a, b, expected) => {
    test(`returns ${expected}`, () => {
      expect(a + b).toBe(expected);
    });
  
    test(`valor devuelto no ser mayor que ${expected}`, () => {
      expect(a + b).not.toBeGreaterThan(expected);
    });
  
    test(`valor devuelto no sea menor que ${expected}`, () => {
      expect(a + b).not.toBeLessThan(expected);
    });
  });

  describe.each`
  a    | b    | expected
  ${1} | ${1} | ${2}
  ${1} | ${2} | ${3}
  ${2} | ${1} | ${3}
`('$a + $b', ({a, b, expected}) => {
  test(`returns ${expected}`, () => {
    expect(a + b).toBe(expected);
  });

  test(`valor devuelto no ser mayor que ${expected}`, () => {
    expect(a + b).not.toBeGreaterThan(expected);
  });

  test(`valor devuelto no sea menor que ${expected}`, () => {
    expect(a + b).not.toBeLessThan(expected);
  });
});

const myBeverage = {
    delicious: true,
    sour: false,
  };

/*describe.only('my beverage', () => {
    test('is delicious', () => {
      expect(myBeverage.delicious).toBeTruthy();
    });
  
    test('is not sour', () => {
      expect(myBeverage.sour).toBeFalsy();
    });
  });*/
  
  describe.only.each([
    [1, 1, 2],
    [1, 2, 3],
    [2, 1, 3],
  ])('.add(%i, %i)', (a, b, expected) => {
    test(`returns ${expected}`, () => {
      expect(a + b).toBe(expected);
    });
  });
  
  test('no se ejecutará', () => {
    expect(1 / 0).toBe(Infinity);
  });

// npm test

// Porcentaje de covertura
// node .\node_modules\jest\bin\jest.js --coverage