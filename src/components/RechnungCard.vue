<template>
  <div class="card h-100">
    <img :src="getAvatar(rechnung)" class="card-img-top" :alt="rechnung.name >
      <h5 class="card-title">{{ rechnung.name }} >
      <p class="card-text">
        {{ rechnung.name }} ist {{ rechnung.preis}} groß und
        muss bis {{ rechnung.frist }} auf {{ rechnung.kontonummer}} bezahlen werden.
      </p>
    </div>
</template>

<script>
export default {
  name: 'RechnungCard',
  props: {
    rechnung: {
      type: Object,
      required: true
    }
  },
  methods: {
    getAvatar (rechnung) {
        return require('../assets/alarm.png')
      }
    }
</script>

<style scoped>

</style>
