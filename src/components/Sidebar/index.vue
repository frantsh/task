<script setup>
import {defineProps} from 'vue'
import { RouterLink } from 'vue-router'

const prop=defineProps({
taskList:{
        type: Array,
     default: () => ([])

    }       
})
    
console.log(prop.tasks)
</script>

<template>
<ul >

    <RouterLink :to="'task/'+item.id" 
    class="border-b border-gray-200  flex items-center justify-between py-2 cursor-pointer "

    
    v-for="item in taskList"
    :key="item.id">
            <spn class="mr-3 mt-2">{{item.title}}</spn>

</RouterLink>

    
</ul>
    
</template>
<style >

</style>
