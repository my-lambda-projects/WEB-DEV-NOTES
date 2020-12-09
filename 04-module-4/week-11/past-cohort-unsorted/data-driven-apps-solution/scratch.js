function wrapper(cb) {
  return function (name) {
    return cb(`hello, ${name}`);
  };
}

function wrapped(greeting) {
  return greeting;
}

const greet = wrapper(wrapped);

console.log(greet('potato'));
