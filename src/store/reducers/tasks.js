const initialState = [
  {
    id: "1",
    status: "To do",
    title: "Una tarea",
    assigne: "Lautaro",
    project: "Cada día",
  },
  {
    id: "2",
    status: "To do",
    title: "Mover este hardcodeo horrible a una api",
    assigne: "Lautaro",
    project: "Freya",
  },
];

export default function state(state = initialState, action) {
  return state;
}
