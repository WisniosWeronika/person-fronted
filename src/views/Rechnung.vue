<template>
  <h1>Rechnung</h1>
  <div class="container-fluid">
    <rechnung-card-list :rechnung="this.rechnung"></rechnung-card-list>
  </div>
  <rechnung-create-form @created="addRechnung"></rechnung-create-form>
</template>

<script>
import RechnungCardList from '@/components/RechnungCardList'
import RechnungCreateForm from '@/components/RechnungCreateForm'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Rechnung ',
  components: {
    RechnungCardList,
    RechnungCreateForm
  },
  data () {
    return {
      rechnung: []
    }
  },
  methods: {
    addRechnung (rechnungLocation) {
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + rechnungLocation
      const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      }

      fetch(endpoint, requestOptions)
        .then(response => response.json())
        .then(rechnung => this.rechnung.push(rechnung))
        .catch(error => console.log('error', error))
    }
  },
  mounted () {
    const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/rechnung'
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }

    fetch(endpoint, requestOptions)
      .then(response => response.json())
      .then(result => result.forEach(rechnung => {
        this.rechnung.push(rechnung)
      }))
      .catch(error => console.log('error', error))
  }
}
</script>

<style scoped>

</style>
