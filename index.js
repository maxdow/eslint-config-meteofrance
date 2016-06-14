module.exports = {
    "env": {
      //"es6": true,
      //"browser": true,
      //"commonjs" : true
    },
    "parserOptions": {
      "ecmaVersion": 6,
      //"sourceType": "module"
    },
    "extends": ["eslint:recommended"],

    "rules": {

        //
        // STYLE
        //
        //RegJavascript_9
        "no-unexpected-multiline" : 2,
        //
        // ES6
        //

        // suggest using of const declaration for variables that are never modified after declared
        // RegJavascript 3
        "prefer-const": 1,

        // require space before/after arrow function's arrow
        "arrow-spacing": 1,

        // Require parens in arrow function arguments
        "arrow-parens" : [1,"always"],

        //
        // VAR
        //
        //Disallow var and Named Functions in Global Scope
        "no-implicit-globals" : 2,

        "no-unused-vars" : [1, {"vars": "all", "args": "all"}],

        //
        // LEGACY
        //
        "max-params" : [2,5],
        "max-depth" : [2,4],


        //
        // BEST PRACTICES
        //
        "complexity" : [2,7],
        //RegJavascript_8
        "eqeqeq" : 2,
        "no-console" : 1,
        //RegJavascript_6 : usage de eval
        "no-eval" : 2,
        // disallow reassignments of native objects
        "no-native-reassign": 2,
        // requires to declare all vars on top of their containing scope
        // RegJavascript_2
        "vars-on-top": 1,
        //RegJavascript 10 : Une condition devrait utiliser des accolades.
        "curly" : [1,"all"],
        // treat var statements as if they were block scoped
        "block-scoped-var": 1,
        // specify the maximum depth callbacks can be nested
        "max-nested-callbacks": [1,{"max":3}],
    }
}