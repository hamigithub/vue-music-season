<template>
  <div id="youngArtistGroup">
    <div class="container">
      <div class="row padding-top50">
        <div class="col-xs-12">
          <div class="text-center">
            <h1>Professional Young Artist Group Result</h1>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row padding-top50">
        <div class="col-xs-12">
          <div class="text-center">
            <p class="padding-top5">Gold Award - Takuma Onodera (Japan)</p>
            <p class="padding-top5">Silver Award - Matthew Liu (US)</p>
            <p class="padding-top5">Bronze Award - Jacky Zhang (UK)</p>
            <p class="padding-top5">Fourth Place - Haonan Ma (China)</p>
            <p class="padding-top5">Fifth Place - Matteo Perlin (Italy)</p>
            <p class="padding-top5">Sixth Place - Shi Feng (China)</p>
          </div>
        </div>
        <div class="col-xs-12 padding-top50">
          <div class="text-center">
            <h4 class="padding-top20">Excellent Performance Award</h4>
            <p class="padding-top5">Chang Lu</p>
            <p class="padding-top5">Jingnan Tu</p>
            <p class="padding-top5">Qifan Jiang</p>
            <p class="padding-top5">Songyang Yue</p>
            <p class="padding-top5">Pinn Mahasaranond</p>
            <p class="padding-top5">Wanyue Zhao</p>
            <p class="padding-top5">Yiqin Zhao</p>
            <p class="padding-top5">Zhijia He</p>
          </div>
          <div class="text-center">
            <h5 class="padding-top20">Finalist Award</h5>
            <p class="padding-top5">Angelina Natal</p>
            <p class="padding-top5">Jialin Song</p>
            <p class="padding-top5">Jingwei Zhu</p>
            <p class="padding-top5">Weetiwat Siriwattanakorn</p>
            <p class="padding-top5">Xingdi Chen</p>
            <p class="padding-top5">Yige Zhang</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "YoungArtistGroup",
};
</script>

<style scoped>
.titleBtn {
  background-image: linear-gradient(90deg, #b219b6, #b6a60b);
}

.applyFeeTitle {
  padding: 5px 10px;
}

.btn {
  display: inline-block;
  padding: 20px;
  font-size: 24px;
  color: #fff;
  border-radius: 3px;
}

.btnBgm {
  background: linear-gradient(90deg, #7939aa, #a8306e, #a8431d, #7939aa);
  background-size: 1400% 300%;
  animation: mymove 3.5s ease infinite;
  -webkit-animation: mymove 3.5s ease infinite;
  -moz-animation: mymove 3.5s ease infinite;
}

@keyframes mymove {
  0% {
    background-position: 0 25%;
  }
  25% {
    background-position: 25% 50%;
  }
  50% {
    background-position: 50% 75%;
  }
  75% {
    background-position: 75% 100%;
  }
  100% {
    background-position: 100% 0;
  }
}
</style>
