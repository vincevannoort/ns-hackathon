<template>
  <div class="container">
    <div @click="$router.back()">back</div>
    <div class="box">
      <h5 class="is-5">Melding: Veiligheid</h5>
      <b-button class="form-item">Geweld</b-button>
      <b-button class="form-item">Dronken reiziger</b-button>
      <b-button class="form-item">Bedelaar</b-button>
      <b-button class="form-item">Anders</b-button>
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
