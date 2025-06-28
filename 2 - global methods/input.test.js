const filterName = require('./input');

describe('filterName function', () => {
  it('valid name', () => {
    expect(filterName('Eyad')).toBe('Eyad');
  });
  it('name is required', () => {
    expect(filterName()).toBe('Please enter a valid name');
  });
  it('name shouldnt be empty', () => {
    expect(filterName(' ')).toBe('Please enter a valid name');
  });
  it('name should be a string', () => {
    expect(filterName(1)).toBe('Please enter a valid name');
  });
  it('name should be trimmed', () => {
    expect(filterName(' Eyad ')).toBe('Eyad');
  });

  it('name is too short', () => {
    expect(filterName('ey')).toBe(
      'Name is too short, please enter a name with more than 2 characters'
    );
  });

  it('name is too long', () => {
    expect(filterName('Eyad Omar Shehata AbdElAziz')).toBe(
      'Name is too long, please enter a name with less than 20 characters'
    );
  });

  it('no underscores', () => {
    expect(filterName('_Eyad_Omar_')).toBe('Eyad Omar');
  });
});
