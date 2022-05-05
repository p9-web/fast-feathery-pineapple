import { defineStore, BaseModel } from './store.pinia'
import { api } from '../feathers'

export class Thing extends BaseModel {}

const servicePath = 'things'
export const useThings = defineStore({ servicePath, Model: Thing })

api.service(servicePath).hooks({})