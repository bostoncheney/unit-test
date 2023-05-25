const chai = require('chai');
const { expect } = chai;

const Greet = require('./path/to/Greet'); // Replace './path/to/Greet' with the actual path to your Greet function

describe('Greet', () => {
  it('should greet a name', () => {
    expect(Greet('Elizabeth')).to.equal('Hello, Elizabeth');
  });

  it('should handle null values', () => {
    expect(Greet(null)).to.equal('Hello there!');
  });

  it('should shout when name is all uppercase', () => {
    expect(Greet('JOSE')).to.equal('HELLO JOSE!');
  });

  it('should greet two names', () => {
    expect(Greet(['Jose', 'Pep'])).to.equal('Hello, Jose, Pep');
  });

  it('should greet multiple names', () => {
    expect(Greet(['Alex', 'Arsene', 'Jose', 'Zidane'])).to.equal('Hello, Alex, Arsene, Jose, Zidane');
  });
});