<template>
  <div class="melding box">
    <div class="melding__top">
      <div class="melding__informatie">
        <div>Status: status</div>
        <div>Treinstel: treinstel</div>
      </div>
      <div class="melding__categorie">
        <div class="melding__categorie__box">categorie</div>
      </div>
    </div>
    <div>
      <div class="melding__text">{{ melding.text }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    melding: Object,
  }
  // data: function () {
  //   prop
  // },
}
</script>

<style lang="scss">
.melding {
  &__top { display: flex; justify-content: space-between; }
  &__categorie {
    &__box { background: #eee; padding: 0 0.5rem; }
  }
}
</style>
