export default (state, action) => {
  switch (action.type) {
    case 'DATA_TICKET':
      return {
        ...state,
        value: action.value,
        unit: action.unit,
        date: action.date
      };
    case 'PHONE_NUMBER': 
      return {
        ...state,
        phoneNumber: action.phoneNumber
      }
    default:
      return state;
  }
}