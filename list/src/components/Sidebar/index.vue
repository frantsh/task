<script setup>
import {defineProps} from 'vue'
const prop=defineProps({
tasks:{
        type: Array,
     default: () => ([])

    }       
})
    
console.log(prop.tasks)
</script>

<template>
<ul >
    <li 
    class="border-b border-gray-200  flex items-center justify-between py-2 cursor-pointer "

    
    v-for="item in tasks"
    :key="item.id">
    <spn class="mr-3 mt-2">{{item.title}}</spn>
    
    </li>
</ul>


    
</template>
<style >

</style>
