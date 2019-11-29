<template>
  <div class="app">
    <nuxt />
    <div class="footer">
      <nuxt-link to="/conducteur">overzicht</nuxt-link>
      <nuxt-link to="">item</nuxt-link>
      <nuxt-link to="">account</nuxt-link>
    </div>
  </div>
</template>

<style lang="scss">
.app { padding: 1.5rem; }
html, body { min-height: 100vh; background: #ffc917; }
.box { padding: 1rem; margin-bottom: 1.5rem; }
.title, .subtitle, .is-1, .is-2, .is-3, .is-4, .is-5, .is-6 { color: black; }
.button { background: #0063d3; color: white; min-width: 100%; }
.footer { padding: 2rem; height: 5rem; display: flex; justify-content: center; align-items: center; background: white; position: fixed; left: 0; width: 100vw; bottom: 0;
  a { padding: 1rem;
    &.nuxt-link-exact-active { color: #0063d3; }
  }
}

.page-enter-active, .page-leave-active { transition-property: opacity; transition-timing-function: ease-in-out; transition-duration: 250ms; }
.page-enter, .page-leave-to { opacity: 0; }

html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
