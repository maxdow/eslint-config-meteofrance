## Configuration Eslint pour Météo-France
Ce paquet fournit une configuration pour eslint conformément aux règles de codage en vigueur chez Météo-France.

###Installation
Pour utiliser cette configuration il est nécessaire d'installer ESLint en verison 2.0 minimum et d'inclure ce paquet comme dépendance de son projet

```
npm install eslint eslint-config-meteofrance --save-dev
```


Ensuite, créer un fichier .eslintrc à la racine du projet avec le contenu suivant :

```json
{
  "extends": "meteofrance"
}
```

Vous pouvez aussi choisir de configurer eslint depuis le fichier package.json en ajoutant un champ eslintConfig :

```json
{
  "eslintConfig": {
    "extends": "meteofrance"
  }
}
```

Ce paquet propose une base de travail, selon votre projet il est possible de surcharger ces règles.

D'autres options de configuration sont disponibles dans la [documentation de ESLint](http://eslint.org/docs/user-guide/configuring)

###Utilisation
La méthode la plus directe pour linter son projet et de [créer une tache](https://docs.npmjs.com/misc/scripts) dans le fichier package.json qui appelle eslint sur son dossier de sources.

```json
{
  "name":"mon-projet",
  "version":"1.0.0",
  "scripts": {
    "lint" : "eslint dossiersource"
  }
}
```

```
npm run lint
```

###Intégration à l'IDE

Dès lors que vous avez votre projet configuré avec un .eslintrc il sera utilisable dans un IDE digne de ce nom. 

L'exemple le plus commun est celui de sublime texte qui propose un [plugin pour eslint](https://github.com/roadhump/SublimeLinter-eslint) . 

Il en existe aussi pour [atom](https://atom.io/packages/linter-eslint) et [visualstudio](https://code.visualstudio.com/Docs/languages/javascript#_javascript-linters-eslint-jshint)

Voici la [liste officielle des intégrations disponibles](http://eslint.org/docs/user-guide/integrations)
