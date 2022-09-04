<template>
  <div style="margin: 20px">
    <input placeholder="タスクを追加" @keyup.enter="addTodo">
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'

  export default {
    methods: {
      addTodo(e) {
        console.log
        this.$store.commit('todos/add',  e.target.value)
      }
    }
  }
</script>