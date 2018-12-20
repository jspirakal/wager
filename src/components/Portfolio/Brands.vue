<template>
  <div class="row switch-container">
    <div class="col-md-12 pl-0 pr-0">
      <h5 class="heading">Your Brands
        <switches style="vertical-align: middle; float: right; margin-right: 20px" v-model="enabled" theme="bootstrap"
          color="success"></switches>
      </h5>
      <div class="row brands-list">
        <div class="col brand">
          <p>Blacer T Shirt </p>
          <img src="img/t-shirt.png" alt="t shirt">
          <p class="mt-3">20 WGT</p>
          <a class="btn buy_now" href="#">Buy Now </a>
        </div>
        <div class="col brand">
          <p>White Band</p>
          <img src="img/white_band.png" alt="t shirt">
          <p class="mt-3">200 WGT</p>
          <a class="btn buy_now" href="#">Buy Now </a>
        </div>
        <div class="col brand">
          <p>Cap</p>
          <img src="img/cap.png" alt="t shirt">
          <p class="mt-3">100 WGT</p>
          <a class="btn buy_now" href="#">Buy Now </a>
        </div>
        <div class="col brand">
          <p>Key Chain </p>
          <img src="img/key_chain.png" alt="t shirt">
          <p class="mt-3">700 WGT</p>
          <a class="btn buy_now" href="#">Buy Now </a>
        </div>
        <div class="col brand">
          <p>Gaming Mouse </p>
          <img src="img/gamming_mouse.png" alt="t shirt">
          <p class="mt-3">500 WGT</p>
          <a class="btn buy_now" href="#">Buy Now </a>
        </div>
        <div class="disabled-overlay" v-if="enabled == false"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Switches from 'vue-switches';
export default {
  name: 'Brands',
  components: {
    Switches
  },
  data() {
    return {
      enabled: true
    }
  }
}
</script>

<style>
  .brands-list {
    position: relative;
  }
  .disabled-overlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0,0,0,0.5);
  }
</style>
