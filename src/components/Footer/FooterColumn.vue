<template>
  <div class="md:w-1/2 mb-4 mx-auto">
    <h3 class="text-lg font-semibold">{{ title }}</h3>
    <ul class="list-none">
      <li v-for="item in items" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    items: Array,
  },
};
</script>
