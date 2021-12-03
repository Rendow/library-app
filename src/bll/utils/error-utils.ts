import { Dispatch } from 'redux';
import { AppActionType, setAppErrorAC, setAppStatusAC } from '../appReducer';

export const handleNetworkAppError = (error:{message:string} , dispatch: Dispatch<AppActionType>) => {
  dispatch(setAppErrorAC(error.message ? error.message : 'Some error occurred'))
  dispatch(setAppStatusAC('failed'))
}
