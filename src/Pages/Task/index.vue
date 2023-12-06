<script setup>
import {useTaskStore} from '@/stores/taskStores.js'
import { useRoute,useRouter } from 'vue-router'

import Button from "@/components/Button/index.vue";

const taskStore=useTaskStore()
const rout=useRoute()
const routr=useRouter()


const taskItem=taskStore.taskList.find((item)=>{
    return item.id===rout.params.id
})
function handelDelete(){
    const confirm=window.confirm("آیا مطمئن هستید؟")
    if (!confirm) {
        return
    }
    const taskIndex=taskStore.taskList.findIndex((item)=>{
return item.id===rout.params.id
    })
    console.log(taskIndex)
    taskStore.taskList.splice(taskIndex,1)
routr.go(-1)
}

</script>

<template>
<div class=" container container-div">
    <div class="body-details">
        <p class=" text-style ">عنوان تسک:
            {{taskItem.title}}
        </p>
        <p class=" text-style">توضیحات تسک:
            {{taskItem.description}}
        </p>
        <p class=" text-style">تاریخ تسک:
            {{taskItem.data}}
        </p>
         <p class=" text-style">وضعیت تسک:
            {{ taskItem.isDone===true?"انجام شده":"انجام نشده"}}
        </p>
        
        <Button @click="handelDelete" class="bg-red-500	">
            <spn class="mr-2">حذف تسک جدید</spn>
          </Button>

    </div>

</div>



<per>

    {{taskItem}}
</per>
</template>
<style >
.container-div{
    @apply h-full w-full flex justify-center bg-gray-200
}
.body-details {
    @apply w-1/2 h-96  flex flex-col  bg-white m-auto mt-[50px] 
}
.text-style{
    @apply text-right mb-5	text-red-950	
}

</style>