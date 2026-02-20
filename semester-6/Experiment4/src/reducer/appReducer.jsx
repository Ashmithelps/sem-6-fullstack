export const initialState = {
  theme: "light",
  favorites: []
};

export function appReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light"
      };

    case "ADD_FAVORITE":
      if (state.favorites.includes(action.payload)) return state;
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      };

    case "REMOVE_FAVORITE":
      return {
        ...state,
        favorites: state.favorites.filter(
          (item) => item !== action.payload
        )
      };

    case "CLEAR_FAVORITES":
      return {
        ...state,
        favorites: []
      };

    default:
      return state;
  }
}
