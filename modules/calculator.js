const calculator = {
  add(a, b) {
    if (!a || !b) {
      throw new Error('2 numbers must be provided');
    }

    if (isNaN(a) || isNaN(b)) {
      return NaN;
    }

    if (arguments.length > 2) {
      throw new Error('Too many args. Max 2');
    }
    if (a && b) {
      return a + b;
    }
  },

  subtract(a, b) {
    if (!a || !b) {
      throw new Error('2 numbers must be provided');
    }
    if (arguments.length > 2) {
      throw new Error('Too many args. Max 2');
    }
    if (a && b) {
      return a - b;
    }
  },

  multiply(a, b) {
    if (!a || !b) {
      throw new Error('2 numbers must be provided');
    }
    if (arguments.length > 2) {
      throw new Error('Too many args. Max 2');
    }
    if (a && b) {
      return a * b;
    }
  },

  divide(a, b) {
    if (!a || !b) {
      throw new Error('2 numbers must be provided');
    }
    if (arguments.length > 2) {
      throw new Error('Too many args. Max 2');
    }
    if (a && b) {
      return a / b;
    }
  },
};

export default calculator;
