module.exports = {
    "env": {
        "commonjs": true,
        "es6": true,
        "node": true,
        "mocha": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "rules": {
        'no-console': ['warn']
    },
    "globals": {
        "$": true,
        "$$": true,
        "browser": true,
        "driver": true
    },
    "plugins": [
        "wdio",
        "import"
    ]
};