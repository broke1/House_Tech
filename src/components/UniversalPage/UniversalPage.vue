<template>
  <Header />
  <Menu />
  <About />
  <Stages />
  <Order />
  <Footer />
</template>

<script>

import Header from './Header/Header.vue'
import Menu from './Menu/Menu.vue'
import About from './About/About.vue'
import Stages from './Stages/Stages.vue'
import Order from './Order/Order.vue'
import Footer from './Footer/Footer.vue'

export default {
  name: 'UniversalPage',
  components: {
    Header,
    Menu,
    About,
    Stages,
    Order,
    Footer
  }
}
</script>

<style src="./UniversalPage.sass" lang="sass"></style>


