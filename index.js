'use strict';

const internals = {};

internals.nextId = 0;

internals.issueId = function () {

    const id = internals.nextId;
    internals.nextId = internals.nextId + 1;
    return id;
};

internals.setNextId = function (value) {
    internals.nextId = value;
};

internals.getNextId = function () {
    return internals.nextId;
}

exports.issueId = internals.issueId;
exports.setNextId = internals.setNextId;
exports.getNextId = internals.getNextId;
