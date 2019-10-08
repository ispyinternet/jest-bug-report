# reproduce jest issue with validator.js

## error

TypeError: Cannot set property 'default' of undefined

at Object.<anonymous> (node_modules/validator/lib/util/toString.js:25:1)

** If I edit node_modules/validator/lib/util/toString.js and rename toString  to toStringX it works! **