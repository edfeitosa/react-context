export default (state, action) => {
  switch (action.type) {
    case 'DATA_TICKET':
      return [
        ...state,
        {
          value: action.value,
          unit: action.unit,
          date: action.date
        }
      ];
    default:
      return state;
  }
}