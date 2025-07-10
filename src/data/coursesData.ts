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
        title: 'Introductio à Python',
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
    // ==================== PYTHON ====================
    'python-1': {
      title: 'Introduction à Python',
      content: `# Introduction à Python

## Un peu d'histoire
- Créateur : Guido van Rossum, en 1989
- Origine du nom : Inspiré de la troupe comique "Monty Python's Flying Circus"
- Philosophie : Langage de programmation objet, interprété, open source et de haut niveau
- Communauté : Supporté par une large communauté, utilisé par des entreprises comme Google, NASA, YouTube

## Pourquoi utiliser Python ?
- Qualité : Produit du code évolutif et maintenable
- Productivité : Syntaxe claire et concise
- Portabilité : Fonctionne sur Windows, macOS, Linux
- Intégration : S'intègre avec d'autres langages (C, C++, Java)

## Installation et Environnement
### Installation de Python
- Site officiel : python.org
- Anaconda : Distribution incluant Python et bibliothèques pour la Data Science
- Versions : Python 3 (incompatible avec Python 2)

### Exécuter du code Python
- Mode interactif (REPL) : python ou python3 dans un terminal
- Scripts : Fichiers avec extension .py exécutés avec python mon_script.py

## Les Bases du Langage
### Variables et Affectation
\`\`\`python
age = 25
nom = "Alice"
a, b = 10, 20  # Affectations multiples
\`\`\`

### Mots-clés réservés
if, for, while, def, class, etc. ne peuvent pas être utilisés comme noms de variables

### Indentation
\`\`\`python
x = 10
if x > 5:
    print("x est supérieur à 5")  # 4 espaces d'indentation
\`\`\`

## Types de Données Fondamentaux
### Nombres
- int : 10, -5, 0
- float : 3.14, -0.5
- complex : 3 + 4j

### Chaînes de caractères (str)
- Définies avec '...' ou "..."
- Méthodes : lower(), upper(), split(), join(), etc.

### Booléens (bool)
- True ou False

### Conversion de types
\`\`\`python
x = "100"
y = int(x)  # Conversion en entier
\`\`\`

## Opérateurs
### Arithmétiques
+, -, *, /, // (division entière), % (modulo), ** (puissance)

### Comparaison
==, !=, <, >, <=, >=

### Logiques
and, or, not

## Structures de Contrôle : Les Boucles
### Boucle for
\`\`\`python
fruits = ["pomme", "banane", "cerise"]
for fruit in fruits:
    print(fruit)

for i in range(5):  # 0 à 4
    print(f"Répétition {i}")
\`\`\`

### Boucle while
\`\`\`python
compteur = 0
while compteur < 5:
    print(compteur)
    compteur += 1
\`\`\`

### Instructions break et continue
- break : sort de la boucle
- continue : passe à l'itération suivante`
    },
    'python-2': {
      title: 'Fonctions et manipulation des données',
      content: `# Fonctions en Python

## Définition
\`\`\`python
def welcome(name, greeting='Hello'):
    """Docstring : explique la fonction"""
    return f"{greeting}, {name}!"
\`\`\`

## Fonctions anonymes (lambda)
\`\`\`python
(lambda x,y: x + y)(5, 3)  # Retourne 8
\`\`\`

## Documentation (docstring)
\`\`\`python
help(welcome)  # Affiche la docstring
\`\`\`

## Structures de Contrôle
### Conditions (if, elif, else)
\`\`\`python
if age < 18:
    print("Mineur")
elif age >= 65:
    print("Senior")
else:
    print("Adulte")
\`\`\`

### Boucles avec else
\`\`\`python
for i in range(3):
    print(i)
else:
    print("Boucle terminée")  # Exécuté si pas de break
\`\`\`

## Manipulation des Chaînes
### Méthodes utiles
\`\`\`python
ch = "  Bonjour Python  "
ch.strip()  # "Bonjour Python"
ch.lower()  # "  bonjour python  "
"a,b,c".split(",")  # ['a', 'b', 'c']
"-".join(['a', 'b', 'c'])  # "a-b-c"
\`\`\`

### Formatage
\`\`\`python
f"Bonjour {name}"  # f-string (moderne)
"Bonjour {}".format(name)  # Méthode format
\`\`\`

## Expressions Régulières (module re)
\`\`\`python
import re
re.findall(r'\\d+', '123 abc 456')  # ['123', '456']
re.sub(r'\\s+', '-', 'a  b  c')  # "a-b-c"
\`\`\`

## Manipulation de Fichiers
### Lecture/Écriture
\`\`\`python
with open('fichier.txt', 'r', encoding='utf-8') as f:
    contenu = f.read()

with open('output.txt', 'w') as f:
    f.write("Contenu")
\`\`\`

## Modules Utiles
### math
\`\`\`python
import math
math.sqrt(16)  # 4.0
math.pi  # 3.141592...
\`\`\`

### json
\`\`\`python
import json
json.dumps({"a": 1})  # '{"a": 1}'
json.loads('{"a": 1}')  # {'a': 1}
\`\`\``
    },
    'python-3': {
      title: 'Structures de données et algorithmes',
      content: `# Structures de Données en Python

## Listes (list)
\`\`\`python
ma_liste = [1, "a", 3.0]
ma_liste.append(4)  # [1, "a", 3.0, 4]
ma_liste[1:3]  # ["a", 3.0] (slicing)
\`\`\`

### Compréhensions de listes
\`\`\`python
[i*i for i in range(5)]  # [0, 1, 4, 9, 16]
\`\`\`

## Tuples (tuple)
\`\`\`python
mon_tuple = (1, "a", 3.0)
mon_tuple[0]  # 1
x, y, z = mon_tuple  # unpacking
\`\`\`

## Dictionnaires (dict)
\`\`\`python
d = {"nom": "Dupont", "age": 42}
d["nom"]  # "Dupont"
d.get("prenom", "inconnu")  # "inconnu" (valeur par défaut)
\`\`\`

## Ensembles (set)
\`\`\`python
s1 = {1, 2, 3}
s2 = {3, 4, 5}
s1 | s2  # {1, 2, 3, 4, 5} (union)
\`\`\`

## Algorithmes
### Recherche Séquentielle
\`\`\`python
def recherche_seq(lst, val):
    for i, x in enumerate(lst):
        if x == val:
            return i
    return -1
\`\`\`

### Tri par Sélection
\`\`\`python
def tri_selection(lst):
    for i in range(len(lst)):
        min_idx = i
        for j in range(i+1, len(lst)):
            if lst[j] < lst[min_idx]:
                min_idx = j
        lst[i], lst[min_idx] = lst[min_idx], lst[i]
\`\`\`

## Structures Avancées
### Piles (LIFO)
\`\`\`python
stack = []
stack.append(1)  # push
stack.pop()     # pop
\`\`\`

### Files (FIFO)
\`\`\`python
from collections import deque
queue = deque()
queue.append(1)  # enqueue
queue.popleft()  # dequeue
\`\`\`

### Arbres
\`\`\`python
class Noeud:
    def __init__(self, val):
        self.val = val
        self.gauche = None
        self.droit = None
\`\`\``
    },
    'python-4': {
      title: 'Programmation Orientée Objet',
      content: `# Programmation Orientée Objet en Python

## Classes et Objets
\`\`\`python
class Personne:
    def __init__(self, nom, age):
        self.nom = nom  # Attribut
        self.age = age
        
    def se_presenter(self):  # Méthode
        return f"Je m'appelle {self.nom}"
\`\`\`

## Les 4 Piliers de la POO

### 1. Encapsulation
\`\`\`python
class CompteBancaire:
    def __init__(self):
        self._solde = 0  # _ pour indiquer privé (convention)
    
    @property
    def solde(self):
        return self._solde
    
    def deposer(self, montant):
        if montant > 0:
            self._solde += montant
\`\`\`

### 2. Héritage
\`\`\`python
class Etudiant(Personne):
    def __init__(self, nom, age, universite):
        super().__init__(nom, age)
        self.universite = universite
\`\`\`

### 3. Polymorphisme
\`\`\`python
class Animal:
    def parler(self):
        pass

class Chien(Animal):
    def parler(self):
        return "Woof!"

class Chat(Animal):
    def parler(self):
        return "Miaou!"
\`\`\`

### 4. Abstraction
\`\`\`python
from abc import ABC, abstractmethod

class Forme(ABC):
    @abstractmethod
    def aire(self):
        pass
\`\`\`

## Méthodes Spéciales
\`\`\`python
class Vecteur:
    def __init__(self, x, y):
        self.x = x
        self.y = y
        
    def __add__(self, other):
        return Vecteur(self.x + other.x, self.y + other.y)
        
    def __str__(self):
        return f"Vecteur({self.x}, {self.y})"
\`\`\`

## Gestion des Erreurs
\`\`\`python
try:
    x = int(input("Entrez un nombre: "))
except ValueError:
    print("Ce n'est pas un nombre valide!")
else:
    print(f"Vous avez entré {x}")
finally:
    print("Fin de la tentative")
\`\`\``
    },
    'python-5': {
      title: 'Bases de données et APIs',
      content: `# Bases de Données et APIs en Python

## SQLite avec Python
\`\`\`python
import sqlite3

# Connexion et création de table
conn = sqlite3.connect('ma_db.db')
cursor = conn.cursor()

cursor.execute("""
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    age INTEGER
);
""")

# Insertion de données
cursor.execute("INSERT INTO users (name, age) VALUES (?, ?)", ("Alice", 25))
conn.commit()

# Requête
cursor.execute("SELECT * FROM users WHERE age > ?", (20,))
for row in cursor:
    print(row)

conn.close()
\`\`\`

## Outils pour la Science des Données

### NumPy
\`\`\`python
import numpy as np
A = np.array([[1, 2], [3, 4]])
B = np.array([[5, 6], [7, 8]])
print(A.dot(B))  # Produit matriciel
\`\`\`

### Matplotlib
\`\`\`python
import matplotlib.pyplot as plt
x = np.linspace(0, 2*np.pi, 100)
y = np.sin(x)
plt.plot(x, y)
plt.title("Sinusoïde")
plt.show()
\`\`\`

## Requêtes HTTP (API)
\`\`\`python
import requests

# GET request
response = requests.get('https://api.github.com/users/octocat')
data = response.json()
print(data['name'])

# POST request
payload = {'key1': 'value1'}
response = requests.post('https://httpbin.org/post', data=payload)
\`\`\`

## Gestion des Dates
\`\`\`python
from datetime import datetime, timedelta

now = datetime.now()
print(now.strftime("%Y-%m-%d %H:%M:%S"))

tomorrow = now + timedelta(days=1)
\`\`\`

## Manipulation de Fichiers CSV
\`\`\`python
import csv

# Écriture
with open('data.csv', 'w', newline='') as f:
    writer = csv.writer(f)
    writer.writerow(['Nom', 'Age'])
    writer.writerow(['Alice', 25])

# Lecture
with open('data.csv', 'r') as f:
    reader = csv.reader(f)
    for row in reader:
        print(row)
\`\`\``
    },
    // ==================== JAVA ====================
    
  'java-1': {
    title: 'Bases de Java',
    content: `
      Java Fundamentals

      Installation et configuration

      Pour commencer avec Java, vous devez installer :
      
      Le JDK (Java Development Kit) qui contient :
      - Le compilateur javac pour transformer votre code en bytecode
      - La JVM (Java Virtual Machine) pour exécuter les programmes
      - Les bibliothèques standard de Java
      - Les outils comme javadoc pour la documentation

      Choix d'environnement de développement :
      Eclipse : IDE open-source avec support pour de nombreux plugins
      IntelliJ IDEA : Existe en version Community (gratuite) et Ultimate (payante)
      VS Code : Éditeur léger avec extension Java Pack de Microsoft

      Syntaxe de base

      Déclaration de variables :
      int age = 25; // Entier 32 bits
      double prix = 19.99; // Nombre à virgule flottante 64 bits
      boolean estValide = true; // Valeur booléenne
      String message = "Bonjour"; // Chaîne de caractères

      Structures de contrôle :

      Condition if-else :
      if (temperature > 30) {
        System.out.println("Il fait chaud");
      } else if (temperature > 20) {
        System.out.println("Température agréable");
      } else {
        System.out.println("Il fait froid");
      }

      Boucle for :
      for (int i = 0; i < 10; i++) {
        System.out.println("Itération " + i);
      }

      Boucle while :
      int compteur = 0;
      while (compteur < 5) {
        System.out.println(compteur);
        compteur++;
      }
    `
  },
  'java-2': {
    title: 'Programmation Orientée Objet',
    content: `
      Programmation Orientée Objet en Java

      Concepts fondamentaux

      Classe : Modèle pour créer des objets
      Objet : Instance d'une classe
      Héritage : Mécanisme de spécialisation
      Polymorphisme : Capacité à prendre plusieurs formes
      Encapsulation : Protection des données

      Exemple de classe :

      public class CompteBancaire {
          // Attributs (état)
          private String numero;
          private double solde;
          private String proprietaire;

          // Constructeur
          public CompteBancaire(String num, String prop) {
              this.numero = num;
              this.proprietaire = prop;
              this.solde = 0.0;
          }

          // Méthodes (comportement)
          public void deposer(double montant) {
              if (montant > 0) {
                  this.solde += montant;
              }
          }

          public boolean retirer(double montant) {
              if (montant > 0 && this.solde >= montant) {
                  this.solde -= montant;
                  return true;
              }
              return false;
          }

          // Getters
          public double getSolde() {
              return this.solde;
          }
      }

      Utilisation de la classe :

      CompteBancaire compte = new CompteBancaire("FR7630001007941234567890185", "Dupont");
      compte.deposer(1000.0);
      compte.retirer(200.0);
      System.out.println("Solde actuel : " + compte.getSolde());
    `
  },
  'java-3': {
    title: 'Héritage et Interfaces',
    content: `
      Héritage et Interfaces en Java

      Héritage simple

      public class Animal {
          protected String nom;
          protected int age;

          public Animal(String nom, int age) {
              this.nom = nom;
              this.age = age;
          }

          public void seDeplacer() {
              System.out.println("L'animal se déplace");
          }
      }

      public class Chien extends Animal {
          private String race;

          public Chien(String nom, int age, String race) {
              super(nom, age); // Appel du constructeur parent
              this.race = race;
          }

          @Override
          public void seDeplacer() {
              System.out.println("Le chien court");
          }

          public void aboyer() {
              System.out.println("Woof woof!");
          }
      }

      Interfaces

      public interface Volant {
          void decoller();
          void atterrir();
          
          default void faireLePlein() {
              System.out.println("Plein effectué");
          }
      }

      public class Avion implements Volant {
          @Override
          public void decoller() {
              System.out.println("L'avion prend son envol");
          }

          @Override
          public void atterrir() {
              System.out.println("L'avion se pose sur la piste");
          }
      }
    `
  },
  'java-4': {
    title: 'Collections et Génériques',
    content: `
      Collections et Génériques en Java

      Principales collections

      Listes (ordonnées, autorise les doublons) :
      ArrayList : Implémentation basée sur un tableau
      LinkedList : Implémentation basée sur une liste chaînée

      Exemple ArrayList :
      List<String> fruits = new ArrayList<>();
      fruits.add("Pomme");
      fruits.add("Banane");
      fruits.add("Orange");
      fruits.remove("Banane");
      System.out.println(fruits.get(0)); // Pomme

      Map (association clé-valeur) :
      HashMap : Non ordonné, accès rapide
      TreeMap : Ordonné selon l'ordre naturel des clés

      Exemple HashMap :
      Map<String, Integer> ages = new HashMap<>();
      ages.put("Alice", 25);
      ages.put("Bob", 30);
      System.out.println(ages.get("Alice")); // 25

      Génériques

      Permettent de créer des classes et méthodes paramétrées :

      public class Boite<T> {
          private T contenu;

          public void mettre(T nouveauContenu) {
              this.contenu = nouveauContenu;
          }

          public T prendre() {
              return this.contenu;
          }
      }

      Utilisation :
      Boite<String> boiteLettres = new Boite<>();
      boiteLettres.mettre("Bonjour");
      String message = boiteLettres.prendre();
    `
  },
  'java-5': {
    title: 'Exceptions et Flux',
    content: `
      Gestion des exceptions et flux en Java

      Exceptions

      Hiérarchie :
      Throwable
        - Error (erreurs graves non gérées)
        - Exception
            - IOException (obligatoire à traiter)
            - RuntimeException (non obligatoire)

      Gestion avec try-catch :

      try {
          FileInputStream fis = new FileInputStream("fichier.txt");
          int data = fis.read();
          while (data != -1) {
              System.out.print((char) data);
              data = fis.read();
          }
          fis.close();
      } catch (FileNotFoundException e) {
          System.out.println("Fichier non trouvé");
      } catch (IOException e) {
          System.out.println("Erreur de lecture");
      } finally {
          System.out.println("Nettoyage des ressources");
      }

      Flux (I/O)

      Lecture de fichier avec BufferedReader :
      try (BufferedReader br = new BufferedReader(new FileReader("fichier.txt"))) {
          String ligne;
          while ((ligne = br.readLine()) != null) {
              System.out.println(ligne);
          }
      }

      Écriture avec BufferedWriter :
      try (BufferedWriter bw = new BufferedWriter(new FileWriter("sortie.txt"))) {
          bw.write("Première ligne");
          bw.newLine();
          bw.write("Deuxième ligne");
      }
    `
  },

    // ==================== WEB ====================
    'web-1': {
      title: 'HTML/CSS - Bases du développement web',
      content: `# HTML/CSS - Fondamentaux

## Structure HTML de base
\`\`\`html
<!DOCTYPE html>
<html>
<head>
  <title>Ma Page</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1>Titre Principal</h1>
  <p>Paragraphe de texte</p>
</body>
</html>
\`\`\`

## Balises essentielles
- Structure : \`<div>\`, \`<span>\`, \`<header>\`, \`<footer>\`
- Texte : \`<h1>\`-\`<h6>\`, \`<p>\`, \`<a href="lien.html">\`
- Media : \`<img src="image.jpg" alt="description">\`
- Formulaires : \`<form>\`, \`<input>\`, \`<select>\`, \`<textarea>\`

## CSS de base
\`\`\`css
/* Sélecteurs */
body {
  font-family: Arial;
  margin: 0;
  padding: 20px;
}

/* Classes et IDs */
.menu {
  background-color: #f0f0f0;
}

#header {
  font-size: 2em;
}
\`\`\``
    },
    'web-2': {
      title: 'JavaScript - Interactivité côté client',
      content: `# JavaScript - Fondamentaux

## Variables et types
\`\`\`javascript
// Déclaration
const nom = "Alice";  // constante
let age = 25;         // variable modifiable
var ancienne = 30;    // ancienne syntaxe (à éviter)

// Types
let texte = "Bonjour";
let nombre = 42;
let estVrai = true;
let tableau = [1, 2, 3];
let objet = { nom: "Alice", age: 25 };
\`\`\`

## Fonctions
\`\`\`javascript
// Déclaration
function saluer(nom) {
  return \`Bonjour, \${nom}!\`;
}

// Expression de fonction
const addition = function(a, b) {
  return a + b;
};

// Arrow function (ES6)
const multiplier = (a, b) => a * b;
\`\`\`

## Manipulation du DOM
\`\`\`javascript
// Sélection
const element = document.getElementById('mon-id');
const elements = document.querySelectorAll('.ma-classe');

// Modification
element.textContent = "Nouveau texte";
element.style.color = "blue";

// Événements
element.addEventListener('click', function() {
  alert('Clic détecté!');
});
\`\`\``
    },
    'web-3': {
      title: 'PHP - Traitement côté serveur',
      content: `# PHP - Fondamentaux

## Syntaxe de base
\`\`\`php
<?php
// Variables
$nom = "Alice";
$age = 25;

// Conditions
if ($age >= 18) {
  echo "Majeur";
} else {
  echo "Mineur";
}

// Boucles
for ($i = 0; $i < 5; $i++) {
  echo $i;
}

// Tableaux
$fruits = array("Pomme", "Banane", "Orange");
echo $fruits[0]; // "Pomme"
?>
\`\`\`

## Formulaires et traitement
\`\`\`php
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $nom = htmlspecialchars($_POST['nom']);
  $email = htmlspecialchars($_POST['email']);
  
  echo "Bonjour $nom, votre email est $email";
}
?>
<form method="post" action="">
  <input type="text" name="nom">
  <input type="email" name="email">
  <button type="submit">Envoyer</button>
</form>
\`\`\``
    },
    'web-4': {
      title: 'Bases de données avec PHP',
      content: `# PHP et MySQL

## Connexion et requêtes
\`\`\`php
<?php
// Connexion
$conn = new mysqli("localhost", "user", "password", "ma_base");

// Vérification
if ($conn->connect_error) {
  die("Échec de connexion: " . $conn->connect_error);
}

// Requête SELECT
$sql = "SELECT id, nom FROM utilisateurs";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  while($row = $result->fetch_assoc()) {
    echo "ID: " . $row["id"]. " - Nom: " . $row["nom"]. "<br>";
  }
} else {
  echo "0 résultats";
}

// Requête préparée (sécurité)
$stmt = $conn->prepare("INSERT INTO utilisateurs (nom, email) VALUES (?, ?)");
$stmt->bind_param("ss", $nom, $email);
$stmt->execute();

$conn->close();
?>
\`\`\`

## Sécurité
- Toujours utiliser des requêtes préparées
- Valider et filtrer les entrées
- Échapper les sorties (htmlspecialchars)
- Utiliser des mots de passe hachés (password_hash)`
    },
    'web-5': {
      title: 'AJAX et APIs',
      content: `# AJAX et APIs Web

## Requête AJAX avec JavaScript
\`\`\`javascript
// Avec fetch API
fetch('api.php')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    document.getElementById('result').innerHTML = data.message;
  })
  .catch(error => console.error('Erreur:', error));

// Avec XMLHttpRequest
const xhr = new XMLHttpRequest();
xhr.open('GET', 'api.php', true);
xhr.onload = function() {
  if (this.status === 200) {
    const data = JSON.parse(this.responseText);
    console.log(data);
  }
};
xhr.send();
\`\`\`

## Création d'API simple en PHP
\`\`\`php
<?php
header('Content-Type: application/json');

$action = $_GET['action'] ?? '';

switch ($action) {
  case 'getUsers':
    $users = [['id' => 1, 'name' => 'Alice'], ['id' => 2, 'name' => 'Bob']];
    echo json_encode($users);
    break;
    
  case 'addUser':
    $data = json_decode(file_get_contents('php://input'), true);
    // Traitement...
    echo json_encode(['status' => 'success']);
    break;
    
  default:
    echo json_encode(['error' => 'Action non reconnue']);
}
?>
\`\`\``
    },
    // ==================== ANDROID ====================
    'android-1': {
    title: 'Introduction à Android Studio',
    content: `
PREMIÈRE APPLICATION ANDROID : LES FONDATIONS

Le point de départ de tout développeur Android est la création d'un premier projet dans Android Studio. En utilisant l'assistant "New Project", on choisit généralement un modèle comme "Empty Activity". Ce modèle génère une structure de projet minimale mais fonctionnelle, incluant une Activity principale (l'écran de base) et son fichier de layout (l'interface visuelle). Le lancement de cette application sur un émulateur ou un appareil physique affichera un simple "Hello, World!", validant ainsi que l'environnement de développement est correctement configuré.

LES COMPOSANTS ESSENTIELS

Activity : Le Cœur d'un Écran
Une Activity représente un seul écran de l'application. C'est une classe Java ou Kotlin qui gère les interactions de l'utilisateur avec cet écran. Sa méthode principale est 'onCreate()', appelée lorsque l'écran est créé. C'est là que l'on associe le layout XML à l'Activity et que l'on initialise les composants.

Layouts : La Structure Visuelle en XML
Les layouts sont des fichiers XML qui définissent l'apparence et la disposition des éléments de l'interface (boutons, textes, images). Cette séparation entre la logique (Java/Kotlin) et la présentation (XML) est un principe fondamental d'Android.
  ConstraintLayout : Le plus puissant et flexible. Il permet de positionner les éléments en définissant des contraintes les uns par rapport aux autres et par rapport au conteneur parent. Idéal pour des interfaces complexes et adaptatives.
  LinearLayout : Plus simple, il arrange les éléments les uns après les autres, soit verticalement, soit horizontalement. Parfait pour des listes ou des barres d'outils simples.

LE MANIFESTE : LA CARTE D'IDENTITÉ DE L'APPLICATION

Le fichier AndroidManifest.xml est le fichier de configuration central et obligatoire. Il décrit les informations essentielles de l'application pour le système Android.
Il contient :
- Le nom du package unique de l'application.
- La déclaration de tous les composants (Activities, Services, etc.).
- Les permissions requises (accès Internet, caméra, contacts...).
- L'icône de l'application et l'activité à lancer au démarrage.

Exemple de déclaration d'une Activity principale dans le manifest :

<activity android:name=".MainActivity" android:exported="true">
    <intent-filter>
        <action android:name="android.intent.action.MAIN" />
        <category android:name="android.intent.category.LAUNCHER" />
    </intent-filter>
</activity>
`
  },
  'android-2': {
    title: 'Interfaces Utilisateur Android',
    content: `
CONSTRUCTION D'INTERFACES UTILISATEUR

L'interface utilisateur (UI) est construite à l'aide d'une hiérarchie d'objets appelés Views.

VIEWS : LES BRIQUES DE BASE

TextView : Pour afficher du texte statique. On peut personnaliser la taille, la couleur, le style (gras, italique) via des attributs XML.
EditText : Pour la saisie de texte par l'utilisateur. C'est un champ de formulaire qui permet de spécifier le type de contenu attendu (texte, nombre, mot de passe) pour adapter le clavier.
Button : Pour déclencher des actions suite à un clic de l'utilisateur. On lui attache un 'listener' (un écouteur d'événement) dans le code pour exécuter une fonction lors du clic.

RECYCLERVIEW : POUR LES LISTES LONGUES ET PERFOMANTES

Pour afficher des listes de données qui peuvent être longues (contacts, articles, produits), utiliser RecyclerView est indispensable. Il est optimisé pour ne charger que les éléments visibles à l'écran, en réutilisant les vues pour économiser la mémoire et garantir un défilement fluide.
  Adapter : C'est le pont entre vos données (une liste d'objets) et le RecyclerView. Il est responsable de créer les vues pour chaque élément et de lier les données à ces vues.
  ViewHolder : C'est un objet qui contient les références aux vues d'un seul item de la liste (ex: un TextView pour le nom, une ImageView pour la photo). Le RecyclerView crée un petit nombre de ViewHolders et les recycle en permanence.

STRUCTURE TECHNIQUE D'ANDROID

Noyau Linux : La base du système d'exploitation. Il gère les processus, la mémoire, les pilotes matériels et la sécurité.
Bibliothèques natives : Écrites en C/C++, elles fournissent des fonctionnalités de bas niveau comme le rendu graphique 2D/3D, la lecture multimédia et le moteur de base de données SQLite.
Android Runtime (ART) : La machine virtuelle optimisée qui exécute le code de votre application. Votre code Java/Kotlin est compilé en un format intermédiaire (bytecode DEX) qu'ART exécute.

STRUCTURE D'UN PROJET ANDROID STUDIO

src/main/java/ : Contient tous vos fichiers de code source Java ou Kotlin.
res/ : Contient toutes les ressources non-code.
  res/layout/ : Fichiers XML définissant les interfaces utilisateur.
  res/drawable/ : Fichiers d'images (png, jpg, svg) ou de formes XML.
  res/values/ : Fichiers XML pour les ressources simples :
    strings.xml : Toutes les chaînes de caractères de votre app.
    colors.xml : Les codes de couleur utilisés dans l'app.
    styles.xml : Les thèmes et styles visuels.
  res/raw/ : Fichiers bruts comme des sons ou des vidéos.
AndroidManifest.xml : Fichier de configuration central de l'application.
`
  },
  'android-3': {
    title: 'Navigation et Fragments',
    content: `
NAVIGATION ENTRE LES ÉCRANS : LES INTENTS

Pour passer d'un écran (Activity) à un autre, on utilise un objet Intent. Un Intent est un message qui exprime une intention, comme "démarrer une autre activité".

// Création d'un Intent pour lancer AutreActivity depuis l'activité actuelle (this)
Intent intent = new Intent(this, AutreActivity.class);

// On peut aussi passer des données simples à la nouvelle activité
intent.putExtra("USER_ID", 123);
intent.putExtra("USER_NAME", "Alex");

// Démarrer la nouvelle activité
startActivity(intent);

FRAGMENTS : DES INTERFACES MODULAIRES

Un Fragment est une "sous-activité" qui représente une portion réutilisable de l'interface utilisateur. Une Activity peut héberger plusieurs Fragments, ce qui est très utile pour créer des interfaces adaptatives (par exemple, sur une tablette, afficher une liste et le détail côte à côte).

Cycle de vie d'un Fragment :
  onAttach() : Le fragment est attaché à son Activity hôte.
  onCreate() : Initialisation non graphique du fragment.
  onCreateView() : Méthode cruciale où l'on "gonfle" (crée) la vue du fragment à partir d'un fichier layout XML.
  onViewCreated() : Appelé juste après onCreateView(), idéal pour configurer les vues (ex: attacher des listeners aux boutons).
  onStart() / onResume() : Le fragment est visible et interactif.
  onPause() / onStop() : Le fragment n'est plus au premier plan ou est invisible.
  onDestroyView() : La hiérarchie de vues du fragment est détruite pour libérer la mémoire.
  onDestroy() : Nettoyage final du fragment.
  onDetach() : Le fragment est détaché de son Activity.

Communication entre Fragments :
La méthode moderne et recommandée est d'utiliser un ViewModel partagé. Le ViewModel est un objet qui survit aux changements de configuration (comme la rotation de l'écran) et qui permet aux fragments de partager des données et des événements de manière découplée.

Intégration des Fragments :
1. Intégration Statique (dans le XML) : En utilisant la balise <fragment>. Simple mais peu flexible.
2. Intégration Dynamique (dans le code) : C'est la méthode recommandée pour sa flexibilité.
   - Obtenir le FragmentManager.
   - Démarrer une transaction (beginTransaction).
   - Effectuer des opérations (add, replace, remove).
   - Ajouter à la "back stack" (pile de retour) pour permettre à l'utilisateur de revenir en arrière.
   - Valider la transaction (commit).
`
  },
  'android-4': {
    title: 'Persistance des données',
    content: `
STOCKAGE LOCAL DES DONNÉES

Pour que les données d'une application survivent à sa fermeture, il faut les stocker localement sur l'appareil.

SHPREDPREFERENCES : POUR LES DONNÉES SIMPLES

Idéal pour stocker de petites quantités de données sous forme de paires clé-valeur. C'est parfait pour les préférences utilisateur, les scores, ou un drapeau indiquant si l'utilisateur a déjà vu le tutoriel.
Exemple pour sauvegarder :
  SharedPreferences prefs = getSharedPreferences("mes_prefs", MODE_PRIVATE);
  prefs.edit().putString("cle_utilisateur", "valeur_sauvegardee").apply();

Exemple pour lire :
  SharedPreferences prefs = getSharedPreferences("mes_prefs", MODE_PRIVATE);
  String valeur = prefs.getString("cle_utilisateur", "valeur_par_defaut_si_non_trouve");

ROOM DATABASE : POUR LES DONNÉES STRUCTURÉES

Room est la bibliothèque recommandée par Google pour la persistance de données. C'est une couche d'abstraction au-dessus de la base de données SQLite qui rend son utilisation beaucoup plus simple, plus sûre et moins verbeuse.
Composants de Room :
  Entity : Une classe de données (en Java/Kotlin) qui représente une table dans la base de données.
  DAO (Data Access Object) : Une interface où vous définissez vos méthodes d'accès aux données (insérer, lire, mettre à jour, supprimer) en utilisant des annotations et des requêtes SQL.
  Database : Une classe abstraite qui est le point d'accès principal à la base de données et qui relie les Entities et les DAOs.

SQLITE : LA BASE DE DONNÉES SOUS-JACENTE

SQLite est le moteur de base de données relationnelle intégré à Android. Avant Room, les développeurs interagissaient directement avec lui, ce qui était plus complexe.
Concepts Clés :
  Le Contrat (Contract Class) : Une classe qui définit de manière centralisée les noms des tables et des colonnes pour éviter les erreurs.
  SQLiteOpenHelper : Une classe d'aide qui gère la création de la base de données et les mises à jour de sa structure (migrations).

COMPARATIF : QUAND UTILISER QUOI ?

SharedPreferences :
  Usage : Données très simples, préférences, réglages, petits flags.
  Format : Clé-valeur.
  Points forts : Très simple et rapide à mettre en place.

Room / SQLite :
  Usage : Données structurées, volumineuses ou relationnelles (liste de produits, messages, utilisateurs).
  Format : Base de données SQL avec tables, lignes et colonnes.
  Points forts : Robuste, structuré, puissant. Permet des requêtes complexes (tri, filtre, jointures). Room ajoute la sécurité de type et la simplicité.
`
  },
  'android-5': {
    title: 'Fonctionnalités Natives et Déploiement',
    content: `
ACCÈS AUX APIS WEB AVEC RETROFIT

Retrofit est la bibliothèque de référence pour communiquer avec des serveurs distants via des APIs HTTP. Elle transforme une API en une interface Java/Kotlin simple à utiliser.

Exemple d'interface de service avec Retrofit :
public interface ApiService {
    // Définit un appel GET vers l'endpoint "users/{id}"
    @GET("users/{id}")
    // La méthode pour récupérer un utilisateur par son ID
    Call<User> getUser(@Path("id") int userId);
}

GESTION DES PERMISSIONS

Pour accéder à des données sensibles (localisation, contacts) ou à des fonctionnalités matérielles (caméra, microphone), l'application doit demander la permission à l'utilisateur.
1. Déclaration dans l'AndroidManifest.xml : Déclarer la permission nécessaire.
   <uses-permission android:name="android.permission.CAMERA" />
2. Demande à l'exécution (Runtime) : Pour les permissions dangereuses, il faut afficher une boîte de dialogue système au moment où l'application en a besoin en utilisant la méthode 'requestPermissions()'.

FONCTIONNALITÉS NATIVES

Localisation (GPS) :
On utilise le 'FusedLocationProviderClient' des services Google Play. Le processus consiste à demander la permission de localisation, puis à appeler une méthode pour obtenir la dernière position connue ou pour s'abonner à des mises à jour de position en temps réel.

Caméra :
L'API moderne est CameraX, une bibliothèque Jetpack qui simplifie énormément l'utilisation de la caméra. On ajoute un composant 'PreviewView' dans le layout pour afficher l'aperçu, on demande la permission, puis on configure des cas d'usage comme la prise de photo (ImageCapture) ou l'enregistrement vidéo (VideoCapture).

DÉPLOIEMENT ET GÉNÉRATION D'UN FICHIER D'INSTALLATION

Pour distribuer une application, il faut la packager dans un format installable.
APK (Android Package Kit) : Le format de fichier traditionnel. Un seul fichier qui contient tout.
AAB (Android App Bundle) : Le format de publication moderne et recommandé pour le Google Play Store. Il permet à Google de générer des APKs optimisés pour chaque configuration d'appareil, réduisant ainsi la taille du téléchargement pour l'utilisateur.

Processus de génération dans Android Studio :
1. Aller dans le menu Build > Generate Signed Bundle / APK...
2. Choisir "Android App Bundle" (recommandé pour le Play Store) ou "APK".
3. Créer ou utiliser un "Keystore". C'est un fichier qui contient votre clé de signature privée. IL EST CRUCIAL DE NE JAMAIS LE PERDRE. Il prouve que vous êtes le propriétaire de l'application et est indispensable pour toutes les futures mises à jour.
4. Sélectionner la variante de build "release".
5. Android Studio génère le fichier signé, prêt à être téléversé sur le Google Play Console.
`
  },

    'laravel-1': {
      title: 'Installation et Structure',
      content: `
INSTALLATION VIA COMPOSER

Composer est le gestionnaire de dépendances pour PHP. C'est l'outil standard pour installer Laravel et ses paquets. Il lit un fichier (composer.json) pour savoir quelles bibliothèques télécharger pour votre projet.

La Commande Essentielle :
Pour créer un nouveau projet Laravel, vous utilisez la commande suivante dans votre terminal. Cette commande télécharge le squelette de l'application Laravel et installe toutes les dépendances nécessaires.

    composer create-project laravel/laravel mon-projet

Détail de la commande :
  'create-project' : est une commande Composer pour créer un projet à partir d'un paquet existant.
  'laravel/laravel' : est le nom du paquet officiel du squelette de l'application Laravel.
  'mon-projet' : est le nom du dossier qui sera créé pour contenir votre projet.

Alternative : Laravel Installer
Pour une installation plus rapide, vous pouvez installer globalement l'installateur Laravel :
    composer global require laravel/installer
Puis créer un projet avec une commande plus simple :
    laravel new mon-projet

STRUCTURE D'UN PROJET LARAVEL

Un projet Laravel suit une structure de dossiers très organisée, basée sur le principe de la convention plutôt que de la configuration.

  routes/ : Ce dossier contient toutes les définitions de routes de votre application.
    web.php : Pour les routes de l'interface web. Elles ont accès à la session, aux cookies, etc.
    api.php : Pour les routes de votre API. Elles sont sans état (stateless) et sont automatiquement préfixées par /api.

  resources/views/ : Contient tous les templates de votre application. Laravel utilise le moteur de template Blade, qui permet d'écrire du code PHP de manière très lisible et d'utiliser des directives comme @if, @foreach, @extends.

  app/Http/Controllers/ : C'est ici que réside la logique principale de votre application. Un contrôleur reçoit une requête, interagit avec les modèles (données), et retourne une vue (réponse). C'est le 'C' du modèle MVC (Modèle-Vue-Contrôleur).

  app/Models/ : Contient toutes vos classes de modèles Eloquent. Chaque modèle correspond généralement à une table dans votre base de données.

  database/migrations/ : Les migrations sont comme un système de contrôle de version pour votre base de données. Chaque fichier de migration contient des instructions pour créer ou modifier des tables.

  .env : Fichier de configuration de l'environnement. Il contient toutes les variables spécifiques à votre machine, comme les informations de connexion à la base de données, les clés d'API, etc. Ce fichier ne doit JAMAIS être partagé ou versionné.
`
    },
    'laravel-2': {
      title: 'Routing',
      content: `
LE SYSTÈME DE ROUTING DANS LARAVEL

Le routing est le mécanisme qui mappe une URL demandée par un utilisateur à une action spécifique dans votre application (généralement une méthode d'un contrôleur).

FICHIER PRINCIPAL : routes/web.php

C'est le fichier où vous définirez la plupart des routes pour votre interface utilisateur.

Exemple de route simple (route avec une fonction de rappel ou "Closure") :
Cette route répond à une requête GET sur l'URL racine ('/'). Quand elle est appelée, elle exécute la fonction et retourne la vue 'welcome'. C'est utile pour des pages très simples.

    Route::get('/', function () {
        return view('welcome');
    });

Verbes HTTP disponibles :
    Route::get($uri, $callback);
    Route::post($uri, $callback);
    Route.put($uri, $callback);
    Route::patch($uri, $callback);
    Route::delete($uri, $callback);

UTILISATION DES CONTRÔLEURS (LA BONNE PRATIQUE)

Pour toute logique un peu complexe, il est préférable de lier une route à une méthode de contrôleur.

Création d'un contrôleur :
Vous utilisez la ligne de commande Artisan, l'outil en ligne de commande de Laravel.

    php artisan make:controller MonController

Pour créer un contrôleur avec toutes les méthodes de base pour un CRUD (Create, Read, Update, Delete) :

    php artisan make:controller MonController --resource

Lier une route à un contrôleur :
Voici comment lier l'URL '/utilisateurs' à la méthode 'index' du contrôleur 'UserController'.

    use App\Http\Controllers\UserController;

    Route::get('/utilisateurs', [UserController::class, 'index']);

Routes de type Ressource :
Pour éviter de devoir écrire une route pour chaque action CRUD, Laravel propose une méthode magique :

    Route::resource('articles', ArticleController::class);

Cette seule ligne de code génère automatiquement 7 routes pour gérer les articles :
  index (GET /articles)
  create (GET /articles/create)
  store (POST /articles)
  show (GET /articles/{article})
  edit (GET /articles/{article}/edit)
  update (PUT/PATCH /articles/{article})
  destroy (DELETE /articles/{article})
`
    },
    'laravel-3': {
      title: 'Eloquent ORM',
      content: `
ELOQUENT ORM : PARLER À VOTRE BASE DE DONNÉES

Eloquent est un ORM (Object-Relational Mapper) inclus avec Laravel. Il fournit une manière simple et élégante d'interagir avec votre base de données. Au lieu d'écrire des requêtes SQL complexes, vous travaillez avec des objets PHP.

MODÈLES ELOQUENT

Chaque table de votre base de données a un "Modèle" correspondant qui est utilisé pour interagir avec cette table.

Créer un modèle :
La commande Artisan suivante crée un modèle 'Article'. L'option '-m' crée également le fichier de migration correspondant.

    php artisan make:model Article -m

Exemple de classe de modèle :
    namespace App\Models;
    use Illuminate\Database\Eloquent\Factories\HasFactory;
    use Illuminate\Database\Eloquent\Model;

    class User extends Model
    {
        use HasFactory;

        // Par convention, Laravel suppose que la table est le nom du modèle au pluriel ('users').
        // Si ce n'est pas le cas, vous pouvez le spécifier :
        protected $table = 'utilisateurs';

        // Pour la sécurité, vous devez spécifier quels champs peuvent être remplis en masse.
        protected $fillable = ['name', 'email', 'password'];
    }

Récupérer des données :
    // Récupérer tous les utilisateurs
    $users = User::all();

    // Trouver un utilisateur par son ID
    $user = User::find(1);

    // Faire une requête plus complexe
    $activeUsers = User::where('status', 'active')->orderBy('name')->get();

LES RELATIONS ELOQUENT

C'est la fonctionnalité la plus puissante d'Eloquent. Elle permet de définir et de charger facilement les relations entre vos tables.

Relation One-To-Many (Un à plusieurs) :
Un utilisateur peut avoir plusieurs articles.
    // Dans le modèle User.php
    public function articles()
    {
        return $this->hasMany(Article::class);
    }

Relation Belongs To (Appartient à) :
Un article appartient à un seul utilisateur. C'est l'inverse de la relation 'hasMany'.
    // Dans le modèle Article.php
    public function user()
    {
        return $this->belongsTo(User::class);
    }

Utiliser les relations :
    // Récupérer l'utilisateur avec l'ID 1 et tous ses articles
    $user = User::find(1);
    $articles = $user->articles;

    // Récupérer l'article avec l'ID 5 et son auteur
    $article = Article::find(5);
    $authorName = $article->user->name;
`
    },
    'laravel-4': {
      title: 'Authentification',
      content: `
LE SYSTÈME D'AUTHENTIFICATION DE LARAVEL

Laravel rend la mise en place d'un système d'authentification (inscription, connexion, déconnexion, réinitialisation de mot de passe) extrêmement simple grâce à des "Starter Kits".

INSTALLATION D'UN STARTER KIT

Ancienne méthode : Laravel UI (toujours fonctionnel mais moins recommandé)
    composer require laravel/ui
    php artisan ui bootstrap --auth
    npm install && npm run dev

Méthodes modernes : Breeze ou Jetstream
Laravel Breeze est un starter kit minimaliste et élégant.
    composer require laravel/breeze --dev
    php artisan breeze:install
    npm install && npm run dev
Cette commande installe toutes les vues, les contrôleurs et les routes nécessaires pour un système d'authentification complet.

PROTÉGER LES ROUTES AVEC LES MIDDLEWARES

Un middleware est une couche qui filtre les requêtes HTTP entrant dans votre application. C'est le mécanisme parfait pour vérifier si un utilisateur est authentifié.

Middleware 'auth' :
Ce middleware vérifie si l'utilisateur est connecté. Si ce n''est pas le cas, il est redirigé vers la page de connexion.
Il s'applique à une route unique ou à un groupe de routes.

    // Protéger une seule route
    Route::get('/dashboard', [DashboardController::class, 'index'])->middleware('auth');

    // Protéger un groupe de routes
    Route::middleware(['auth'])->group(function () {
        Route::get('/profil', [ProfileController::class, 'show']);
        Route::post('/profil', [ProfileController::class, 'update']);
    });

Middleware 'guest' :
Ce middleware fait l'inverse. Il est utilisé pour les pages que seuls les utilisateurs non connectés devraient pouvoir voir, comme les pages de connexion et d'inscription. Si un utilisateur déjà connecté essaie d'y accéder, il sera redirigé vers son tableau de bord.

    Route::get('/login', [LoginController::class, 'showLoginForm'])->middleware('guest');
`
    },
    'laravel-5': {
      title: 'API REST',
      content: `
CRÉATION D'UNE API RESTFUL AVEC LARAVEL

Laravel est parfaitement adapté pour servir de backend et créer des API REST robustes pour des applications web (SPA) ou mobiles.

TRANSFORMER LES DONNÉES AVEC LES API RESOURCES

Il est rare de vouloir retourner directement un modèle Eloquent en JSON. Les API Resources agissent comme une couche de transformation entre vos modèles et la réponse JSON, vous donnant un contrôle total sur les données exposées.

Créer une ressource :
    php artisan make:resource UserResource

Configurer la ressource :
Dans le fichier 'app/Http/Resources/UserResource.php', vous spécifiez quels attributs du modèle doivent être inclus dans la réponse JSON.

    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'nom_utilisateur' => $this->name,
            'adresse_email' => $this->email,
            'date_creation' => $this->created_at->toDateTimeString(),
        ];
    }

Utiliser la ressource dans un contrôleur :
    use App\Models\User;
    use App\Http\Resources\UserResource;

    public function show($id)
    {
        return new UserResource(User::findOrFail($id));
    }

DÉFINIR LES ROUTES D'API DANS routes/api.php

Les routes définies dans ce fichier sont sans état (pas de session) et sont automatiquement préfixées par '/api'.

Route de ressource API :
Similaire à Route::resource, mais optimisé pour les API (elle ne génère pas les routes 'create' et 'edit' qui retournent des vues HTML).

    use App\Http\Controllers\Api\UserController;

    Route::apiResource('users', UserController::class);

SÉCURISER L'API AVEC LARAVEL SANCTUM

Sanctum est le système d'authentification officiel de Laravel pour les SPAs et les APIs. Il est léger et simple à utiliser.

Principe des Tokens :
L'authentification ne se fait pas par session, mais par des "tokens" (jetons).
1. Un utilisateur s'authentifie une fois avec son email/mot de passe via une route spécifique.
2. S'il est authentifié, Sanctum lui génère un token unique.
3. Pour toutes les requêtes suivantes, l'application cliente doit inclure ce token dans l'en-tête HTTP 'Authorization'.
   Authorization: Bearer VOTRE_TOKEN_ICI
4. Sanctum intercepte chaque requête, valide le token et authentifie l'utilisateur associé.
`
    },

    'database-1': {
      title: 'Concepts de Base Fondamentaux',
      content: `
FONDAMENTAUX DES BASES DE DONNÉES

Une base de données est bien plus qu'un simple lieu de stockage. C'est un système structuré et organisé qui permet de conserver, de gérer et de récupérer de grandes quantités d'informations de manière efficace, cohérente et sécurisée. Contrairement à de simples fichiers (comme des feuilles de calcul), une base de données prévient les problèmes de redondance, d'incohérence et de sécurité des données.

LES SGBD (SYSTÈME DE GESTION DE BASE DE DONNÉES)

Le SGBD est le logiciel qui sert d'interface entre l'utilisateur (ou l'application) et la base de données elle-même. C'est le moteur qui exécute les requêtes, gère les accès concurrents, assure l'intégrité des données et effectue les sauvegardes.

Types de SGBD relationnels populaires :
  MySQL : C'est le SGBD open-source le plus utilisé dans le monde du développement web, souvent dans le cadre de la stack "LAMP" (Linux, Apache, MySQL, PHP). Il est connu pour sa rapidité, sa facilité d'utilisation et sa grande communauté. Il existe en version communautaire gratuite et en versions commerciales avec plus de fonctionnalités.
  PostgreSQL : Souvent considéré comme le SGBD open-source le plus avancé. Il est réputé pour son respect rigoureux des standards SQL, sa robustesse et ses fonctionnalités étendues (types de données géographiques, JSON natif, forte extensibilité). C'est un excellent choix pour les applications complexes qui exigent une très haute intégrité des données.
  SQLite : Un SGBD "embarqué", ce qui signifie qu'il n'y a pas de processus serveur séparé. La base de données entière est contenue dans un seul fichier sur le disque. Il est extrêmement léger et est utilisé massivement dans les applications mobiles (Android, iOS), les navigateurs web et les logiciels de bureau pour le stockage de données locales.

LE MODÈLE RELATIONNEL : LA STRUCTURE REINE

Proposé par Edgar F. Codd en 1970, c'est le modèle dominant pour les bases de données structurées. Il organise les données dans des tables.

  Tables (ou Relations) : Une table est une grille, similaire à une feuille de calcul, représentant une entité du monde réel (ex: 'Utilisateurs', 'Produits', 'Factures').

  Colonnes (ou Attributs) : Chaque colonne représente une propriété de l'entité et a un type de données strict (ex: 'nom' de type TEXT, 'date_de_naissance' de type DATE, 'prix' de type DECIMAL). Le typage garantit l'intégrité des données.

  Lignes (ou Enregistrements) : Chaque ligne est une instance unique de l'entité. Par exemple, une ligne dans la table 'Utilisateurs' représente une personne spécifique avec son nom, son email, etc.

  Clés : Les clés sont le mécanisme fondamental qui permet d'identifier les enregistrements et de créer des liens.
    Clé Primaire (Primary Key - PK) : C'est la colonne (ou l'ensemble de colonnes) qui identifie de manière unique et non-ambiguë chaque ligne dans une table. Une clé primaire ne peut pas contenir de valeurs nulles (NULL) et doit être unique. Le plus souvent, c'est un simple entier auto-incrémenté nommé 'id'.
    Clé Étrangère (Foreign Key - FK) : C'est la "colle" du modèle relationnel. C'est une colonne dans une table qui fait référence à la clé primaire d'une autre table. Par exemple, dans une table 'Commandes', une colonne 'client_id' serait une clé étrangère faisant référence à la colonne 'id' de la table 'Clients'. Cela établit une relation entre une commande et le client qui l'a passée.
`
    },
    'database-2': {
      title: 'Modélisation des Données',
      content: `
CONCEPTION D'UNE BASE DE DONNÉES : L'ART DE LA MODÉLISATION

La modélisation est la phase de conception, le plan d'architecte avant de construire la maison. Une bonne modélisation est cruciale pour garantir la performance, la cohérence et l'évolutivité d'une application. L'objectif est de représenter le monde réel de manière logique et efficace.

MÉTHODE MERISE

C'est une méthode de conception formelle, très structurée et populaire en France. Elle guide le concepteur à travers plusieurs niveaux d'abstraction.
  MCD (Modèle Conceptuel de Données) : C'est la première étape, une vue de haut niveau. On se concentre sur le "quoi" et non le "comment". On identifie les entités (ex: CLIENT, PRODUIT) et les associations qui les lient (ex: un CLIENT "évalue" un PRODUIT). On y définit aussi les cardinalités. C'est un schéma compréhensible par des non-informaticiens.
  MLD (Modèle Logique de Données) : C'est la traduction du MCD en un modèle relationnel. On applique des règles de passage strictes : chaque entité devient une table. Chaque association devient soit une clé étrangère (pour les relations 1-n), soit une nouvelle table, appelée table de jointure ou de pivot (pour les relations n-n).
  MPD (Modèle Physique de Données) : C'est la dernière étape, spécifique au SGBD choisi. On définit les types de données exacts (ex: VARCHAR(150) pour MySQL), on ajoute les contraintes (NOT NULL, UNIQUE), et on planifie les index pour optimiser les performances des requêtes.

LANGAGE UML (UNIFIED MODELING LANGUAGE)

UML est une norme internationale de modélisation visuelle, très utilisée en ingénierie logicielle. Pour les bases de données, on utilise principalement le diagramme de classes. Il représente les tables comme des classes, leurs colonnes comme des attributs et les relations comme des associations entre les classes.

LES CARDINALITÉS : LE CŒUR DES RELATIONS

La cardinalité (ou multiplicité) exprime le nombre d'instances d'une entité qui peuvent être liées à une instance d'une autre entité.
  1--1 (Un à un) : Relation rare. Exemple : un UTILISATEUR a un seul PROFIL_UTILISATEUR. Implémentation : La clé primaire de l'une des tables est aussi la clé étrangère dans l'autre.
  1--n (Un à plusieurs) : La relation la plus commune. Exemple : un AUTEUR (1) peut écrire plusieurs LIVRES (n). Implémentation : La table "plusieurs" (LIVRES) contient une clé étrangère ('auteur_id') qui pointe vers la clé primaire de la table "un" (AUTEURS).
  n--n (Plusieurs à plusieurs) : Relation très fréquente. Exemple : un ETUDIANT (n) peut s'inscrire à plusieurs COURS (n), et un COURS peut avoir plusieurs ETUDIANTS. Implémentation : On ne peut pas lier directement les deux tables. On doit créer une troisième table, dite de jointure (ex: 'inscriptions'), qui contient deux clés étrangères : 'etudiant_id' et 'cours_id'. Chaque ligne de cette table représente une inscription unique d'un étudiant à un cours.
`
    },
    'database-3': {
      title: 'SQL Avancé et Requêtes Complexes',
      content: `
LES JOINTURES (JOIN) : COMBINER LES DONNÉES

Une jointure est une opération qui permet de combiner des lignes de deux ou plusieurs tables en se basant sur une colonne commune entre elles.

  INNER JOIN : C'est la jointure la plus stricte et la plus courante. Elle ne retourne que les lignes pour lesquelles il existe une correspondance dans les deux tables.
    Exemple : SELECT u.nom, p.titre FROM utilisateurs u INNER JOIN publications p ON u.id = p.utilisateur_id; (Ne retourne que les utilisateurs qui ont écrit au moins une publication).

  LEFT JOIN (ou LEFT OUTER JOIN) : Retourne TOUTES les lignes de la table de gauche, et les lignes correspondantes de la table de droite. S'il n'y a pas de correspondance, les colonnes de la table de droite seront remplies avec NULL.
    Exemple : SELECT u.nom, p.titre FROM utilisateurs u LEFT JOIN publications p ON u.id = p.utilisateur_id; (Retourne TOUS les utilisateurs, même ceux qui n'ont jamais rien publié).

  RIGHT JOIN (ou RIGHT OUTER JOIN) : C'est l'inverse de LEFT JOIN. Elle retourne toutes les lignes de la table de droite.

AGRÉGATION ET GROUPEMENT

Ces opérations permettent de résumer des données.
  GROUP BY : Regroupe les lignes qui ont les mêmes valeurs dans des colonnes spécifiées en une seule ligne de résumé.
  Fonctions d'agrégation : COUNT(), SUM(), AVG(), MAX(), MIN() sont appliquées sur ces groupes.
  HAVING : Permet de filtrer les résultats après que l'agrégation (GROUP BY) a eu lieu (alors que WHERE filtre avant).

    Exemple : SELECT categorie, COUNT(*) as nombre_de_produits FROM produits GROUP BY categorie HAVING COUNT(*) > 10;
    (Affiche les catégories qui ont plus de 10 produits).

LES SOUS-REQUÊTES (SUBQUERIES)

Une sous-requête est une requête SQL imbriquée à l'intérieur d'une autre requête.
  Dans la clause WHERE avec IN : Pour vérifier si une valeur appartient à un ensemble de résultats.
    Exemple : SELECT * FROM produits WHERE categorie_id IN (SELECT id FROM categories WHERE active = 1);

  Dans la clause FROM : Pour utiliser le résultat d'une requête comme une table temporaire.

  Avec EXISTS : Pour vérifier si une sous-requête retourne au moins une ligne. C'est souvent plus performant que IN, car la base de données peut s'arrêter dès qu'elle trouve un résultat.
`
    },
    'database-4': {
      title: 'Transactions et Concurrence',
      content: `
LA GESTION DES TRANSACTIONS

Une transaction est une séquence d'opérations sur la base de données qui est traitée comme une seule unité de travail logique et indivisible. Soit toutes les opérations réussissent, soit elles échouent toutes et la base de données est ramenée à son état initial. L'exemple classique est un virement bancaire : le débit d'un compte et le crédit d'un autre doivent former une seule transaction.

LES PROPRIÉTÉS ACID

Les transactions garantissent la fiabilité des données grâce à quatre propriétés critiques, connues sous l'acronyme ACID.

  Atomicité (Atomicity) : "Tout ou rien". La transaction est une unité atomique. Si une seule de ses opérations échoue, toute la transaction est annulée (rollback). Le virement bancaire soit réussit complètement, soit il n'a jamais eu lieu.

  Cohérence (Consistency) : Une transaction amène la base de données d'un état valide à un autre état valide. Les règles d'intégrité (clés étrangères, contraintes) doivent être respectées à la fin de la transaction. La somme totale de l'argent dans la banque doit rester la même après le virement.

  Isolation (Isolation) : Les transactions concurrentes ne doivent pas interférer les unes avec les autres. Le résultat d'exécutions simultanées doit être le même que si elles avaient été exécutées en série. Si deux personnes essaient de virer de l'argent du même compte en même temps, le SGBD doit gérer cela pour éviter un solde incorrect.

  Durabilité (Durability) : Une fois qu'une transaction a été validée (commit), ses modifications sont permanentes et survivront à toute panne ultérieure (crash du système, coupure de courant).

COMMANDES SQL POUR LES TRANSACTIONS
  START TRANSACTION; (ou BEGIN;) : Démarre une nouvelle transaction.
  COMMIT; : Valide toutes les modifications de la transaction et les rend permanentes.
  ROLLBACK; : Annule toutes les modifications effectuées depuis le début de la transaction.
`
    },
    'database-5': {
      title: 'Optimisation et Performances',
      content: `
OPTIMISATION DES PERFORMANCES SQL

À mesure qu'une base de données grandit, les requêtes peuvent devenir lentes. L'optimisation est l'art de rendre ces requêtes aussi rapides que possible.

LES INDEX : L'OUTIL NUMÉRO UN

Un index est une structure de données spéciale qui permet au SGBD de trouver des lignes beaucoup plus rapidement. C'est comme l'index à la fin d'un livre : au lieu de lire tout le livre pour trouver un sujet, vous allez à l'index et il vous indique la page exacte.
  Comment ça marche : Un index est créé sur une ou plusieurs colonnes d'une table. Le SGBD maintient une copie triée de ces colonnes avec des pointeurs vers les lignes correspondantes.
  Le compromis : Les index accélèrent considérablement les requêtes de lecture (SELECT), mais ralentissent légèrement les opérations d'écriture (INSERT, UPDATE, DELETE) car l'index doit aussi être mis à jour. On indexe donc judicieusement les colonnes fréquemment utilisées dans les clauses WHERE et les jointures.

  Syntaxe :
    CREATE INDEX idx_nom_utilisateur ON utilisateurs(nom);

L'ANALYSE DU PLAN D'EXÉCUTION : EXPLAIN

La commande EXPLAIN est l'outil de diagnostic le plus important. Elle ne retourne pas le résultat de la requête, mais elle montre comment le SGBD prévoit de l'exécuter. C'est le "plan d'attaque" de la base de données.

  Comment l'utiliser :
    EXPLAIN SELECT utilisateurs.* FROM utilisateurs JOIN commandes ON utilisateurs.id = commandes.client_id WHERE utilisateurs.ville = 'Paris';

  Quoi regarder dans le résultat :
    'type': Indique comment les tables sont jointes. 'ALL' signifie un "Full Table Scan" (parcours complet de la table), ce qui est souvent mauvais pour les grandes tables. 'ref' ou 'index' est beaucoup mieux.
    'key': Montre quel index est utilisé. Si c'est NULL, aucun index n'est utilisé.
    'rows': Une estimation du nombre de lignes que le SGBD pense devoir examiner. Plus ce nombre est bas, mieux c'est.

AUTRES BONNES PRATIQUES D'OPTIMISATION

  Éviter SELECT * : Ne sélectionnez que les colonnes dont vous avez réellement besoin. Cela réduit la quantité de données transférées.
  Préférer les jointures aux sous-requêtes : Les SGBD sont souvent plus efficaces pour optimiser les jointures explicites.
  Utiliser WHERE efficacement : Évitez d'appliquer des fonctions aux colonnes dans la clause WHERE (ex: WHERE YEAR(date_commande) = 2023), car cela peut empêcher l'utilisation d'un index.
`
    },
    // ==================== MOBILE JS ====================
    'mobile-js-1': {
      title: 'Introduction à React Native',
      content: `
DÉVELOPPEMENT CROSS-PLATFORM AVEC REACT NATIVE

React Native est un framework open-source créé par Facebook qui permet de développer des applications mobiles natives pour iOS et Android en utilisant un seul et même langage : JavaScript, et une seule base de code.
Le principe "Apprenez une fois, écrivez partout" signifie que les développeurs web familiers avec React peuvent rapidement devenir productifs dans le monde mobile.
Contrairement à d'autres solutions comme Cordova qui exécutent une application web dans une "WebView" (un navigateur intégré), React Native utilise un "pont" (bridge) pour communiquer avec les composants natifs de l'interface utilisateur. Le résultat est une application avec des performances et une apparence véritablement natives.

LES COMPOSANTS DE BASE

React Native fournit un ensemble de composants fondamentaux, prêts à l'emploi, qui sont les briques de construction de toute interface.

  View : C'est le conteneur le plus fondamental. On peut le comparer à une '<div>' en développement web. Il est utilisé pour organiser d'autres composants, pour créer des mises en page avec Flexbox, et pour appliquer des styles comme des bordures, des ombres ou des couleurs de fond. Un 'View' est essentiel pour structurer l'écran.

  Text : Tout texte affiché à l'écran DOIT être encapsulé dans un composant 'Text'. On ne peut pas écrire du texte directement dans un 'View'. Ce composant permet de styliser le texte (police, taille, couleur, graisse) et de gérer les événements de pression sur le texte.

  StyleSheet : Pour styliser les composants, on n'utilise pas de CSS directement. On utilise des objets JavaScript. L'API 'StyleSheet.create' permet de créer un objet de style. L'avantage est que cet objet est envoyé une seule fois sur le pont natif, ce qui améliore les performances. Les propriétés de style sont similaires au CSS, mais en camelCase (ex: 'backgroundColor' au lieu de 'background-color').

LA NAVIGATION DANS L'APPLICATION

La navigation n'est pas incluse dans le cœur de React Native. Il faut utiliser une bibliothèque externe. La plus populaire et recommandée est 'React Navigation'. Elle fournit plusieurs types de navigateurs pour couvrir tous les cas d'usage.

  Stack Navigator (Navigation par pile) : C'est le type de navigation le plus courant. Il fonctionne comme une pile de cartes. Chaque nouvel écran est "poussé" (pushed) sur le dessus de la pile, affichant un en-tête avec un bouton de retour. Appuyer sur retour "dépile" (pops) l'écran actuel pour révéler le précédent. C'est idéal pour des flux linéaires (ex: liste -> détail -> édition).

  Tab Navigator (Navigation par onglets) : Ce navigateur affiche une barre d'onglets, généralement en bas de l'écran (sur iOS) ou en haut (sur Android, bien que le style du bas soit aussi très courant). Chaque onglet a sa propre pile de navigation indépendante. C'est parfait pour la navigation principale d'une application (ex: Accueil, Recherche, Profil).
`
    },
    'mobile-js-2': {
      title: 'Gestion de l\'État (State Management)',
      content: `
LA GESTION D'ÉTAT : LE CŒUR D'UNE APP DYNAMIQUE

L'état (state) représente toutes les données de votre application qui peuvent changer au fil du temps et qui doivent provoquer une mise à jour de l'interface utilisateur. La gestion de l'état est l'art de savoir où stocker ces données et comment les mettre à jour de manière prévisible.

LE HOOK 'useState' : L'ÉTAT LOCAL

'useState' est le hook de base de React pour gérer l'état à l'intérieur d'un seul composant fonctionnel. Il est parfait pour des données qui n'ont pas besoin d'être partagées avec d'autres parties de l'application.

  Syntaxe : const [valeur, setValeur] = useState(valeurInitiale);
  'valeur' : la variable qui contient la valeur actuelle de l'état.
  'setValeur' : la fonction à appeler pour mettre à jour cette valeur. Appeler cette fonction déclenche un nouveau rendu (re-render) du composant.

Exemple d'un compteur simple :
    const [count, setCount] = useState(0);

    // Dans un bouton, on appellerait :
    onPress={() => setCount(count + 1)}

CONTEXT API : PARTAGER L'ÉTAT SANS "PROP DRILLING"

Le "prop drilling" est le fait de devoir passer des propriétés (props) à travers de multiples niveaux de composants intermédiaires qui n'en ont pas besoin, juste pour les faire parvenir à un composant enfant lointain. L'API Context résout ce problème en créant un "contexte" global.

  Provider (Fournisseur) : C'est un composant qui enveloppe une partie de votre arbre de composants (souvent toute l'application). Il possède une prop 'value' qui contient les données que vous souhaitez rendre disponibles à tous ses descendants.

  Consumer / useContext (Consommateur) : Un composant enfant, peu importe sa profondeur, peut "s'abonner" à ce contexte pour accéder aux données. La manière moderne de le faire est d'utiliser le hook 'useContext'.

  Quand l'utiliser ? C'est idéal pour des données qui sont véritablement globales et qui ne changent pas très fréquemment, comme les informations de l'utilisateur authentifié, le thème de l'application (clair/sombre), ou la langue. Pour des états complexes avec des mises à jour très fréquentes, des bibliothèques dédiées comme Redux ou Zustand sont souvent plus performantes.
`
    },
    'mobile-js-3': {
      title: 'Appels aux APIs et Réseau',
      content: `
LES APPELS RÉSEAU : CONNECTER L'APP AU MONDE

La plupart des applications mobiles ont besoin de communiquer avec un serveur pour récupérer ou envoyer des données. Cette communication se fait via des requêtes HTTP à une API.

L'API 'FETCH' : LA SOLUTION INTÉGRÉE

'Fetch' est une API moderne pour effectuer des requêtes réseau, intégrée à React Native (via un polyfill). Elle est basée sur les Promesses.

Exemple de base avec async/await :
    async function fetchData() {
      try {
        const response = await fetch('https://api.example.com/data');
        const jsonData = await response.json(); // Il faut manuellement parser la réponse JSON
        console.log(jsonData);
      } catch (error) {
        console.error('Erreur de réseau:', error);
      }
    }

Un point important de 'fetch' est qu'il ne considère pas les erreurs HTTP (comme 404 Not Found ou 500 Internal Server Error) comme des échecs de promesse. Il faut vérifier manuellement le statut de la réponse (response.ok).

AXIOS : UNE ALTERNATIVE PUISSANTE

Axios est une bibliothèque tierce très populaire pour effectuer des requêtes HTTP. Elle offre plusieurs avantages par rapport à 'fetch'.

  Simplicité : Axios transforme automatiquement les données JSON, à l'envoi comme à la réception.
  Gestion des erreurs : Axios rejette la promesse (provoque une erreur dans le 'catch') pour tous les codes de statut d'erreur (4xx, 5xx), ce qui rend la gestion des erreurs plus intuitive.
  Intercepteurs (Interceptors) : C'est la fonctionnalité la plus puissante. Les intercepteurs permettent d'exécuter du code avant qu'une requête ne soit envoyée ou avant qu'une réponse ne soit traitée.
    Intercepteurs de requête : Parfait pour ajouter automatiquement un token d'authentification à l'en-tête de chaque requête.
    Intercepteurs de réponse : Idéal pour gérer globalement les erreurs. Par exemple, si l'API renvoie une erreur 401 (Non autorisé), on peut automatiquement déconnecter l'utilisateur et le rediriger vers l'écran de connexion.
`
    },
    'mobile-js-4': {
      title: 'Accès aux Fonctionnalités Natives',
      content: `
UTILISER LES FONCTIONNALITÉS NATIVES DE L'APPAREIL

Pour accéder au matériel du téléphone comme la caméra, le GPS ou les contacts, React Native a besoin de communiquer avec les API natives d'iOS et d'Android. Cela se fait généralement via des bibliothèques tierces qui gèrent le "pont" pour nous.

LE SYSTÈME DE PERMISSIONS

Avant d'accéder à toute fonctionnalité sensible, il faut impérativement demander l'autorisation à l'utilisateur. Le processus est en deux étapes :
1. Déclaration : Dans les fichiers de configuration natifs ('AndroidManifest.xml' pour Android, 'Info.plist' pour iOS), on doit déclarer l'intention d'utiliser une permission.
2. Demande à l'exécution : Au moment où l'application a besoin de la fonctionnalité, on utilise une fonction de la bibliothèque pour afficher la boîte de dialogue de permission système.

  Caméra : Des bibliothèques comme 'react-native-vision-camera' fournissent un composant '<Camera>' pour afficher l'aperçu et des méthodes pour prendre des photos ou enregistrer des vidéos. Il faut d'abord demander la permission 'CAMERA'.

  Géolocalisation : La bibliothèque '@react-native-community/geolocation' est la solution standard. Après avoir obtenu la permission (ACCESS_FINE_LOCATION sur Android), on peut appeler 'Geolocation.getCurrentPosition()' pour obtenir la position actuelle de l'utilisateur.

LE STOCKAGE LOCAL : ASYNCSTORAGE

Pour stocker des petites quantités de données de manière persistante sur l'appareil (même après la fermeture de l'app), on utilise 'AsyncStorage'.
  C'est un système de stockage simple de type clé-valeur.
  Son nom l'indique, il est ASYNCHRONE. Chaque opération (lecture, écriture, suppression) retourne une Promesse.
  C'est l'équivalent du 'localStorage' du web, mais asynchrone.

Exemple d'utilisation :
    // Sauvegarder un token
    await AsyncStorage.setItem('@user_token', 'mon_token_secret');

    // Lire le token
    const token = await AsyncStorage.getItem('@user_token');

C'est parfait pour stocker des préférences utilisateur, des jetons d'authentification, ou de petites données de session. Pour des données complexes ou volumineuses, il faut se tourner vers des solutions de base de données comme WatermelonDB ou Realm.
`
    },
    'mobile-js-5': {
      title: 'Publication et Déploiement',
      content: `
BUILD ET DÉPLOIEMENT : DE LA MACHINE AU STORE

La dernière étape consiste à transformer votre projet de développement en un fichier binaire installable (.aab/.apk pour Android, .ipa pour iOS) et à le soumettre aux magasins d'applications.

POUR ANDROID

1. La clé de signature (Keystore) : Avant de pouvoir créer une version "release" (de production), vous devez générer une clé de signature privée. C'est un fichier qui prouve cryptographiquement que vous êtes le propriétaire de l'application. IL EST ABSOLUMENT VITAL DE SAUVEGARDER CE FICHIER ET SES MOTS DE PASSE. Le perdre signifie que vous ne pourrez plus jamais mettre à jour votre application sur le Play Store.

2. Générer le binaire : Une fois la clé configurée, vous vous placez dans le dossier 'android' de votre projet et exécutez une commande Gradle.
   Pour un Android App Bundle (AAB), le format recommandé pour le Play Store :
      ./gradlew bundleRelease
   Pour un APK traditionnel :
      ./gradlew assembleRelease

Le fichier généré se trouvera dans 'android/app/build/outputs/bundle/release/' ou 'android/app/build/outputs/apk/release/'. Ce fichier peut ensuite être téléversé sur la Google Play Console.

POUR IOS (NÉCESSITE UN MAC)

Le processus sur iOS est principalement graphique et se déroule dans Xcode, l'environnement de développement d'Apple.

1. Configuration dans Xcode : Vous devez ouvrir le fichier '.xcworkspace' de votre projet dans Xcode. Vous aurez besoin d'un compte Apple Developer (payant) pour configurer la signature de l'application.

2. Archiver l'application : Dans Xcode, vous choisissez "Product" > "Archive". Cela compile votre application et crée une archive prête pour la distribution.

3. Distribution via App Store Connect : Depuis la fenêtre des archives, vous pouvez valider et téléverser votre build directement sur App Store Connect, le portail web d'Apple pour gérer vos applications.

4. TestFlight : Avant de publier sur l'App Store public, il est fortement recommandé d'utiliser TestFlight, le service de bêta-test d'Apple. Vous pouvez y inviter des testeurs internes (votre équipe) ou externes pour qu'ils installent et testent une version préliminaire de votre application. Cela permet de découvrir des bugs avant la sortie officielle.
`
    },

    // ==================== JAVASCRIPT ====================
    'js-1': {
      title: 'JavaScript Moderne (ES6+)',
      content: `
JAVASCRIPT MODERNE (ECMAScript 2015 et au-delà)

ES6 (ou ES2015) a été une mise à jour majeure du langage JavaScript, introduisant des fonctionnalités qui rendent le code plus puissant, plus lisible et moins verbeux.

LET ET CONST : LA NOUVELLE DÉCLARATION DE VARIABLES

Avant ES6, 'var' était la seule façon de déclarer des variables. 'let' et 'const' corrigent plusieurs de ses défauts.

  Scope (Portée) :
    'var' a une portée de fonction (function scope). Une variable déclarée avec 'var' est accessible n'importe où dans la fonction où elle est définie.
    'let' et 'const' ont une portée de bloc (block scope). Une variable n'est accessible qu'à l'intérieur du bloc (défini par { ... }) où elle est déclarée (ex: une boucle for, une condition if). C'est beaucoup plus prévisible et moins source d'erreurs.

  Hoisting (Remontée) :
    Les déclarations avec 'var' sont "remontées" en haut de leur portée. La variable existe avec la valeur 'undefined' avant sa ligne de déclaration.
    Les déclarations avec 'let' et 'const' sont aussi remontées, mais elles entrent dans une "Temporal Dead Zone" (TDZ). Accéder à la variable avant sa déclaration lève une erreur (ReferenceError), ce qui est un comportement beaucoup plus sûr.

  'const' : Déclare une constante. La référence de la variable ne peut pas être réassignée. Attention, pour les objets et les tableaux, cela signifie que vous ne pouvez pas réassigner la variable elle-même, mais vous POUVEZ modifier le contenu de l'objet ou du tableau.

LES FONCTIONS FLÉCHÉES (ARROW FUNCTIONS)

Elles offrent une syntaxe plus concise pour écrire des fonctions et ont un comportement différent pour le mot-clé 'this'.

  Syntaxe concise :
    // Fonction traditionnelle
    function sum(a, b) { return a + b; }

    // Fonction fléchée
    const sum = (a, b) => a + b; // Le 'return' est implicite si une seule expression suit la flèche

  Le 'this' lexical :
    Dans une fonction traditionnelle, la valeur de 'this' dépend de la manière dont la fonction est appelée. C'est une source fréquente de bugs.
    Dans une fonction fléchée, 'this' conserve la valeur qu'il avait dans le contexte où la fonction a été définie (contexte lexical). C'est extrêmement utile dans les callbacks ou les méthodes de classe en React.

LA DESTRUCTURATION (DESTRUCTURING)

C'est une syntaxe qui permet d'extraire des valeurs d'objets ou de tableaux et de les assigner à des variables.

  Destructuration d'objet :
    const user = { name: 'Alice', age: 30, country: 'France' };
    const { name, age } = user; // Crée les variables 'name' et 'age'
    // C'est équivalent à : const name = user.name; const age = user.age;

  Destructuration de tableau :
    const colors = ['rouge', 'vert', 'bleu'];
    const [firstColor, secondColor] = colors; // firstColor = 'rouge', secondColor = 'vert'
`
    },
    'js-2': {
      title: 'Frameworks Frontend (React/Vue)',
      content: `
LES FRAMEWORKS FRONTEND MODERNES

React et Vue.js sont des bibliothèques JavaScript qui permettent de construire des interfaces utilisateur interactives et complexes de manière déclarative et basée sur des composants.

LE MODÈLE À BASE DE COMPOSANTS

Un composant est un bloc de code réutilisable et autonome qui gère sa propre logique et son propre affichage. Une application est construite en assemblant ces composants comme des briques de Lego.

  Props (Propriétés) : C'est le mécanisme de communication de données d'un composant parent vers un composant enfant. Les props sont en lecture seule dans le composant enfant. Si le parent met à jour une prop, l'enfant se mettra à jour automatiquement pour refléter le changement. C'est un flux de données unidirectionnel.

  State (État) : C'est un objet qui contient les données privées et locales d'un composant. Contrairement aux props, l'état peut être modifié par le composant lui-même (par exemple, suite à une interaction de l'utilisateur). Chaque fois que l'état change, le framework (React ou Vue) redéclenche le rendu du composant pour que l'interface utilisateur soit toujours synchronisée avec les données.

LE CYCLE DE VIE D'UN COMPOSANT

Un composant passe par différentes phases au cours de son existence. Les frameworks fournissent des "crochets" (hooks) ou des méthodes pour exécuter du code à des moments précis de ce cycle.

  Montage (Mounting) : C'est la phase de naissance du composant. Il est créé, ses props et son état sont initialisés, et il est inséré dans le DOM (la page web).
    En React (avec les hooks) : on utilise 'useEffect(() => { ... }, [])'. Le tableau vide '[]' signifie que l'effet ne s'exécute qu'une seule fois, après le premier rendu. C'est l'endroit idéal pour faire des appels API pour récupérer les données initiales.

  Mise à jour (Updating) : Le composant se met à jour chaque fois que ses props ou son état changent.
    En React (avec les hooks) : on utilise 'useEffect(() => { ... }, [uneProp, unEtat])'. L'effet s'exécutera chaque fois que la valeur de 'uneProp' ou 'unEtat' changera.

  Démontage (Unmounting) : C'est la phase de mort du composant, lorsqu'il est retiré du DOM.
    En React (avec les hooks) : on utilise la fonction de nettoyage retournée par 'useEffect'. 'useEffect(() => { return () => { ... } }, [])'. Cette fonction de nettoyage est exécutée juste avant que le composant ne soit détruit. C'est essentiel pour annuler des abonnements ou des timers afin d'éviter les fuites de mémoire.
`
    },
    'js-3': {
      title: 'Node.js et le Backend',
      content: `
NODE.JS : JAVASCRIPT CÔTÉ SERVEUR

Node.js est un environnement d'exécution qui permet d'exécuter du code JavaScript en dehors d'un navigateur web. Il est construit sur le moteur V8 de Google Chrome et est particulièrement adapté pour créer des serveurs web rapides, des APIs et des outils en ligne de commande. Son modèle est non-bloquant et basé sur les événements, ce qui le rend très performant pour gérer de nombreuses connexions simultanées.

LE SYSTÈME DE MODULES

Pour organiser le code, Node.js utilise un système de modules.
  CommonJS (le système historique) :
    // Exportation
    // Dans le fichier monModule.js
    const maFonction = () => console.log('Hello');
    module.exports = maFonction;

    // Importation
    // Dans le fichier principal app.js
    const maFonction = require('./monModule');
    maFonction(); // Affiche 'Hello'

  ES Modules (le standard moderne) :
    // Exportation
    // Dans le fichier monModule.mjs
    export const maFonction = () => console.log('Hello');
    export default uneAutreFonction;

    // Importation
    // Dans le fichier principal app.mjs
    import uneAutreFonction, { maFonction } from './monModule.mjs';

EXPRESS.JS : LE FRAMEWORK WEB DE-FACTO

Express est un framework minimaliste et flexible pour Node.js qui fournit un ensemble robuste de fonctionnalités pour créer des applications web et des APIs.

  Routing : Le routage définit comment l'application répond à une requête client vers un endpoint particulier (une URI).
    app.get('/', (req, res) => { res.send('Page d\'accueil'); });
    app.post('/api/users', (req, res) => { /* logique pour créer un utilisateur */ });
    'req' est l'objet de la requête (contient les données envoyées par le client).
    'res' est l'objet de la réponse (utilisé pour renvoyer une réponse au client).

  Middleware : Un middleware est une fonction qui a accès aux objets de requête (req) et de réponse (res), et à la fonction 'next' du cycle requête-réponse. C'est une chaîne de fonctions.
    Exemples de middleware :
      express.json() : pour parser le corps des requêtes entrantes au format JSON.
      express.static('public') : pour servir des fichiers statiques (images, CSS, JS).
      Un middleware personnalisé pour l'authentification : il vérifie si un utilisateur est connecté avant d'appeler 'next()' pour passer à la route suivante, sinon il renvoie une erreur.
      app.use(monMiddleware);
`
    },
    'js-4': {
      title: 'Bases de Données NoSQL avec MongoDB',
      content: `
LES BASES DE DONNÉES NOSQL

NoSQL (Not Only SQL) est une catégorie de bases de données qui ne suivent pas le modèle relationnel traditionnel. MongoDB est la base de données NoSQL la plus populaire. Elle est orientée-document.
Au lieu de stocker les données dans des tables avec des lignes et des colonnes, elle stocke des "documents" au format BSON (un format binaire similaire à JSON) dans des "collections".
Cela offre une grande flexibilité de schéma, ce qui est idéal pour le développement agile et les données complexes ou semi-structurées.

MONGOOSE : UN ODM POUR MONGOOSE

Interagir directement avec MongoDB en JavaScript peut être verbeux. Mongoose est une bibliothèque ODM (Object Data Modeling) pour Node.js. Elle fournit une couche d'abstraction qui simplifie les interactions avec la base de données.
Avantages de Mongoose :
  Schemas : Permet de définir une structure pour vos documents, avec des types de données et des règles de validation.
  Modèles : Les schémas sont compilés en modèles, qui sont des constructeurs fournissant une interface pour créer, interroger et modifier des documents.
  Validation : Valide automatiquement les données avant de les sauvegarder.

Exemple de Schéma Mongoose :
    const userSchema = new mongoose.Schema({
      name: { type: String, required: true },
      email: { type: String, required: true, unique: true },
      age: { type: Number, min: 18 },
      createdAt: { type: Date, default: Date.now }
    });
    const User = mongoose.model('User', userSchema);

LES OPÉRATIONS CRUD

CRUD signifie Create, Read, Update, Delete. Ce sont les quatre opérations de base de la persistance des données.

  Create (Créer) : Ajouter de nouveaux documents.
    const newUser = await User.create({ name: 'John Doe', email: 'john@example.com', age: 25 });

  Read (Lire) : Récupérer des documents.
    // Trouver tous les utilisateurs
    const allUsers = await User.find({});
    // Trouver un utilisateur par son ID
    const userById = await User.findById('un_id_specifique');
    // Trouver les utilisateurs de plus de 30 ans
    const oldUsers = await User.find({ age: { $gt: 30 } });

  Update (Mettre à jour) : Modifier des documents existants.
    await User.updateOne({ _id: 'un_id_specifique' }, { $set: { age: 26 } });

  Delete (Supprimer) : Effacer des documents.
    await User.deleteOne({ _id: 'un_id_specifique' });
`
    },
    'js-5': {
      title: 'Architecture d\'un Projet Fullstack',
      content: `
UNE ARCHITECTURE COMPLÈTE : LE STACK MERN

Un projet fullstack combine un frontend (côté client) et un backend (côté serveur). Le stack "MERN" (MongoDB, Express, React, Node.js) est l'une des architectures les plus populaires pour construire des applications web modernes avec JavaScript.

LE CLIENT (FRONTEND)

C'est la partie de l'application qui s'exécute dans le navigateur de l'utilisateur.

  React : Utilisé pour construire l'interface utilisateur (UI). Il gère l'affichage des données, les interactions de l'utilisateur (clics, formulaires) et l'état local des composants (ex: le contenu d'un champ de recherche). Le client ne contient aucune logique métier sensible. Son rôle est de présenter les données et de les collecter.

  Gestion d'état global (Redux, Zustand, etc.) : Pour les applications complexes, l'état peut devenir difficile à gérer s'il est partagé entre de nombreux composants. Une bibliothèque de gestion d'état global comme Redux centralise l'état important de l'application (ex: informations de l'utilisateur connecté, liste de produits) dans un "store" unique. Cela rend l'application plus prévisible et plus facile à déboguer.

LE SERVEUR (BACKEND)

C'est le cerveau de l'application, qui s'exécute sur un serveur distant.

  Node.js et Express : Utilisés pour créer une API REST (ou GraphQL). Le serveur expose des "endpoints" (des URLs) que le client peut appeler pour effectuer des actions. Le serveur est responsable de :
    - L'authentification et l'autorisation (vérifier qui est l'utilisateur et ce qu'il a le droit de faire).
    - La validation des données entrantes.
    - L'exécution de la logique métier.
    - La communication avec la base de données.

  MongoDB et Mongoose : Utilisés pour la persistance des données. Le serveur Express utilise Mongoose pour interagir avec la base de données MongoDB afin de stocker, récupérer, mettre à jour et supprimer les informations nécessaires au fonctionnement de l'application.

COMMENT ÇA MARCHE ENSEMBLE ?
1. L'utilisateur interagit avec l'interface React (ex: clique sur "Ajouter un produit").
2. Le client React effectue un appel réseau (ex: une requête POST à l'URL '/api/produits') vers le serveur Express, en envoyant les données du nouveau produit au format JSON.
3. Le serveur Express reçoit la requête, la valide, et utilise Mongoose pour créer un nouveau document dans la collection 'produits' de la base de données MongoDB.
4. Le serveur renvoie une réponse au client (ex: un statut 201 Created et les données du produit créé).
5. Le client React reçoit la réponse et met à jour son état, ce qui provoque une mise à jour de l'interface pour afficher le nouveau produit.
`
    },

    // Données supplémentaires
    ...additionalSummaryData
  },
  quiz: {
    // ==================== PYTHON ====================
    'python-1': {
      title: 'Quiz Introduction à Python',
      questions: [
        {
          id: 1,
          question: 'Quel mot-clé permet de déclarer une fonction en Python ?',
          options: ['function', 'def', 'func', 'define'],
          correct: 1,
          explanation: 'En Python, on utilise le mot-clé "def" pour déclarer une fonction, suivi du nom de la fonction et de parenthèses.'
        },
        {
          id: 2,
          question: 'Quelle méthode permet d\'ajouter un élément à la fin d\'une liste ?',
          options: ['add()', 'append()', 'insert()', 'push()'],
          correct: 1,
          explanation: 'La méthode append() est spécifique aux listes et ajoute un élément à leur fin. insert() permet d\'ajouter à un index spécifique.'
        },
        {
          id: 3,
          question: 'Comment s\'appelle le système de gestion de paquets Python ?',
          options: ['npm', 'pip', 'conda', 'composer'],
          correct: 1,
          explanation: 'pip (Pip Installs Packages) est le gestionnaire de paquets standard de Python, utilisé pour installer des bibliothèques depuis le Python Package Index (PyPI).'
        },
        {
          id: 4,
          question: 'Quel est le symbole pour un commentaire sur une seule ligne en Python ?',
          options: ['//', '/*', '#', '--'],
          correct: 2,
          explanation: 'Le symbole dièse (#) est utilisé pour les commentaires sur une seule ligne. Tout ce qui suit # sur la ligne est ignoré par l\'interpréteur.'
        },
        {
          id: 5,
          question: 'Quel opérateur est utilisé pour le calcul de l\'exponentiation (puissance) ?',
          options: ['^', '**', 'pow()', 'exp()'],
          correct: 1,
          explanation: 'En Python, le double astérisque (**) est l\'opérateur d\'exponentiation. Par exemple, 2 ** 3 équivaut à 8.'
        }
      ]
    },
    'python-2': {
      title: 'Quiz Fonctions Python',
      questions: [
        {
          id: 1,
          question: 'Quelle est la valeur de retour par défaut d\'une fonction sans instruction "return" ?',
          options: ['0', 'None', 'False', 'Une erreur est levée'],
          correct: 1,
          explanation: 'Si une fonction termine son exécution sans rencontrer d\'instruction "return", elle retourne implicitement l\'objet spécial None.'
        },
        {
          id: 2,
          question: 'Comment définir un paramètre optionnel dans une fonction ?',
          options: [
            'En le déclarant après les paramètres obligatoires',
            'En lui donnant une valeur par défaut',
            'Avec le mot-clé optional',
            'En le mettant entre crochets'
          ],
          correct: 1,
          explanation: 'Un paramètre avec une valeur par défaut (ex: def ma_fonction(arg1, arg2="valeur")) devient optionnel. Si l\'appelant ne fournit pas cet argument, la valeur par défaut est utilisée.'
        },
        {
          id: 3,
          question: 'À quoi sert la syntaxe *args dans la définition d\'une fonction ?',
          options: [
            'À n\'accepter que des chaînes de caractères',
            'À rendre tous les arguments obligatoires',
            'À capturer un nombre variable d\'arguments positionnels dans un tuple',
            'À définir des arguments de type pointeur'
          ],
          correct: 2,
          explanation: '*args permet à une fonction de recevoir un nombre indéterminé d\'arguments positionnels, qui sont regroupés dans un tuple.'
        },
        {
          id: 4,
          question: 'Qu\'est-ce qu\'une fonction lambda ?',
          options: [
            'Une fonction qui ne peut être appelée qu\'une fois',
            'Une fonction sans nom, petite et anonyme',
            'Une fonction qui retourne toujours une chaîne de caractères',
            'Une fonction utilisée pour la programmation parallèle'
          ],
          correct: 1,
          explanation: 'Une fonction lambda est une petite fonction anonyme définie avec le mot-clé "lambda". Elle peut avoir plusieurs arguments mais une seule expression.'
        },
        {
          id: 5,
          question: 'Quelle est la portée (scope) d\'une variable déclarée à l\'intérieur d\'une fonction ?',
          options: ['Globale', 'Locale à la fonction', 'Universelle', 'Publique'],
          correct: 1,
          explanation: 'Une variable déclarée à l\'intérieur d\'une fonction a une portée locale, ce qui signifie qu\'elle n\'existe et n\'est accessible qu\'à l\'intérieur de cette fonction.'
        }
      ]
    },
    'python-3': {
      title: 'Quiz Structures de données',
      questions: [
        {
          id: 1,
          question: 'Quelle structure permet d\'associer des clés uniques à des valeurs ?',
          options: ['Liste', 'Tuple', 'Dictionnaire', 'Set'],
          correct: 2,
          explanation: 'Les dictionnaires (dict) stockent des données sous forme de paires clé-valeur, permettant un accès rapide aux valeurs via leurs clés.'
        },
        {
          id: 2,
          question: 'Quelle est la principale caractéristique d\'un tuple ?',
          options: ['Il est mutable', 'Il est non ordonné', 'Il ne peut contenir que des nombres', 'Il est immutable'],
          correct: 3,
          explanation: 'Un tuple est une collection ordonnée comme une liste, mais il est immutable, ce qui signifie qu\'on ne peut pas modifier son contenu après sa création.'
        },
        {
          id: 3,
          question: 'Comment accéder au premier élément d\'une liste nommée "ma_liste" ?',
          options: ['ma_liste.first()', 'ma_liste[1]', 'ma_liste(0)', 'ma_liste[0]'],
          correct: 3,
          explanation: 'L\'indexation en Python commence à 0. On accède donc au premier élément d\'une liste avec l\'index 0 entre crochets.'
        },
        {
          id: 4,
          question: 'Quelle structure de données est une collection non ordonnée d\'éléments uniques ?',
          options: ['Liste', 'Dictionnaire', 'Tuple', 'Set (Ensemble)'],
          correct: 3,
          explanation: 'Un set (ensemble) est une collection qui ne stocke pas les éléments dans un ordre particulier et qui élimine automatiquement les doublons.'
        },
        {
          id: 5,
          question: 'Quelle méthode de dictionnaire permet de récupérer une valeur en évitant une erreur si la clé n\'existe pas ?',
          options: ['get()', 'fetch()', 'find()', 'retrieve()'],
          correct: 0,
          explanation: 'La méthode get(cle, valeur_par_defaut) retourne la valeur de la clé si elle existe, sinon elle retourne la valeur par défaut (ou None) sans lever d\'erreur.'
        }
      ]
    },
    'python-4': {
      title: 'Quiz POO Python',
      questions: [
        {
          id: 1,
          question: 'Quelle méthode spéciale est appelée à la création d\'un objet (constructeur) ?',
          options: ['__init__()', '__new__()', '__create__()', '__constructor__()'],
          correct: 0,
          explanation: '__init__() est l\'initialiseur de l\'objet. Il est appelé juste après la création de l\'instance pour définir ses attributs initiaux.'
        },
        {
          id: 2,
          question: 'À quoi sert le paramètre "self" dans les méthodes d\'une classe ?',
          options: [
            'C\'est un mot-clé optionnel',
            'Il représente la classe elle-même',
            'Il représente l\'instance de l\'objet sur laquelle la méthode est appelée',
            'Il est utilisé pour les méthodes statiques'
          ],
          correct: 2,
          explanation: '"self" est une convention pour nommer le premier paramètre d\'une méthode d\'instance. Il fait référence à l\'objet lui-même, permettant d\'accéder à ses attributs et autres méthodes.'
        },
        {
          id: 3,
          question: 'Comment une classe "Enfant" hérite-t-elle d\'une classe "Parent" ?',
          options: ['class Enfant extends Parent:', 'class Enfant inherits Parent:', 'class Enfant(Parent):', 'class Enfant : Parent'],
          correct: 2,
          explanation: 'La syntaxe de l\'héritage en Python consiste à mettre le nom de la classe parente entre parenthèses après le nom de la classe enfant.'
        },
        {
          id: 4,
          question: 'Quel est le but de la méthode spéciale __str__() ?',
          options: [
            'Convertir l\'objet en une chaîne JSON',
            'Définir la représentation textuelle "officielle" de l\'objet pour le débogage',
            'Définir la représentation textuelle "informelle" et lisible de l\'objet pour l\'utilisateur',
            'Pour forcer le type de l\'objet à être une chaîne'
          ],
          correct: 2,
          explanation: 'La méthode __str__() est appelée par str(objet) et print(objet). Elle doit retourner une chaîne de caractères lisible et compréhensible par un utilisateur final.'
        },
        {
          id: 5,
          question: 'Comment appelle-t-on le principe de cacher les détails d\'implémentation d\'un objet et d\'exposer une interface publique ?',
          options: ['Héritage', 'Polymorphisme', 'Abstraction', 'Encapsulation'],
          correct: 3,
          explanation: 'L\'encapsulation est le regroupement des données (attributs) et des méthodes qui les manipulent au sein d\'un objet, tout en restreignant l\'accès direct aux données.'
        }
      ]
    },
    'python-5': {
      title: 'Quiz Bases de données avec Python',
      questions: [
        {
          id: 1,
          question: 'Quelle méthode de l\'objet connexion valide les changements dans une transaction ?',
          options: ['commit()', 'validate()', 'save()', 'apply()'],
          correct: 0,
          explanation: 'La méthode commit() de l\'objet connexion enregistre de manière permanente toutes les modifications effectuées depuis le dernier commit.'
        },
        {
          id: 2,
          question: 'Quel module de la bibliothèque standard Python est utilisé pour interagir avec une base de données SQLite ?',
          options: ['pysqlite', 'db_sqlite', 'sqlite3', 'sqlconnect'],
          correct: 2,
          explanation: 'Le module sqlite3 fait partie de la bibliothèque standard de Python et fournit une interface conforme à la spécification DB-API 2.0 pour SQLite.'
        },
        {
          id: 3,
          question: 'Quel objet est utilisé pour exécuter des requêtes SQL et récupérer les résultats ?',
          options: ['Query', 'Executor', 'Cursor (Curseur)', 'Runner'],
          correct: 2,
          explanation: 'Un objet curseur est créé à partir de l\'objet connexion. Il permet d\'exécuter des commandes SQL avec sa méthode execute() et de parcourir les résultats.'
        },
        {
          id: 4,
          question: 'Après avoir exécuté une requête SELECT, quelle méthode de curseur permet de récupérer toutes les lignes restantes du résultat ?',
          options: ['get_all()', 'fetch_all()', 'fetchall()', 'results()'],
          correct: 2,
          explanation: 'La méthode fetchall() récupère toutes les lignes du jeu de résultats et les retourne sous forme d\'une liste de tuples.'
        },
        {
          id: 5,
          question: 'Comment insérer des données de manière sécurisée pour éviter les injections SQL ?',
          options: [
            'En concaténant les variables directement dans la chaîne SQL',
            'En utilisant des placeholders (par exemple, "?") dans la requête',
            'En encodant les données en base64',
            'En utilisant des f-strings pour formater la requête'
          ],
          correct: 1,
          explanation: 'La bonne pratique consiste à utiliser des placeholders (?) dans la requête SQL et à passer les valeurs dans un tuple comme second argument de execute(). Le pilote de la base de données se charge alors de "nettoyer" les données.'
        }
      ]
    },

    'java-1': {
      title: 'Quiz Bases de Java',
      questions: [
        {
          id: 1,
          question: 'Quel mot-clé déclare une variable dont la valeur ne peut pas être modifiée ?',
          options: ['const', 'final', 'static', 'let'],
          correct: 1,
          explanation: 'Le mot-clé "final" indique qu\'une variable ne peut être assignée qu\'une seule fois.'
        },
        {
          id: 2,
          question: 'Quel est le point d\'entrée d\'une application Java ?',
          options: ['run()', 'start()', 'main()', 'execute()'],
          correct: 2,
          explanation: 'Toute application Java démarre par l\'exécution de la méthode `public static void main(String[] args)`.'
        },
        {
          id: 3,
          question: 'Quel type de données est utilisé pour stocker un seul caractère Unicode ?',
          options: ['String', 'char', 'character', 'byte'],
          correct: 1,
          explanation: 'Le type primitif `char` est utilisé pour stocker un caractère unique.'
        },
        {
          id: 4,
          question: 'Comment comparer le contenu de deux objets String en Java ?',
          options: ['Avec l\'opérateur ==', 'Avec la méthode equals()', 'Avec la méthode compareTo()', 'Avec la méthode contentEquals()'],
          correct: 1,
          explanation: 'L\'opérateur `==` compare les références des objets, tandis que `equals()` compare leur contenu réel.'
        },
        {
          id: 5,
          question: 'Quelle est la taille par défaut d\'un type de données `int` en Java ?',
          options: ['8 bits', '16 bits', '32 bits', '64 bits'],
          correct: 2,
          explanation: 'Un `int` en Java est un entier signé de 32 bits.'
        }
      ]
    },
    'java-2': {
      title: 'Quiz POO Java',
      questions: [
        {
          id: 1,
          question: 'Quel principe permet de cacher les détails d\'implémentation d\'une classe ?',
          options: ['Héritage', 'Encapsulation', 'Polymorphisme', 'Abstraction'],
          correct: 1,
          explanation: 'L\'encapsulation consiste à cacher l\'état interne d\'un objet et à n\'exposer que les opérations nécessaires via des méthodes publiques.'
        },
        {
          id: 2,
          question: 'Qu\'est-ce que le polymorphisme ?',
          options: ['La capacité d\'une classe à hériter de plusieurs classes', 'La capacité d\'un objet à prendre plusieurs formes', 'La capacité de cacher des données', 'La capacité de définir des méthodes statiques'],
          correct: 1,
          explanation: 'Le polymorphisme permet à un objet d\'être traité comme une instance de sa propre classe ou de l\'une de ses superclasses.'
        },
        {
          id: 3,
          question: 'Quel mot-clé est utilisé pour accéder à un membre de la superclasse ?',
          options: ['this', 'parent', 'super', 'base'],
          correct: 2,
          explanation: 'Le mot-clé `super` est utilisé pour appeler des constructeurs ou des méthodes de la classe parente.'
        },
        {
          id: 4,
          question: 'Une classe déclarée `abstract` peut-elle être instanciée ?',
          options: ['Oui', 'Non', 'Seulement si elle n\'a pas de méthodes abstraites', 'Seulement via une méthode statique'],
          correct: 1,
          explanation: 'Une classe abstraite ne peut pas être instanciée directement. Elle doit être étendue par une autre classe.'
        },
        {
          id: 5,
          question: 'Quelle est la différence entre une interface et une classe abstraite ?',
          options: ['Une interface ne peut avoir que des méthodes abstraites', 'Une classe ne peut implémenter qu\'une seule interface', 'Une classe peut étendre plusieurs classes abstraites', 'Une interface peut contenir des champs d\'instance'],
          correct: 0,
          explanation: 'Avant Java 8, une interface ne pouvait contenir que des signatures de méthodes abstraites et des constantes. C\'est une différence fondamentale.'
        }
      ]
    },
    'java-3': {
      title: 'Quiz Héritage et Interfaces',
      questions: [
        {
          id: 1,
          question: 'Comment une classe peut-elle hériter d\'une autre en Java ?',
          options: ['implements', 'extends', 'inherits', 'using'],
          correct: 1,
          explanation: 'Le mot-clé `extends` est utilisé pour qu\'une classe hérite d\'une autre classe (héritage simple).'
        },
        {
          id: 2,
          question: 'Quel mot-clé est utilisé pour qu\'une classe applique une interface ?',
          options: ['extends', 'uses', 'implements', 'applies'],
          correct: 2,
          explanation: 'Une classe utilise le mot-clé `implements` pour fournir une implémentation pour une ou plusieurs interfaces.'
        },
        {
          id: 3,
          question: 'Une classe Java peut-elle hériter de plusieurs classes ?',
          options: ['Oui', 'Non', 'Seulement si elles sont abstraites', 'Seulement avec le mot-clé `inherits`'],
          correct: 1,
          explanation: 'Java ne supporte pas l\'héritage multiple de classes pour éviter le "problème du diamant".'
        },
        {
          id: 4,
          question: 'Qu\'est-ce qu\'une annotation `@Override` ?',
          options: ['Elle indique une méthode obsolète', 'Elle indique que la méthode est finale', 'Elle indique que la méthode est une surcharge d\'une méthode de la superclasse', 'Elle indique que la méthode redéfinit une méthode de la superclasse'],
          correct: 3,
          explanation: '`@Override` est une indication pour le compilateur (et les lecteurs) qu\'une méthode est destinée à redéfinir une méthode de la superclasse.'
        },
        {
          id: 5,
          question: 'Tous les objets en Java héritent implicitement de quelle classe ?',
          options: ['Main', 'Object', 'Class', 'System'],
          correct: 1,
          explanation: 'La classe `java.lang.Object` est la racine de la hiérarchie des classes en Java.'
        }
      ]
    },
    'java-4': {
      title: 'Quiz Collections Framework',
      questions: [
        {
          id: 1,
          question: 'Quelle interface représente une collection ordonnée sans doublons ?',
          options: ['List', 'Set', 'Map', 'Queue'],
          correct: 1,
          explanation: 'L\'interface `Set` garantit que chaque élément est unique.'
        },
        {
          id: 2,
          question: 'Quelle implémentation de `List` est la plus efficace pour les accès par index ?',
          options: ['ArrayList', 'LinkedList', 'Vector', 'Stack'],
          correct: 0,
          explanation: '`ArrayList` utilise un tableau interne, ce qui rend l\'accès par index (get) très rapide (en temps constant).'
        },
        {
          id: 3,
          question: 'Quelle structure de données stocke des paires clé-valeur ?',
          options: ['Set', 'List', 'Collection', 'Map'],
          correct: 3,
          explanation: 'Une `Map` est une collection qui associe des clés uniques à des valeurs.'
        },
        {
          id: 4,
          question: 'Quelle est la différence principale entre `HashSet` et `TreeSet` ?',
          options: ['HashSet est synchronisé', 'TreeSet ne permet pas les doublons', 'TreeSet maintient les éléments triés', 'HashSet est plus lent'],
          correct: 2,
          explanation: '`TreeSet` stocke ses éléments dans un ordre naturel (ou selon un comparateur fourni), tandis que `HashSet` ne garantit aucun ordre.'
        },
        {
          id: 5,
          question: 'Quelle collection suit une politique "premier entré, premier sorti" (FIFO) ?',
          options: ['Stack', 'Queue', 'Deque', 'Set'],
          correct: 1,
          explanation: 'L\'interface `Queue` (file d\'attente) est conçue pour traiter les éléments dans l\'ordre où ils ont été ajoutés.'
        }
      ]
    },
    'java-5': {
      title: 'Quiz JDBC',
      questions: [
        {
          id: 1,
          question: 'Quelle méthode de l\'objet Statement exécute une requête SELECT ?',
          options: ['execute()', 'executeQuery()', 'executeUpdate()', 'executeSelect()'],
          correct: 1,
          explanation: '`executeQuery()` est spécifiquement utilisé pour les requêtes qui retournent un `ResultSet`, comme SELECT.'
        },
        {
          id: 2,
          question: 'Quel objet contient le résultat d\'une requête SELECT ?',
          options: ['Statement', 'Connection', 'ResultSet', 'QueryResult'],
          correct: 2,
          explanation: 'L\'objet `ResultSet` est un itérateur qui permet de parcourir les lignes de résultat d\'une requête.'
        },
        {
          id: 3,
          question: 'Quelle est la première étape pour se connecter à une base de données avec JDBC ?',
          options: ['Créer un Statement', 'Charger le driver JDBC', 'Ouvrir une connexion', 'Exécuter une requête'],
          correct: 1,
          explanation: 'Avant toute chose, le driver JDBC spécifique à la base de données doit être chargé en mémoire.'
        },
        {
          id: 4,
          question: 'Quel objet est préférable d\'utiliser pour éviter les injections SQL ?',
          options: ['Statement', 'PreparedStatement', 'CallableStatement', 'SQLStatement'],
          correct: 1,
          explanation: '`PreparedStatement` précompile la requête SQL et permet de lier des paramètres de manière sécurisée, prévenant ainsi les injections SQL.'
        },
        {
          id: 5,
          question: 'Quelle méthode de l\'objet Connection est utilisée pour valider une transaction ?',
          options: ['validate()', 'save()', 'apply()', 'commit()'],
          correct: 3,
          explanation: '`connection.commit()` rend permanentes toutes les modifications effectuées depuis le dernier commit.'
        }
      ]
    },

    // ==================== WEB ====================
    'web-1': {
      title: 'Quiz HTML/CSS',
      questions: [
        {
          id: 1,
          question: 'Quelle balise est utilisée pour créer un lien hypertexte ?',
          options: ['<link>', '<a>', '<href>', '<url>'],
          correct: 1,
          explanation: 'La balise <a> (ancre) avec son attribut `href` est utilisée pour créer des liens hypertextes.'
        },
        {
          id: 2,
          question: 'Quelle propriété CSS est utilisée pour changer la couleur du texte ?',
          options: ['text-color', 'font-color', 'color', 'foreground-color'],
          correct: 2,
          explanation: 'La propriété `color` est utilisée pour définir la couleur du texte d\'un élément.'
        },
        {
          id: 3,
          question: 'Quelle balise HTML est utilisée pour définir l\'en-tête principal d\'une page ?',
          options: ['<head>', '<h1>', '<header>', '<heading>'],
          correct: 1,
          explanation: 'La balise <h1> est utilisée pour le titre le plus important. Il ne doit y en avoir qu\'un par page.'
        },
        {
          id: 4,
          question: 'En CSS, comment sélectionner un élément avec l\'id "logo" ?',
          options: ['.logo', 'logo', '#logo', '*logo'],
          correct: 2,
          explanation: 'Le sélecteur d\'ID en CSS utilise le symbole dièse (#).'
        },
        {
          id: 5,
          question: 'Quelle est la différence entre une balise `<div>` et une balise `<span>` ?',
          options: ['<div> est sémantique, <span> ne l\'est pas', '<div> est une balise de type bloc, <span> est de type en ligne', '<div> ne peut pas contenir d\'autres balises', '<span> est utilisé pour les titres'],
          correct: 1,
          explanation: '`<div>` est un conteneur de type bloc (il occupe toute la largeur), tandis que `<span>` est un conteneur en ligne (il n\'occupe que la largeur de son contenu).'
        }
      ]
    },
    'web-2': {
      title: 'Quiz JavaScript',
      questions: [
        {
          id: 1,
          question: 'Quel mot-clé déclare une variable avec une portée de bloc ?',
          options: ['var', 'let', 'const', 'Les deux (let et const)'],
          correct: 3,
          explanation: '`let` et `const` ont été introduits en ES6 et ont une portée de bloc, contrairement à `var` qui a une portée de fonction.'
        },
        {
          id: 2,
          question: 'Comment sélectionner un élément HTML par son ID en JavaScript ?',
          options: ['document.select("#id")', 'document.getElement("id")', 'document.getElementById("id")', 'document.querySelector("id")'],
          correct: 2,
          explanation: 'La méthode `document.getElementById()` est la manière la plus directe et la plus performante de sélectionner un élément par son ID unique.'
        },
        {
          id: 3,
          question: 'Quel opérateur est utilisé pour une comparaison stricte (valeur ET type) ?',
          options: ['=', '==', '===', '!='],
          correct: 2,
          explanation: 'L\'opérateur `===` (égalité stricte) ne fait pas de conversion de type avant de comparer, ce qui est généralement plus sûr.'
        },
        {
          id: 4,
          question: 'Qu\'est-ce que le DOM en JavaScript ?',
          options: ['Un langage de programmation', 'Un framework JavaScript', 'Une API pour manipuler les documents HTML et XML', 'Un type de base de données'],
          correct: 2,
          explanation: 'Le DOM (Document Object Model) est une représentation en arbre du document HTML, permettant à JavaScript de le manipuler dynamiquement.'
        },
        {
          id: 5,
          question: 'Comment ajouter un écouteur d\'événement pour un clic sur un bouton ?',
          options: ['bouton.onClick = fonction;', 'bouton.listen("click", fonction);', 'bouton.addEventListener("click", fonction);', 'bouton.attachEvent("click", fonction);'],
          correct: 2,
          explanation: '`addEventListener` est la méthode standard et moderne pour attacher des événements aux éléments du DOM.'
        }
      ]
    },
    'web-3': {
      title: 'Quiz PHP',
      questions: [
        {
          id: 1,
          question: 'Comment accéder aux données d\'un formulaire envoyé en méthode POST ?',
          options: ['$_GET', '$_POST', '$_REQUEST', '$FORM'],
          correct: 1,
          explanation: 'La superglobale `$_POST` est un tableau associatif contenant les données envoyées au script via la méthode HTTP POST.'
        },
        {
          id: 2,
          question: 'Quel symbole précède toutes les variables en PHP ?',
          options: ['&', '%', '#', '$'],
          correct: 3,
          explanation: 'En PHP, toutes les variables commencent par le symbole dollar ($).'
        },
        {
          id: 3,
          question: 'Quelle fonction est utilisée pour se connecter à une base de données MySQL avec l\'extension MySQLi ?',
          options: ['mysql_connect()', 'mysqli_connect()', 'pdo_connect()', 'connect_mysql()'],
          correct: 1,
          explanation: '`mysqli_connect()` est la fonction de l\'extension MySQLi pour établir une connexion à une base de données MySQL.'
        },
        {
          id: 4,
          question: 'Comment inclure le contenu d\'un autre fichier PHP ?',
          options: ['include "fichier.php";', 'require "fichier.php";', 'Les deux (include et require)', 'import "fichier.php";'],
          correct: 2,
          explanation: '`include` et `require` permettent d\'inclure un fichier. La différence est que `require` provoquera une erreur fatale si le fichier n\'est pas trouvé, alors que `include` ne générera qu\'un avertissement.'
        },
        {
          id: 5,
          question: 'Quel opérateur est utilisé pour la concaténation de chaînes en PHP ?',
          options: ['+', '&', '.', ','],
          correct: 2,
          explanation: 'Le point (.) est l\'opérateur de concaténation en PHP.'
        }
      ]
    },
    'web-4': {
      title: 'Quiz Sessions et Cookies',
      questions: [
        {
          id: 1,
          question: 'Quelle fonction doit être appelée avant toute sortie HTML pour utiliser les sessions en PHP ?',
          options: ['session_create()', 'session_begin()', 'session_start()', 'session_init()'],
          correct: 2,
          explanation: '`session_start()` doit être appelée au tout début du script pour initialiser le mécanisme de session ou reprendre une session existante.'
        },
        {
          id: 2,
          question: 'Où sont stockées les données de session par défaut ?',
          options: ['Dans la base de données', 'Côté client, dans le navigateur', 'Côté serveur, dans des fichiers temporaires', 'Dans une variable globale'],
          correct: 2,
          explanation: 'Les données de session sont stockées côté serveur. Le client ne reçoit qu\'un identifiant de session (généralement via un cookie).'
        },
        {
          id: 3,
          question: 'Comment détruire toutes les données enregistrées dans une session ?',
          options: ['session_delete()', 'session_destroy()', 'session_end()', 'unset($_SESSION)'],
          correct: 1,
          explanation: '`session_destroy()` détruit toutes les données associées à la session actuelle, mais ne supprime pas le cookie de session.'
        },
        {
          id: 4,
          question: 'Quelle est la principale différence entre une session et un cookie ?',
          options: ['Les cookies sont plus sécurisés', 'Les sessions sont stockées côté client', 'Les sessions sont pour les données temporaires, les cookies pour les données permanentes', 'Les données de session sont stockées sur le serveur, les cookies sur le client'],
          correct: 3,
          explanation: 'C\'est la différence fondamentale : les cookies stockent les données sur l\'ordinateur de l\'utilisateur, tandis que les sessions stockent les données sur le serveur.'
        },
        {
          id: 5,
          question: 'Quelle superglobale PHP est utilisée pour accéder aux données de session ?',
          options: ['$_COOKIE', '$_SESSION', '$_SERVER', '$_GLOBALS'],
          correct: 1,
          explanation: 'La superglobale `$_SESSION` est un tableau associatif qui contient toutes les variables de session.'
        }
      ]
    },
    'web-5': {
      title: 'Quiz AJAX',
      questions: [
        {
          id: 1,
          question: 'Quel objet JavaScript natif permet de faire des requêtes AJAX ?',
          options: ['HttpRequest', 'XMLHttpRequest', 'AjaxRequest', 'WebRequest'],
          correct: 1,
          explanation: 'L\'objet `XMLHttpRequest` (XHR) est l\'API de base fournie par les navigateurs pour effectuer des requêtes HTTP asynchrones.'
        },
        {
          id: 2,
          question: 'Que signifie le "A" dans AJAX ?',
          options: ['Asynchrone', 'Automatique', 'Avancé', 'Asynchrone'],
          correct: 0,
          explanation: 'AJAX signifie Asynchronous JavaScript and XML. La nature asynchrone permet de mettre à jour une partie de la page sans la recharger entièrement.'
        },
        {
          id: 3,
          question: 'Quel est l\'état (readyState) de l\'objet XMLHttpRequest lorsque la requête est terminée et la réponse est prête ?',
          options: ['1', '2', '3', '4'],
          correct: 3,
          explanation: 'L\'état 4 (DONE) signifie que l\'opération est terminée. Il faut ensuite vérifier le code de statut (ex: 200 OK).'
        },
        {
          id: 4,
          question: 'Quel format de données a largement remplacé le XML dans les communications AJAX modernes ?',
          options: ['HTML', 'CSV', 'YAML', 'JSON'],
          correct: 3,
          explanation: 'JSON (JavaScript Object Notation) est plus léger et plus facile à parser en JavaScript que le XML, ce qui en a fait le standard de facto.'
        },
        {
          id: 5,
          question: 'Quelle bibliothèque JavaScript simplifie grandement les appels AJAX ?',
          options: ['jQuery', 'React', 'Angular', 'Vue'],
          correct: 0,
          explanation: 'jQuery a popularisé AJAX avec sa méthode `$.ajax()` simple et multi-navigateurs. Aujourd\'hui, des alternatives comme `fetch` ou `axios` sont plus courantes.'
        }
      ]
    },

    // ==================== ANDROID ====================
    'android-1': {
      title: 'Quiz Android Studio et Projet',
      questions: [
        {
          id: 1,
          question: 'Quel fichier déclare les composants de l\'application (activités, services) ?',
          options: ['MainActivity.java', 'AndroidManifest.xml', 'build.gradle', 'strings.xml'],
          correct: 1,
          explanation: '`AndroidManifest.xml` est le fichier de configuration central qui décrit l\'application au système Android.'
        },
        {
          id: 2,
          question: 'Dans quel dossier se trouvent les fichiers de mise en page (layouts) XML ?',
          options: ['src/main/java', 'res/drawable', 'res/values', 'res/layout'],
          correct: 3,
          explanation: 'Le dossier `res/layout` contient tous les fichiers XML qui définissent l\'interface utilisateur.'
        },
        {
          id: 3,
          question: 'Quel est le langage de programmation officiellement recommandé par Google pour le développement Android ?',
          options: ['Java', 'C++', 'Kotlin', 'Dart'],
          correct: 2,
          explanation: 'Depuis 2019, Kotlin est le langage préféré de Google pour le développement Android, offrant plus de sécurité et de concision que Java.'
        },
        {
          id: 4,
          question: 'Quel composant représente un seul écran dans une application Android ?',
          options: ['View', 'Fragment', 'Activity', 'Service'],
          correct: 2,
          explanation: 'Une `Activity` est un composant applicatif qui fournit un écran avec lequel les utilisateurs peuvent interagir.'
        },
        {
          id: 5,
          question: 'Quel outil est utilisé pour gérer les dépendances (bibliothèques) dans un projet Android ?',
          options: ['Maven', 'npm', 'Gradle', 'Ant'],
          correct: 2,
          explanation: 'Gradle est le système de build utilisé par Android Studio pour compiler l\'application et gérer ses dépendances externes.'
        }
      ]
    },
    'android-2': {
      title: 'Quiz Interfaces Utilisateur Android',
      questions: [
        {
          id: 1,
          question: 'Quel layout organise ses enfants de manière linéaire, verticalement ou horizontalement ?',
          options: ['ConstraintLayout', 'LinearLayout', 'FrameLayout', 'RelativeLayout'],
          correct: 1,
          explanation: '`LinearLayout` est un groupe de vues simple qui aligne tous les enfants dans une seule direction.'
        },
        {
          id: 2,
          question: 'Quel widget est utilisé pour afficher du texte à l\'écran ?',
          options: ['EditText', 'Button', 'ImageView', 'TextView'],
          correct: 3,
          explanation: '`TextView` est le widget de base pour afficher du texte statique.'
        },
        {
          id: 3,
          question: 'Quel composant est recommandé pour afficher de longues listes de données de manière efficace ?',
          options: ['ListView', 'ScrollView', 'RecyclerView', 'GridView'],
          correct: 2,
          explanation: '`RecyclerView` est beaucoup plus performant que ListView car il recycle les vues, économisant ainsi de la mémoire.'
        },
        {
          id: 4,
          question: 'Comment doit-on définir les chaînes de caractères dans une application Android selon les bonnes pratiques ?',
          options: ['Directement dans le fichier XML du layout', 'Dans le fichier Java/Kotlin', 'Dans le fichier res/values/strings.xml', 'Dans le fichier build.gradle'],
          correct: 2,
          explanation: 'Externaliser les chaînes dans `strings.xml` facilite la traduction et la maintenance de l\'application.'
        },
        {
          id: 5,
          question: 'Quel pattern est essentiel au fonctionnement de RecyclerView ?',
          options: ['Singleton', 'Factory', 'Adapter', 'Observer'],
          correct: 2,
          explanation: 'Le pattern Adapter fait le pont entre les données et le `RecyclerView`, en créant et liant les vues nécessaires.'
        }
      ]
    },
    'android-3': {
      title: 'Quiz Navigation et Fragments',
      questions: [
        {
          id: 1,
          question: 'Quelle classe est utilisée pour démarrer une nouvelle Activity ?',
          options: ['Intent', 'Activity', 'Context', 'Bundle'],
          correct: 0,
          explanation: 'Un `Intent` est un objet de messagerie utilisé pour demander une action à un autre composant de l\'application, comme démarrer une activité.'
        },
        {
          id: 2,
          question: 'Qu\'est-ce qu\'un Fragment ?',
          options: ['Une application légère', 'Une portion réutilisable de l\'interface utilisateur avec son propre cycle de vie', 'Un thread d\'arrière-plan', 'Un type de base de données'],
          correct: 1,
          explanation: 'Un Fragment représente une partie modulaire de l\'interface utilisateur. Une activité peut héberger plusieurs fragments.'
        },
        {
          id: 3,
          question: 'Quelle méthode du cycle de vie d\'un Fragment est appelée pour créer sa vue ?',
          options: ['onCreate()', 'onStart()', 'onCreateView()', 'onViewCreated()'],
          correct: 2,
          explanation: '`onCreateView()` est la méthode où le Fragment doit "gonfler" son layout XML pour créer sa hiérarchie de vues.'
        },
        {
          id: 4,
          question: 'Quel composant d\'architecture est recommandé pour la communication entre Fragments ?',
          options: ['Intent', 'BroadcastReceiver', 'Shared ViewModel', 'Singleton'],
          correct: 2,
          explanation: 'Un `ViewModel` partagé (scoped à l\'activité) permet aux fragments de communiquer de manière découplée et robuste.'
        },
        {
          id: 5,
          question: 'Que signifie "ajouter une transaction à la back stack" ?',
          options: ['Sauvegarder la transaction dans la base de données', 'Mettre l\'application en arrière-plan', 'Permettre à l\'utilisateur de revenir au fragment précédent avec le bouton Retour', 'Optimiser les performances de la transaction'],
          correct: 2,
          explanation: 'Ajouter une transaction de fragment à la pile de retour (back stack) permet de gérer l\'historique de navigation au sein d\'une même activité.'
        }
      ]
    },
    'android-4': {
      title: 'Quiz Persistance des Données',
      questions: [
        {
          id: 1,
          question: 'Quelle est la base de données relationnelle intégrée nativement dans Android ?',
          options: ['MySQL', 'PostgreSQL', 'SQLite', 'MongoDB'],
          correct: 2,
          explanation: 'SQLite est un moteur de base de données léger et embarqué, inclus dans le système d\'exploitation Android.'
        },
        {
          id: 2,
          question: 'Quelle API est recommandée pour stocker de petites quantités de données clé-valeur (préférences utilisateur) ?',
          options: ['Room', 'SharedPreferences', 'DataStore', 'Realm'],
          correct: 1,
          explanation: '`SharedPreferences` est conçu pour stocker de manière persistante des données primitives simples sous forme de paires clé-valeur.'
        },
        {
          id: 3,
          question: 'Quelle bibliothèque d\'abstraction au-dessus de SQLite est recommandée par Google ?',
          options: ['Room', 'Realm', 'SQLBrite', 'OrmLite'],
          correct: 0,
          explanation: 'Room fait partie des composants d\'architecture Android Jetpack et simplifie grandement l\'interaction avec SQLite.'
        },
        {
          id: 4,
          question: 'Dans la bibliothèque Room, quel composant est une interface qui définit les méthodes d\'accès à la base de données ?',
          options: ['Entity', 'Database', 'DAO (Data Access Object)', 'Repository'],
          correct: 2,
          explanation: 'Le DAO est l\'endroit où vous spécifiez vos requêtes SQL et les associez à des appels de méthode.'
        },
        {
          id: 5,
          question: 'Quelle classe d\'aide gère la création et la mise à jour de la version de la base de données SQLite ?',
          options: ['SQLiteManager', 'DatabaseHelper', 'SQLiteOpenHelper', 'DBManager'],
          correct: 2,
          explanation: '`SQLiteOpenHelper` est une classe d\'aide qui gère le cycle de vie de la base de données, y compris sa création et ses migrations.'
        }
      ]
    },
    'android-5': {
      title: 'Quiz APIs et Déploiement',
      questions: [
        {
          id: 1,
          question: 'Quelle annotation de la bibliothèque Retrofit est utilisée pour marquer une requête HTTP GET ?',
          options: ['@GET', '@POST', '@QUERY', '@PATH'],
          correct: 0,
          explanation: 'L\'annotation `@GET` spécifie que la méthode effectuera une requête HTTP GET.'
        },
        {
          id: 2,
          question: 'Quel est le format de publication recommandé pour une application sur le Google Play Store ?',
          options: ['APK (Android Package Kit)', 'JAR (Java Archive)', 'AAB (Android App Bundle)', 'ZIP'],
          correct: 2,
          explanation: 'L\'Android App Bundle (AAB) est un format de publication qui permet au Play Store de générer et de diffuser des APK optimisés pour chaque configuration d\'appareil.'
        },
        {
          id: 3,
          question: 'Où doivent être déclarées les permissions requises par une application (ex: accès à Internet) ?',
          options: ['Dans le fichier build.gradle', 'Dans une classe Java/Kotlin', 'Dans le fichier AndroidManifest.xml', 'Dans les paramètres de l\'émulateur'],
          correct: 2,
          explanation: 'Toutes les permissions qu\'une application pourrait avoir besoin doivent être déclarées dans le manifeste avec la balise `<uses-permission>`.'
        },
        {
          id: 4,
          question: 'Quel est le but d\'un "keystore" lors de la publication d\'une application ?',
          options: ['Stocker les icônes de l\'application', 'Stocker les traductions', 'Contenir la clé cryptographique pour signer l\'application', 'Gérer les dépendances du projet'],
          correct: 2,
          explanation: 'Le keystore contient la clé de signature privée, qui sert à prouver l\'authenticité de l\'application et à autoriser ses mises à jour.'
        },
        {
          id: 5,
          question: 'Quelle bibliothèque est souvent utilisée avec Retrofit pour parser le JSON en objets Java/Kotlin ?',
          options: ['Gson', 'Jackson', 'Moshi', 'Toutes les réponses sont correctes'],
          correct: 3,
          explanation: 'Retrofit est conçu pour être modulaire et peut fonctionner avec plusieurs bibliothèques de parsing JSON, dont Gson, Jackson et Moshi.'
        }
      ]
    },

    // ==================== LARAVEL ====================
    'laravel-1': {
      title: 'Quiz Installation et Concepts',
      questions: [
        {
          id: 1,
          question: 'Quelle commande utilisant Composer crée un nouveau projet Laravel ?',
          options: [
            'laravel new mon-projet',
            'composer create-project laravel/laravel mon-projet',
            'php artisan new mon-projet',
            'npm init laravel mon-projet'
          ],
          correct: 1,
          explanation: '`composer create-project` est la commande standard pour créer un projet PHP à partir d\'un paquet, ici `laravel/laravel`.'
        },
        {
          id: 2,
          question: 'Quel est le nom de l\'outil en ligne de commande intégré à Laravel ?',
          options: ['Composer', 'Artisan', 'Terminal', 'Blade'],
          correct: 1,
          explanation: 'Artisan fournit un certain nombre de commandes utiles pour le développement, comme la création de contrôleurs, de modèles, etc.'
        },
        {
          id: 3,
          question: 'Dans quel fichier sont stockées les variables d\'environnement (connexion à la BD, etc.) ?',
          options: ['config/app.php', '.env', 'composer.json', 'artisan'],
          correct: 1,
          explanation: 'Le fichier `.env` à la racine du projet contient toutes les configurations spécifiques à l\'environnement.'
        },
        {
          id: 4,
          question: 'Quel est le nom du moteur de template utilisé par Laravel ?',
          options: ['Twig', 'Smarty', 'Blade', 'Pug'],
          correct: 2,
          explanation: 'Blade est le moteur de template simple mais puissant inclus avec Laravel.'
        },
        {
          id: 5,
          question: 'Quelle est l\'architecture logicielle principalement suivie par Laravel ?',
          options: ['MVVM', 'MVC', 'MVP', 'Viper'],
          correct: 1,
          explanation: 'Laravel est fortement basé sur le pattern Modèle-Vue-Contrôleur (MVC).'
        }
      ]
    },
    'laravel-2': {
      title: 'Quiz Routing',
      questions: [
        {
          id: 1,
          question: 'Dans quel fichier sont généralement définies les routes pour l\'interface web ?',
          options: [
            'app/Http/routes.php',
            'routes/api.php',
            'routes/web.php',
            'config/routes.php'
          ],
          correct: 2,
          explanation: 'Les routes web, qui ont accès à la session et aux cookies, sont définies dans `routes/web.php`.'
        },
        {
          id: 2,
          question: 'Quelle méthode de `Route` est utilisée pour répondre à une requête GET ?',
          options: ['Route::post()', 'Route::get()', 'Route::any()', 'Route::match()'],
          correct: 1,
          explanation: '`Route::get()` enregistre une route qui ne répond qu\'aux requêtes HTTP GET.'
        },
        {
          id: 3,
          question: 'Comment passer un paramètre dans une URL ?',
          options: ['Route::get(\'/user?{id}\', ...)', 'Route::get(\'/user/{id}\', ...)', 'Route::get(\'/user/[id]\', ...)', 'Route::get(\'/user:id\', ...)'],
          correct: 1,
          explanation: 'Les paramètres de route sont définis entre accolades dans l\'URI.'
        },
        {
          id: 4,
          question: 'Quelle commande Artisan crée un nouveau contrôleur ?',
          options: ['php artisan make:route', 'php artisan create:controller', 'php artisan make:controller MonController', 'php artisan controller:new MonController'],
          correct: 2,
          explanation: 'La commande `make:controller` est utilisée pour générer un nouveau fichier de contrôleur.'
        },
        {
          id: 5,
          question: 'Quelle méthode de `Route` crée automatiquement les routes pour un CRUD complet ?',
          options: ['Route::crud()', 'Route::all()', 'Route::restful()', 'Route::resource()'],
          correct: 3,
          explanation: '`Route::resource(\'photos\', PhotoController::class)` crée 7 routes pour gérer une ressource.'
        }
      ]
    },
    'laravel-3': {
      title: 'Quiz Eloquent ORM',
      questions: [
        {
          id: 1,
          question: 'Quelle méthode est utilisée pour charger une relation sur un modèle déjà récupéré (lazy loading) ?',
          options: ['with()', 'load()', 'attach()', 'get()'],
          correct: 1,
          explanation: '`load()` est utilisé pour charger des relations sur une collection ou un modèle existant.'
        },
        {
          id: 2,
          question: 'Comment s\'appelle la classe qui représente une table dans la base de données ?',
          options: ['Un Contrôleur', 'Une Migration', 'Un Modèle', 'Une Ressource'],
          correct: 2,
          explanation: 'En Eloquent, chaque table de la base de données a un "Modèle" correspondant qui est utilisé pour interagir avec cette table.'
        },
        {
          id: 3,
          question: 'Quelle relation est utilisée pour définir une relation "un à plusieurs" ?',
          options: ['belongsTo', 'hasOne', 'hasMany', 'belongsToMany'],
          correct: 2,
          explanation: 'La relation `hasMany` est utilisée lorsqu\'un modèle possède plusieurs instances d\'un autre modèle (ex: un utilisateur a plusieurs articles).'
        },
        {
          id: 4,
          question: 'Quelle méthode Eloquent permet de récupérer tous les enregistrements d\'une table ?',
          options: ['Model::get()', 'Model::all()', 'Model::fetch()', 'Model::select()'],
          correct: 1,
          explanation: 'La méthode statique `all()` sur un modèle Eloquent retourne une collection de tous les enregistrements de la table associée.'
        },
        {
          id: 5,
          question: 'À quoi servent les "migrations" dans Laravel ?',
          options: ['À déplacer le projet sur un autre serveur', 'À gérer le versionnement de la structure de la base de données', 'À optimiser les requêtes SQL', 'À créer des utilisateurs de test'],
          correct: 1,
          explanation: 'Les migrations permettent de définir, modifier et partager la structure de la base de données de manière programmable et versionnée.'
        }
      ]
    },
    'laravel-4': {
      title: 'Quiz Authentification et Middlewares',
      questions: [
        {
          id: 1,
          question: 'Quel middleware est utilisé pour protéger une route et s\'assurer que l\'utilisateur est connecté ?',
          options: ['guest', 'auth', 'verified', 'admin'],
          correct: 1,
          explanation: 'Le middleware `auth` redirige les utilisateurs non authentifiés vers la page de connexion.'
        },
        {
          id: 2,
          question: 'Quelle commande Artisan installe le starter kit d\'authentification "Breeze" ?',
          options: ['php artisan breeze:install', 'php artisan ui breeze', 'php artisan install:breeze', 'composer require laravel/breeze'],
          correct: 0,
          explanation: 'Après avoir requis le paquet avec Composer, `php artisan breeze:install` installe les vues, routes et contrôleurs nécessaires.'
        },
        {
          id: 3,
          question: 'Qu\'est-ce qu\'un middleware dans le contexte de Laravel ?',
          options: ['Un template de vue', 'Une couche de logique qui filtre les requêtes HTTP', 'Un gestionnaire de base de données', 'Une bibliothèque JavaScript'],
          correct: 1,
          explanation: 'Les middlewares fournissent un mécanisme pratique pour inspecter et filtrer les requêtes HTTP entrant dans votre application.'
        },
        {
          id: 4,
          question: 'À quoi sert le middleware "guest" ?',
          options: ['À donner un accès invité à tout le site', 'À rediriger les utilisateurs déjà connectés loin des pages comme /login ou /register', 'À afficher une page de maintenance', 'À vérifier si l\'utilisateur est un administrateur'],
          correct: 1,
          explanation: 'Le middleware `guest` est l\'inverse de `auth`. Il est utile pour les pages que seuls les visiteurs devraient pouvoir voir.'
        },
        {
          id: 5,
          question: 'Comment appliquer un middleware à un groupe de routes ?',
          options: ['En utilisant Route::group() avec la méthode middleware()', 'En l\'ajoutant dans chaque définition de route', 'En utilisant un fichier de configuration spécial', 'Ce n\'est pas possible'],
          correct: 0,
          explanation: '`Route::middleware([\'auth\'])->group(function () { ... });` est la syntaxe standard pour appliquer un ou plusieurs middlewares à un groupe de routes.'
        }
      ]
    },
    'laravel-5': {
      title: 'Quiz API REST et Sanctum',
      questions: [
        {
          id: 1,
          question: 'Quelle commande Artisan génère un contrôleur optimisé pour une API (sans les vues create et edit) ?',
          options: [
            'php artisan make:controller MonController --api',
            'php artisan make:apiController MonController',
            'php artisan make:controller MonController --json',
            'php artisan make:resource MonController'
          ],
          correct: 0,
          explanation: 'L\'option `--api` exclut les méthodes `create` et `edit` qui retournent normalement des vues HTML.'
        },
        {
          id: 2,
          question: 'Quel est le but des "API Resources" dans Laravel ?',
          options: ['Créer des routes d\'API', 'Gérer l\'authentification', 'Transformer les modèles Eloquent en JSON de manière contrôlée', 'Valider les requêtes d\'API'],
          correct: 2,
          explanation: 'Les API Resources agissent comme une couche de transformation entre vos modèles et la réponse JSON, vous donnant un contrôle total sur les données exposées.'
        },
        {
          id: 3,
          question: 'Dans quel fichier les routes d\'API doivent-elles être définies ?',
          options: ['routes/web.php', 'routes/channels.php', 'routes/api.php', 'routes/console.php'],
          correct: 2,
          explanation: 'Les routes dans `routes/api.php` sont sans état (stateless) et sont automatiquement préfixées par `/api`.'
        },
        {
          id: 4,
          question: 'Quel paquet Laravel est recommandé pour l\'authentification d\'API via des tokens ?',
          options: ['Passport', 'JWT-Auth', 'Sanctum', 'OAuth2-Server'],
          correct: 2,
          explanation: 'Laravel Sanctum est un système d\'authentification léger et simple pour les SPAs et les APIs basées sur des tokens.'
        },
        {
          id: 5,
          question: 'Comment un client doit-il envoyer un token d\'API Sanctum au serveur ?',
          options: ['Dans un cookie', 'Dans les paramètres de l\'URL', 'Dans l\'en-tête HTTP "Authorization" avec le préfixe "Bearer"', 'Dans le corps de la requête POST'],
          correct: 2,
          explanation: 'Le standard est d\'envoyer le token dans l\'en-tête `Authorization` sous la forme `Bearer VOTRE_TOKEN`.'
        }
      ]
    },

    // ==================== DATABASE ====================
    'database-1': {
      title: 'Quiz Concepts Fondamentaux',
      questions: [
        {
          id: 1,
          question: 'Quel est le langage standard pour interroger et manipuler les bases de données relationnelles ?',
          options: ['NoSQL', 'SQL', 'GraphQL', 'XQuery'],
          correct: 1,
          explanation: 'SQL (Structured Query Language) est le langage standard utilisé par la quasi-totalité des SGBD relationnels.'
        },
        {
          id: 2,
          question: 'Qu\'est-ce qu\'une clé primaire (Primary Key) ?',
          options: ['Une clé utilisée pour le chiffrement', 'Une colonne qui identifie de manière unique chaque ligne d\'une table', 'La première colonne d\'une table', 'Une clé qui lie deux tables'],
          correct: 1,
          explanation: 'La clé primaire garantit l\'unicité de chaque enregistrement dans une table.'
        },
        {
          id: 3,
          question: 'Qu\'est-ce qu\'une clé étrangère (Foreign Key) ?',
          options: ['Une clé d\'une table différente', 'Une clé qui n\'est pas la clé primaire', 'Une colonne dans une table qui fait référence à la clé primaire d\'une autre table', 'Une clé utilisée pour les jointures externes'],
          correct: 2,
          explanation: 'La clé étrangère est le mécanisme qui permet de créer des relations entre les tables.'
        },
        {
          id: 4,
          question: 'Quel SGBD est connu pour être un système de base de données "embarqué" (dans un fichier) ?',
          options: ['MySQL', 'PostgreSQL', 'Oracle', 'SQLite'],
          correct: 3,
          explanation: 'SQLite est un moteur de base de données qui ne nécessite pas de serveur et stocke toute la base dans un seul fichier.'
        },
        {
          id: 5,
          question: 'Quelle commande SQL est utilisée pour extraire des données d\'une base de données ?',
          options: ['GET', 'OPEN', 'SELECT', 'EXTRACT'],
          correct: 2,
          explanation: 'La commande `SELECT` est utilisée pour interroger la base de données et récupérer des données.'
        }
      ]
    },
    'database-2': {
      title: 'Quiz Modélisation et Conception',
      questions: [
        {
          id: 1,
          question: 'Quel type de diagramme est couramment utilisé pour représenter les entités et leurs relations ?',
          options: [
            'Diagramme de séquence',
            'Diagramme de classes',
            'Diagramme Entité-Relation (ERD)',
            'Diagramme de flux de données'
          ],
          correct: 2,
          explanation: 'Le diagramme Entité-Relation (ERD) est un outil visuel pour concevoir des bases de données en montrant les entités, leurs attributs et leurs inter-relations.'
        },
        {
          id: 2,
          question: 'Quelle "forme normale" vise à éliminer les dépendances transitives ?',
          options: ['Première Forme Normale (1NF)', 'Deuxième Forme Normale (2NF)', 'Troisième Forme Normale (3NF)', 'BCNF'],
          correct: 2,
          explanation: 'La 3NF s\'assure que tous les attributs ne dépendent que de la clé primaire, et non d\'autres attributs non-clés.'
        },
        {
          id: 3,
          question: 'Dans une relation "plusieurs à plusieurs" (n-n), comment est-elle généralement implémentée ?',
          options: ['En ajoutant des clés étrangères dans les deux tables', 'En utilisant une table de jonction (ou table pivot)', 'En dupliquant les données', 'Ce n\'est pas possible dans un modèle relationnel'],
          correct: 1,
          explanation: 'Une troisième table, appelée table de jonction, est créée pour décomposer la relation n-n en deux relations 1-n.'
        },
        {
          id: 4,
          question: 'Qu\'est-ce que la cardinalité dans la modélisation de données ?',
          options: ['Le nombre de colonnes dans une table', 'Le type de données d\'une clé', 'La relation numérique entre deux entités (un à un, un à plusieurs, etc.)', 'La vitesse d\'une requête'],
          correct: 2,
          explanation: 'La cardinalité définit le nombre d\'occurrences d\'une entité qui peuvent être associées à une occurrence d\'une autre entité.'
        },
        {
          id: 5,
          question: 'Que signifie le terme "normalisation" dans la conception de bases de données ?',
          options: ['Le processus de rendre les requêtes plus rapides', 'Le processus d\'organisation des colonnes et des tables pour minimiser la redondance des données', 'Le processus de chiffrer la base de données', 'Le processus de créer des utilisateurs'],
          correct: 1,
          explanation: 'La normalisation est une technique pour concevoir des schémas de base de données de manière à réduire la redondance et à améliorer l\'intégrité des données.'
        }
      ]
    },
    'database-3': {
      title: 'Quiz SQL Avancé',
      questions: [
        {
          id: 1,
          question: 'Quel type de JOIN retourne toutes les lignes de la table de gauche, et seulement les lignes correspondantes de la table de droite ?',
          options: [
            'INNER JOIN',
            'LEFT JOIN',
            'RIGHT JOIN',
            'FULL OUTER JOIN'
          ],
          correct: 1,
          explanation: '`LEFT JOIN` est utilisé pour récupérer tous les enregistrements de la table de gauche même s\'il n\'y a pas de correspondance dans la table de droite.'
        },
        {
          id: 2,
          question: 'Quelle clause SQL est utilisée pour filtrer les résultats d\'une fonction d\'agrégation (comme COUNT ou SUM) ?',
          options: ['WHERE', 'FILTER', 'HAVING', 'GROUP BY'],
          correct: 2,
          explanation: 'La clause `HAVING` est utilisée pour filtrer les groupes créés par `GROUP BY`, alors que `WHERE` filtre les lignes avant le regroupement.'
        },
        {
          id: 3,
          question: 'À quoi sert une sous-requête ?',
          options: ['À exécuter une requête à l\'intérieur d\'une autre requête', 'À créer une table temporaire', 'À effectuer des calculs complexes', 'Toutes les réponses sont correctes'],
          correct: 3,
          explanation: 'Une sous-requête (ou subquery) est une requête imbriquée qui peut être utilisée dans diverses clauses (SELECT, FROM, WHERE) pour des interrogations complexes.'
        },
        {
          id: 4,
          question: 'Quelle fonction de fenêtrage (window function) permet de classer les lignes au sein d\'une partition ?',
          options: ['RANK()', 'PARTITION()', 'WINDOW()', 'ORDER()'],
          correct: 0,
          explanation: '`RANK()`, `DENSE_RANK()` et `ROW_NUMBER()` sont des fonctions de fenêtrage utilisées pour assigner un rang aux lignes en fonction d\'un certain ordre.'
        },
        {
          id: 5,
          question: 'Que fait une clause `UNION` ?',
          options: ['Elle joint deux tables horizontalement', 'Elle combine les jeux de résultats de deux ou plusieurs requêtes SELECT en un seul', 'Elle calcule l\'intersection de deux ensembles de résultats', 'Elle crée une vue'],
          correct: 1,
          explanation: '`UNION` est utilisé pour combiner les résultats de plusieurs requêtes SELECT, en supprimant les doublons par défaut.'
        }
      ]
    },
    'database-4': {
      title: 'Quiz Transactions ACID',
      questions: [
        {
          id: 1,
          question: 'Quelle propriété ACID garantit qu\'une transaction est traitée comme une seule unité, "tout ou rien" ?',
          options: [
            'Atomicité',
            'Cohérence',
            'Isolation',
            'Durabilité'
          ],
          correct: 0,
          explanation: 'L\'atomicité assure que si une partie de la transaction échoue, toute la transaction est annulée (rollback).'
        },
        {
          id: 2,
          question: 'Quelle propriété ACID assure qu\'une fois la transaction validée, les changements sont permanents ?',
          options: [
            'Atomicité',
            'Cohérence',
            'Isolation',
            'Durabilité'
          ],
          correct: 3,
          explanation: 'La durabilité garantit que les données validées survivront à une panne du système (ex: coupure de courant).'
        },
        {
          id: 3,
          question: 'Quelle commande SQL est utilisée pour annuler une transaction en cours ?',
          options: ['COMMIT', 'CANCEL', 'UNDO', 'ROLLBACK'],
          correct: 3,
          explanation: '`ROLLBACK` annule toutes les modifications effectuées depuis le début de la transaction.'
        },
        {
          id: 4,
          question: 'Que signifie la propriété d\'"Isolation" dans le contexte des transactions ?',
          options: ['La base de données est isolée du réseau', 'Chaque transaction est exécutée comme si elle était seule, sans interférence des autres transactions concurrentes', 'Les utilisateurs sont isolés les uns des autres', 'Les tables sont isolées les unes des autres'],
          correct: 1,
          explanation: 'L\'isolation empêche les problèmes liés à la concurrence, comme les lectures fantômes ou les lectures non reproductibles.'
        },
        {
          id: 5,
          question: 'Quelle commande SQL démarre une transaction ?',
          options: ['BEGIN TRANSACTION', 'START TRANSACTION', 'Les deux sont correctes', 'INIT TRANSACTION'],
          correct: 2,
          explanation: 'La syntaxe peut varier légèrement, mais `BEGIN TRANSACTION` ou `START TRANSACTION` sont les commandes standards pour commencer une transaction.'
        }
      ]
    },
    'database-5': {
      title: 'Quiz Optimisation et Performances',
      questions: [
        {
          id: 1,
          question: 'Quelle structure de données est principalement utilisée pour améliorer les performances des requêtes de recherche (SELECT) ?',
          options: [
            'Vues (Views)',
            'Index',
            'Procédures stockées',
            'Déclencheurs (Triggers)'
          ],
          correct: 1,
          explanation: 'Un index permet au SGBD de localiser rapidement les lignes sans avoir à parcourir toute la table, mais il a un coût sur les opérations d\'écriture.'
        },
        {
          id: 2,
          question: 'Quelle commande SQL est utilisée pour analyser le plan d\'exécution d\'une requête ?',
          options: ['ANALYZE', 'OPTIMIZE', 'EXPLAIN', 'PLAN'],
          correct: 2,
          explanation: '`EXPLAIN` (ou `EXPLAIN PLAN`) montre comment la base de données prévoit d\'exécuter une requête, ce qui est crucial pour l\'optimisation.'
        },
        {
          id: 3,
          question: 'Qu\'est-ce qu\'un "full table scan" ?',
          options: ['Une sauvegarde complète de la table', 'Une opération qui lit chaque ligne de la table pour trouver les résultats', 'Une requête qui sélectionne toutes les colonnes', 'Un type d\'index'],
          correct: 1,
          explanation: 'Un "full table scan" est généralement une opération lente sur les grandes tables, que l\'on cherche à éviter en créant des index appropriés.'
        },
        {
          id: 4,
          question: 'Pourquoi est-il souvent déconseillé d\'utiliser `SELECT *` en production ?',
          options: ['Ce n\'est pas du SQL standard', 'Cela peut retourner des données inutiles, augmentant la charge réseau et mémoire', 'Cela empêche l\'utilisation des index', 'Cela peut causer des problèmes de sécurité'],
          correct: 1,
          explanation: 'Il est préférable de ne sélectionner que les colonnes nécessaires pour minimiser le trafic réseau et la consommation de mémoire.'
        },
        {
          id: 5,
          question: 'Qu\'est-ce qu\'une "vue" (view) dans une base de données ?',
          options: ['Une table physique', 'Une requête SELECT stockée qui se comporte comme une table virtuelle', 'Un synonyme pour une table', 'Une sauvegarde d\'une table'],
          correct: 1,
          explanation: 'Une vue peut simplifier des requêtes complexes et fournir une couche de sécurité en n\'exposant qu\'une partie des données d\'une table.'
        }
      ]
    },

    // ==================== MOBILE JS ====================
    'mobile-js-1': {
      title: 'Quiz React Native et Composants',
      questions: [
        {
          id: 1,
          question: 'Quelle commande de la CLI React Native est utilisée pour initialiser un nouveau projet ?',
          options: [
            'npx react-native start',
            'npx react-native init MonProjet',
            'npm create react-native MonProjet',
            'npx react-native-create-app MonProjet'
          ],
          correct: 1,
          explanation: '`npx react-native init` crée une nouvelle application React Native avec une structure de projet native.'
        },
        {
          id: 2,
          question: 'Quel composant de base est utilisé comme un conteneur pour organiser d\'autres composants ?',
          options: ['<Text>', '<Div>', '<Container>', '<View>'],
          correct: 3,
          explanation: 'Le composant `<View>` est le bloc de construction le plus fondamental pour créer des interfaces, similaire à une `<div>` en web.'
        },
        {
          id: 3,
          question: 'Comment applique-t-on du style à un composant en React Native ?',
          options: ['Avec des fichiers CSS externes', 'Avec des attributs de style en ligne', 'En utilisant l\'API StyleSheet.create', 'Les deux (en ligne et StyleSheet)'],
          correct: 3,
          explanation: 'Bien qu\'on puisse utiliser des styles en ligne, la bonne pratique est d\'utiliser `StyleSheet.create` pour de meilleures performances et une meilleure organisation.'
        },
        {
          id: 4,
          question: 'Quel est le système de mise en page principal utilisé par React Native ?',
          options: ['Grid', 'Flexbox', 'Table', 'Absolute positioning'],
          correct: 1,
          explanation: 'React Native implémente Flexbox par défaut pour créer des mises en page fluides et adaptatives sur différentes tailles d\'écran.'
        },
        {
          id: 5,
          question: 'Quel composant est utilisé pour rendre du texte ?',
          options: ['<View>', '<String>', '<p>', '<Text>'],
          correct: 3,
          explanation: 'Tout texte doit être encapsulé dans un composant `<Text>` en React Native.'
        }
      ]
    },
    'mobile-js-2': {
      title: 'Quiz State Management en React Native',
      questions: [
        {
          id: 1,
          question: 'Quel hook de React est utilisé pour gérer l\'état local dans un composant fonctionnel ?',
          options: [
            'useEffect',
            'useState',
            'useContext',
            'useReducer'
          ],
          correct: 1,
          explanation: '`useState` est le hook fondamental pour ajouter un état local à un composant.'
        },
        {
          id: 2,
          question: 'Comment passe-t-on des données d\'un composant parent à un composant enfant ?',
          options: [
            'Via l\'état (state)',
            'Via les props (propriétés)',
            'Via le contexte (context)',
            'Via une fonction globale'
          ],
          correct: 1,
          explanation: 'Les props sont le mécanisme standard pour un flux de données descendant, du parent vers l\'enfant.'
        },
        {
          id: 3,
          question: 'À quoi sert l\'API Context de React ?',
          options: ['À gérer l\'état global sans "prop drilling"', 'À effectuer des appels réseau', 'À styliser les composants', 'À gérer la navigation'],
          correct: 0,
          explanation: 'Context permet de partager des données (comme le thème de l\'app ou l\'utilisateur connecté) à travers l\'arbre de composants sans passer les props manuellement à chaque niveau.'
        },
        {
          id: 4,
          question: 'Quand le code à l\'intérieur d\'un `useEffect(() => { ... }, [])` est-il exécuté ?',
          options: ['À chaque rendu du composant', 'Seulement après le premier rendu du composant', 'Quand le composant est détruit', 'Quand une prop spécifique change'],
          correct: 1,
          explanation: 'Le tableau de dépendances vide `[]` signifie que l\'effet ne s\'exécutera qu\'une seule fois, simulant le comportement de `componentDidMount`.'
        },
        {
          id: 5,
          question: 'Quelle bibliothèque est souvent utilisée pour la gestion d\'état complexe dans de grandes applications React Native ?',
          options: ['React Query', 'Redux', 'Zustand', 'Toutes les réponses sont correctes'],
          correct: 3,
          explanation: 'Redux est la solution historique, mais des bibliothèques plus modernes comme Zustand ou React Query (pour l\'état serveur) sont également très populaires.'
        }
      ]
    },
    'mobile-js-3': {
      title: 'Quiz APIs et Réseau',
      questions: [
        {
          id: 1,
          question: 'Quelle API est intégrée à React Native pour effectuer des requêtes réseau ?',
          options: [
            'jQuery.ajax',
            'Axios',
            'Fetch API',
            'Superagent'
          ],
          correct: 2,
          explanation: 'L\'API `Fetch` est la norme web moderne pour les requêtes réseau et est disponible nativement en React Native.'
        },
        {
          id: 2,
          question: 'Quel est un avantage d\'utiliser la bibliothèque Axios par rapport à Fetch ?',
          options: ['Elle est plus rapide', 'Elle transforme automatiquement les données JSON et gère mieux les erreurs HTTP', 'Elle ne nécessite pas de promesses', 'Elle est intégrée à React'],
          correct: 1,
          explanation: 'Axios simplifie le code en gérant automatiquement le parsing JSON et en traitant les erreurs HTTP (4xx, 5xx) comme des rejets de promesse.'
        },
        {
          id: 3,
          question: 'Que doit-on faire avec la réponse d\'une requête `fetch` avant d\'utiliser les données JSON ?',
          options: ['Rien, c\'est automatique', 'Appeler la méthode `response.json()`', 'Utiliser `JSON.parse(response)`', 'Appeler la méthode `response.text()`'],
          correct: 1,
          explanation: 'La méthode `response.json()` lit le corps de la réponse et le parse en JSON. C\'est une opération asynchrone qui retourne une promesse.'
        },
        {
          id: 4,
          question: 'Comment gérer une erreur réseau avec `fetch` et `async/await` ?',
          options: ['Avec un bloc `if/else`', 'Avec un bloc `try...catch`', 'En utilisant la méthode `.error()`', 'Fetch ne peut pas gérer les erreurs'],
          correct: 1,
          explanation: 'Les erreurs réseau (comme une coupure de connexion) font que la promesse de `fetch` est rejetée, ce qui peut être capturé par un bloc `catch`.'
        },
        {
          id: 5,
          question: 'À quoi servent les "intercepteurs" dans Axios ?',
          options: ['À bloquer certaines requêtes', 'À ajouter des en-têtes ou à gérer les erreurs de manière globale', 'À intercepter le trafic réseau des autres applications', 'À accélérer les requêtes'],
          correct: 1,
          explanation: 'Les intercepteurs permettent d\'exécuter du code avant qu\'une requête ne soit envoyée ou après qu\'une réponse soit reçue, ce qui est idéal pour l\'authentification ou la gestion globale des erreurs.'
        }
      ]
    },
    'mobile-js-4': {
      title: 'Quiz Fonctionnalités Natives',
      questions: [
        {
          id: 1,
          question: 'Quelle API est utilisée pour stocker de petites quantités de données clé-valeur de manière persistante ?',
          options: [
            'LocalStorage',
            'AsyncStorage',
            'SQLite',
            'DataStore'
          ],
          correct: 1,
          explanation: '`AsyncStorage` (maintenant dans un package communautaire) est la solution de base pour le stockage clé-valeur en React Native.'
        },
        {
          id: 2,
          question: 'Quelle est la première étape avant d\'utiliser une fonctionnalité native sensible comme la caméra ou la localisation ?',
          options: ['Vérifier la connexion internet', 'Demander la permission à l\'utilisateur', 'Redémarrer l\'application', 'Installer une bibliothèque'],
          correct: 1,
          explanation: 'Les systèmes d\'exploitation modernes exigent une autorisation explicite de l\'utilisateur pour accéder aux fonctionnalités sensibles.'
        },
        {
          id: 3,
          question: 'Quel package est couramment utilisé pour accéder à la caméra ?',
          options: [
            'react-native-camera',
            'react-native-vision-camera',
            'expo-camera',
            'Toutes les réponses sont correctes'
          ],
          correct: 3,
          explanation: 'Plusieurs bibliothèques existent. `react-native-vision-camera` est une option moderne et performante pour les projets React Native purs.'
        },
        {
          id: 4,
          question: 'Comment s\'appelle le pont qui permet à JavaScript de communiquer avec le code natif (Java/Kotlin, Objective-C/Swift) ?',
          options: ['Le Bridge', 'Le Tunnel', 'Le Bus d\'Événements', 'Le Connecteur'],
          correct: 0,
          explanation: 'Le "Bridge" (pont) est le cœur de l\'architecture de React Native, sérialisant les messages entre le thread JavaScript et les threads natifs.'
        },
        {
          id: 5,
          question: 'Pourquoi les opérations avec `AsyncStorage` sont-elles asynchrones ?',
          options: ['Pour des raisons de sécurité', 'Parce qu\'elles impliquent des opérations de lecture/écriture sur le disque, qui peuvent être lentes', 'Pour être compatibles avec `fetch`', 'C\'est une convention de React Native'],
          correct: 1,
          explanation: 'Les opérations sur le système de fichiers sont potentiellement bloquantes. En les rendant asynchrones, on évite de geler l\'interface utilisateur.'
        }
      ]
    },
    'mobile-js-5': {
      title: 'Quiz Publication et Déploiement',
      questions: [
        {
          id: 1,
          question: 'Quel fichier de configuration Android est utilisé pour déclarer les permissions et les activités ?',
          options: [
            'android/app/build.gradle',
            'android/app/src/main/AndroidManifest.xml',
            'android/app/src/main/res/values/strings.xml',
            'android/gradle.properties'
          ],
          correct: 1,
          explanation: '`AndroidManifest.xml` est le fichier de configuration central de toute application Android.'
        },
        {
          id: 2,
          question: 'Quel outil est nécessaire sur un Mac pour compiler et publier une application iOS ?',
          options: [
            'Android Studio',
            'Visual Studio Code',
            'Xcode',
            'AppCode'
          ],
          correct: 2,
          explanation: 'Xcode est l\'environnement de développement officiel d\'Apple, indispensable pour le développement et la publication iOS.'
        },
        {
          id: 3,
          question: 'Quelle est la commande Gradle pour générer un Android App Bundle (AAB) de production ?',
          options: [
            './gradlew assembleRelease',
            './gradlew installRelease',
            './gradlew bundleRelease',
            './gradlew build'
          ],
          correct: 2,
          explanation: 'La tâche `bundleRelease` crée le fichier AAB, qui est le format recommandé pour la publication sur le Google Play Store.'
        },
        {
          id: 4,
          question: 'Quel service d\'Apple est utilisé pour distribuer des versions bêta d\'une application à des testeurs ?',
          options: [
            'App Store',
            'iTunes Connect',
            'TestFlight',
            'iCloud'
          ],
          correct: 2,
          explanation: 'TestFlight permet de distribuer facilement des builds à des testeurs internes et externes avant la publication officielle.'
        },
        {
          id: 5,
          question: 'Qu\'est-ce qu\'un "keystore" dans le contexte de la publication Android ?',
          options: ['Une base de données pour les clés de l\'app', 'Un fichier contenant la clé cryptographique pour signer l\'application', 'Un gestionnaire de mots de passe', 'Un fichier de configuration'],
          correct: 1,
          explanation: 'Le keystore est un fichier crucial qui contient votre clé de signature privée. Perdre ce fichier signifie que vous ne pourrez plus mettre à jour votre application.'
        }
      ]
    },

    // ==================== JAVASCRIPT ====================
    'js-1': {
      title: 'Quiz ES6+',
      questions: [
        {
          id: 1,
          question: 'Quelle syntaxe permet d\'écrire des chaînes de caractères sur plusieurs lignes et d\'y interpoler des variables ?',
          options: [
            'Simple quotes (\')',
            'Double quotes (")',
            'Backticks (`)',
            'String() constructor'
          ],
          correct: 2,
          explanation: 'Les "template literals", utilisant des backticks (`), permettent l\'interpolation avec `${variable}` et les sauts de ligne directs.'
        },
        {
          id: 2,
          question: 'Quelle est la principale différence entre `let` et `const` ?',
          options: ['`let` a une portée de bloc, `const` une portée de fonction', '`const` ne peut pas être réassigné, `let` le peut', '`let` est pour les chaînes, `const` pour les nombres', 'Il n\'y a pas de différence'],
          correct: 1,
          explanation: 'Une variable déclarée avec `const` doit être initialisée immédiatement et sa référence ne peut pas être changée.'
        },
        {
          id: 3,
          question: 'À quoi sert la syntaxe de "destructuring" (déstructuration) ?',
          options: ['À détruire des objets pour libérer de la mémoire', 'À extraire des valeurs d\'objets ou de tableaux dans des variables distinctes', 'À combiner plusieurs objets en un seul', 'À créer des structures de données complexes'],
          correct: 1,
          explanation: 'La déstructuration offre une syntaxe concise pour extraire des données, par exemple : `const { name } = user;`.'
        },
        {
          id: 4,
          question: 'Que retourne une fonction fléchée `(a, b) => a + b` ?',
          options: ['Rien, il manque le mot-clé return', 'Un objet contenant a et b', 'La somme de a et b', 'Une erreur de syntaxe'],
          correct: 2,
          explanation: 'Pour les fonctions fléchées avec une seule expression, le `return` est implicite.'
        },
        {
          id: 5,
          question: 'Quel opérateur permet de combiner les éléments de plusieurs tableaux en un seul ?',
          options: ['L\'opérateur +', 'L\'opérateur ... (spread)', 'La méthode concat()', 'Les deux (spread et concat)'],
          correct: 3,
          explanation: 'L\'opérateur spread (`...`) est une syntaxe ES6 moderne et très lisible, tandis que `concat()` est la méthode traditionnelle.'
        }
      ]
    },
    'js-2': {
      title: 'Quiz React/Vue',
      questions: [
        {
          id: 1,
          question: 'Quel concept permet de passer des données d\'un composant parent à un composant enfant ?',
          options: [
            'State',
            'Props',
            'Context',
            'Refs'
          ],
          correct: 1,
          explanation: 'Les "props" (propriétés) sont le mécanisme standard pour un flux de données descendant dans les architectures à base de composants.'
        },
        {
          id: 2,
          question: 'À quoi sert l\'"état" (state) dans un composant ?',
          options: ['À stocker des données qui ne changent jamais', 'À stocker des données privées au composant, dont les changements déclenchent un nouveau rendu', 'À passer des données aux composants parents', 'À définir le style du composant'],
          correct: 1,
          explanation: 'L\'état représente les données dynamiques d\'un composant. Sa mise à jour est le principal moyen de rendre une interface utilisateur interactive.'
        },
        {
          id: 3,
          question: 'Qu\'est-ce que le "DOM Virtuel" (Virtual DOM) ?',
          options: ['Une version plus rapide du DOM réel', 'Une représentation en mémoire du DOM réel, utilisée par les frameworks pour optimiser les mises à jour', 'Un outil de débogage', 'Une norme de sécurité'],
          correct: 1,
          explanation: 'Les frameworks comme React et Vue utilisent un VDOM pour calculer les différences (diffing) et minimiser les manipulations coûteuses du DOM réel.'
        },
        {
          id: 4,
          question: 'Dans React, quel hook est utilisé pour effectuer des effets de bord (ex: appels API) ?',
          options: ['useState', 'useContext', 'useEffect', 'useReducer'],
          correct: 2,
          explanation: '`useEffect` permet d\'exécuter du code en réponse aux changements du cycle de vie du composant, comme le montage ou la mise à jour.'
        },
        {
          id: 5,
          question: 'Dans Vue.js, quelle directive est utilisée pour afficher conditionnellement un élément ?',
          options: ['v-if', 'v-show', 'v-for', 'Les deux (v-if et v-show)'],
          correct: 3,
          explanation: '`v-if` supprime/recrée l\'élément du DOM, tandis que `v-show` le cache/affiche avec du CSS (`display: none`).'
        }
      ]
    },
    'js-3': {
      title: 'Quiz Node.js',
      questions: [
        {
          id: 1,
          question: 'Quel était le système de modules historiquement utilisé par Node.js ?',
          options: [
            'ES Modules (import/export)',
            'CommonJS (require/module.exports)',
            'AMD (Asynchronous Module Definition)',
            'UMD (Universal Module Definition)'
          ],
          correct: 1,
          explanation: 'Node.js a été construit autour de CommonJS, bien qu\'il supporte maintenant les ES Modules de manière native.'
        },
        {
          id: 2,
          question: 'Quel est le framework web le plus populaire pour Node.js ?',
          options: ['Koa', 'Hapi', 'Sails.js', 'Express.js'],
          correct: 3,
          explanation: 'Express.js est un framework minimaliste et flexible qui est devenu le standard de facto pour la création d\'applications web et d\'APIs avec Node.js.'
        },
        {
          id: 3,
          question: 'À quoi sert la fonction `app.use()` dans Express ?',
          options: ['À définir une route GET', 'À définir une route POST', 'À monter une fonction middleware', 'À démarrer le serveur'],
          correct: 2,
          explanation: '`app.use()` est utilisé pour appliquer un middleware à toutes les requêtes qui passent par un certain chemin.'
        },
        {
          id: 4,
          question: 'Quel objet représente la requête HTTP entrante dans une route Express ?',
          options: ['request', 'req', 'http.IncomingMessage', 'res'],
          correct: 1,
          explanation: 'L\'objet `req` (request) contient des informations sur la requête HTTP, comme les paramètres, les en-têtes et le corps de la requête.'
        },
        {
          id: 5,
          question: 'Quel est le gestionnaire de paquets par défaut pour Node.js ?',
          options: ['Yarn', 'pnpm', 'npm', 'Bower'],
          correct: 2,
          explanation: 'npm (Node Package Manager) est le plus grand registre de logiciels au monde et l\'outil par défaut pour gérer les dépendances d\'un projet Node.js.'
        }
      ]
    },
    'js-4': {
      title: 'Quiz MongoDB et Mongoose',
      questions: [
        {
          id: 1,
          question: 'Quel opérateur de requête MongoDB est utilisé pour mettre à jour les champs d\'un document ?',
          options: [
            '$update',
            '$set',
            '$change',
            '$modify'
          ],
          correct: 1,
          explanation: 'L\'opérateur `$set` remplace la valeur d\'un champ par la valeur spécifiée.'
        },
        {
          id: 2,
          question: 'Qu\'est-ce que Mongoose dans l\'écosystème Node.js/MongoDB ?',
          options: ['Le driver officiel de MongoDB', 'Un langage de requête', 'Une bibliothèque de modélisation de données objet (ODM) pour MongoDB', 'Un outil d\'administration de base de données'],
          correct: 2,
          explanation: 'Mongoose fournit une solution basée sur des schémas pour modéliser les données de votre application, avec des validations, des hooks, etc.'
        },
        {
          id: 3,
          question: 'Dans Mongoose, qu\'est-ce qu\'un "Schema" ?',
          options: ['Une connexion à la base de données', 'La structure d\'un document, avec ses champs et ses types', 'Un document individuel', 'Une collection de documents'],
          correct: 1,
          explanation: 'Un schéma Mongoose définit la forme des documents au sein d\'une collection.'
        },
        {
          id: 4,
          question: 'Quelle méthode Mongoose est utilisée pour trouver tous les documents qui correspondent à un filtre ?',
          options: ['Model.get()', 'Model.findAll()', 'Model.fetch()', 'Model.find()'],
          correct: 3,
          explanation: '`Model.find(query)` retourne un tableau de documents correspondant au filtre de la requête.'
        },
        {
          id: 5,
          question: 'MongoDB est une base de données de type...',
          options: ['Relationnel', 'Orientée colonne', 'Orientée document', 'Clé-valeur'],
          correct: 2,
          explanation: 'MongoDB stocke les données dans des documents flexibles de type BSON (similaire à JSON), ce qui la classe comme une base de données orientée-document.'
        }
      ]
    },
    'js-5': {
      title: 'Quiz Projet Fullstack MERN',
      questions: [
        {
          id: 1,
          question: 'Quel outil est typiquement utilisé pour gérer les dépendances d\'un projet frontend JavaScript ?',
          options: [
            'npm ou Yarn',
            'Composer',
            'pip',
            'Gradle'
          ],
          correct: 0,
          explanation: 'npm (Node Package Manager) et Yarn sont les deux gestionnaires de paquets les plus populaires pour l\'écosystème JavaScript.'
        },
        {
          id: 2,
          question: 'Dans une architecture MERN, quel est le rôle d\'Express.js ?',
          options: ['Gérer l\'interface utilisateur', 'Créer l\'API REST côté serveur', 'Gérer la base de données', 'Gérer l\'état global du client'],
          correct: 1,
          explanation: 'Express est le framework backend qui gère les routes, la logique métier et la communication avec la base de données.'
        },
        {
          id: 3,
          question: 'Comment le client (React) et le serveur (Express) communiquent-ils généralement ?',
          options: ['Via des appels de fonction directs', 'Via des requêtes HTTP (AJAX) à une API REST', 'En partageant la même base de données', 'Via des fichiers sur le disque'],
          correct: 1,
          explanation: 'Le frontend et le backend sont deux applications distinctes qui communiquent via un protocole standard comme HTTP.'
        },
        {
          id: 4,
          question: 'Qu\'est-ce que le "CORS" (Cross-Origin Resource Sharing) dans un contexte fullstack ?',
          options: ['Un type de base de données', 'Une technique de chiffrement', 'Un mécanisme de sécurité du navigateur qui restreint les requêtes HTTP inter-domaines', 'Un framework JavaScript'],
          correct: 2,
          explanation: 'Le serveur doit configurer des en-têtes CORS pour autoriser le client (servi depuis une autre origine) à faire des requêtes à son API.'
        },
        {
          id: 5,
          question: 'Quel est l\'acronyme du stack MERN ?',
          options: [
            'MySQL, Express, React, Node.js',
            'MongoDB, Express, React, Node.js',
            'MongoDB, EJS, React, Node.js',
            'MongoDB, Express, Ruby, Node.js'
          ],
          correct: 1,
          explanation: 'MERN signifie MongoDB (base de données), Express (framework backend), React (framework frontend) et Node.js (environnement d\'exécution backend).'
        }
      ]
    },


    // Données supplémentaires
    ...additionalQuizData
  },
   mindmap: {
    // ==================== PYTHON ====================
     // ==================== PYTHON ====================
    'python-1': {
      title: 'Introduction à Python',
      nodes: [
        {
          title: 'Environnement de Développement',
          children: [
            { 
              title: 'Interpréteur Python',
              children: [
                { title: 'Installation via Python.org' },
                { title: 'Distributions (Anaconda)' }
              ]
            },
            { 
              title: 'Éditeurs de Code (IDE)',
              children: [
                { title: 'VS Code', children: [{ title: 'Extension Python (Pylance)' }] },
                { title: 'PyCharm (Community/Pro)' },
                { title: 'Jupyter Notebook / Lab' }
              ]
            },
            {
              title: 'Gestion de Paquets & Environnements',
              children: [
                { title: 'pip (standard)' },
                { title: 'Environnements virtuels (venv)' },
                { title: 'conda (pour Anaconda)'}
              ]
            }
          ]
        },
        {
          title: 'Fondamentaux du Langage',
          children: [
            { 
              title: 'Variables et Types de Données',
              children: [
                { title: 'Nombres (int, float)' },
                { title: 'Chaînes (str)', children: [{ title: 'Formatage (f-strings)' }, { title: 'Méthodes (.upper, .split)' }] },
                { title: 'Booléens (bool)' },
                { title: 'Type None' }
              ]
            },
            { 
              title: 'Opérateurs',
              children: [
                { title: 'Arithmétiques (+, -, *, /, **)' },
                { title: 'Comparaison (==, !=, <, >)' },
                { title: 'Logiques (and, or, not)' }
              ]
            },
            {
              title: 'Structures de Contrôle',
              children: [
                { title: 'Conditions (if, elif, else)' },
                { title: 'Boucles (for, while)', children: [{ title: 'range()' }, { title: 'break/continue' }] }
              ]
            }
          ]
        }
      ]
    },
    'python-2': {
      title: 'Fonctions en Python',
      nodes: [
        {
          title: 'Définition et Appel',
          children: [
            { title: 'Syntaxe `def`' },
            { 
              title: 'Paramètres et Arguments',
              children: [
                { title: 'Positionnels' },
                { title: 'Nommés (keyword arguments)' },
                { title: 'Valeurs par défaut' }
              ]
            },
            { 
              title: 'Valeurs de Retour',
              children: [
                { title: 'Instruction `return`' },
                { title: 'Retours multiples (via tuple)' },
                { title: 'Retour implicite de `None`' }
              ]
            }
          ]
        },
        {
          title: 'Concepts Avancés',
          children: [
            { 
              title: 'Portée des Variables (Scope)',
              children: [
                { title: 'Locale (dans la fonction)' },
                { title: 'Globale (mot-clé `global`)' },
                { title: 'Non-locale (mot-clé `nonlocal`)' }
              ]
            },
            { 
              title: 'Arguments Variables',
              children: [
                { title: '*args (tuple d\'arguments positionnels)' },
                { title: '**kwargs (dictionnaire d\'arguments nommés)' }
              ]
            },
            { 
              title: 'Fonctions Anonymes (Lambda)',
              children: [
                { title: 'Syntaxe `lambda arguments: expression`' },
                { title: 'Utilisation (map, filter, sort)' }
              ]
            }
          ]
        }
      ]
    },
    'python-3': {
      title: 'Structures de Données',
      nodes: [
        {
          title: 'Séquences',
          children: [
            { 
              title: 'Listes (list)',
              children: [
                { title: 'Mutables et ordonnées' },
                { title: 'Méthodes (.append, .pop, .sort)' },
                { title: 'Slicing [start:stop:step]' },
                { title: 'Compréhensions de listes' }
              ]
            },
            { 
              title: 'Tuples (tuple)',
              children: [
                { title: 'Immutables et ordonnés' },
                { title: 'Utilisation (retour de fonction, clé de dictionnaire)' }
              ]
            }
          ]
        },
        {
          title: 'Collections',
          children: [
            { 
              title: 'Dictionnaires (dict)',
              children: [
                { title: 'Paires clé-valeur' },
                { title: 'Accès (`[]` vs `.get()`)' },
                { title: 'Itération (.keys, .values, .items)' }
              ]
            },
            { 
              title: 'Ensembles (set)',
              children: [
                { title: 'Éléments uniques et non ordonnés' },
                { title: 'Opérations (union, intersection)' }
              ]
            }
          ]
        }
      ]
    },
    'python-4': {
      title: 'Programmation Orientée Objet',
      nodes: [
        {
          title: 'Fondamentaux de la POO',
          children: [
            { 
              title: 'Classes et Objets',
              children: [
                { title: 'Syntaxe `class`' },
                { title: 'Instance (création d\'objet)' }
              ]
            },
            { 
              title: 'Attributs',
              children: [
                { title: 'Attributs d\'instance (dans `__init__`)' },
                { title: 'Attributs de classe' }
              ]
            },
            { 
              title: 'Méthodes',
              children: [
                { title: 'Méthodes d\'instance (paramètre `self`)' },
                { title: 'Méthodes de classe (`@classmethod`)' },
                { title: 'Méthodes statiques (`@staticmethod`)' }
              ]
            }
          ]
        },
        {
          title: 'Piliers de la POO',
          children: [
            { 
              title: 'Héritage',
              children: [
                { title: 'Classe mère / Classe fille' },
                { title: 'Fonction `super()`' }
              ]
            },
            { 
              title: 'Encapsulation',
              children: [
                { title: 'Attributs publics' },
                { title: 'Attributs privés (convention `_` et `__`)' }
              ]
            },
            { 
              title: 'Polymorphisme',
              children: [
                { title: 'Redéfinition de méthodes (Overriding)' },
                { title: 'Duck Typing' }
              ]
            },
            {
              title: 'Méthodes Spéciales (Dunder)',
              children: [
                { title: '`__init__` (constructeur)' },
                { title: '`__str__` et `__repr__`' }
              ]
            }
          ]
        }
      ]
    },
    'python-5': {
      title: 'Interaction avec les Bases de Données',
      nodes: [
        {
          title: 'SQLite avec le module `sqlite3`',
          children: [
            { 
              title: 'Connexion',
              children: [
                { title: '`sqlite3.connect()`' },
                { title: 'Base en mémoire vs fichier' }
              ]
            },
            { 
              title: 'Curseur (Cursor)',
              children: [
                { title: '`conn.cursor()`' },
                { title: 'Rôle : exécuter des commandes' }
              ]
            },
            { 
              title: 'Exécution de Requêtes',
              children: [
                { title: '`cursor.execute()`' },
                { title: 'Récupération (`.fetchone`, `.fetchall`)' }
              ]
            }
          ]
        },
        {
          title: 'Bonnes Pratiques',
          children: [
            { 
              title: 'Transactions',
              children: [
                { title: '`conn.commit()` (valider)' },
                { title: '`conn.rollback()` (annuler)' },
                { title: 'Auto-commit' }
              ]
            },
            { 
              title: 'Sécurité',
              children: [
                { title: 'Prévention des injections SQL' },
                { title: 'Utilisation des placeholders (?)' }
              ]
            },
            {
              title: 'Gestion des Ressources',
              children: [
                { title: 'Fermeture de la connexion (`conn.close()`)' },
                { title: 'Utilisation de `with`' }
              ]
            }
          ]
        }
      ]
    },

    // ==================== JAVA ====================
    'java-1': {
      title: 'Bases de Java',
      nodes: [
        {
          title: 'Écosystème Java',
          children: [
            { title: 'JVM (Java Virtual Machine)', children: [{ title: 'Indépendance de la plateforme' }] },
            { title: 'JRE (Java Runtime Environment)', children: [{ title: 'JVM + Bibliothèques' }] },
            { title: 'JDK (Java Development Kit)', children: [{ title: 'JRE + Outils de développement (compilateur)' }] },
            { title: 'IDE (Eclipse, IntelliJ IDEA)'}
          ]
        },
        {
          title: 'Syntaxe Fondamentale',
          children: [
            { title: 'Structure d\'une classe', children: [{ title: '`public class`' }, { title: 'Méthode `main`' }] },
            { title: 'Variables et Types Primitifs', children: [{ title: 'int, double, char, boolean' }, { title: 'Déclaration `final`' }] },
            { title: 'Structures de Contrôle', children: [{ title: 'if/else, switch' }, { title: 'for, while, do-while' }] },
            { title: 'Types Objets', children: [{ title: 'String' }, { title: 'Tableaux' }] }
          ]
        }
      ]
    },
    'java-2': {
      title: 'Programmation Orientée Objet en Java',
      nodes: [
        {
          title: 'Classes et Objets',
          children: [
            { title: 'Constructeurs', children: [{ title: 'Par défaut' }, { title: 'Paramétré' }, { title: 'Surcharge'}] },
            { title: 'Mot-clé `this`' },
            { title: 'Modificateurs d\'accès', children: [{ title: 'public, private, protected, default' }] },
            { title: 'Membres `static`', children: [{ title: 'Variables de classe' }, { title: 'Méthodes de classe' }] }
          ]
        },
        {
          title: 'Encapsulation',
          children: [
            { title: 'Principe de masquage d\'information' },
            { title: 'Champs privés' },
            { title: 'Accesseurs (Getters)' },
            { title: 'Mutateurs (Setters)' }
          ]
        }
      ]
    },
    'java-3': {
      title: 'Héritage et Polymorphisme',
      nodes: [
        {
          title: 'Héritage',
          children: [
            { title: 'Mot-clé `extends`' },
            { title: 'Mot-clé `super`', children: [{ title: 'Appel au constructeur parent' }, { title: 'Appel à une méthode parente' }] },
            { title: 'Annotation `@Override`' },
            { title: 'Classes `final` et méthodes `final`'}
          ]
        },
        {
          title: 'Polymorphisme et Abstraction',
          children: [
            { title: 'Classes abstraites (`abstract`)' },
            { title: 'Interfaces (`interface`)', children: [{ title: 'Mot-clé `implements`' }, { title: 'Héritage multiple d\'interfaces' }, { title: 'Méthodes par défaut (Java 8+)' }] },
            { title: 'Polymorphisme de sous-typage'}
          ]
        }
      ]
    },
    'java-4': {
      title: 'Java Collections Framework',
      nodes: [
        {
          title: 'Interfaces Principales',
          children: [
            { title: 'Collection' },
            { title: 'List (ordonnée, doublons autorisés)' },
            { title: 'Set (non ordonnée, sans doublons)' },
            { title: 'Map (paires clé-valeur)' },
            { title: 'Queue (file d\'attente FIFO)'}
          ]
        },
        {
          title: 'Implémentations Courantes',
          children: [
            { title: 'List', children: [{ title: 'ArrayList (rapide en lecture)' }, { title: 'LinkedList (rapide en insertion/suppression)' }] },
            { title: 'Set', children: [{ title: 'HashSet (rapide, non ordonné)' }, { title: 'TreeSet (trié)' }] },
            { title: 'Map', children: [{ title: 'HashMap (rapide, non ordonné)' }, { title: 'TreeMap (trié par clé)' }] },
            { title: 'Génériques (`<T>`)', children: [{ title: 'Sécurité de type' }] }
          ]
        }
      ]
    },
    'java-5': {
      title: 'JDBC (Java Database Connectivity)',
      nodes: [
        {
          title: 'Étapes de Connexion',
          children: [
            { title: 'Chargement du Driver JDBC' },
            { title: 'Établissement de la Connexion', children: [{ title: '`DriverManager.getConnection()`' }, { title: 'URL de connexion, user, password' }] },
            { title: 'Fermeture des ressources', children: [{ title: '`try-with-resources`' }] }
          ]
        },
        {
          title: 'Exécution des Requêtes',
          children: [
            { title: '`Statement` (pour requêtes statiques)' },
            { title: '`PreparedStatement`', children: [{ title: 'Requêtes précompilées' }, { title: 'Prévention des injections SQL' }] },
            { title: '`ResultSet`', children: [{ title: 'Itération sur les résultats' }, { title: '`rs.next()`' }] },
            { title: 'Transactions', children: [{ title: '`setAutoCommit(false)`' }, { title: '`commit()` / `rollback()`' }] }
          ]
        }
      ]
    },

    // ... et ainsi de suite pour chaque cours, en appliquant le même niveau de détail. Je vais continuer avec les autres.
    
    // ==================== WEB ====================
    'web-1': {
      title: 'HTML5 et CSS3',
      nodes: [
        {
          title: 'HTML5',
          children: [
            { title: 'Structure de base', children: [{ title: '`<!DOCTYPE html>`' }, { title: '`<html>`, `<head>`, `<body>`' }] },
            { title: 'Balises Sémantiques', children: [{ title: '`<header>`, `<nav>`, `<main>`, `<article>`, `<footer>`' }] },
            { title: 'Formulaires', children: [{ title: '`<form>`' }, { title: '`<input>` (types : text, password, email, submit)' }, { title: '`<label>`, `<textarea>`, `<select>`' }] },
            { title: 'Multimédia', children: [{ title: '`<img>`' }, { title: '`<audio>`' }, { title: '`<video>`' }] }
          ]
        },
        {
          title: 'CSS3',
          children: [
            { title: 'Sélecteurs', children: [{ title: 'Par type, classe, ID' }, { title: 'Pseudo-classes (`:hover`)' }, { title: 'Pseudo-éléments (`::before`)' }] },
            { title: 'Box Model', children: [{ title: '`content`' }, { title: '`padding`' }, { title: '`border`' }, { title: '`margin`' }] },
            { title: 'Mise en page', children: [{ title: 'Flexbox', children: [{title: '`display: flex`'}, {title: '`justify-content`, `align-items`'}] }, { title: 'Grid Layout' }, { title: 'Positioning (static, relative, absolute, fixed)' }] }
          ]
        }
      ]
    },
    'web-2': {
      title: 'JavaScript Fondamental',
      nodes: [
        {
          title: 'JavaScript Moderne (ES6+)',
          children: [
            { title: 'Variables', children: [{ title: '`let` (scope de bloc)' }, { title: '`const` (constante)' }, { title: '`var` (scope de fonction, ancien)' }] },
            { title: 'Fonctions Fléchées', children: [{ title: 'Syntaxe concise' }, { title: '`this` lexical' }] },
            { title: 'Fonctionnalités utiles', children: [{ title: 'Template Literals (`)' }, { title: 'Destructuring' }, { title: 'Spread/Rest operator (...)' }] }
          ]
        },
        {
          title: 'Interaction avec le DOM',
          children: [
            { title: 'Sélection d\'éléments', children: [{ title: '`getElementById`' }, { title: '`querySelector` / `querySelectorAll`' }] },
            { title: 'Manipulation du contenu', children: [{ title: '`.innerHTML`' }, { title: '`.textContent`' }, { title: '`.style`' }] },
            { title: 'Gestion des Événements', children: [{ title: '`addEventListener`' }, { title: 'Objet `event`' }, { title: 'Propagation (bubbling)' }] }
          ]
        }
      ]
    },
    'web-3': {
      title: 'PHP Backend',
      nodes: [
        {
          title: 'Bases de PHP',
          children: [
            { title: 'Syntaxe', children: [{ title: 'Balises `<?php ... ?>`' }, { title: 'Variables ($)' }, { title: 'Concaténation (.)' }] },
            { title: 'Structures de contrôle', children: [{ title: 'if/else' }, { title: 'foreach, for, while' }] },
            { title: 'Fonctions' },
            { title: 'Inclusion de fichiers', children: [{ title: '`include`' }, { title: '`require`' }] }
          ]
        },
        {
          title: 'Gestion des Données HTTP',
          children: [
            { title: 'Superglobales', children: [{ title: '`$_GET`' }, { title: '`$_POST`' }, { title: '`$_FILES`' }] },
            { title: 'Validation des données', children: [{ title: '`isset()`, `empty()`' }, { title: 'Filtres (`filter_var`)' }] },
            { title: 'Sécurité', children: [{ title: '`htmlspecialchars()` (prévention XSS)' }, { title: 'Prévention CSRF' }] }
          ]
        }
      ]
    },
    'web-4': {
      title: 'Sessions et Cookies en PHP',
      nodes: [
        {
          title: 'Sessions',
          children: [
            { title: 'Démarrage', children: [{ title: '`session_start()`' }] },
            { title: 'Manipulation', children: [{ title: 'Superglobale `$_SESSION`' }] },
            { title: 'Destruction', children: [{ title: '`session_unset()`' }, { title: '`session_destroy()`' }] },
            { title: 'Fonctionnement', children: [{ title: 'ID de session (PHPSESSID)' }] }
          ]
        },
        {
          title: 'Cookies',
          children: [
            { title: 'Création', children: [{ title: '`setcookie()`' }] },
            { title: 'Lecture', children: [{ title: 'Superglobale `$_COOKIE`' }] },
            { title: 'Suppression', children: [{ title: '`setcookie()` avec date passée' }] },
            { title: 'Session vs Cookie', children: [{ title: 'Stockage (serveur vs client)' }] }
          ]
        }
      ]
    },
    'web-5': {
      title: 'AJAX (JavaScript et PHP)',
      nodes: [
        {
          title: 'Côté Client (JavaScript)',
          children: [
            { title: 'XMLHttpRequest (XHR)', children: [{ title: 'Objet historique' }, { title: 'Gestion des états (readyState)' }] },
            { title: 'Fetch API', children: [{ title: 'Moderne et basée sur les Promesses' }, { title: '`fetch(url).then(...)`' }] },
            { title: 'Promesses et Async/Await', children: [{ title: 'Gestion de l\'asynchronisme' }] }
          ]
        },
        {
          title: 'Côté Serveur (PHP)',
          children: [
            { title: 'Réception de la requête', children: [{ title: '`$_POST` ou `file_get_contents("php://input")`' }] },
            { title: 'Format de réponse', children: [{ title: 'JSON (`json_encode`)' }] },
            { title: 'En-têtes HTTP', children: [{ title: '`header("Content-Type: application/json")`' }] },
            { title: 'Création d\'une mini API REST' }
          ]
        }
      ]
    },

    // ==================== ANDROID ====================
    'android-1': {
      title: 'Introduction à Android Studio',
      nodes: [
        {
          title: 'Installation et Configuration',
          children: [
            { title: 'Android Studio IDE' },
            { title: 'Android SDK Manager', children: [{ title: 'Plateformes' }, { title: 'Outils' }] },
            { title: 'AVD Manager (Émulateurs)' },
            { title: 'Gradle (Système de build)' }
          ]
        },
        {
          title: 'Structure d\'un Projet',
          children: [
            { title: 'Dossier `app`', children: [{ title: '`src` (Java/Kotlin)' }, { title: '`res` (Ressources)' }] },
            { title: '`AndroidManifest.xml`', children: [{ title: 'Déclaration des composants' }, { title: 'Permissions' }] },
            { title: 'Fichiers `build.gradle`', children: [{ title: 'Configuration du build' }, { title: 'Dépendances' }] }
          ]
        }
      ]
    },
    'android-2': {
      title: 'Interfaces Utilisateur Android (UI)',
      nodes: [
        {
          title: 'Vues (Widgets)',
          children: [
            { title: '`TextView` (Affichage texte)' },
            { title: '`EditText` (Saisie utilisateur)' },
            { title: '`Button` (Actions)' },
            { title: '`ImageView` (Images)' }
          ]
        },
        {
          title: 'Layouts (ViewGroup)',
          children: [
            { title: '`LinearLayout` (Vertical/Horizontal)' },
            { title: '`RelativeLayout` (Positions relatives)' },
            { title: '`ConstraintLayout` (Flexible et puissant)' },
            { title: '`RecyclerView`', children: [{ title: 'Pour listes performantes' }, { title: 'ViewHolder Pattern' }, { title: 'Adapter' }] }
          ]
        }
      ]
    },
    'android-3': {
      title: 'Navigation et Cycle de Vie',
      nodes: [
        {
          title: 'Activities',
          children: [
            { title: 'Cycle de vie', children: [{ title: '`onCreate`, `onStart`, `onResume`' }, { title: '`onPause`, `onStop`, `onDestroy`' }] },
            { title: '`Intent`', children: [{ title: 'Intents Explicites (démarrer une autre Activity)' }, { title: 'Intents Implicites (demander une action au système)' }] },
            { title: 'Passage de données (`Bundle`)' }
          ]
        },
        {
          title: 'Fragments',
          children: [
            { title: 'Cycle de vie (similaire à Activity)' },
            { title: 'Communication (ViewModel partagé)' },
            { title: 'Gestionnaire de Fragments (`FragmentManager`)' },
            { title: 'Transactions (`add`, `replace`)' },
            { title: 'Back Stack (pile de retour)' }
          ]
        }
      ]
    },
    'android-4': {
      title: 'Persistance des Données',
      nodes: [
        {
          title: 'Stockage Simple',
          children: [
            { title: '`SharedPreferences`', children: [{ title: 'Pour préférences utilisateur' }, { title: 'Clé-valeur' }] },
            { title: '`DataStore` (moderne, asynchrone)' }
          ]
        },
        {
          title: 'Base de Données Locale (Room)',
          children: [
            { title: 'Couche d\'abstraction sur SQLite' },
            { title: '`@Entity` (Table)' },
            { title: '`@Dao` (Data Access Object)', children: [{ title: 'Définition des requêtes' }] },
            { title: '`@Database` (Classe principale)' }
          ]
        }
      ]
    },
    'android-5': {
      title: 'Fonctionnalités Avancées',
      nodes: [
        {
          title: 'Réseau (Retrofit)',
          children: [
            { title: 'Client HTTP type-safe' },
            { title: 'Définition d\'interface API' },
            { title: 'Annotations (`@GET`, `@POST`, `@Path`)' },
            { title: 'Convertisseurs (Gson, Moshi)' }
          ]
        },
        {
          title: 'Permissions',
          children: [
            { title: 'Déclaration dans le Manifeste' },
            { title: 'Demande à l\'exécution (Runtime)' },
            { title: 'Gestion de la réponse de l\'utilisateur' }
          ]
        },
        {
          title: 'Déploiement',
          children: [
            { title: 'Génération d\'un APK/AAB signé' },
            { title: 'Keystore (clé de signature)' },
            { title: 'Google Play Console' }
          ]
        }
      ]
    },

    'laravel-1': {
      title: 'Installation et Structure de Laravel',
      nodes: [
        {
          title: 'Prérequis et Installation',
          children: [
            { title: 'Serveur Local', children: [{ title: 'PHP, MySQL, Apache/Nginx' }, { title: 'Outils (Laragon, Herd, XAMPP)' }] },
            { title: 'Composer', children: [{ title: 'Gestionnaire de dépendances pour PHP' }] },
            { title: 'Création de projet', children: [{ title: '`composer create-project`' }, { title: '`laravel new` (via installer)' }] }
          ]
        },
        {
          title: 'Structure d\'un Projet MVC',
          children: [
            { title: 'Architecture MVC', children: [{ title: 'Modèle (logique data)' }, { title: 'Vue (présentation)' }, { title: 'Contrôleur (logique applicative)' }] },
            { title: 'Dossiers Clés', children: [{ title: '`app/` (coeur de l\'app)' }, { title: '`routes/` (URLs)' }, { title: '`resources/views/` (templates Blade)' }, { title: '`.env` (configuration)' }] },
            { title: 'Artisan CLI', children: [{ title: 'Outil en ligne de commande' }, { title: '`php artisan serve`' }, { title: 'Commandes `make:`' }] }
          ]
        }
      ]
    },
    'laravel-2': {
      title: 'Routing et Contrôleurs',
      nodes: [
        {
          title: 'Gestion des Routes',
          children: [
            { title: 'Fichiers de routes', children: [{ title: '`routes/web.php` (avec session)' }, { title: '`routes/api.php` (stateless)' }] },
            { title: 'Verbes HTTP', children: [{ title: '`Route::get`' }, { title: '`Route::post`, `::put`, `::delete`' }] },
            { title: 'Paramètres de route', children: [{ title: 'Paramètres obligatoires `{id}`' }, { title: 'Paramètres optionnels `{id?}`' }] },
            { title: 'Groupes de routes', children: [{ title: 'Préfixes d\'URL' }, { title: 'Application de middlewares' }] }
          ]
        },
        {
          title: 'Contrôleurs',
          children: [
            { title: 'Rôle du contrôleur', children: [{ title: 'Recevoir la requête' }, { title: 'Interagir avec le modèle' }, { title: 'Retourner une réponse (vue, JSON)' }] },
            { title: 'Génération via Artisan', children: [{ title: '`php artisan make:controller`' }] },
            { title: 'Contrôleurs de ressources', children: [{ title: 'Actions CRUD standard (index, show, store...)' }, { title: '`Route::resource`' }] },
            { title: 'Injection de dépendances', children: [{ title: 'Injection de la requête (Request)' }, { title: 'Route Model Binding' }] }
          ]
        }
      ]
    },
    'laravel-3': {
      title: 'Eloquent ORM et Migrations',
      nodes: [
        {
          title: 'Modèles Eloquent',
          children: [
            { title: 'Principe ORM', children: [{ title: 'Mapper des objets à des tables de BD' }] },
            { title: 'Conventions', children: [{ title: 'Nom de table (pluriel)' }, { title: 'Clé primaire (`id`)' }] },
            { title: 'Récupération de données', children: [{ title: '`::all()`, `::find()`, `::where()`' }, { title: 'Query Builder' }] },
            { title: 'Relations', children: [{ title: '`hasOne`, `hasMany`' }, { title: '`belongsTo`, `belongsToMany`' }] }
          ]
        },
        {
          title: 'Migrations et Seeders',
          children: [
            { title: 'Migrations', children: [{ title: 'Contrôle de version pour la BD' }, { title: 'Méthodes `up()` et `down()`' }, { title: 'Commandes (`migrate`, `rollback`)' }] },
            { title: 'Schema Builder', children: [{ title: 'Définition des colonnes' }, { title: 'Types de colonnes (`string`, `integer`, `timestamp`)' }, { title: 'Contraintes (clés étrangères)' }] },
            { title: 'Seeders', children: [{ title: 'Peupler la base de données' }, { title: '`php artisan db:seed`' }] },
            { title: 'Model Factories', children: [{ title: 'Génération de fausses données pour les tests' }] }
          ]
        }
      ]
    },
    'laravel-4': {
      title: 'Authentification et Middlewares',
      nodes: [
        {
          title: 'Système d\'Authentification',
          children: [
            { title: 'Starter Kits', children: [{ title: 'Laravel Breeze (simple)' }, { title: 'Laravel Jetstream (avancé)' }] },
            { title: 'Installation', children: [{ title: '`composer require`' }, { title: '`php artisan breeze:install`' }] },
            { title: 'Composants générés', children: [{ title: 'Routes (login, register...)' }, { title: 'Contrôleurs d\'authentification' }, { title: 'Vues Blade' }] }
          ]
        },
        {
          title: 'Protection des Routes',
          children: [
            { title: 'Middlewares', children: [{ title: 'Filtre pour les requêtes HTTP' }] },
            { title: 'Middleware `auth`', children: [{ title: 'Pour les utilisateurs connectés' }] },
            { title: 'Middleware `guest`', children: [{ title: 'Pour les visiteurs non connectés' }] },
            { title: 'Guards et Providers', children: [{ title: 'Configuration de la méthode d\'authentification' }] }
          ]
        }
      ]
    },
    'laravel-5': {
      title: 'API REST et Sanctum',
      nodes: [
        {
          title: 'Création d\'une API RESTful',
          children: [
            { title: 'API Resources', children: [{ title: 'Couche de transformation (Modèle -> JSON)' }, { title: 'Contrôle des données exposées' }] },
            { title: 'Routes API', children: [{ title: '`routes/api.php`' }, { title: '`Route::apiResource`' }] },
            { title: 'Validation des requêtes', children: [{ title: 'Form Requests' }] },
            { title: 'Pagination des résultats' }
          ]
        },
        {
          title: 'Authentification d\'API avec Sanctum',
          children: [
            { title: 'Principe', children: [{ title: 'Authentification légère par tokens' }] },
            { title: 'Authentification SPA', children: [{ title: 'Basée sur les cookies et la protection CSRF' }] },
            { title: 'Authentification par token API', children: [{ title: 'Génération de tokens' }, { title: 'Envoi via en-tête `Authorization: Bearer`' }] }
          ]
        }
      ]
    },

    // ==================== DATABASE ====================
    'database-1': {
      title: 'Concepts Fondamentaux',
      nodes: [
        {
          title: 'Systèmes de Gestion de BD (SGBD)',
          children: [
            { title: 'Relationnels (SQL)', children: [{ title: 'MySQL' }, { title: 'PostgreSQL' }, { title: 'SQLite' }, { title: 'Oracle' }] },
            { title: 'NoSQL', children: [{ title: 'Orienté document (MongoDB)' }, { title: 'Clé-valeur (Redis)' }] },
            { title: 'Rôle du SGBD', children: [{ title: 'Stockage, sécurité, accès concurrent' }] }
          ]
        },
        {
          title: 'Modèle Relationnel',
          children: [
            { title: 'Composants', children: [{ title: 'Table (Relation)' }, { title: 'Ligne (Tuple)' }, { title: 'Colonne (Attribut)' }] },
            { title: 'Clés', children: [{ title: 'Clé primaire (unique, non nulle)' }, { title: 'Clé étrangère (lien entre tables)' }, { title: 'Clé candidate' }] },
            { title: 'Langage SQL', children: [{ title: 'DDL (Data Definition)' }, { title: 'DML (Data Manipulation)' }, { title: 'DQL (Data Query)' }] }
          ]
        }
      ]
    },
    'database-2': {
      title: 'Modélisation de Données',
      nodes: [
        {
          title: 'Conception Conceptuelle et Logique',
          children: [
            { title: 'Diagramme Entité-Relation (ERD)', children: [{ title: 'Entités' }, { title: 'Attributs' }, { title: 'Relations' }] },
            { title: 'Cardinalités', children: [{ title: '1-1 (un à un)' }, { title: '1-n (un à plusieurs)' }, { title: 'n-n (plusieurs à plusieurs)' }] },
            { title: 'Implémentation des relations n-n', children: [{ title: 'Table de jonction / pivot' }] }
          ]
        },
        {
          title: 'Normalisation',
          children: [
            { title: 'Objectif', children: [{ title: 'Réduire la redondance' }, { title: 'Améliorer l\'intégrité' }] },
            { title: 'Formes Normales', children: [{ title: '1NF (valeurs atomiques)' }, { title: '2NF (dépendance totale à la clé primaire)' }, { title: '3NF (pas de dépendance transitive)' }] }
          ]
        }
      ]
    },
    'database-3': {
      title: 'SQL Avancé',
      nodes: [
        {
          title: 'Jointures (JOIN)',
          children: [
            { title: '`INNER JOIN` (intersection)' },
            { title: '`LEFT JOIN` (tout de la table gauche)' },
            { title: '`RIGHT JOIN` (tout de la table droite)' },
            { title: '`FULL OUTER JOIN` (tout des deux tables)' },
            { title: '`CROSS JOIN` (produit cartésien)'}
          ]
        },
        {
          title: 'Requêtes complexes',
          children: [
            { title: 'Sous-requêtes', children: [{ title: 'Scalaires' }, { title: 'Multi-lignes (avec IN, EXISTS)' }, { title: 'Corrélées' }] },
            { title: 'Fonctions d\'agrégation', children: [{ title: '`COUNT`, `SUM`, `AVG`, `MAX`, `MIN`' }, { title: 'Clause `GROUP BY` et `HAVING`' }] },
            { title: 'Common Table Expressions (CTE)', children: [{ title: 'Clause `WITH`' }] }
          ]
        }
      ]
    },
    'database-4': {
      title: 'Transactions ACID',
      nodes: [
        {
          title: 'Propriétés ACID',
          children: [
            { title: 'A - Atomicité', children: [{ title: 'Tout ou rien' }] },
            { title: 'C - Cohérence', children: [{ title: 'Respect des règles d\'intégrité' }] },
            { title: 'I - Isolation', children: [{ title: 'Transactions concurrentes n\'interfèrent pas' }] },
            { title: 'D - Durabilité', children: [{ title: 'Modifications permanentes' }] }
          ]
        },
        {
          title: 'Contrôle des Transactions',
          children: [
            { title: 'Commandes SQL', children: [{ title: '`BEGIN` / `START TRANSACTION`' }, { title: '`COMMIT` (valider)' }, { title: '`ROLLBACK` (annuler)' }] },
            { title: 'Niveaux d\'isolation', children: [{ title: 'Read Uncommitted, Read Committed, Repeatable Read, Serializable' }] }
          ]
        }
      ]
    },
    'database-5': {
      title: 'Optimisation de Requêtes',
      nodes: [
        {
          title: 'Indexation',
          children: [
            { title: 'Rôle de l\'index', children: [{ title: 'Accélérer la recherche (SELECT)' }] },
            { title: 'Types d\'index', children: [{ title: 'B-Tree (standard)' }, { title: 'Index clusterisé vs non-clusterisé' }] },
            { title: 'Coût des index', children: [{ title: 'Ralentissement des écritures (INSERT, UPDATE, DELETE)' }, { title: 'Espace disque' }] },
            { title: 'Commande `CREATE INDEX`'}
          ]
        },
        {
          title: 'Analyse de Performances',
          children: [
            { title: 'Plan d\'exécution', children: [{ title: 'Commande `EXPLAIN`' }, { title: 'Visualisation de l\'arbre d\'opérations' }] },
            { title: 'Points à surveiller', children: [{ title: 'Full Table Scan' }, { title: 'Utilisation des index' }, { title: 'Ordre des jointures' }] },
            { title: 'Bonnes pratiques', children: [{ title: 'Éviter `SELECT *`' }, { title: 'Utiliser `WHERE` efficacement' }] }
          ]
        }
      ]
    },

    // ==================== MOBILE JS ====================
    'mobile-js-1': {
      title: 'Introduction à React Native',
      nodes: [
        {
          title: 'Écosystème',
          children: [
            { title: 'React Native CLI', children: [{ title: 'Projet natif complet' }, { title: 'Contrôle total' }] },
            { title: 'Expo', children: [{ title: 'Managed workflow' }, { title: 'Développement plus rapide' }] },
            { title: 'Architecture', children: [{ title: 'Pont (Bridge) asynchrone' }, { title: 'Threads (JS, Natif, UI)' }] }
          ]
        },
        {
          title: 'Composants Fondamentaux',
          children: [
            { title: '`View` (conteneur)' },
            { title: '`Text` (affichage texte)' },
            { title: '`Image`' },
            { title: '`TextInput` (saisie)' },
            { title: '`Button`, `TouchableOpacity` (interactions)' },
            { title: '`StyleSheet`', children: [{ title: 'API pour le style' }, { title: 'Utilisation de Flexbox' }] }
          ]
        }
      ]
    },
    'mobile-js-2': {
      title: 'Gestion d\'État (State Management)',
      nodes: [
        {
          title: 'État Local',
          children: [
            { title: 'Hook `useState`', children: [{ title: 'Pour l\'état d\'un composant' }, { title: '`const [value, setValue] = useState(initial)`' }] },
            { title: 'Hook `useReducer`', children: [{ title: 'Pour une logique d\'état plus complexe' }] }
          ]
        },
        {
          title: 'État Global',
          children: [
            { title: 'API Context', children: [{ title: '`createContext`, `Provider`' }, { title: 'Hook `useContext`' }, { title: 'Prévention du "prop drilling"' }] },
            { title: 'Bibliothèques externes', children: [{ title: 'Redux (flux de données prévisible)' }, { title: 'Zustand (plus simple)' }, { title: 'React Query (état serveur)' }] }
          ]
        }
      ]
    },
    'mobile-js-3': {
      title: 'APIs et Réseau',
      nodes: [
        {
          title: 'Fetch API (intégrée)',
          children: [
            { title: 'Basée sur les Promesses' },
            { title: 'Requêtes `GET` et `POST`' },
            { title: 'Configuration des en-têtes (Headers)' },
            { title: 'Gestion manuelle des erreurs HTTP' }
          ]
        },
        {
          title: 'Bibliothèque Axios',
          children: [
            { title: 'Alternative populaire' },
            { title: 'Parsing JSON automatique' },
            { title: 'Meilleure gestion des erreurs' },
            { title: 'Intercepteurs (requête/réponse)' }
          ]
        }
      ]
    },
    'mobile-js-4': {
      title: 'Accès aux Fonctionnalités Natives',
      nodes: [
        {
          title: 'Interaction avec le Natif',
          children: [
            { title: 'Modules Natifs', children: [{ title: 'Exposer du code natif à JavaScript' }] },
            { title: 'Bibliothèques communautaires' }
          ]
        },
        {
          title: 'APIs courantes',
          children: [
            { title: 'Permissions', children: [{ title: 'Demande à l\'exécution' }, { title: '`react-native-permissions`' }] },
            { title: 'Stockage', children: [{ title: '`AsyncStorage` (clé-valeur)' }, { title: 'Bases de données (WatermelonDB, Realm)' }] },
            { title: 'Géolocalisation' },
            { title: 'Caméra' },
            { title: 'Navigation', children: [{ title: 'React Navigation (Stack, Tab, Drawer)' }] }
          ]
        }
      ]
    },
    'mobile-js-5': {
      title: 'Build et Publication',
      nodes: [
        {
          title: 'Android',
          children: [
            { title: 'Signature de l\'application', children: [{ title: 'Génération du Keystore' }] },
            { title: 'Build de production', children: [{ title: '`./gradlew bundleRelease` (AAB)' }, { title: '`./gradlew assembleRelease` (APK)' }] },
            { title: 'Publication sur Google Play Console' }
          ]
        },
        {
          title: 'iOS',
          children: [
            { title: 'Nécessite un Mac et un compte développeur Apple' },
            { title: 'Configuration dans Xcode', children: [{ title: 'Certificats de signature' }, { title: 'Profils de provisionnement' }] },
            { title: 'Archivage de l\'application' },
            { title: 'Publication via TestFlight et App Store Connect' }
          ]
        }
      ]
    },

    // ==================== JAVASCRIPT ====================
    'js-1': {
      title: 'JavaScript Moderne (ES6+)',
      nodes: [
        {
          title: 'Fondamentaux revisités',
          children: [
            { title: 'Déclaration de variables', children: [{ title: '`let` vs `const` vs `var`' }, { title: 'Scope de bloc' }] },
            { title: 'Fonctions Fléchées', children: [{ title: 'Syntaxe' }, { title: '`this` lexical' }] },
            { title: 'Template Literals', children: [{ title: 'Chaînes multi-lignes' }, { title: 'Interpolation `${}`' }] }
          ]
        },
        {
          title: 'Fonctionnalités avancées',
          children: [
            { title: 'Déstructuration', children: [{ title: 'Objets `{}`' }, { title: 'Tableaux `[]`' }] },
            { title: 'Paramètres de fonction', children: [{ title: 'Valeurs par défaut' }, { title: 'Rest `...`' }] },
            { title: 'Opérateur Spread `...`', children: [{ title: 'Copie de tableaux/objets' }] },
            { title: 'Modules ES6', children: [{ title: '`import`' }, { title: '`export` / `export default`' }] }
          ]
        }
      ]
    },
    'js-2': {
      title: 'Frameworks Frontend (React/Vue)',
      nodes: [
        {
          title: 'Architecture à base de Composants',
          children: [
            { title: 'Composant', children: [{ title: 'Unité UI réutilisable' }] },
            { title: 'Props', children: [{ title: 'Communication Parent -> Enfant' }, { title: 'Flux unidirectionnel' }] },
            { title: 'State', children: [{ title: 'Données locales au composant' }, { title: 'Déclenche le re-rendu' }] }
          ]
        },
        {
          title: 'Cycle de Vie et Hooks (React)',
          children: [
            { title: 'Phase de Montage', children: [{ title: '`useEffect(..., [])`' }] },
            { title: 'Phase de Mise à jour', children: [{ title: '`useEffect(..., [deps])`' }] },
            { title: 'Phase de Démontage', children: [{ title: 'Fonction de nettoyage de `useEffect`' }] },
            { title: 'DOM Virtuel', children: [{ title: 'Optimisation des mises à jour' }] }
          ]
        }
      ]
    },
    'js-3': {
      title: 'Node.js et Express',
      nodes: [
        {
          title: 'Environnement Node.js',
          children: [
            { title: 'Principe', children: [{ title: 'JavaScript côté serveur' }] },
            { title: 'Modèle asynchrone non-bloquant' },
            { title: '`npm` (Node Package Manager)' }
          ]
        },
        {
          title: 'Framework Express.js',
          children: [
            { title: 'Serveur Web', children: [{ title: '`express()`' }, { title: '`app.listen()`' }] },
            { title: 'Routing', children: [{ title: '`app.get()`, `app.post()`' }, { title: 'Paramètres d\'URL' }] },
            { title: 'Middlewares', children: [{ title: 'Fonctions qui s\'exécutent dans le cycle requête-réponse' }, { title: '`app.use()`' }, { title: 'Exemples (`express.json`, `cors`)' }] }
          ]
        }
      ]
    },
    'js-4': {
      title: 'Bases de Données avec MongoDB',
      nodes: [
        {
          title: 'MongoDB (Base NoSQL)',
          children: [
            { title: 'Orientée Document', children: [{ title: 'Stockage en BSON (similaire à JSON)' }] },
            { title: 'Concepts', children: [{ title: 'Database' }, { title: 'Collection (équivalent table)' }, { title: 'Document (équivalent ligne)' }] },
            { title: 'Schéma flexible' }
          ]
        },
        {
          title: 'Mongoose (ODM)',
          children: [
            { title: 'Rôle', children: [{ title: 'Modélisation de données pour MongoDB' }] },
            { title: '`Schema`', children: [{ title: 'Définition de la structure' }, { title: 'Types, validation' }] },
            { title: '`Model`', children: [{ title: 'Interface pour interagir avec la collection' }] },
            { title: 'Opérations CRUD', children: [{ title: '`create`, `find`, `findById`, `updateOne`...' }] }
          ]
        }
      ]
    },
    'js-5': {
      title: 'Projet Fullstack MERN',
      nodes: [
        {
          title: 'Architecture Globale',
          children: [
            { title: 'MERN Stack', children: [{ title: 'MongoDB' }, { title: 'Express' }, { title: 'React' }, { title: 'Node.js' }] },
            { title: 'Communication Client-Serveur', children: [{ title: 'API REST' }, { title: 'Requêtes HTTP (Axios/Fetch)' }] },
            { title: 'CORS (Cross-Origin Resource Sharing)' }
          ]
        },
        {
          title: 'Composants du Projet',
          children: [
            { title: 'Client (Frontend)', children: [{ title: 'Interface utilisateur avec React' }, { title: 'Gestion d\'état (Redux/Context)' }] },
            { title: 'Serveur (Backend)', children: [{ title: 'API avec Express' }, { title: 'Logique métier' }, { title: 'Authentification (JWT)' }] },
            { title: 'Base de Données', children: [{ title: 'Persistance avec MongoDB/Mongoose' }] }
          ]
        }
      ]
    },

    // Données supplémentaires
    ...additionalMindmapData
  }
};
