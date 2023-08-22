<template>
  <section class="title_section">
    <div class="title_section_container">
      <div class="title_section_container_left_part">
        <div class="title_section_container_left_part_breadcrumbs">
          <div 
            v-for="(crumb, index) in breadcrumbs" 
            :key="crumb" 
            class="title_section_container_left_part_breadcrumbs_crumb"
            >
            <div class="title_section_container_left_part_breadcrumbs_crumb_text">
              {{ crumb }}
            </div>
            <div 
              v-if="index != breadcrumbs.length-1"
              class="title_section_container_left_part_breadcrumbs_crumb_delimetr"
            >
            {{ "/" }}
            </div>
          </div>
        </div>
        <div class="title_section_container_left_part_title">
          {{ title }}
        </div>
        <div class="title_section_container_left_part_underline"></div>
        <div class="title_section_container_left_part_subtitle">
          {{ subtitle }}
        </div>
      </div>
      <div class="title_section_container_right_part"></div>
    </div>
  </section>
</template>

<script>


export default {
  name: 'TitleSection',
  props: {
    breadcrumbs: Array,
    title: String,
    subtitle: String
  }
}
</script>

<style src="./Title.sass" lang="sass"></style>


