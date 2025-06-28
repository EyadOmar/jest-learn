function filterName(name) {
  if (!name || typeof name !== 'string' || name.trim() === '') {
    return 'Please enter a valid name';
  }
  if (name.length <= 2) {
    return 'Name is too short, please enter a name with more than 2 characters';
  }
  if (name.length > 20) {
    return 'Name is too long, please enter a name with less than 20 characters';
  }
  // includes underscore
  if (name.includes('_')) {
    name = name.replace(/_/g, ' ');
  }
  return name.trim();
}

module.exports = filterName;
