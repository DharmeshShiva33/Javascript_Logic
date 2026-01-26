// mathUtils.js
export function power(base, exp) {
  if (exp === 0) return 1;
  return base * power(base, exp - 1);
}

export function square(n) {
  return n * n;
}
