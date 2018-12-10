import * as types from './mutation-types'

const mutations = {
  [types.SET_NEEDKEEP](state, needKeep) {
    state.needKeep = needKeep
  },
  [types.SET_WARNINGSCROLL](state, scroll) {
    state.warningScroll = scroll
  },
  [types.SET_OFFICIAL](state, scroll) {
    state.officialRecord = scroll
  },
  [types.SET_PRODUCTION](state, scroll) {
    state.productionRecord = scroll
  },
  [types.SET_VEHICLEAPPROVAL](state, scroll) {
    state.vehicleApproval = scroll
  },
  [types.SET_VEHICLESCHEDULING](state, scroll) {
    state.vehicleScheduling = scroll
  },
  [types.SET_REGISTRATION](state, scroll) {
    state.registration = scroll
  },
  [types.SET_EVALUATE](state, scroll) {
    state.evaluate = scroll
  },
  [types.SET_DILIGENTFRUGAL](state, scroll) {
    state.diligentFrugal = scroll
  },
  [types.SET_REFUELING](state, scroll) {
    state.refueling = scroll
  },
  [types.SET_MAINTENANCE](state, scroll) {
    state.maintenance = scroll
  },
  [types.SET_UPKEEP](state, scroll) {
    state.upkeep = scroll
  },
}

export default mutations