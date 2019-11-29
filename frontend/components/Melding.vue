<template>
  <nuxt-link to="/conducteur/meldingen/voorbeeld-geweld">
    <div class="melding box">
      <div class="melding__top">
        <div class="melding__informatie">
          <div>Status: status</div>
          <div>Treinstel: treinstel</div>
        </div>
        <div class="melding__categorie">
          <div class="melding__categorie__box">{{ melding.categorie }}</div>
        </div>
      </div>
      <div>
        <div class="melding__text">
          <h4 class="title is-4">{{ melding.titel }}</h4>
        </div>
      </div>
      <div>
        <div class="melding__tijd">
          <div>3 seconden geleden...</div>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    melding: Object,
  }
}
</script>

<style lang="scss">
.melding { margin-bottom: 1.5rem;
  &__top { display: flex; justify-content: space-between; }
  &__categorie {
    &__box { background: #0063d3; color: white; padding: 0 0.5rem; border-radius: 4px; }
  }
  &__text { margin-top: 0.5rem; margin-bottom: 0.25rem; }
}
</style>
