<script setup>
import { computed, ref } from 'vue'
import { useFind } from 'feathers-pinia'

const props = defineProps({
  adding: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['cancelAdding'])

import { useOwners } from '@/store/service.owners.js'
const ownersStore = useOwners()
const ownersParams = computed(() => ({ query: {} }))

const ownersData = useFind({ model: ownersStore.Model, params: ownersParams })
const owners = ownersData.items

const columns = [
  {
    name: 'description',
    required: true,
    align: 'left',
    label: 'Description',
    field: 'description',
    sortable: true
  },
  {
    name: 'opennessIndex',
    required: true,
    align: 'left',
    label: 'Openness index',
    field: 'openness_index',
    sortable: true
  },
  {
    name: 'conscientiousnessIndex',
    required: true,
    align: 'left',
    label: 'Conscientiousness index',
    field: 'conscientiousness_index',
    sortable: true
  },
  {
    name: 'extraversionIndex',
    required: true,
    align: 'left',
    label: 'Extraversion index',
    field: 'extraversion_index',
    sortable: true
  },
  {
    name: 'agreeablenessIndex',
    required: true,
    align: 'left',
    label: 'Agreeableness index',
    field: 'agreeableness_index',
    sortable: true
  },
  {
    name: 'neuroticismIndex',
    required: true,
    align: 'left',
    label: 'Neuroticism index',
    field: 'neuroticism_index',
    sortable: true
  },
]

const form = ref()

const isAdding = ref(false);

const initForm = () => {
  form.value = {
    description: '',
    opennessIndex: 0,
    conscientiousnessIndex: 0,
    extraversionIndex: 0,
    agreeablenessIndex: 0,
    neuroticismIndex: 0
  }
}

initForm()

const onSubmit = () => {
  console.log(form.value)
}

const cancelAdding = () => {
  initForm()
  isAdding.value = false
}

const columnLabel = (name) => columns.find(column => column.name === name).label
</script>

<template>
  <q-slide-transition>
    <div v-if="isAdding">
      <q-card class="q-mb-md" style="max-width: 500px;">
        <q-form @submit.prevent="onSubmit">
          <q-card-section>
            <q-toolbar>
              <q-toolbar-title>Create a new owner</q-toolbar-title>
              <q-btn icon="close" flat round dense @click="cancelAdding" />
            </q-toolbar>
          </q-card-section>

          <q-card-section class="q-gutter-md">
            <q-input
              v-model="form.description"
              label="Username"
              :debounce="300"
              :rules="[(v) => v.length || 'Field \'description\' is required']"
              clearable
            />
          </q-card-section>
          <q-card-section class="q-gutter-md">
            <span
              class="text-subtitle2"
              v-text="columnLabel('opennessIndex')"
            />
            <q-rating
                v-model="form.opennessIndex"
                size="2em"
                icon="star"
                color="primary"
            />
          </q-card-section>
          <q-card-section class="q-gutter-md">
            <span
              class="text-subtitle2"
              v-text="columnLabel('conscientiousnessIndex')"
            />
            <q-rating
              v-model="form.conscientiousnessIndex"
              size="2em"
              icon="star"
              color="primary"
            />
          </q-card-section>
          <q-card-section class="q-gutter-md">
            <span
              class="text-subtitle2"
              v-text="columnLabel('extraversionIndex')"
            />
            <q-rating
              v-model="form.extraversionIndex"
              size="2em"
              icon="star"
              color="primary"
            />
          </q-card-section>
          <q-card-section class="q-gutter-md">
            <span
              class="text-subtitle2"
              v-text="columnLabel('agreeablenessIndex')"
            />
            <q-rating
              v-model="form.agreeablenessIndex"
              size="2em"
              icon="star"
              color="primary"
            />
          </q-card-section>
          <q-card-section class="q-gutter-md">
            <div class="row">
              <div class="col">
                <span
                  class="text-subtitle2"
                  v-text="columnLabel('neuroticismIndex')"
                />
              </div>
              <div class="col">
                <q-rating
                  v-model="form.neuroticismIndex"
                  size="2em"
                  icon="star"
                  color="primary"
                />
              </div>
            </div>
          </q-card-section>

          <q-card-actions align="center">
            <q-btn
              label="Submit"
              type="submit"
              color="primary"
              glossy
            />
          </q-card-actions>
        </q-form>
      </q-card>
    </div>
  </q-slide-transition>

  <q-table
    title="Owners"
    :rows="owners"
    :columns="columns"
    row-key="id"
  >
    <template #top-right>
      <q-slide-transition appear>
        <q-btn v-if="!isAdding"
               size="sm"
               color="primary"
               icon="add"
               flat
               round
               @click="isAdding = true" />
      </q-slide-transition>
    </template>
  </q-table>
</template>
