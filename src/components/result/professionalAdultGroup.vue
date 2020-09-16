<template>
  <div id="professionalAdultGroup">
    <div class="container">
      <div class="row padding-top50">
        <div class="col-xs-12">
          <div class="text-center">
            <h1>Professional Adult Group</h1>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row padding-top50">
        <div class="col-xs-12">
          <div class="text-center">
            <p class="padding-top5">Gold Award -Boyan Lyu (China)</p>
            <p class="padding-top5">Silver Award -Timothy Su (US)</p>
            <p class="padding-top5">Bronze Award -Nan Ni (China)</p>
            <p class="padding-top5">Fourth Place -Yizhen Chen (China)</p>
            <p class="padding-top5">Fifth Place -Jingci Liu (China)</p>
            <p
              class="padding-top5"
            >Sixth Place -Klaus Nugraha(Indonesia) tie with Mutong Mai (China)</p>
          </div>
        </div>
        <div class="col-xs-12 padding-top50">
          <div class="text-center">
            <h4 class="padding-top20">Excellent Performance Award</h4>
            <p class="padding-top5">Sixuan Zhang</p>
            <p class="padding-top5">Cheng Yu Hsiao</p>
            <p class="padding-top5">Yuxin Chen</p>
            <p class="padding-top5">Isabel Keleti</p>
            <p class="padding-top5">Markus Kaitila</p>
            <p class="padding-top5">Jeanne Hourez</p>
          </div>
          <div class="text-center">
            <h4 class="padding-top20">Finalist Award:</h4>
            <p class="padding-top5">Gewei Zhu</p>
            <p class="padding-top5">Giusy Ines Tuttolomondo</p>
            <p class="padding-top5">Jitong Feng</p>
            <p class="padding-top5">Lewei He</p>
            <p class="padding-top5">Mingpeng Zhang</p>
            <p class="padding-top5">Peilin Jing</p>
            <p class="padding-top5">Roberto di Napoli</p>
            <p class="padding-top5">Shufan Ge</p>
            <p class="padding-top5">Tingyu Song</p>
            <p class="padding-top5">Yun Wang</p>
            <p class="padding-top5">Yuling Zeng</p>
            <p class="padding-top5">Yixuan Kang</p>
            <p class="padding-top5">Yeli Lin</p>
            <p class="padding-top5">Ziyuan Zhao</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfessionalAdultGroup",
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
