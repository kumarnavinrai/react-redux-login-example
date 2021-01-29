import { userConstants } from '../_constants';

export function shows(state = {}, action) {
  switch (action.type) {  
    case userConstants.GETALLSHOW_REQUEST:
      return {
        loading: true
      };
    case userConstants.GETALLSHOW_SUCCESS:
      return {
        items: action.shows
      };
    case userConstants.GETALLSHOW_FAILURE:
      return { 
        error: action.error
      };    
    default:
      return state
  }
}