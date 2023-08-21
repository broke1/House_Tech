<template>
  <section class="menu_section">
    <div class="menu_section_transition_block"></div>
    <div class="menu_section_links">
      <div class="menu_section_links_container">
        <div v-for="link in menu" :key="link.name" class="menu_section_links_container_link_block">
          <a :href="link.url" class="menu_section_links_container_link_block_url">{{ link.name }}</a>
          <div v-if="link.childs" class="menu_section_links_container_link_block_arrow">
            <div class="menu_section_links_container_link_block_arrow__left"></div>
            <div class="menu_section_links_container_link_block_arrow__right"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>


export default {
  name: 'MenuSection',
  props: {
    menu: Array
  }
}
</script>

<style src="./Menu.sass" lang="sass"></style>


