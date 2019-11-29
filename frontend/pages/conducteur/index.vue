<template>
  <div class="container">
    <div>
      <h3 class="title is-3">Overzicht <br>meldingen</h3>
      <div style="margin-bottom: 1rem;">
        <!-- TODO: hide this one -->
        <div @click="dummyMeldingToevoegen">dummy melding toevoegen</div>
      </div>
    </div>
    <!-- <transition-group name="list-complete" tag="div" class="meldingen__overzicht"> -->
    <transition-group tag="div" class="meldingen__overzicht" name="list">
      <melding-conducteur :melding="melding" v-for="melding in meldingen.slice().reverse()" :key="melding" />
    </transition-group>
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
  methods: {
    dummyMeldingToevoegen() {
      this.nieuweMeldingOntvangen({
        categorie: 'Test',
        titel: 'Nieuwe titel van melding',
      })
    },
    nieuweMeldingOntvangen(melding) {
      this.meldingen.push(melding)
    }
  }
}
</script>

<style lang="scss" scoped>
.meldingen__overzicht { display: flex; flex-direction: column; }
h3 { margin-bottom: 2rem; }
.list-enter-active,
.list-leave-active,
.list-move {
  transition: 500ms cubic-bezier(0.59, 0.12, 0.34, 0.95);
  transition-property: opacity, transform;
}

.list-enter {
  opacity: 0;
  transform: translateX(50px) scaleY(0.5);
}

.list-enter-to {
  opacity: 1;
  transform: translateX(0) scaleY(1);
}

.list-leave-active {
  position: absolute;
}

.list-leave-to {
  opacity: 0;
  transform: scaleY(0);
  transform-origin: center top;
}
</style>
