<template>
  <div class="container">
    <div @click="$router.back()">back</div>
    <div class="box">
      <h5 class="is-5">Waar gaat het over?</h5>
      <b-button class="form-item">Informatie</b-button>
      <nuxt-link tag="b-button" to="/passagier/meldingen/veiligheid" class="form-item">Veiligheid</nuxt-link>
      <b-button class="form-item">Hygiene</b-button>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
  h5 { font-weight: bold; margin-bottom: 0.5rem; }
  table {
    td:first-of-type { padding-right: 1rem; }
  }
  .form-item {
    margin-bottom: 1rem;
  }
  .form-item:last-child {
    margin-bottom: 0;
  }
</style>
