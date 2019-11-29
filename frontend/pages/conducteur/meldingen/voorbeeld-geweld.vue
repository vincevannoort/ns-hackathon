<template>
  <div class="container">
    <melding :melding="melding" />
    <div class="box">
      <h5 class="is-5">Informatie</h5>
      <table>
        <tr>
          <td>type:</td>
          <td>hygïene</td>
        </tr>
        <tr>
          <td>soort:</td>
          <td>geweld</td>
        </tr>
        <tr>
          <td>aantal mensen:</td>
          <td>2</td>
        </tr>
      </table>
    </div>
    <div class="box">test</div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      melding: {
        categorie: 'Veiligheid',
        titel: 'Er is een gevecht gaande tussen 2 medereizigers in coupe 2.'
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.melding {
  &__text { margin-top: 1rem; }
}
</style>
