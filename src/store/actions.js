import * as types from './mutation-types'

export const upDataNeedKeep = function ({commit}, needKeep) {
  commit(types.SET_NEEDKEEP, needKeep)
}

export const upDataWarningScroll = function ({commit}, scroll) {
  commit(types.SET_WARNINGSCROLL, scroll)
}

export const upDataOfficial = function ({commit}, scroll) {
  commit(types.SET_OFFICIAL, scroll)
}

export const upDataProduction = function ({commit}, scroll) {
  commit(types.SET_PRODUCTION, scroll)
}

export const upDataVehicle = function ({commit}, scroll) {
  commit(types.SET_VEHICLEAPPROVAL, scroll)
}

export const upDataScheduling = function ({commit}, scroll) {
  commit(types.SET_VEHICLESCHEDULING, scroll)
}

export const upDataRegistration = function ({commit}, scroll) {
  commit(types.SET_REGISTRATION, scroll)
}

export const upDataEvaluate = function ({commit}, scroll) {
  commit(types.SET_EVALUATE, scroll)
}

export const upDataDiligent = function ({commit}, scroll) {
  commit(types.SET_DILIGENTFRUGAL, scroll)
}

export const upDataRefueling = function ({commit}, scroll) {
  commit(types.SET_REFUELING, scroll)
}

export const upDataMaintenance = function ({commit}, scroll) {
  commit(types.SET_MAINTENANCE, scroll)
}

export const upDataUpkeep = function ({commit}, scroll) {
  commit(types.SET_UPKEEP, scroll)
}