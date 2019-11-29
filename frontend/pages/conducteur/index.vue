<template>
  <div class="container">
    <div>
      conducteur
    </div>
    <div class="meldingen__overzicht">
      <melding :melding="melding" v-for="melding in meldingen" :key="melding" />
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      meldingen: [
        { text: 'test 1' },
        { text: 'test 2' }
      ],
    }
  },
}
</script>

<style>
.meldingen__overzicht { display: flex; flex-direction: column; }
</style>
