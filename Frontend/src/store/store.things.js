import { defineStore, BaseModel } from './store.pinia'
import { models } from 'feathers-pinia'

class Thing extends BaseModel {
  constructor(data, options = {}) {
    super(data, options)
    const { store, instanceDefaults, setupInstance } = this.constructor
    // only needed when this class implements `instanceDefaults`
    Object.assign(this, instanceDefaults(data, { models, store }))
    // only needed when this class implements `setupInstance`
    // Object.assign(this, setupInstance(data, { models, store }))
    return this
  }

  static instanceDefaults(data, store) {
    return {
      description: '',
      happinessIndex: 0,
    }
  }
}