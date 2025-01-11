function add(x, y) {
  return x + y;
}

function sub(x, y) {
  return x - y;
}

const PI = 3.14

//Export for external usage.
module.exports = {
    add,
    sub,
    pi: PI
};

