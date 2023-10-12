<script>
import SectionCard from '../SectionCard/SectionCard.vue';
export default {
  components: {
    SectionCard,
  },
};
</script>
<template>
  <div class="darkenedBackground md:h-[752px]">
    <div class="flex justify-start items-end h-full">
      <SectionCard
        title="Euismod elementumnisi quis eleifend quam proin sagittis."
        subTitle="Contact us"
        shortDescription="Senectus et netus et malesuada fames. Sed augue lacus viverra vitae congue eu consequat. Cum sociis natoque penatibus et magnis dis parturient montes. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus. Enim eu turpis egestas pretium aenean pharetra."
        textLink="Contact Us"
        :isBackgroundTransparent="true"
        :isSmallCard="true"
        arrowColor="FFE17A"
      />
    </div>
  </div>
</template>
<style scoped>
.darkenedBackground {
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 100%
    ),
    url('/images/contact-us-banner-bg.svg') center/cover no-repeat;
}
</style>
