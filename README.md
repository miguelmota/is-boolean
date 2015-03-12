# is-boolean

Predicate that returns true for *boolean* values.

# Install

```bash
npm install is-boolean
```

```bash
bower install is-boolean
```

# Usage

```javascript
var isBoolean = require('is-boolean');

console.log(isBoolean(false)); // true
console.log(isBoolean(true)); // true
console.log(isBoolean(new Boolean(1))); // true
console.log(isBoolean(!!'foo')); // true
console.log(isBoolean(!'foo')); // true
console.log(isBoolean('')); // false
console.log(isBoolean([])); // false
console.log(isBoolean(0)); // false
console.log(isBoolean(null)); // false
console.log(isBoolean(undefined)); // false
console.log(isBoolean(1)); // false
console.log(isBoolean({})); // false
console.log(isBoolean(function() {})); // false
console.log(isBoolean(/foo/gi)); // false
console.log(isBoolean(NaN)); // false
```

# License

MIT
