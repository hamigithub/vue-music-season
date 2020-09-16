<template>
  <div id="pianoTeachersGroup">
    <div class="container">
      <div class="row padding-top50">
        <div class="col-xs-12">
          <div class="text-center">
            <h1>Piano Teachers Group</h1>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row padding-top50">
        <div class="col-xs-12">
          <div class="text-center">
            <p class="padding-top5">Gold Award- Yudi Ouyang (China)</p>
            <p class="padding-top5">Silver Award-Su Luo (China)</p>
            <p class="padding-top5">Bronze Award- Aristotelis Papadimitriou (Greek/German)</p>
            <p class="padding-top5">Forth Place- Isabel Keleti (US)</p>
            <p class="padding-top5">Fifth Place- Jingci Liu(China)</p>
            <p class="padding-top5">Sixth Place- Qin Liu(China)</p>
          </div>
        </div>
        <div class="col-xs-12 padding-top50">
          <div class="text-center">
            <h4 class="padding-top20">Honorable Mention:</h4>
            <p class="padding-top5">Hanye Yu</p>
            <p class="padding-top5">Hehe Su</p>
            <p class="padding-top5">Ruichan Wang</p>
            <p class="padding-top5">Xiaoning Xiao</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PianoTeachersGroup",
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
