<template>
  <div class="hello">
    <span>{{ msg }}</span>
    <span>{{doubleCount}}</span>
  </div>
</template>

<script>
import {computed, ref} from "vue";

export default {
  name: "test",
  setup() {
    const msg = "hello world!";
    const count = ref(1);
    const doubleCount = computed(() => count.value * 2)
    return {
      msg,
      doubleCount
    }
  }
}
</script>

<style lang="scss" scoped>
.hello {
  display: flex;

  .span {
    color: #ccc;
  }
}
</style>