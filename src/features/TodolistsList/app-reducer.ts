import {TasksStateType} from "./tasks-reducer";

type appStateType = typeof initialState

const initialState = {
    status: "idl" as RequestStatusType,
    error: null as null | string
}

export type RequestStatusType = "idl" | "loading" | "failed" | "success"

export const appReducer = (state: appStateType = initialState, action: ActionsType): appStateType => {
    switch (action.type) {
        case 'APP/CHANGE-APP-STATUS':
            return {...state, status: action.status}
        case 'APP/SET-ERROR':
            return {...state, error: action.error}
        default:
            return state
    }
}
//action
export const setAppStatusAC = (appStatus: RequestStatusType) =>
    ({type: 'APP/CHANGE-APP-STATUS', status: appStatus} as const)

export const setAppErrorAC = (error: string | null) =>
    ({type: 'APP/SET-ERROR', error} as const)

//types

export type SetAppErrorActionType = ReturnType<typeof setAppErrorAC>
export type SetAppStatusActionType = ReturnType<typeof setAppStatusAC>

type ActionsType = SetAppStatusActionType | SetAppErrorActionType