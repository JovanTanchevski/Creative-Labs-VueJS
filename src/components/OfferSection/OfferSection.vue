<script setup>
import SectionCard from '../SectionCard/SectionCard.vue';
</script>

<template>
  <div class="flex flex-col md:flex-row gap-5">
    <div class="md:w-1/2">
      <SectionCard
        backgroundColor="bg-light-green-bg-1"
        title="Pharetra massa massa ultri."
        subTitle="About us"
        shortDescription="Ornare quam viverra orci sagittis eu volutpat odio facilisis. Purus non enim praesent elementum facilisis leo vel fringilla est. Euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue."
        textLink="Read our Story"
        arrowColor="ED8380"
      />
    </div>
    <div class="md:w-1/2">
      <SectionCard
        backgroundColor=" bg-light-yellow-bg-1"
        title="Convallis a cras semper au."
        subTitle="Our offer"
        shortDescription="OElit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue. Ornare quam viverra orci sagittis eu volutpat odio facilisis. Purus non enim praesent elementum facilisis leo vel fringilla est. Euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis."
        textLink="What we offer"
        arrowColor="ED8380"
      />
    </div>
  </div>
</template>
