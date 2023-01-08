<template>
  <div class="row row-cols-1 row-cols-md-4 g-4">
    <div class="col" v-for="rechnung in rechnung" :key="rechnung.id">
      <rechnung-card :rechnung="rechnung"></rechnung-card>
    </div>
  </div>
</template>

<script>
import RechnungCard from '@/components/RechnungCard'
export default {
  name: 'RechnungCardList',
  components: {
    RechnungCard
  },
  props: {
    rechnung: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
</style>
