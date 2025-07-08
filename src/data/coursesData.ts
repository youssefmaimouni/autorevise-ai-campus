
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

// Mock data for AI content generation
export const mockAIData = {
  summary: {
    'database-1': {
      title: 'Séance 1 : Concepts de base et SQL, Modèle relationnel, introduction à SQL',
      content: `# Concepts Fondamentaux des Bases de Données

## 1. Problématiques des Systèmes de Fichiers Classiques
- **Redondance** : Duplication des données et du code
- **Incohérence** : Difficultés de synchronisation
- **Maintenance coûteuse** : Gestion complexe des multiples formats

## 2. L'approche Base de Données
- **Modélisation** : Structure logique des données
- **Centralisation** : Élimination de la redondance
- **SGBD** : Système de Gestion de Bases de Données

## 3. Architecture 3 niveaux (ANSI-SPARC)
- **Niveau Conceptuel** : Vue globale (Entité-Association)
- **Niveau Logique** : Structure des tables
- **Niveau Physique** : Stockage physique (INDEX)

## 4. Langage SQL
- **LDD** : CREATE, ALTER, DROP (Définition)
- **LMD** : SELECT, INSERT, UPDATE, DELETE (Manipulation)
- **LCD** : GRANT, REVOKE, COMMIT, ROLLBACK (Contrôle)`
    }
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
    }
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
    }
  }
};
