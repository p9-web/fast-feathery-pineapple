<script setup>
import { ref } from 'vue'
import OwnersTable from '@/components/OwnersTable.vue'
import ThingsTable from '@/components/ThingsTable.vue'
const addingThing = ref(false);
</script>

<template>
  <q-page>
    <div class="q-pa-md">
      <div class="row q-col-gutter-md">
        <div class="col">
          <OwnersTable />
        </div>
        <div class="col">
          <ThingsTable />
        </div>
      </div>
    </div>
  </q-page>
</template>