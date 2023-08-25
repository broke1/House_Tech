<template>
  <div class="links">
    <div class="links_title">
      {{ links.title }}
    </div>
    <a 
      v-for="item in links.linksItem"
      :href="item.url"
      :key="item.name"
      class="links_item"
    >
      <div 
        class="links_item_icon"
        :class="{
          'links_item_icon_doc': item.icon == 'doc',
          'links_item_icon_eight': item.icon == 'eight'
        }"
      ></div>
      <div class="links_item_text">
        {{ item.name }}
      </div>
    </a>
  </div>
</template>

<script>


export default {
  name: 'LinksDiv',
  props: {
    links: Object
  }
}
</script>

<style src="./Links.sass" lang="sass"></style>


