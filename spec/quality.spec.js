'use strict';
var followsGuidelines = require('code-copter'),
    guide = followsGuidelines.analyzers;

followsGuidelines.configure({
    jscs: guide.jscs,
    jshint: guide.jshint,
    peers: guide.requirePeers
});

describe('Code quality', followsGuidelines);
