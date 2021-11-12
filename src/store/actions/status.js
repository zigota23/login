import { SETISERROR, SETISLOADING } from "../actionTypes/status";


export const setError = (payload)=>({type:SETISERROR,payload})

export const setLoading = (payload)=>({type:SETISLOADING,payload})