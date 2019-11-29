<template>
  <div class="container">
    <div class="modal" :class="{ 'is-active': displaySendMelding }">
    <div class="modal-background" @click="close"></div>
    <div class="modal-content">
      <div id="content" class="box">
        <h5 class="is-5">Verzonden</h5>
      </div>
    </div>
      <button class="modal-close is-large" aria-label="close" @click="close"></button>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      displaySendMelding: true
    }
  },
  methods: {
    close: function() {
      this.displaySendMelding = false;
      this.$router.push('/passagier')
      this.sendMessage()
    },

    sendMessage: function() {
      const ws = new WebSocket(`ws://localhost:3000`)
      
      const message = {
        categorie: "Overlast",
        titel: "Lawaai"
      } 

      console.log(message)

      ws.send(message)
    }
  }
}
</script>

<style lang="scss" scoped>
  
</style>
