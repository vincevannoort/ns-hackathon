import Vue from 'vue'
import MeldingConducteur from '../components/MeldingConducteur.vue'
import MeldingPassagier from '../components/MeldingPassagier.vue'
import UitgevoerdeActies from '../components/UitgevoerdeActies.vue'
import FooterConducteur from '../components/FooterConducteur.vue'
import FooterPassagier from '../components/FooterPassagier.vue'
import Feedback from '../components/Feedback.vue'

Vue.component('melding-conducteur', MeldingConducteur)
Vue.component('melding-passagier', MeldingPassagier)
Vue.component('uitgevoerde-acties', UitgevoerdeActies)
Vue.component('footer-conducteur', FooterConducteur)
Vue.component('footer-passagier', FooterPassagier)
Vue.component('feedback', Feedback)
