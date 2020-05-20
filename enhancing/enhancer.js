module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  return item.enhancement < 20
  ? {...item, enhancement: item.enhancement + 1} 
  : { ...item };
}

function fail(item) {
  return item.enhancement < 15 ? {...item, durability: item.durability - 5}
  : item.enhancement > 14 ? { ...item, durability: item.durability - 10 }
  : item.enhancement > 16 ? { ...item, enhancement: item.enhancement - 1}
  : { ...item}
}

function repair(item) {
  return { ...item, durability: item.durability === 100 };
}

function get(item) {
  return { ...item };
}
