<template>
  <div class="container">
    <div>
      <h3 class="title is-3">Overzicht <br>meldingen</h3>
    </div>
    <div class="meldingen__overzicht">
      <melding-passagier :melding="melding" v-for="melding in meldingen" :key="melding" />
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      meldingen: [
        {
          categorie: 'Veiligheid',
          titel: 'Er is een gevecht gaande tussen 2 medereizigers in coupe 2.'
        }
      ],
    }
  },
}
</script>

<style>
  .meldingen__overzicht { display: flex; flex-direction: column; }
  h3 { margin-bottom: 2rem; }
</style>
