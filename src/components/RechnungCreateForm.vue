<template>
  <button class="btn btn-success sticky-button" data-bs-toggle="offcanvas" data-bs-target="#rechnung-create-offcanvas" aria-controls="#rechnung-create-offcanvas">
    <i class="bi bi-rechnung-plus-fill"></i>
  </button>
  <div class="offcanvas offcanvas-end" tabindex="-1" id="rechnung-create-offcanvas" aria-labelledby="offcanvas-label">
    <div class="offcanvas-header">
      <h5 id="offcanvas-label">New Rechnung</h5>
      <button type="button" id="close-offcanvas" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <form class="text-start needs-validation" id="rechnung-create-form" novalidate>
        <div class="mb-3">
          <label for="name" class="form-label">name</label>
          <input type="text" class="form-control" id="name" v-model="name" required>
          <div class="invalid-feedback">
            Please provide the name.
          </div>
        </div>
        <div class="mb-3">
          <label for="frist" class="form-label">frist</label>
          <input type="text" class="form-control" id="frist" v-model="frist" required>
          <div class="invalid-feedback">
            Please provide the deadline.
          </div>
        </div>
        <div class="mb-3">
          <label for="kontonummer" class="form-label">kontonummer</label>
          <input type="text" class="form-control" id="kontonummer" v-model="kontonummer" required>
          <div class="invalid-feedback">
            Please provide the account number.
          </div>
        </div> <div class="mb-3">
        <label for="preis" class="form-label">preis</label>
        <input type="text" class="form-control" id="preis" v-model="preis" required>
        <div class="invalid-feedback">
          Please provide the cost.
        </div>
        </div>
        <div v-if="this.serverValidationMessages">
          <ul>
            <li v-for="(message, index) in serverValidationMessages" :key="index" style="color: red">
              {{ message }}
            </li>
          </ul>
        </div>
        <div class="mt-5">
          <button class="btn btn-primary me-3" type="submit" @click.prevent="createRechnung">Create</button>
          <button class="btn btn-danger" type="reset">Reset</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RechnungCreateForm',
  data () {
    return {
      name: '',
      frist: '',
      kontonummer: '',
      preis: '',
      serverValidationMessages: []
    }
  },
  emits: ['created'],
  methods: {
    async createPerson () {
      if (this.validate()) {
        const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/rechnung'
        const headers = new Headers()
        headers.append('Content-Type', 'application/json')
        const person = JSON.stringify({
          name: this.name,
          frist: this.frist,
          kontonummer: this.kontonummer,
          preis: this.preis
        })
        const requestOptions = {
          method: 'POST',
          headers: headers,
          body: person,
          redirect: 'follow'
        }
        const response = await fetch(endpoint, requestOptions)
        await this.handleResponse(response)
      }
    },
    async handleResponse (response) {
      if (response.ok) {
        this.$emit('created', response.headers.get('location'))
        document.getElementById('close-offcanvas').click()
      } else if (response.status === 400) {
        response = await response.json()
        response.errors.forEach(error => {
          this.serverValidationMessages.push(error.defaultMessage)
        })
      } else {
        this.serverValidationMessages.push('Unknown error occurred')
      }
    },
    validate () {
      const form = document.getElementById('rechnung-create-form')
      form.classList.add('was-validated')
      return form.checkValidity()
    }
  }
}
</script>

<style scoped>
.sticky-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px 15px;
  border-radius: 30px;
}
</style>
