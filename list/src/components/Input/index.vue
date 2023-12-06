<script setup>
import {defineProps,defineEmits,computed,ref} from 'vue'
 
const props =defineProps(['placeholder','type','modelValue'])
const emits=defineEmits("update:modelValue")
const inputComputed=computed({
get(){
    return  props.modelValue
    console.log(props.modelValue)

},
set(value){
    emits('update:modelValue',value,props.modelValue="")

}
})
</script>
<template>
    <input v-model="inputComputed"
     class="inputStyle"
    :type="type"  
    :placeholder="placeholder"/>
    {{inputComputed}}
</template>
<style >
.inputStyle{
    @apply mb-10 bg-orange-400 border-white rounded-lg w-full h-12 text-white
    	 px-2 hover:border-white;

}

</style>