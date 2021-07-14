<template>
  <div id="finalists">
    <div class="container">
      <div class="row padding-top50 text-center">
        <div class="col-xs-12">
          <h3>Professional Division</h3>
          <div class="text-center">
            <p class="padding-top5">Pinn Mahasaranond</p>
            <p class="padding-top5">Modesto Picci</p>
            <p class="padding-top5">Yining Sun</p>
            <p class="padding-top5">Hyeongji Choi</p>
            <p class="padding-top5">Maximiliano Rosas</p>
            <p class="padding-top5">Kristian Cvetkovic</p>
            <p class="padding-top5">John Solari</p>
          </div>
        </div>

        <div class="col-xs-12 padding-top50">
          <h3>Young Artist Division</h3>
          <div class="text-center">
            <p class="padding-top5">Hannah Yap Qian Yi</p>
            <p class="padding-top5">Matthew Chua</p>
            <p class="padding-top5">Chiara Bleve</p>
            <p class="padding-top5">Tejit Boriboonpoka</p>
          </div>
        </div>

        <div class="col-xs-12 padding-top50">
          <h3>Chamber Division</h3>
          <div class="text-center">
            <p class="padding-top5">Bella Dang & Jennifer Vu</p>
            <p class="padding-top5">Hazel Vuu & Rachael Vu</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Finalists",
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
