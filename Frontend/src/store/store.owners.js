import { defineStore, BaseModel } from './store.pinia'
import { models } from 'feathers-pinia'

class Owner extends BaseModel {
  constructor(data, options = {}) {
    super(data, options)
    const { store, instanceDefaults, setupInstance } = this.constructor
    // this class is only needed when implementing `instanceDefaults`
    Object.assign(this, instanceDefaults(data, { models, store }))
    // this class is only needed when implementing `setupInstance`
    // Object.assign(this, setupInstance(data, { models, store }))
    return this
  }

  static instanceDefaults(data, store) {
    return {
      username: '',
      opennessIndex: 0,
      conscientiousnessIndex: 0,
      extraversionIndex: 0,
      agreeablenessIndex: 0,
      neuroticismIndex: 0,
    }
  }
}