
// Données supplémentaires pour tous les cours basées sur le repository GitHub

export const additionalSummaryData = {
  // Python sessions complètes
  'python-3': {
    title: 'Structures de données et algorithmes fondamentaux',
    content: `# Structures de Données et Algorithmes

## Listes en Python
- **Création** : [], list(), list comprehensions
- **Indexation** : [0], [-1], slicing [start:end]
- **Méthodes** : append(), extend(), insert(), remove(), pop()
- **Parcours** : for item in liste, enumerate(), zip()

## Dictionnaires
- **Création** : {}, dict(), dict comprehensions
- **Accès** : dict[key], dict.get(key, default)
- **Méthodes** : keys(), values(), items(), update()
- **Parcours** : for key, value in dict.items()

## Algorithmes de Tri
- **Tri à bulles** : Comparaisons adjacentes O(n²)
- **Tri rapide** : Divide and conquer O(n log n)
- **Tri Python** : sorted(), list.sort() (Timsort)

## Recherche
- **Linéaire** : Parcours séquentiel O(n)
- **Dichotomique** : Sur données triées O(log n)

## Complexité Algorithmique
- **Notation Big O** : O(1), O(log n), O(n), O(n²)
- **Optimisation** : Éviter boucles imbriquées inutiles`
  },
  'python-4': {
    title: 'Programmation orientée objet (POO)',
    content: `# Programmation Orientée Objet en Python

## Classes et Objets
- **Définition** : class NomClasse:
- **Instanciation** : objet = NomClasse()
- **Attributs d'instance** : self.attribut
- **Attributs de classe** : partagés par toutes les instances

## Constructeur et Méthodes Spéciales
- **__init__** : Constructeur, initialisation des objets
- **__str__** : Représentation string pour print()
- **__repr__** : Représentation pour développeurs
- **__len__** : Pour len(objet)

## Héritage
- **Syntaxe** : class Enfant(Parent):
- **super()** : Accès aux méthodes de la classe parent
- **Héritage multiple** : class C(A, B):
- **Method Resolution Order (MRO)**

## Polymorphisme
- **Duck typing** : "Si ça marche comme un canard..."
- **Surcharge de méthodes** : Redéfinition dans classes filles
- **Méthodes abstraites** : abc module

## Gestion des Exceptions
- **try/except** : Capture et traitement des erreurs
- **finally** : Code toujours exécuté
- **raise** : Lever des exceptions personnalisées`
  },
  'python-5': {
    title: 'Bases de données SQLite et APIs',
    content: `# SQLite et APIs avec Python

## SQLite avec Python
- **Module sqlite3** : Intégré à Python
- **Connexion** : sqlite3.connect('database.db')
- **Curseur** : cursor = conn.cursor()
- **Requêtes** : execute(), fetchone(), fetchall()
- **Transactions** : commit(), rollback()

## Requêtes HTTP avec requests
- **Installation** : pip install requests
- **GET** : requests.get(url)
- **POST** : requests.post(url, data)
- **JSON** : response.json()
- **Headers** : requests.get(url, headers={})

## APIs RESTful
- **Méthodes HTTP** : GET, POST, PUT, DELETE
- **Codes de statut** : 200, 404, 500
- **Authentification** : API keys, tokens
- **Rate limiting** : Gestion des limites d'appels`
  },

  // Java sessions complètes
  'java-3': {
    title: 'Héritage, interfaces, encapsulation avancée',
    content: `# Concepts Avancés de la POO en Java

## Héritage
- **extends** : class Enfant extends Parent
- **super** : Référence à la classe parent
- **Redéfinition** : @Override des méthodes
- **Constructeurs** : super() dans constructeur enfant

## Interfaces
- **Définition** : interface NomInterface
- **Implémentation** : implements Interface
- **Méthodes abstraites** : déclaration sans corps
- **Méthodes default** : corps dans l'interface (Java 8+)

## Encapsulation Avancée
- **Modificateurs d'accès** : 
  - private : classe uniquement
  - protected : package + sous-classes
  - public : partout
  - package : package uniquement
- **Getters/Setters** : Contrôle d'accès aux attributs

## Polymorphisme
- **Liaison dynamique** : Résolution à l'exécution
- **instanceof** : Vérification de type
- **Cast** : (Type) objet`
  },
  'java-4': {
    title: 'Collections et gestion des exceptions',
    content: `# Collections et Exceptions en Java

## ArrayList
- **Création** : ArrayList<Type> liste = new ArrayList<>();
- **Ajout** : add(element), add(index, element)
- **Accès** : get(index), set(index, element)
- **Suppression** : remove(index), remove(object)
- **Tri** : Collections.sort(liste)

## HashMap
- **Création** : HashMap<K,V> map = new HashMap<>();
- **Ajout** : put(key, value)
- **Accès** : get(key), containsKey(key)
- **Parcours** : for(Entry<K,V> entry : map.entrySet())

## Gestion des Exceptions
- **try-catch** : Capture des exceptions
- **finally** : Bloc toujours exécuté
- **throw** : Lancer une exception
- **throws** : Déclarer les exceptions possibles
- **Types** : Checked vs Unchecked exceptions`
  },
  'java-5': {
    title: 'Bases de données avec JDBC, APIs, fichiers',
    content: `# JDBC et Manipulation de Fichiers

## JDBC (Java Database Connectivity)
- **Driver** : Chargement du driver de base
- **Connexion** : DriverManager.getConnection()
- **Statement** : Exécution de requêtes SQL
- **ResultSet** : Traitement des résultats
- **PreparedStatement** : Requêtes préparées sécurisées

## Manipulation de Fichiers
- **File** : Représentation de fichiers/dossiers
- **FileReader/FileWriter** : Lecture/écriture de texte
- **BufferedReader** : Lecture efficace ligne par ligne
- **Scanner** : Parsing de fichiers

## APIs et JSON
- **HTTP Client** : Java 11+ HttpClient
- **JSON** : Bibliothèques Jackson, Gson
- **Parsing** : Conversion JSON ↔ Objets Java`
  },

  // Web Programming sessions
  'web-2': {
    title: 'Introduction à PHP, Syntaxe de base, Variables, Boucles, Fonctions',
    content: `# PHP : Langage de Programmation Web

## Syntaxe de Base
- **Balises PHP** : <?php ... ?>
- **Variables** : $nomVariable
- **Constantes** : define('NOM', 'valeur')
- **Commentaires** : //, /* */, #

## Types de Données
- **Scalaires** : boolean, integer, float, string
- **Composés** : array, object
- **Spéciaux** : resource, NULL
- **Typage dynamique** : Type déterminé à l'exécution

## Structures de Contrôle
- **Conditions** : if, elseif, else, switch
- **Boucles** : for, foreach, while, do-while
- **Include/Require** : Inclusion de fichiers

## Fonctions
- **Définition** : function nomFonction($param) {}
- **Paramètres** : Par valeur, par référence (&$param)
- **Valeurs par défaut** : function test($a = 'défaut')
- **Fonctions variables** : $func = 'nomFonction'; $func();`
  },
  'web-3': {
    title: 'Interaction avec les bases de données, Connexion, Exécution de requêtes SQL',
    content: `# PHP et Bases de Données

## PDO (PHP Data Objects)
- **Connexion** : new PDO('mysql:host;dbname', $user, $pass)
- **Avantages** : Abstraction, sécurité, portabilité
- **Gestion d'erreurs** : try-catch, PDO::ERRMODE_EXCEPTION

## Requêtes Sécurisées
- **Requêtes préparées** : prepare(), execute()
- **Paramètres liés** : bindParam(), bindValue()
- **Protection SQL Injection** : Éviter concaténation directe

## CRUD Operations
- **CREATE** : INSERT INTO table VALUES
- **READ** : SELECT, fetch(), fetchAll()
- **UPDATE** : UPDATE table SET WHERE
- **DELETE** : DELETE FROM table WHERE

## Gestion des Résultats
- **fetch()** : Une ligne à la fois
- **fetchAll()** : Toutes les lignes
- **fetchColumn()** : Une colonne spécifique`
  },
  'web-4': {
    title: 'Sessions et Cookies, Gestion des utilisateurs',
    content: `# Sessions et Cookies en PHP

## Sessions
- **Démarrage** : session_start()
- **Variables de session** : $_SESSION['nom']
- **Destruction** : session_destroy()
- **Configuration** : session.cookie_lifetime

## Cookies
- **Création** : setcookie(nom, valeur, expiration)
- **Lecture** : $_COOKIE['nom']
- **Suppression** : setcookie avec expiration passée
- **Sécurité** : httponly, secure flags

## Authentification
- **Login** : Vérification identifiants
- **Stockage session** : $_SESSION['user_id']
- **Vérification** : isset($_SESSION['user_id'])
- **Logout** : session_unset(), session_destroy()

## Sécurité
- **Hachage mots de passe** : password_hash(), password_verify()
- **CSRF** : Tokens anti-CSRF
- **XSS** : htmlspecialchars(), filter_input()`
  },
  'web-5': {
    title: 'AJAX et Interactivité',
    content: `# AJAX et Interactivité Web

## AJAX (Asynchronous JavaScript and XML)
- **XMLHttpRequest** : Objet JavaScript natif
- **fetch()** : API moderne Promise-based
- **Asynchrone** : Sans rechargement de page
- **Formats** : JSON, XML, HTML, texte

## JavaScript côté Client
- **DOM** : Document Object Model
- **Événements** : onclick, onsubmit, addEventListener
- **Manipulation** : getElementById, querySelector
- **Validation** : Contrôles côté client

## PHP côté Serveur
- **Traitement AJAX** : Vérifier $_POST, $_GET
- **Réponses JSON** : json_encode(), header('Content-Type: application/json')
- **Validation serveur** : Toujours valider côté serveur

## Interactivité Avancée
- **Autocomplétion** : Suggestions en temps réel
- **Upload fichiers** : FormData, progression
- **WebSockets** : Communication bidirectionnelle temps réel`
  }
};

