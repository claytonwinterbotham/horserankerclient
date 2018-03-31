import { userConstants } from '../constants';

export function assignRoles(state = {}, action) {
  switch (action.type) {
    case userConstants.ASSIGNROLES_REQUEST:
      return {
        loading: true
      };
    case userConstants.ASSIGNROLES_SUCCESS:
      return {
        items: action.message
      };
    case userConstants.ASSIGNROLES_FAILURE:
      return { 
        error: action.error
      };
    default:
      return state
  }
}