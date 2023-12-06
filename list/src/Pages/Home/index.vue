<script setup>
import { ref } from "vue";
import MainLayout from "@/layouts/Main/index.vue";
import Sidebar from "@/components/Sidebar/index.vue";
import Button from "@/components/Button/index.vue";
import Modal from "@/components/Modal/index.vue";

import Plus from "@/components/Icons/plus.vue";
const taskList =
  [
    {
      id: "11",
      title: "Task1",
      description: "",
      isDone: false,
    },
     {
      id: "11",
      title: "Task2",
      description: "",
      isDone: false,
    },
     {
      id: "11",
      title: "Task3",
      description: "",
      isDone: false,
    }
  ];
  const flagModal=ref(false)
  function hadelClick() {
flagModal.value=true
  }
</script>

<template>
  <div class="container">
    <MainLayout>
    <div class="grid grid-cols-12 gap-4 bg-zinc-50 rounded-md min-h-[600px]">
      <div class="col-start-1 col-end-3 bg-zinc-300	 h-full  rounded-lg">
        <Sidebar :tasks="taskList" />
      </div>
      <div class="col-start-3 col-end-13 bg-gray-100 h-full flex items-center justify-center flex-col">
        <Button @click="hadelClick"
          class="flex items-center justify-center"
        >
          <Plus/>
          <spn class="mr-2">افزودن تسک جدید</spn>
        </Button>
<!--         {{flagModal}}-->   
   </div>
          <Modal  v-model="flagModal"/>

    </div>
  </MainLayout>

  </div>

</template>
<style></style>
