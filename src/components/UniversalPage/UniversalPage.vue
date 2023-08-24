<template>
  <Header />
  <Menu :menu="menu"/>
  <About />
  <Stages />
</template>

<script>

import Header from './Header/Header.vue'
import Menu from './Menu/Menu.vue'
import About from './About/About.vue'
import Stages from './Stages/Stages.vue'

export default {
  name: 'UniversalPage',
  components: {
    Header,
    Menu,
    About,
    Stages
  },
  data() {
    return {
      menu: this.$store.state.menu
    }
  }
}
</script>

<style src="./UniversalPage.sass" lang="sass"></style>