export const additionalQuizData = {
  // Python quizzes
  'python-2': {
    title: 'Quiz : Fonctions et manipulation des données',
    questions: [
      {
        id: 1,
        question: 'Comment définit-on une fonction en Python ?',
        options: ['function nom():', 'def nom():', 'func nom():', 'define nom():'],
        correct: 1,
        explanation: 'En Python, on utilise le mot-clé "def" pour définir une fonction.'
      },
      {
        id: 2,
        question: 'Quelle méthode permet d\'ajouter un élément à la fin d\'une liste ?',
        options: ['add()', 'append()', 'insert()', 'push()'],
        correct: 1,
        explanation: 'La méthode append() ajoute un élément à la fin d\'une liste.'
      }
    ]
  },
  'python-3': {
    title: 'Quiz : Structures de données et algorithmes',
    questions: [
      {
        id: 1,
        question: 'Quelle est la complexité temporelle du tri rapide en moyenne ?',
        options: ['O(n)', 'O(n log n)', 'O(n²)', 'O(log n)'],
        correct: 1,
        explanation: 'Le tri rapide a une complexité moyenne de O(n log n).'
      },
      {
        id: 2,
        question: 'Comment accède-t-on à une valeur dans un dictionnaire ?',
        options: ['dict[key]', 'dict.key', 'dict->key', 'dict(key)'],
        correct: 0,
        explanation: 'On accède à une valeur dans un dictionnaire avec dict[key].'
      }
    ]
  },
  // Java quizzes
  'java-2': {
    title: 'Quiz : Programmation orientée objet',
    questions: [
      {
        id: 1,
        question: 'Quel modificateur d\'accès rend un attribut accessible uniquement dans sa classe ?',
        options: ['public', 'protected', 'private', 'package'],
        correct: 2,
        explanation: 'Le modificateur "private" rend un attribut accessible uniquement dans sa propre classe.'
      },
      {
        id: 2,
        question: 'Comment appelle-t-on une méthode qui initialise un objet ?',
        options: ['Initialiseur', 'Constructeur', 'Créateur', 'Builder'],
        correct: 1,
        explanation: 'Un constructeur est une méthode spéciale qui initialise un objet lors de sa création.'
      }
    ]
  },
  // Web programming quizzes
  'web-1': {
    title: 'Quiz : Bases d\'HTML et CSS',
    questions: [
      {
        id: 1,
        question: 'Quelle balise HTML définit le contenu principal d\'une page ?',
        options: ['<content>', '<main>', '<primary>', '<body>'],
        correct: 1,
        explanation: 'La balise <main> définit le contenu principal d\'une page web.'
      },
      {
        id: 2,
        question: 'Quelle propriété CSS contrôle l\'espacement entre les éléments ?',
        options: ['padding', 'margin', 'spacing', 'gap'],
        correct: 1,
        explanation: 'La propriété "margin" contrôle l\'espacement externe entre les éléments.'
      }
    ]
  }
};

