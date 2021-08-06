import {
  ADD_JOB_HEADER,
  GET_ALL_JOBS,
  GET_USER_JOBS,
  UPDATE_KEYS,
  RESET_KEY,
} from "../actions/types/jobPostTypes";

const initialState = {
  registeredKeys: {},
  currentPosting: {},
  currentListOfJobs: [],
  allJobPostings: [],
};

export default function JobPostingReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_JOB_HEADER:
      return {
        ...state,
        currentPosting: action.payload,
      };
    case UPDATE_KEYS:
      return {
        ...state,
        registeredKeys: {
          ...state.registeredKeys,
          [action.payload.key]: action.payload.val,
        },
      };
    case RESET_KEY:
      return {
        ...state,
        registeredKeys: {},
      };
    case GET_ALL_JOBS:
      console.log(action.payload);
      return {
        ...state,
        allJobPostings: action.payload,
      };
    case GET_USER_JOBS:
      return {
        ...state,
        currentListOfJobs: action.payload,
      };
    default:
      return state;
  }
}
