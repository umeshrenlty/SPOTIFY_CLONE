function sayHi() {
  return 'hi';
}
const result = sayHi();
console.log(result);
function* sayHiGenerator() {
  yield 'hey';
  yield 'umesh';
  yield 'how are you';
  return 'hi';
}
const resultGenerator = sayHiGenerator();
console.log(resultGenerator.next());
console.log(resultGenerator.next());
console.log(resultGenerator.next());
const resultGeneratorOf = sayHiGenerator();
for (const iterator of resultGeneratorOf) {
  console.log(iterator);
}
function* newGenrator() {
  yield 'something';
  const final = yield 'give me value';
  return 'final value';
}
const newGenratorit = newGenrator();
console.log(newGenratorit.next());
console.log(newGenratorit.next());
console.log(newGenratorit.next('custom value'));