export const additionalMindmapData = {
  // Python mindmaps
  'python-2': {
    title: 'Fonctions et manipulation des données',
    nodes: [
      {
        title: 'Fonctions',
        children: [
          {
            title: 'Définition',
            children: [
              { title: 'def nom_fonction(paramètres):' },
              { title: 'return valeur' },
              { title: 'Docstrings pour documentation' }
            ]
          },
          {
            title: 'Paramètres',
            children: [
              { title: 'Positionnels : func(a, b)' },
              { title: 'Nommés : func(a=1, b=2)' },
              { title: 'Par défaut : def func(a=0)' },
              { title: '*args et **kwargs' }
            ]
          }
        ]
      },
      {
        title: 'Manipulation de Données',
        children: [
          {
            title: 'Chaînes de caractères',
            children: [
              { title: 'Indexation : s[0], s[-1]' },
              { title: 'Slicing : s[1:5]' },
              { title: 'Méthodes : .upper(), .split()' }
            ]
          },
          {
            title: 'Listes',
            children: [
              { title: 'Ajout : append(), extend()' },
              { title: 'Suppression : remove(), pop()' },
              { title: 'Tri : sort(), sorted()' }
            ]
          }
        ]
      }
    ]
  },
  // Java mindmaps
  'java-2': {
    title: 'Programmation orientée objet (POO)',
    nodes: [
      {
        title: 'Classes et Objets',
        children: [
          {
            title: 'Structure de classe',
            children: [
              { title: 'Attributs (variables d\'instance)' },
              { title: 'Méthodes (comportements)' },
              { title: 'Constructeurs' }
            ]
          },
          {
            title: 'Instanciation',
            children: [
              { title: 'new ClassName()' },
              { title: 'Appel du constructeur' },
              { title: 'Initialisation des attributs' }
            ]
          }
        ]
      },
      {
        title: 'Encapsulation',
        children: [
          {
            title: 'Modificateurs d\'accès',
            children: [
              { title: 'private : classe uniquement' },
              { title: 'protected : package + héritage' },
              { title: 'public : accès libre' }
            ]
          },
          {
            title: 'Getters et Setters',
            children: [
              { title: 'getProperty() : lecture' },
              { title: 'setProperty() : écriture' },
              { title: 'Contrôle d\'accès aux données' }
            ]
          }
        ]
      }
    ]
  }
};
