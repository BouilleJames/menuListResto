# Getting Started with Create React App
[Build a restaurant Menu](https://www.youtube.com/watch?v%253DcMsuccmyX7Y%2526t%253D15s)
# https://youtu.be/cMsuccmyX7Y 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


*******************************************************************
Explication de code :
App.js

Ce code définit le composant principal de l'application, App, qui est un composant fonctionnel basé sur React.

Tout d'abord, Dans le fichier App.js, ces importations sont utilisées pour importer différents modules, fichiers et ressources nécessaires au fonctionnement de l'application React.

import React, { useState } from "react";: Cette ligne importe les fonctionnalités de base de React, y compris le composant React et la fonction useState. Le composant React est utilisé pour créer des composants dans l'application React, tandis que la fonction useState est un hook qui permet de gérer l'état local d'un composant.

import Menu from "./Menu";: Cette ligne importe le composant Menu à partir du fichier Menu.js (ou Menu.jsx) situé dans le même répertoire que le fichier App.js. Le composant Menu peut être utilisé dans le rendu de l'application pour afficher un menu de navigation, par exemple.

import Categories from "./Categories";: Cette ligne importe le composant Categories à partir du fichier Categories.js (ou Categories.jsx) situé dans le même répertoire que le fichier App.js. Le composant Categories peut être utilisé pour afficher les catégories d'articles ou de produits dans l'application.

import items from "./data";: Cette ligne importe un module ou un fichier appelé "data" situé dans le même répertoire que le fichier App.js. Ce fichier "data" peut contenir des données statiques ou des données à afficher dans l'application, telles que des articles de magasin ou des informations de menu.

import logo from "./logo.JPG";: Cette ligne importe une ressource, dans ce cas une image appelée "logo.JPG" située dans le même répertoire que le fichier App.js. Cette image peut être utilisée pour afficher le logo de l'application ou tout autre élément visuel nécessaire.

En important ces modules, fichiers et ressources, le fichier App.js peut les utiliser pour construire l'interface utilisateur et gérer l'état ou les données de l'application.

const allCategories = ["all", ...new Set(items.map((item) => item.category))];: Cette ligne crée un tableau allCategories qui contient toutes les catégories présentes dans le tableau items. Il utilise map pour extraire la propriété category de chaque élément de items et new Set pour supprimer les doublons. Il ajoute également la catégorie spéciale "all" au début du tableau.

const App = () => { ... }: Cette ligne définit le composant App en utilisant une fonction fléchée. Le composant App est le point d'entrée de l'application et est rendu dans l'élément racine de l'application.

const [menuItems, setMenuItems] = useState(items);: Cette ligne utilise le hook useState pour déclarer une variable d'état menuItems et une fonction setMenuItems pour la mettre à jour. La valeur initiale de menuItems est définie sur items, qui est le tableau importé à partir du fichier "data". Ce tableau contient les éléments du menu.

const [activeCategory, setActiveCategory] = useState("");: Cette ligne déclare une variable d'état activeCategory et une fonction setActiveCategory pour la mettre à jour. La valeur initiale de activeCategory est une chaîne vide.

const [categories, setCategories] = useState(allCategories);: Cette ligne déclare une variable d'état categories et une fonction setCategories pour la mettre à jour. La valeur initiale de categories est définie sur allCategories, qui est le tableau contenant toutes les catégories.

const filterItems = (category) => { ... }: Cette fonction filterItems est utilisée pour filtrer les éléments du menu en fonction de la catégorie sélectionnée. Elle met à jour l'état activeCategory avec la catégorie sélectionnée et utilise setMenuItems pour mettre à jour menuItems avec les éléments filtrés correspondants. Si la catégorie sélectionnée est "all", tous les éléments du menu sont affichés.

Le rendu du composant App retourne un élément <main> contenant une section avec la classe "menu". À l'intérieur de cette section, il y a un en-tête avec le logo, un titre et une ligne de séparation. Ensuite, il y a le composant Categories qui reçoit les propriétés categories, activeCategory et filterItems. Puis, il y a le composant Menu qui reçoit la propriété items.

En résumé, ce code définit le composant App qui gère l'état des éléments du menu, la catégorie active et les catégories disponibles. Il rend également les composants Categories et Menu avec les données appropriées.
***********************************************************
App.css

Ce code représente les styles CSS appliqués au composant App et à ses éléments enfants dans le fichier App.css. Voici une explication de chaque sélecteur CSS et de ses propriétés :

.App: Ce sélecteur est appliqué à la classe CSS App et définit le texte aligné au centre.

.clear: Ce sélecteur est appliqué à la classe CSS clear et définit le flottement à gauche, une marge à gauche de 240 pixels et un alignement vertical centré.

.App-logo: Ce sélecteur est appliqué à la classe CSS App-logo et définit la hauteur de l'image du logo à 40vmin (40% de la hauteur de la fenêtre visible). La propriété pointer-events: none désactive les événements de pointage sur l'image.

@media (prefers-reduced-motion: no-preference): Cette règle media query s'applique lorsque l'utilisateur n'a pas spécifié de préférence pour les mouvements réduits. À l'intérieur de cette règle, le sélecteur .App-logo définit une animation appelée App-logo-spin qui fait tourner l'image du logo de façon continue pendant 20 secondes.

.App-header: Ce sélecteur est appliqué à la classe CSS App-header et définit le style de l'en-tête de l'application. Il fixe la couleur de fond à #282c34, la hauteur minimale à 100vh (100% de la hauteur de la fenêtre visible), et utilise display: flex pour afficher les éléments en tant que conteneur flexible avec une direction de colonne. Les propriétés align-items: center et justify-content: center sont utilisées pour centrer les éléments verticalement et horizontalement respectivement. Le texte a une taille de police qui est calculée en fonction de la taille de la fenêtre (calc(10px + 2vmin)) et la couleur du texte est blanche.

.App-link: Ce sélecteur est appliqué à la classe CSS App-link et définit la couleur du lien à #61dafb.

@keyframes App-logo-spin: Cette règle définit une animation nommée App-logo-spin qui fait tourner un élément de 0 degrés à 360 degrés.

.form: Ce sélecteur est appliqué à la classe CSS form et définit le style d'un formulaire. Il fixe la couleur de fond à #fff, une largeur maximale de 450 pixels, une marge automatique pour centrer le formulaire horizontalement, une marge inférieure de 4rem, un remplissage de 1rem 2rem, et un rayon de bordure de 0.25rem.

.form input: Ce sélecteur est appliqué à l'élément input à l'intérieur de la classe CSS form et définit le style des champs de saisie. Il fixe la couleur de fond à hsl(210, 36%, 96%), la couleur de bordure à transparent, un rayon de bordure de 0.25rem et un remplissage de 0.25rem 0.5rem.

.item: Ce sélecteur est appliqué à la classe CSS item et définit le style d'un élément. Il fixe la couleur de fond à #
**********************************************************
Categories.js

Ce code définit le composant Categories en tant que composant fonctionnel basé sur React.

import React from "react";: Cette ligne importe le module react pour pouvoir utiliser React dans ce fichier.

const Categories = ({ categories, filterItems, activeCategory }) => { ... }: Cette ligne déclare le composant Categories en utilisant une fonction fléchée avec les paramètres categories, filterItems et activeCategory passés comme arguments destructurés. Ces paramètres représentent les propriétés transmises au composant depuis le composant parent.

Le corps de la fonction Categories renvoie le JSX, qui est le code HTML-like utilisé dans React.

<div className="btn-container">: Cela crée un conteneur <div> avec la classe CSS btn-container.

{categories.map((category, index) => { ... })}: Cette expression utilise la méthode map pour itérer sur le tableau categories et retourner un nouveau tableau de boutons. Pour chaque élément category dans categories, un bouton est créé.

<button type="button" className={${activeCategory === category ? "filter-btn active" : "filter-btn"}} key={index} onClick={() => filterItems(category)}>: Cela crée un bouton avec les classes CSS filter-btn et active si activeCategory est égal à category, sinon seulement la classe filter-btn est appliquée. La prop key est utilisée pour fournir une clé unique à chaque bouton dans la liste. La fonction onClick est définie pour appeler filterItems avec category en tant qu'argument lorsque le bouton est cliqué.

{category}: Cela affiche le nom de la catégorie dans le contenu du bouton.

</button>: Ferme la balise du bouton.

</div>: Ferme la balise du conteneur <div>.

export default Categories;: Exporte le composant Categories en tant que composant par défaut pour qu'il puisse être importé et utilisé dans d'autres fichiers.

En résumé, ce code définit le composant Categories qui affiche une liste de boutons, chaque bouton représentant une catégorie. Lorsqu'un bouton est cliqué, il appelle la fonction filterItems avec la catégorie correspondante en tant qu'argument.

*****************************************************

data.js

Ce code définit un tableau appelé menu qui contient des objets représentant différents éléments du menu d'un restaurant. Chaque objet représente un plat ou une boisson du menu et contient les informations suivantes :

id: un identifiant unique pour chaque élément du menu.
title: le titre ou le nom du plat.
category: la catégorie à laquelle appartient le plat (par exemple : "breakfast", "lunch", "shakes").
price: le prix du plat.
img: le chemin vers l'image du plat.
desc: une description ou un texte descriptif du plat.
Le tableau menu contient plusieurs objets représentant différents éléments du menu, tels que des pancakes, des burgers, des milkshakes, etc. Chaque objet représente un plat spécifique avec ses propriétés.

Enfin, le tableau menu est exporté en tant que valeur par défaut (export default menu;), ce qui permet à d'autres fichiers de l'importer et d'accéder à la liste des éléments du menu.

*************************************************************

index.css

Ce code définit les styles CSS pour différentes parties de l'application. Voici une explication des différentes parties du code :

body: Définit les styles généraux du corps du document, tels que la marge, la famille de polices, la couleur de fond et la couleur du texte.

code: Définit les styles pour le texte de code dans le document.

h1, h2, h3, h4: Définit les styles pour les titres de différents niveaux, tels que l'espacement des lettres, la transformation du texte en majuscules, la hauteur de ligne et les marges inférieures.

p: Définit les styles pour les paragraphes, tels que la marge inférieure et la couleur du texte.

.section: Définit les styles pour les sections de l'application, tels que la largeur, les marges et la largeur maximale.

@media screen and (min-width: 992px): Définit les styles spécifiques pour les écrans dont la largeur est supérieure à 992 pixels.

.menu, .title, .underline: Définit les styles pour les éléments liés au menu, tels que le rembourrage, l'alignement du texte et les bordures.

.btn-container, .filter-btn, .active: Définit les styles pour les boutons et les boutons filtrants, tels que la couleur de fond, la couleur du texte et les transitions.

.section-center, .menu-item, .photo, .logo, .item-info, .price, .item-text: Définit les styles pour les éléments du menu, tels que la largeur, la marge, les colonnes, la taille de l'image, les bordures et les alignements.

@media screen and (min-width: 768px): Définit les styles spécifiques pour les écrans dont la largeur est supérieure à 768 pixels.

@media screen and (min-width: 1200px): Définit les styles spécifiques pour les écrans dont la largeur est supérieure à 1200 pixels.

Ces styles CSS sont utilisés pour rendre l'application visuellement attrayante et cohérente.

**********************************************************

index.js

Ce fichier index.js est le point d'entrée principal de l'application React. 

import React from 'react'; : Importe le module React, qui est nécessaire pour utiliser React dans l'application.

import ReactDOM from 'react-dom/client'; : Importe le module ReactDOM, qui est utilisé pour interagir avec le DOM et rendre les composants React dans l'application.

import './index.css'; : Importe le fichier CSS index.css pour les styles de l'application.

import App from './App'; : Importe le composant App depuis le fichier App.js. C'est le composant racine de l'application.

import reportWebVitals from './reportWebVitals'; : Importe la fonction reportWebVitals depuis le fichier reportWebVitals.js. Cette fonction est utilisée pour mesurer les performances de l'application.

const root = ReactDOM.createRoot(document.getElementById('root')); : Crée un point d'entrée racine pour l'application en utilisant la méthode createRoot de ReactDOM. Elle spécifie l'élément DOM avec l'ID 'root' où le composant racine sera rendu.

root.render(...); : Rend le composant racine de l'application dans le point d'entrée racine créé précédemment. Le composant est enveloppé dans <React.StrictMode>, qui active un mode strict pour détecter les problèmes potentiels dans le code.

reportWebVitals(); : Appelle la fonction reportWebVitals pour mesurer les performances de l'application. Cette fonction peut être utilisée pour enregistrer les résultats des mesures de performances ou les envoyer à un point de terminaison d'analyse.

En résumé, ce fichier configure l'application React en important les dépendances nécessaires, créant un point d'entrée racine et rendant le composant racine de l'application dans cet élément racine.

*********************************************************************

Menu.js

Ce fichier Menu.js contient le composant Menu, qui est responsable de l'affichage des éléments du menu de l'application. 

import React from "react"; : Importe le module React, qui est nécessaire pour utiliser React dans le composant.

const Menu = ({ items }) => { ... } : Déclare le composant fonctionnel Menu. Il prend en paramètre un objet destructuré contenant la propriété items, qui représente les éléments du menu à afficher.

<div className="section-center"> ... </div> : Crée une division avec la classe CSS section-center. Cela permet de centrer les éléments du menu horizontalement.

{items.map((item) => { ... })} : Utilise la méthode map pour itérer sur le tableau items et retourner un élément React pour chaque élément du menu.

<article key={id} className="menu-item"> ... </article> : Crée un élément article pour chaque élément du menu. La propriété key est définie avec la valeur id de l'élément pour aider React à identifier de manière unique chaque élément lors de la mise à jour de la liste.

<img src={img} alt={title} className="photo" /> : Affiche l'image de l'élément du menu en utilisant la propriété img de l'élément. L'attribut alt est utilisé pour fournir une description alternative à l'image pour l'accessibilité. La classe CSS photo est utilisée pour appliquer des styles spécifiques à l'image.

<div className="item-info"> ... </div> : Crée une division avec la classe CSS item-info pour afficher les informations de l'élément du menu (titre, prix et description).

<header> ... </header> : Enveloppe le titre et le prix de l'élément du menu dans un élément header pour regrouper ces informations.

<h4>{title}</h4> : Affiche le titre de l'élément du menu en utilisant la propriété title de l'élément.

<h4 className="price">${price}</h4> : Affiche le prix de l'élément du menu en utilisant la propriété price de l'élément. Le symbole $ est ajouté avant le prix.

<p className="item-text">{desc}</p> : Affiche la description de l'élément du menu en utilisant la propriété desc de l'élément. La classe CSS item-text est utilisée pour appliquer des styles spécifiques au texte de l'élément.

export default Menu; : Exporte le composant Menu afin qu'il puisse être utilisé dans d'autres fichiers de l'application.

En résumé, le composant Menu affiche les éléments du menu en itérant sur le tableau items et en affichant les informations de chaque élément, y compris l'image, le titre, le prix et la description.