
<script setup>
import {defineExpose,defineEmits,computed,ref} from 'vue'
import Plus from "@/components/Icons/plus.vue";
import Close from "@/components/Icons/Close.vue";
import Input from "@/components/Input/index.vue";
import Textarea from "@/components/Textarea/index.vue";
const props=defineProps(['modelValue'])
const emits=defineEmits(['update:modelValue'])
const modalComputed=computed({
  get(){
return props.modelValue
  },
  set(value){
emits('update:modelValue',value)
  }
})
const taskTitle=ref()
const taskTitleArea=ref()
</script>


<template>
    <div class=" container modal-container" v-if="modelValue" >
         <div class="modal-header">
                <button
                    class="text-red ml-2"
                    @click="modalComputed = false"
                >
                    <Close/>
                </button>
                <span>
<Plus/>                </span>
            </div> 
            <div class="modal-body">
              <Input v-model="taskTitle"
              type="text"
              placeholder="عنوان تسک خود را وارد کنید"
              />
<Textarea v-model="taskTitleArea"
              type="text"
              placeholder="توضیحات"
              />


            </div>
            

    </div>
</template>
<style >
.modal-container{
/*     //  کلاس هاشو چون از تلویند استفاده کردیم */  
  @apply fixed top-0 left-0 right-40 bottom-0 w-1/2	m-auto	 rounded-lg  h-96 	 ;
      background-color: rgba(71, 69, 69, 0.829);

}
.modal {
    @apply bg-white min-w-[500px] h-auto rounded-lg shadow-lg p-6;
}
.modal-header {
    @apply  w-full mt-[-5px]  flex justify-between mb-5 mt-5 ;
}
.modal-body {
    @apply p-8 h-72 items-center flex flex-col  bg-white
}


</style>