import { ref, computed } from "vue";
import { defineStore } from "pinia";
import moment from "moment-jalaali";
import { v4 as uuidv4 } from "uuid";
export const useTaskStore = defineStore(
  "taskStore",
  //کانفیگ=>استست تعریف
  () => {
    const taskList = ref([]);
    const task = ref({
      id: uuidv4(),
      title: null,
      description: null,
      data: moment().format("jYYYY/jM/jD"),
      isDone: false,
    });

    function addTask() {
      alert(task.value.title + "dis:" + task.value.description);
      taskList.value.push(task.value);

      console.log("id:" + task.value.id + "data:" + task.value.data);
      //flagModal.value=false;
      task.value = {
        ...task.value,
        title: null,
        description: null,
        isDone: false,
      };
    }

    return { taskList, task, addTask };
  },
  {
    persist: true,
  }
);
