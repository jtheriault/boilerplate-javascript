'use strict';
var followsGuidelines = require('code-copter'),
    guide = followsGuidelines.analyzers;

followsGuidelines.configure({
    jscs: true,
    jshint: true,
    peers: guide.requirePeers
});

describe('Code quality', followsGuidelines);
