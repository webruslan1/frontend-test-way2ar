<template>
  <Menubar :model="items" class="mb-3">
    <template #item="{ item, props, hasSubmenu }">
      <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
        <a v-ripple :href="href" v-bind="props.action" @click="navigate">
          <span :class="item.icon" />
          <span>{{ item.label }}</span>
        </a>
      </router-link>
      <a v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
        <span :class="item.icon" />
        <span>{{ item.label }}</span>
        <span v-if="hasSubmenu" class="pi pi-fw pi-angle-down" />
      </a>
    </template>
  </Menubar>

  <router-view>
  </router-view>


  <AddModal />
  <EditModal />
  <Toast />
</template>

<script setup lang="ts">
import {Menubar, Toast} from "primevue";
import { ref } from 'vue';
import AddModal from "./components/AddModal.vue";
import EditModal from "./components/EditModal.vue";
import type {NavData} from "./models/State.ts";

const items = ref(<NavData[]>[
  {
    label: 'Врачи',
    icon: 'pi pi-book',
    route: '/doctors'
  },
  {
    label: 'Медсестры',
    icon: 'pi pi-address-book',
    route: '/nurses'
  }
]);
</script>

<style scoped>
</style>
