export interface Session {
  id: string;
  title: string;
  description: string;
  duration: string;
  completed: boolean;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  rating: number;
  sessions: Session[];
  image: string;
  progress: number;
}

import { additionalSummaryData, additionalQuizData, additionalMindmapData } from './additionalCoursesData';

export const coursesData: Course[] = [
  {
    id: 'python',
    title: 'Python',
    description: 'Master Python programming from basics to advanced concepts',
    level: 'Beginner',
    duration: '5 sessions',
    rating: 4.8,
    progress: 0,
    image: '/lovable-uploads/073af4ea-bfc6-4c7f-babd-82e90dd1330d.png',
    sessions: [
      {
        id: 'python-1',
        title: 'Introduction à Python',
        description: 'Présentation de Python et installation de l\'environnement (Anaconda, VS Code, Jupyter Notebook), Variables et types de données, Opérateurs arithmétiques, logiques et de comparaison, Structures de contrôle : conditions (if-else) et boucles (for, while)',
        duration: '2h',
        completed: false
      },
      {
        id: 'python-2',
        title: 'Fonctions et Manipulation des Données',
        description: 'Définition et utilisation des fonctions (def, return), Passage de paramètres et valeurs de retour, Manipulation des chaînes de caractères et opérations sur les listes, Lecture et écriture dans des fichiers',
        duration: '2h',
        completed: false
      },
      {
        id: 'python-3',
        title: 'Structures de Données et Algorithmes Fondamentaux',
        description: 'Listes et dictionnaires : création, modification et parcours, Tri et recherche : tri à bulles, tri rapide, recherche linéaire et dichotomique, Complexité algorithmique et optimisation des boucles',
        duration: '2h',
        completed: false
      },
      {
        id: 'python-4',
        title: 'Programmation Orientée Objet (POO)',
        description: 'Définition des classes et des objets, Constructeur (__init__) et méthodes spéciales, Héritage et polymorphisme, Gestion des exceptions avec try-except',
        duration: '2h',
        completed: false
      },
      {
        id: 'python-5',
        title: 'Introduction aux bases de données avec SQLite',
        description: 'Interaction avec des APIs et requêtes HTTP',
        duration: '2h',
        completed: false
      }
    ]
  },
  {
    id: 'java',
    title: 'Java',
    description: 'Learn Java programming and object-oriented concepts',
    level: 'Intermediate',
    duration: '5 sessions',
    rating: 4.7,
    progress: 0,
    image: '/lovable-uploads/073af4ea-bfc6-4c7f-babd-82e90dd1330d.png',
    sessions: [
      {
        id: 'java-1',
        title: 'Introduction au langage Java',
        description: 'Syntaxe, variables, conditions, boucles. Installation d\'un IDE (Eclipse/IntelliJ). logiques et de comparaison, Structures de contrôle : conditions (if-else) et boucles (for, while)',
        duration: '2h',
        completed: false
      },
      {
        id: 'java-2',
        title: 'Programmation orientée objet (POO)',
        description: 'Concepts de classes, objets, constructeurs, getteurs, setteurs',
        duration: '2h',
        completed: false
      },
      {
        id: 'java-3',
        title: 'Héritage, encapsulation, interface',
        description: 'Concepts avancés de la POO en Java',
        duration: '2h',
        completed: false
      },
      {
        id: 'java-4',
        title: 'Collections et gestion des exceptions',
        description: 'ArrayListe (Tri, recherche), Hashmap, gestion des erreurs (try-catch)',
        duration: '2h',
        completed: false
      },
      {
        id: 'java-5',
        title: 'Introduction aux bases de données avec JDBC',
        description: 'Interaction avec des APIs et fichiers',
        duration: '2h',
        completed: false
      }
    ]
  },
  {
    id: 'database',
    title: 'Base de données',
    description: 'Master database design and SQL queries',
    level: 'Intermediate',
    duration: '5 sessions',
    rating: 4.6,
    progress: 0,
    image: '/lovable-uploads/073af4ea-bfc6-4c7f-babd-82e90dd1330d.png',
    sessions: [
      {
        id: 'database-1',
        title: 'Concepts de base et SQL',
        description: 'Modèle relationnel, introduction à SQL',
        duration: '2h',
        completed: false
      },
      {
        id: 'database-2',
        title: 'Modélisation',
        description: 'Diagrammes E/A, normalisation',
        duration: '2h',
        completed: false
      },
      {
        id: 'database-3',
        title: 'Requêtes SQL avancées',
        description: 'JOIN, GROUP BY, sous-requêtes',
        duration: '2h',
        completed: false
      },
      {
        id: 'database-4',
        title: 'Transactions et sécurité',
        description: 'Gestion des transactions, introduction aux verrous',
        duration: '2h',
        completed: false
      },
      {
        id: 'database-5',
        title: 'Connexion à une base via un langage',
        description: 'Connexion avec JDBC, PHP PDO',
        duration: '2h',
        completed: false
      }
    ]
  },
  {
    id: 'web-programming',
    title: 'Programmation Web',
    description: 'Build modern web applications with HTML, CSS, PHP',
    level: 'Beginner',
    duration: '5 sessions',
    rating: 4.5,
    progress: 0,
    image: '/lovable-uploads/073af4ea-bfc6-4c7f-babd-82e90dd1330d.png',
    sessions: [
      {
        id: 'web-1',
        title: 'Bases d\'HTML et CSS',
        description: 'Structure d\'une page web, introduction à CSS',
        duration: '2h',
        completed: false
      },
      {
        id: 'web-2',
        title: 'Introduction à PHP',
        description: 'Syntaxe de base, variables, boucles, fonctions',
        duration: '2h',
        completed: false
      },
      {
        id: 'web-3',
        title: 'Interaction avec les bases de données',
        description: 'Connexion à une base, exécution de requêtes SQL',
        duration: '2h',
        completed: false
      },
      {
        id: 'web-4',
        title: 'Sessions et cookies',
        description: 'Gestion des utilisateurs avec sessions et cookies',
        duration: '2h',
        completed: false
      },
      {
        id: 'web-5',
        title: 'AJAX et interactivité',
        description: 'Créer des interfaces web interactives',
        duration: '2h',
        completed: false
      }
    ]
  },
  {
    id: 'mobile-android',
    title: 'Programmation Mobile Android',
    description: 'Create native Android applications',
    level: 'Advanced',
    duration: '5 sessions',
    rating: 4.6,
    progress: 0,
    image: '/lovable-uploads/073af4ea-bfc6-4c7f-babd-82e90dd1330d.png',
    sessions: [
      {
        id: 'android-1',
        title: 'Introduction à Android Studio',
        description: 'Installation, création d\'un premier projet, architecture d\'une application',
        duration: '2h',
        completed: false
      },
      {
        id: 'android-2',
        title: 'Interfaces utilisateur',
        description: 'XML, vues, boutons, champs de texte',
        duration: '2h',
        completed: false
      },
      {
        id: 'android-3',
        title: 'Navigation et fragments',
        description: 'Multi-écrans avec fragments et intents',
        duration: '2h',
        completed: false
      },
      {
        id: 'android-4',
        title: 'Bases de données locales',
        description: 'SQLite, SharedPreferences',
        duration: '2h',
        completed: false
      },
      {
        id: 'android-5',
        title: 'Fonctionnalités natives et déploiement',
        description: 'Localisation, caméra, génération d\'APK',
        duration: '2h',
        completed: false
      }
    ]
  },
  {
    id: 'laravel',
    title: 'Framework PHP Laravel',
    description: 'Build powerful web applications with Laravel',
    level: 'Advanced',
    duration: '5 sessions',
    rating: 4.8,
    progress: 0,
    image: '/lovable-uploads/073af4ea-bfc6-4c7f-babd-82e90dd1330d.png',
    sessions: [
      {
        id: 'laravel-1',
        title: 'Introduction à Laravel',
        description: 'Installation, structure du projet',
        duration: '2h',
        completed: false
      },
      {
        id: 'laravel-2',
        title: 'Routage et contrôleurs',
        description: 'Gestion des routes, création de contrôleurs',
        duration: '2h',
        completed: false
      },
      {
        id: 'laravel-3',
        title: 'Modèles et bases de données',
        description: 'Migrations, ORM Eloquent',
        duration: '2h',
        completed: false
      },
      {
        id: 'laravel-4',
        title: 'Formulaires et validation',
        description: 'Gestion des entrées utilisateur',
        duration: '2h',
        completed: false
      },
      {
        id: 'laravel-5',
        title: 'API RESTful',
        description: 'Création d\'une API avec Laravel',
        duration: '2h',
        completed: false
      }
    ]
  },
  {
    id: 'javascript',
    title: 'Programmation JS',
    description: 'Modern JavaScript development with React and Node.js',
    level: 'Intermediate',
    duration: '5 sessions',
    rating: 4.9,
    progress: 0,
    image: '/lovable-uploads/073af4ea-bfc6-4c7f-babd-82e90dd1330d.png',
    sessions: [
      {
        id: 'js-1',
        title: 'Bases de JavaScript moderne',
        description: 'Syntaxe ES6, manipulation du DOM',
        duration: '2h',
        completed: false
      },
      {
        id: 'js-2',
        title: 'Framework front-end (React.js ou Vue.js)',
        description: 'Installation, composants, props',
        duration: '2h',
        completed: false
      },
      {
        id: 'js-3',
        title: 'Node.js et Express.js',
        description: 'Introduction à Node.js, création d\'un serveur',
        duration: '2h',
        completed: false
      },
      {
        id: 'js-4',
        title: 'Base de données avec Node.js',
        description: 'Connexion à une base via Mongoose',
        duration: '2h',
        completed: false
      },
      {
        id: 'js-5',
        title: 'Application complète',
        description: 'Développement d\'une application complète',
        duration: '2h',
        completed: false
      }
    ]
  },
  {
    id: 'mobile-js',
    title: 'Programmation mobile JS',
    description: 'Cross-platform mobile development with React Native',
    level: 'Advanced',
    duration: '5 sessions',
    rating: 4.6,
    progress: 0,
    image: '/lovable-uploads/073af4ea-bfc6-4c7f-babd-82e90dd1330d.png',
    sessions: [
      {
        id: 'mobile-js-1',
        title: 'Introduction à React Native/Ionic',
        description: 'Installation, création d\'un premier projet',
        duration: '2h',
        completed: false
      },
      {
        id: 'mobile-js-2',
        title: 'Interfaces utilisateur',
        description: 'Composants de base, navigation',
        duration: '2h',
        completed: false
      },
      {
        id: 'mobile-js-3',
        title: 'Gestion des données et API',
        description: 'Axios, connexion à une API REST',
        duration: '2h',
        completed: false
      },
      {
        id: 'mobile-js-4',
        title: 'Fonctionnalités natives',
        description: 'Accès au GPS, caméra, stockage',
        duration: '2h',
        completed: false
      },
      {
        id: 'mobile-js-5',
        title: 'Déploiement',
        description: 'Génération d\'APK/IPA, tests',
        duration: '2h',
        completed: false
      }
    ]
  }
];

