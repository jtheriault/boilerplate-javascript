'use strict';
var codeCopter = require('code-copter'),
    shortrequire = require('code-copter-analyzer-shortrequire');

codeCopter.configure({
    jscs: true,
    jshint: true,
    shortrequire: shortrequire
});

describe('Code quality', codeCopter);
