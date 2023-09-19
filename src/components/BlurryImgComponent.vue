<template>
  <div class="blurry-img">
    <div
      :style="{
        backgroundImage: `url(${image})`,
        width: width,
        height: height,
        filter: `blur(6px)`,
      }"
    ></div>
    <q-img
      :width="width"
      :height="height"
      fit="contain"
      class="cust-img"
      :src="image"
    />
  </div>
</template>
<script>
export default {
  props: ["width", "height", "image"],
};
</script>
