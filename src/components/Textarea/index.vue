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
    emits('update:modelValue',value)
}
})
</script>
<template>
    <input v-model="inputComputed"
     class="textareaStyle"
    :type="type"  
    :placeholder="placeholder"/>
    {{inputComputed}}
</template>
<style >
.textareaStyle{
    @apply mb-10 bg-orange-300 border-white rounded-lg w-full h-44 text-white
    	 px-2 hover:border-white;

}

</style>