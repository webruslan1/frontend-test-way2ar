<template>
    <DataTable :value="doctors" responsiveLayout="scroll" class="p-datatable-striped">
      <template #header>
        <div class="flex flex-wrap items-center justify-between gap-2">
          <span class="text-xl font-bold">Врачи</span>
          <Button icon="pi pi-plus-circle" size="small" @click="addItem" />
        </div>
      </template>
      <Column field="id" header="ID"></Column>
      <Column field="name" header="ФИО"></Column>
      <Column field="department" header="Отделение"></Column>
      <Column field="head" header="Заведующий">
        <template #body="slotProps">
          <i class="pi" :class="slotProps.data.head ? 'pi-check' : 'pi-times'"></i>
        </template>
      </Column>
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
import type {Doctor} from "../models/State.ts";
const store = useMedicalStore();
const { openDialog , openDialogEdit, removeDoctor, doctors} = store;
const addItem = () => {
  openDialog('Doctor');
}
const editItem = (item: Doctor) => {
  openDialogEdit('Doctor', item);
}
const removeItem = (item: Doctor) => {
  removeDoctor(item.id);
}
</script>

<style scoped>
</style>