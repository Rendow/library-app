import { Dispatch } from 'redux';
import { ActionType, setAppErrorAC, setAppStatusAC } from '../appReducer';




export const handleNetworkAppError = (error: { message: string }, dispatch: Dispatch<ActionType>) => {
  dispatch(setAppErrorAC(error.message ? error.message : 'Some error occurred'))
  dispatch(setAppStatusAC('failed'))
}
