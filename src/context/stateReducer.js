export default (state, action) => {
  switch (action.type) {
    case 'DATA_TICKET':
      return {
        ...state,
        code: action.code,
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