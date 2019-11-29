<template>
  <div class="box">
    <h5 class="is-5">Uitgevoerde acties</h5>
    <div class="melding__actie" v-for="actieGedaan in actiesGedaan" :key="actieGedaan.actie">
      <div class="melding__actie__tijd">{{ actieGedaan.tijd }}</div>
      <div>{{ actieGedaan.actie }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    actiesGedaan: Array,
  }
}
</script>

<style lang="scss" scoped>
  h5 { font-weight: bold; margin-bottom: 0.5rem; }
  table {
    td:first-of-type { padding-right: 1rem; }
  }
  .melding {
    &__text { margin-top: 0.5rem; }
    &__actie { margin-bottom: 0.5rem;
      &__tijd { font-size: 12px; color: rgba(0,0,0,0.7); }
      &:last-of-type { margin-bottom: 0; }
    }
  }
</style>