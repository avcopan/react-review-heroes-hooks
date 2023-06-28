const DEFAULT_HEROES = [
  {
    superheroName: "Prof X",
    onDuty: true,
    alias: "Xavier",
    power: "does stuff",
  },
];

export function heroListReducer(state = DEFAULT_HEROES, action) {
  if (action.type === "CREATE_HERO") {
    return [...state, action.payload];
  }

  return state;
}
