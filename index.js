'use strict';

const internals: {};

internals.nextId = 0;

internals.issueId = function() {

    const id = internals.nextId;
    internals.nextId = internals.nextId + 1;
    return id;
}

exports.issueId = issueId;
