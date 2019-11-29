<template>
  <div class="container">
    <div class="header-buttons" @click="$router.back()">back</div>
    <div class="header-buttons" id="feedback" @click="openFeedback">feedback</div>
    <feedback :displayFeedback="displayFeedback" @closeFeedback="closeFeedback"  />
    <melding-conducteur :melding="melding" />
    <uitgevoerde-acties :actiesGedaan="melding.actiesGedaan" />
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      displayFeedback: false,
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
  methods: {
    openFeedback: function() {
      this.displayFeedback = true
    },
    closeFeedback: function() {
      console.log("GoT HERE")
      this.displayFeedback = false;
    }
  }
}
</script>

<style lang="scss" scoped>
.header-buttons {
  display: inline-block;
}
#feedback {
  float: right;
}
</style>
