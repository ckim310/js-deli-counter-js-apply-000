function takeANumber(arr, firstName) {
  arr << firstName;
  return `Welcome, ${firstName}. You are number ${arr.length + 1} in line.`;
}
