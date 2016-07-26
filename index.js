module.exports = {
    "env": {
      //"es6": true,
      //"browser": true,
      //"commonjs" : true
    },
    "parserOptions": {
      "ecmaVersion": 6,
      //"sourceType": "module"
      //"ecmaFeatures":{
      //  "impliedStrict" : true
      //}
    },
    "extends": ["eslint:recommended"],

    "rules": {
        //RegJavascript_4
        //Le mode strict doit être utilisé
        "strict" : 2,

        //
        // STYLE
        //
        //RegJavascript_9
        // pour éviter les points virgules systématiques mais avec la sécurité des cas particuliers
        //"no-unexpected-multiline" : 2,

        //RegJavascript_9
        //les points virgules sont obligatoires
        "semi" : 1,
        //
        // ES6
        //

        // préférer l('utilisation de const si la variable n'est pas réasignée
        // RegJavascript 3
        "prefer-const": 1,

        // clarifie l'usage des fonctions fleche qui peuvent porter à confusion
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
        //RegJavascript_7
        //La notation littérale doit être utilisée pour créer des objets, tableaux, expressions régulières et primitives
        "no-new-wrappers":2,

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