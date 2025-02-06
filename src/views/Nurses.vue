<template>
    <DataTable :value="nurses" responsiveLayout="scroll" class="p-datatable-striped">
      <template #header>
        <div class="flex flex-wrap items-center justify-between gap-2">
          <span class="text-xl font-bold">Медсестры</span>
          <Button icon="pi pi-plus-circle" size="small" @click="addNew" />
        </div>
      </template>
      <Column field="id" header="ID"></Column>
      <Column field="name" header="ФИО"></Column>
      <Column field="department" header="Отделение"></Column>
      <Column class="w-24 !text-end">
        <template #body="{ data }">
          <div class="flex gap-2">
            <Button icon="pi pi-trash" @click="removeItem(data)" size="small" severity="danger" rounded></Button>
            <Button icon="pi pi-pencil" @click="editItem(data)" size="small" severity="contrast" rounded></Button>
          </div>
        </template>
      </Column>
    </DataTable>
</template>

<script setup lang="ts">
import { useMedicalStore } from "../store/medicalStore.ts";
import { DataTable, Column, Button } from 'primevue';
import type {Nurse} from "../models/State.ts";
const store = useMedicalStore();
const { openDialog, openDialogEdit, removeNurse, nurses } = store;


const addNew = () : void => {
  openDialog('Nurse');
}
const editItem = (item: Nurse) : void => {
  openDialogEdit('Nurse', item);
}
const removeItem = (item: Nurse) : void => {
  removeNurse(item.id);
}
</script>

<style scoped>
</style>