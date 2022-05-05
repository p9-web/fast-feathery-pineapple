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

import { useThings } from '@/store/service.things.js'
const thingsStore = useThings()
const thingsParams = computed(() => ({ query: {} }))

const thingsData = useFind({ model: thingsStore.Model, params: thingsParams })
const things = thingsData.items

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
    name: 'happinessIndex',
    required: true,
    align: 'left',
    label: 'Happiness index',
    field: 'happiness_index',
    sortable: true
  },
]

const form = ref()

const isAdding = ref(false);

const initForm = () => {
  form.value = {
    description: '',
    happinessIndex: 0
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
</script>

<template>
  <q-slide-transition>
    <div v-if="isAdding">
      <q-card class="q-mb-md" style="max-width: 500px;">
        <q-form @submit.prevent="onSubmit">
          <q-card-section>
            <q-toolbar>
              <q-toolbar-title>Create a new item</q-toolbar-title>
              <q-btn icon="close" flat round dense @click="cancelAdding" />
            </q-toolbar>
          </q-card-section>

          <q-card-section class="q-gutter-md">
            <q-input
              v-model="form.description"
              label="Description"
              :debounce="300"
              :rules="[(v) => v.length || 'Field \'description\' is required']"
              clearable
            />
            <q-rating
              v-model="form.happinessIndex"
              size="2em"
              icon="star"
              color="primary"
            />
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
    title="Things"
    :rows="things"
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
