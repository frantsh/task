<script setup>
import { ref } from "vue";
import MainLayout from "@/layouts/Main/index.vue";
import Sidebar from "@/components/Sidebar/index.vue";
import Modal from "@/components/Modal/index.vue";
import Input from "@/components/Input/index.vue";
import Textarea from "@/components/Textarea/index.vue";
import Button from "@/components/Button/index.vue";
import Plus from "@/components/Icons/plus.vue";
import {useTaskStore} from '@/stores/taskStores.js'
const objectTaskStor=useTaskStore()
console.log(objectTaskStor)
const taskTitleArea=ref()

//برای ذخیره شده در استور جهت ماندن اطلاعات در لوکال
/* const taskList=ref([])
const task =ref({
  id: uuidv4(),
      title: null,
      description: null,
      data:moment().format('jYYYY/jM/jD'),
      isDone: false,
    })
     */

    function addTask() {
      
flagModal.value=false;
    
    }
  const flagModal=ref(false);
  function hadelClick() {
flagModal.value=true
  }
 
</script>

<template>
  <div class="container">
    <MainLayout>
      <div class="grid grid-cols-12 gap-4 bg-zinc-50 rounded-md min-h-[600px]">
        <div class="col-start-1 col-end-3 bg-zinc-300 h-full rounded-lg">
          <Sidebar :taskList="objectTaskStor.taskList"/>
        </div>
        <div
          class="col-start-3 col-end-13 bg-gray-100 h-full flex items-center justify-center flex-col"
        >
          <Button @click="hadelClick" class="bg-amber-600	">
            <Plus />
            <spn class="mr-2">افزودن تسک جدید</spn>
          </Button>
          <!--         {{flagModal}}-->
        </div>
        <Modal v-model="flagModal">
          <Input
            v-model="objectTaskStor.task.title"
            type="text"
            placeholder="عنوان تسک خود را وارد کنید"
          />
          <Textarea
            v-model="objectTaskStor.task.description"
            type="text"
            placeholder="توضیحات"
          />
          <Button @click="objectTaskStor.addTask">
            <spn class="mr-2">ذخیره کردن تسک </spn>
          </Button>
          <br/>
         
        </Modal>
      </div>
    </MainLayout>
  </div>
</template>
<style></style>
