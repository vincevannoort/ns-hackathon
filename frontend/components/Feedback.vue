<template>
  <div class="container">
    <div class="modal" :class="{ 'is-active': displayFeedback }">
    <div class="modal-background" @click="close"></div>
    <div class="modal-content">
      <div id="content" class="box">
        <h5 class="is-5">Feedback</h5>
        <b-button @click="close" class="form-item">Ik ben goed geholpen</b-button>
        <b-button @click="close" class="form-item">Nog niet opgelost</b-button>
      </div>
    </div>
      <button class="modal-close is-large" aria-label="close" @click="close"></button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    displayFeedback: Boolean,
  },

  methods: {
    close: function() {
      this.$emit('closeFeedback')
    }
  }
}
</script>

<style lang="scss">
.form-item {
  margin-bottom: 1rem;
}
.form-item:last-child {
  margin-bottom: 0;
}
.modal-content {
  padding: 1.5rem;
}
</style>