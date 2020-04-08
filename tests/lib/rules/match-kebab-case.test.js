"use strict";

var matchKebabCaseRule = require("../../../lib/rules/match-kebab-case");
var RuleTester = require("eslint").RuleTester;

var ruleTester = new RuleTester();

ruleTester.run("match-kebab-case", matchKebabCaseRule, {
    valid: [
        {
            code: "",
            filename: "foo/bar.js"
        },
        {
            code: "",
            filename: "foo/foo-bar.test.js"
        },
    ],
    invalid: [
        {
            code: "",
            filename: "foo/foo-Bar.js",
            errors: [
                { message: 'Filename "foo-Bar" does not match the naming convention "kebab-case"'}
            ]
        },
        {
            code: "",
            filename: "foo/fooBar.test.js",
            errors: [
                { message: 'Filename "fooBar" does not match the naming convention "kebab-case"'},
            ]
        },
    ]
});