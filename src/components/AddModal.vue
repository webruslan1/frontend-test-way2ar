<template>
  <Dialog v-model:visible="modalVisible" v-if="addObject" modal :header="`Добавить ${typeAdd === 'Doctor' ? 'Врача' : 'Медсестру'}`" :style="{ width: '25rem' }">
    <div class="flex items-center gap-4 mb-4">
      <label for="username" class="font-semibold w-24">ФИО</label>
      <InputText v-model="addObject.name" id="username" class="flex-auto" autocomplete="off" />
    </div>
    <div class="flex items-center gap-4 mb-4" :class="[typeAdd === 'Doctor' ? 'mb-4' : 'mb-8']">
      <label for="email" class="font-semibold w-24">Отделение</label>
      <Select v-model="addObject.department" :options="departments" optionLabel="name" optionValue="name" placeholder="Выберите отделение" class="flex-auto" />
    </div>
    <div class="flex items-center gap-4 mb-8" v-if="typeAdd === 'Doctor'">
      <label for="email" class="font-semibold w-24">Заведующий</label>
      <Select v-model="addObject.head" :options="trueFalse" optionLabel="name" optionValue="value" placeholder="Заведует отделением?" class="flex-auto" />
    </div>
    <div class="flex justify-end gap-2">
      <Button type="button" label="Отмена" severity="secondary" @click="closeModalAdd"></Button>
      <Button type="button" label="Добавить" @click="addNewData"></Button>
    </div>
  </Dialog>
</template>


<script setup lang="ts">
import {storeToRefs} from "pinia";
import {Button, Dialog, InputText, Select, useToast} from "primevue";
import {ref} from "vue";

import {useMedicalStore} from "../store/medicalStore.ts";
import type { TrueOrFalseList, Department } from "../models/State.ts";

const toast = useToast();
const store = useMedicalStore();
const { modalVisible, addObject, typeAdd } = storeToRefs(store)
const {addDoctor, addNurse, closeModalAdd} = store;


const trueFalse = ref(<TrueOrFalseList[]>[
  { name: 'Да', value: true },
  { name: 'Нет', value: false }
]);
const departments = ref(<Department[]>[
  { name: 'Кардиологическое' },
  { name: 'Хирургическое' },
]);

const addNewData = () => {
  if(!addObject.value.name || addObject.value.department === null) {
    toast.add({ severity: 'error', summary: 'Заполните поля', life: 3000 });
    return false;
  }
  let id = new Date().getTime();
  switch (typeAdd.value) {
    case 'Doctor':
      addDoctor({ ...addObject.value, id});
      break;
    case 'Nurse':
      addNurse({ ...addObject.value, id});
      break;
    default:
      break;
  }
  toast.add({ severity: 'success', summary: 'Успешно', life: 3000 });
  closeModalAdd();
}
</script>


<style scoped>

</style>