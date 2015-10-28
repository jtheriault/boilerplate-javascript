'use strict';
var codeCopter = require('code-copter');

codeCopter.configure({
    analyzers: {
        jscs: true,
        jshint: true,
        shortrequire: true
    },
    exclude: ['.git', 'coverage', 'node_modules']
});

describe('Code quality', codeCopter);
