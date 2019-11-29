<template>
  <div class="container">
    <div>
      <h3 class="title is-3">Overzicht <br>meldingen</h3>
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
        {
          categorie: 'Veiligheid',
          titel: 'Er is een gevecht gaande tussen 2 medereizigers in coupe 2.'
        },
        {
          categorie: 'Hygïene',
          titel: 'Er zijn meerdere mensen aan het kotsen aaaah!'
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.meldingen__overzicht { display: flex; flex-direction: column; }
h3 { margin-bottom: 2rem; }
</style>
