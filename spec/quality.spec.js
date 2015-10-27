'use strict';
var codeCopter = require('code-copter');

codeCopter.configure({
    jscs: true,
    jshint: true,
    shortrequire: true
});

describe('Code quality', codeCopter);
