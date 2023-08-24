<template>
  <section class="stages_section">
    <div class="stages_section_container">
      <div class="stages_section_container_stages_block">
        <div class="stages_section_container_stages_block_title">
          <div class="stages_section_container_stages_block_title_line"></div>
          <div class="stages_section_container_stages_block_title_text">
            {{ this.$store.state.stages.title }}
          </div>
        </div>
        <div 
          v-for="stage in this.$store.state.stages.stagesArr"
          :key="stage.title"
          class="stages_section_container_stages_block_stage"
        >
          <div class="stages_section_container_stages_block_stage_number">
            {{ stage.number }}
          </div>
          <div class="stages_section_container_stages_block_stage_text_block">
            <div class="stages_section_container_stages_block_stage_text_block_title">
              {{ stage.title }}
            </div>
            <div class="stages_section_container_stages_block_stage_text_block_text">
              {{ stage.text }}
            </div>
          </div>
        </div>
      </div>
      <div class="stages_section_container_lines_block">
        <div class="stages_section_container_lines_block_line_top"></div>
        <div class="stages_section_container_lines_block_line_bottom"></div>
      </div>
      <div class="stages_section_container_price_block">
        <div class="stages_section_container_price_block_left"></div>
        <div class="stages_section_container_price_block_right">
          <div class="stages_section_container_price_block_right_title">
            {{ this.$store.state.stages.price.title }}
          </div>
          <div class="stages_section_container_price_block_right_underline"></div>
          <div class="stages_section_container_price_block_right_text">
            {{ this.$store.state.stages.price.text }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>


export default {
  name: 'StagesSection'
}
</script>

<style src="./Stages.sass" lang="sass"></style>


