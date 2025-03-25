// Définir l'état initial du filtre
const initialState = {
  filter: 'all', // Valeur initiale (afficher toutes les tâches)
};

// Définir le slice de Redux pour les filtres
const filterTasksSlice = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};

// Action pour changer le filtre
export const setFilter = (filter) => ({
  type: 'SET_FILTER',
  payload: filter,
});

export default filterTasksSlice;
