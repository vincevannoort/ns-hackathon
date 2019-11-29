<template>
  <div class="container">
    <div @click="$router.back()">back</div>
    <melding-conducteur :melding="melding" />
    <uitgevoerde-acties :actiesGedaan="melding.actiesGedaan" />
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

</style>
