export type Classeur = {
  id: string;
  nom: string;
  couleur: string;
};

export type Fiche = {
  id: string;
  titre: string;
  contenu: string;
  tags: string[];
  difficulte: 'Facile' | 'Intermédiaire' | 'Avancée';
  favoris: boolean;
  exemples: string[];
  notes: string;
};

export type Tache = {
  id: string;
  titre: string;
  statut: 'todo' | 'done';
  date: string;
};

const STORAGE_KEY = 'hubcreator-data-v1';

export type HubData = {
  classeurs: Classeur[];
  fiches: Fiche[];
  taches: Tache[];
};

export const defaultData: HubData = {
  classeurs: [
    { id: 'html', nom: 'HTML', couleur: '#E76F51' },
    { id: 'css', nom: 'CSS', couleur: '#2A9D8F' },
    { id: 'js', nom: 'JavaScript', couleur: '#F4A261' },
    { id: 'react', nom: 'React', couleur: '#264653' },
    { id: 'design', nom: 'Design', couleur: '#E9C46A' }
  ],
  fiches: [
    {
      id: 'fiche-1',
      titre: 'Structure sémantique',
      contenu: 'Balises essentielles pour une page accessible.',
      tags: ['HTML', 'Accessibilité'],
      difficulte: 'Facile',
      favoris: true,
      exemples: ['<header>', '<main>', '<footer>'],
      notes: 'À compléter avec les rôles ARIA.'
    },
    {
      id: 'fiche-2',
      titre: 'Flexbox Patterns',
      contenu: 'Aligner rapidement des cartes en responsive.',
      tags: ['CSS', 'Layout'],
      difficulte: 'Intermédiaire',
      favoris: false,
      exemples: ['display: flex;', 'gap: 16px;'],
      notes: 'Penser aux wrap + align-items.'
    },
    {
      id: 'fiche-3',
      titre: 'Hooks React clés',
      contenu: 'useState, useEffect, useMemo pour structurer un composant.',
      tags: ['React'],
      difficulte: 'Avancée',
      favoris: true,
      exemples: ['useEffect(() => {}, [])'],
      notes: 'Documenter les effets secondaires.'
    }
  ],
  taches: [
    {
      id: 'tache-1',
      titre: 'Réviser les balises sémantiques',
      statut: 'done',
      date: new Date().toISOString()
    },
    {
      id: 'tache-2',
      titre: 'Créer 3 fiches sur Flexbox',
      statut: 'todo',
      date: new Date().toISOString()
    },
    {
      id: 'tache-3',
      titre: 'Préparer un mini quiz JS',
      statut: 'todo',
      date: new Date().toISOString()
    }
  ]
};

export function loadData(): HubData {
  if (typeof window === 'undefined') {
    return defaultData;
  }

  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultData));
    return defaultData;
  }

  try {
    return JSON.parse(raw) as HubData;
  } catch {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultData));
    return defaultData;
  }
}

export function saveData(data: HubData) {
  if (typeof window === 'undefined') {
    return;
  }
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}
