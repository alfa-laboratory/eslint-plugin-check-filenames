'use strict';
//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

var kebabCase = require('lodash.kebabcase');
var path = require('path');

module.exports = {
    create: function(context) {
        var filename = context.getFilename();
        var fileBasename = path.basename(filename, path.extname(filename)).split(".")[0];

        return {
            Program: function(node) {
                    if (fileBasename !== kebabCase(fileBasename)) {
                        context.report({
                            node: node,
                            message:
                                'Filename "{{fileBasename}}" does not match the naming convention "kebab-case"',
                            data: {
                                fileBasename: fileBasename,
                            },
                        });
                    }
            },
        };
    },
};