// Mock data for AI content generation - Comprehensive data from GitHub repository
export const mockAIData = {
  summary: {
    // Database session
    'database-1': {
      title: 'Séance 1 : Concepts de base et SQL, Modèle relationnel, introduction à SQL',
      content: `# Concepts Fondamentaux des Bases de Données

## Problématiques des Systèmes de Fichiers Classiques
- Multiples applications, formats, langages
- Redondance de données et de code
- Pas de facilité d'interrogation
- Difficultés de gestion et incohérence des données

## L'approche 'Base de Données'
- Modélisation des données
- Élimination de la redondance
- Centralisation et organisation
- Utilisation d'un SGBD (Système de Gestion de Bases de Données)
- Langage déclaratif (SQL) pour interagir avec les données

## Architecture ANSI-SPARC
1. Niveau Interne (physique) : Stockage physique
2. Niveau Conceptuel : Modèle logique
3. Niveau Externe : Vues utilisateurs`
    },
    // Python sessions
    'python-1': {
      title: 'Introduction à Python, installation, types, variables, boucles',
      content: `# Introduction à Python

## Installation et Environnement
- **Anaconda** : Distribution Python complète avec packages scientifiques
- **VS Code** : Éditeur de code recommandé avec extensions Python
- **Jupyter Notebook** : Interface interactive pour prototypage et analyse

## Types de Données Fondamentaux
- **Entiers (int)** : Nombres entiers (ex: 42, -17)
- **Flottants (float)** : Nombres décimaux (ex: 3.14, -2.5)
- **Chaînes (str)** : Texte (ex: "Bonjour", 'Python')
- **Booléens (bool)** : True ou False

## Opérateurs
- **Arithmétiques** : +, -, *, /, //, %, **
- **Comparaison** : ==, !=, <, >, <=, >=
- **Logiques** : and, or, not

## Structures de Contrôle
- **Conditions** : if, elif, else
- **Boucles** : for (itération), while (tant que)`
    },
    // Java sessions
    'java-1': {
      title: 'Introduction au langage Java, syntaxe, variables, conditions, boucles, IDE',
      content: `# Introduction au Langage Java

## Caractéristiques de Java
- **Orienté Objet** : Tout est objet (sauf types primitifs)
- **Portable** : "Write once, run anywhere" (JVM)
- **Robuste** : Gestion mémoire automatique, typage fort
- **Sécurisé** : Contrôles d'accès, sandbox

## Installation et IDE
- **JDK** : Java Development Kit (compiler, JVM)
- **Eclipse** : IDE populaire, gratuit, extensible
- **IntelliJ IDEA** : IDE moderne, intelligent

## Types de Données
- **Primitifs** : int, double, boolean, char
- **Objets** : String, Integer, ArrayList
- **Déclaration** : type nomVariable = valeur;

## Structures de Contrôle
- **Conditions** : if, else if, else, switch
- **Boucles** : for, while, do-while, for-each`
    },
    // Web Programming sessions
    'web-1': {
      title: 'Bases d\'HTML et CSS, Structure d\'une page web, Introduction à CSS',
      content: `# HTML et CSS : Fondamentaux du Web

## Structure HTML
- **DOCTYPE** : Déclaration du type de document
- **Balises sémantiques** : header, nav, main, article, section, footer
- **Formulaires** : input, textarea, select, button
- **Liens et images** : a href, img src

## CSS : Mise en Forme
- **Sélecteurs** : élément, .classe, #id, attribut
- **Box Model** : margin, border, padding, content
- **Positionnement** : static, relative, absolute, fixed
- **Flexbox** : display: flex, justify-content, align-items

## Responsive Design
- **Media Queries** : @media screen and (max-width)
- **Viewport** : meta viewport
- **Unités relatives** : %, em, rem, vw, vh`
    },
    // Laravel sessions
    'laravel-1': {
      title: 'Introduction à Laravel, Installation, structure du projet',
      content: `# Laravel : Framework PHP Moderne

## Installation
- **Composer** : Gestionnaire de dépendances PHP
- **Laravel Installer** : outil en ligne de commande
- **Serveur local** : php artisan serve

## Structure du Projet
- **app/** : Code application (Models, Controllers)
- **routes/** : Définition des routes web et API
- **resources/** : Vues, assets (CSS, JS)
- **database/** : Migrations, seeders
- **config/** : Fichiers de configuration

## Architecture MVC
- **Model** : Logique métier, accès aux données
- **View** : Interface utilisateur (Blade templates)
- **Controller** : Logique de contrôle, orchestration

## Artisan CLI
- **Commandes** : make:controller, make:model, migrate
- **Serveur** : serve, tinker pour debug`
    },
    // Android sessions
    'android-1': {
      title: 'Introduction à Android Studio, Installation, création d\'un premier projet, architecture d\'une application',
      content: `# Android Studio et Développement Mobile

## Installation d'Android Studio
- **SDK Android** : Outils de développement
- **AVD Manager** : Émulateur Android
- **Gradle** : Système de build automatisé

## Architecture d'une Application Android
- **Activities** : Écrans de l'application
- **Fragments** : Composants UI réutilisables
- **Services** : Tâches en arrière-plan
- **Broadcast Receivers** : Écoute d'événements système

## Structure du Projet
- **src/main/java** : Code source Java/Kotlin
- **src/main/res** : Ressources (layouts, strings, images)
- **AndroidManifest.xml** : Configuration de l'app

## Premier Projet
- **MainActivity** : Activité principale
- **activity_main.xml** : Layout principal
- **strings.xml** : Textes de l'application`
    },
    // JavaScript sessions
    'js-1': {
      title: 'Bases de JavaScript moderne, Syntaxe ES6, manipulation du DOM',
      content: `# JavaScript Moderne (ES6+)

## Syntaxe ES6
- **let/const** : Nouvelles déclarations de variables
- **Arrow functions** : () => {}
- **Template literals** : \`Bonjour \${nom}\`
- **Destructuring** : const {a, b} = objet

## Manipulation du DOM
- **Sélection** : getElementById, querySelector
- **Modification** : innerHTML, textContent
- **Styles** : element.style.property
- **Événements** : addEventListener

## Fonctions Avancées
- **Promises** : Gestion asynchrone
- **async/await** : Syntaxe synchrone pour asynchrone
- **Modules** : import/export

## ES6+ Features
- **Classes** : class NomClasse {}
- **Spread operator** : ...array
- **Default parameters** : function(a = 1)`
    },
    // Mobile JS sessions
    'mobile-js-1': {
      title: 'Introduction à React Native/Ionic, Installation, création d\'un premier projet',
      content: `# Développement Mobile avec JavaScript

## React Native
- **Installation** : npm install -g react-native-cli
- **Nouveau projet** : react-native init MonProjet
- **Composants** : View, Text, TouchableOpacity
- **Navigation** : React Navigation

## Ionic
- **Installation** : npm install -g @ionic/cli
- **Nouveau projet** : ionic start monApp tabs
- **Frameworks** : Angular, React, Vue
- **Capacitor** : Accès aux APIs natives

## Architecture Mobile
- **Composants** : Réutilisables et modulaires
- **État** : Gestion avec hooks ou Redux
- **APIs natives** : Caméra, GPS, stockage

## Développement
- **Hot reload** : Mise à jour en temps réel
- **Débogage** : Chrome DevTools, Flipper
- **Tests** : Jest, Detox pour E2E`
    },
    // Merge additional summary data
    ...additionalSummaryData
  },
  quiz: {
    'database-1': {
      title: 'Quiz : Concepts de base et SQL',
      questions: [
        {
          id: 1,
          question: 'Quel est le principal avantage des bases de données par rapport aux fichiers classiques ?',
          options: [
            'Réduction de la redondance',
            'Interface graphique',
            'Vitesse d\'accès',
            'Facilité d\'installation'
          ],
          correct: 0,
          explanation: 'Les bases de données éliminent la redondance en centralisant et organisant les données de manière cohérente.'
        },
        {
          id: 2,
          question: 'Que signifie SGBD ?',
          options: [
            'Système Général de Base de Données',
            'Système de Gestion de Bases de Données',
            'Structure Générale de Base de Données',
            'Système de Génération de Base de Données'
          ],
          correct: 1,
          explanation: 'SGBD signifie Système de Gestion de Bases de Données, un logiciel qui permet de créer, manipuler et gérer des bases de données.'
        },
        {
          id: 3,
          question: 'Combien de niveaux comprend l\'architecture ANSI-SPARC ?',
          options: ['2 niveaux', '3 niveaux', '4 niveaux', '5 niveaux'],
          correct: 1,
          explanation: 'L\'architecture ANSI-SPARC comprend 3 niveaux : conceptuel, logique et physique.'
        }
      ]
    },
    // Python quizzes
    'python-1': {
      title: 'Quiz : Introduction à Python',
      questions: [
        {
          id: 1,
          question: 'Quel est le type de données pour les nombres entiers en Python ?',
          options: ['int', 'integer', 'number', 'num'],
          correct: 0,
          explanation: 'En Python, le type pour les nombres entiers est "int".'
        },
        {
          id: 2,
          question: 'Quelle boucle utilise-t-on pour itérer sur une séquence ?',
          options: ['while', 'for', 'loop', 'iterate'],
          correct: 1,
          explanation: 'La boucle "for" est utilisée pour itérer sur des séquences comme les listes.'
        },
        {
          id: 3,
          question: 'Comment définit-on une condition en Python ?',
          options: ['condition:', 'if:', 'when:', 'check:'],
          correct: 1,
          explanation: 'En Python, on utilise "if:" pour définir une condition.'
        }
      ]
    },
    // Java quizzes
    'java-1': {
      title: 'Quiz : Introduction au langage Java',
      questions: [
        {
          id: 1,
          question: 'Quel est le principe "Write once, run anywhere" de Java ?',
          options: [
            'Code Java peut s\'exécuter sur toute machine',
            'JVM permet l\'exécution sur différentes plateformes',
            'Java est un langage interprété',
            'Java compile directement en code machine'
          ],
          correct: 1,
          explanation: 'La JVM (Java Virtual Machine) permet d\'exécuter le bytecode Java sur différentes plateformes.'
        },
        {
          id: 2,
          question: 'Quel IDE est mentionné pour développer en Java ?',
          options: ['Visual Studio', 'Eclipse', 'Notepad++', 'Sublime Text'],
          correct: 1,
          explanation: 'Eclipse est un IDE populaire et gratuit pour le développement Java.'
        }
      ]
    },
    // Merge additional quiz data
    ...additionalQuizData
  },
  mindmap: {
    'database-1': {
      title: 'Séance 1 : Concepts de base et SQL, Modèle relationnel, introduction à SQL',
      nodes: [
        {
          title: 'Problématiques des Systèmes de Fichiers Classiques',
          children: [
            {
              title: 'Caractéristiques',
              children: [
                { title: 'Multiples applications, formats, langages' },
                { title: 'Redondance de données et de code' },
                { title: 'Pas de facilité d\'interrogation' }
              ]
            },
            {
              title: 'Problèmes',
              children: [
                { title: 'Difficultés de gestion' },
                { title: 'Incohérence des données' },
                { title: 'Coûts élevés et maintenance difficile' },
                { title: 'Problèmes de partage, pannes, confidentialité' }
              ]
            }
          ]
        },
        {
          title: 'L\'approche \'Base de Données\'',
          children: [
            {
              title: 'Principes',
              children: [
                { title: 'Modélisation des données' },
                { title: 'Élimination de la redondance' },
                { title: 'Centralisation et organisation' }
              ]
            },
            {
              title: 'Outils',
              children: [
                { title: 'SGBD (Système de Gestion de Bases de Données)' },
                { title: 'Langage déclaratif (SQL)' }
              ]
            }
          ]
        }
      ]
    },
    // Python mindmaps
    'python-1': {
      title: 'Introduction à Python, installation, types, variables, boucles',
      nodes: [
        {
          title: 'Installation et Environnement',
          children: [
            {
              title: 'Anaconda',
              children: [
                { title: 'Distribution Python complète' },
                { title: 'Packages scientifiques intégrés' },
                { title: 'Gestion d\'environnements virtuels' }
              ]
            },
            {
              title: 'IDE et Outils',
              children: [
                { title: 'VS Code avec extensions Python' },
                { title: 'Jupyter Notebook pour prototypage' },
                { title: 'PyCharm pour développement avancé' }
              ]
            }
          ]
        },
        {
          title: 'Types de Données',
          children: [
            {
              title: 'Types Primitifs',
              children: [
                { title: 'int : nombres entiers' },
                { title: 'float : nombres décimaux' },
                { title: 'str : chaînes de caractères' },
                { title: 'bool : valeurs booléennes' }
              ]
            }
          ]
        }
      ]
    },
    // Java mindmaps
    'java-1': {
      title: 'Introduction au langage Java, syntaxe, variables, conditions, boucles, IDE',
      nodes: [
        {
          title: 'Caractéristiques de Java',
          children: [
            {
              title: 'Orienté Objet',
              children: [
                { title: 'Tout est objet (sauf primitifs)' },
                { title: 'Encapsulation, Héritage, Polymorphisme' }
              ]
            },
            {
              title: 'Portable',
              children: [
                { title: 'Write once, run anywhere' },
                { title: 'JVM (Java Virtual Machine)' },
                { title: 'Bytecode intermédiaire' }
              ]
            }
          ]
        },
        {
          title: 'Environnement de Développement',
          children: [
            {
              title: 'JDK (Java Development Kit)',
              children: [
                { title: 'Compilateur javac' },
                { title: 'Machine virtuelle java' },
                { title: 'Outils de développement' }
              ]
            },
            {
              title: 'IDE',
              children: [
                { title: 'Eclipse : gratuit, extensible' },
                { title: 'IntelliJ IDEA : moderne, intelligent' }
              ]
            }
          ]
        }
      ]
    },
    // Merge additional mindmap data
    ...additionalMindmapData
  }
};
