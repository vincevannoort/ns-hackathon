<template>
  <div class="container">
    <div @click="$router.back()">back</div>
    <melding-conducteur :melding="melding" />
    <div class="box">
      <h5 class="is-5">Informatie</h5>
      <table>
        <tr><td>Type:</td><td>veiligheid</td></tr>
        <tr><td>Soort:</td><td>geweld</td></tr>
        <tr><td>Aantal mensen:</td><td>2</td></tr>
      </table>
    </div>
    <div class="box">
      <h5 class="is-5">Uitgevoerde acties</h5>
      <div class="melding__actie" v-for="actieGedaan in melding.actiesGedaan" :key="actieGedaan.actie">
        <div class="melding__actie__tijd">{{ actieGedaan.tijd }}</div>
        <div>{{ actieGedaan.actie }}</div>
      </div>
    </div>
    <div class="box">
      <h5 class="is-5">Acties</h5>
      <b-button>Stuur melding naar beveiliging</b-button>
      <b-button>Extra informatie opvragen</b-button>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      melding: {
        categorie: 'Veiligheid',
        titel: 'Er is een gevecht gaande tussen 2 medereizigers in coupe 2.',
        actiesGedaan: [
          {
            tijd: '2 minuten geleden',
            actie: 'Stuur melding naar beveiliging'
          },
          {
            tijd: '10 minuten geleden',
            actie: 'Extra informatie opvragen bij passagier'
          }
        ]
      },
    }
  },
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
