import { defineStore, BaseModel } from './store.pinia'
import { api } from '../feathers'

export class Owner extends BaseModel {}

const servicePath = 'owners'
export const useOwners = defineStore({ servicePath, Model: Owner })

api.service(servicePath).hooks({})