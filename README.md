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