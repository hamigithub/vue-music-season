<template>
  <div id="finalists">
    <div class="container">
      <div class="row padding-top50">
        <div class="col-xs-12">
          <div class="text-center">
            <h1>2020 Conero International Piano Competition, US Division</h1>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row padding-top50">
        <div class="col-xs-12">
          <h3>Full scholarship list selected in US Division</h3>
          <div class="text-center">
            <p class="padding-top5">Isabel Keleti</p>
            <p class="padding-top5">Yudi Ouyang</p>
            <p class="padding-top5">Timothy Su</p>
            <p class="padding-top5">Matthew Liu</p>
            <p class="padding-top5">Annie Tang</p>
          </div>
        </div>
        <div class="col-xs-12 padding-top50">
          <h3>Full scholarship list selected in US Division</h3>
          <div class="text-center">
            <h5 class="padding-top20">Adult Professional Group</h5>
            <p class="padding-top5">Chang Li</p>
            <p class="padding-top5">Isabel Keleti</p>
            <p class="padding-top5">Yun Wang</p>
            <p class="padding-top5">Timothy Su</p>
            <p class="padding-top5">Shuning Li</p>
            <p class="padding-top5">Klaus Nugraha</p>
            <p class="padding-top5">Junhao Wang</p>
          </div>
          <div class="text-center">
            <h5 class="padding-top20">Piano Teacher Group</h5>
            <p class="padding-top5">Isabel Keleti</p>
            <p class="padding-top5">Yudi Ouyang</p>
          </div>
          <div class="text-center">
            <h5 class="padding-top20">Senior Division 2 (Classical)</h5>
            <p class="padding-top5">Anjali Kambhampati</p>
            <p class="padding-top5">Celes Kramer</p>
            <p class="padding-top5">Vivian Hsiao</p>
            <p class="padding-top5">Ethan Hsian</p>
            <p class="padding-top5">Nathan Chen</p>
            <p class="padding-top5">Matthew Liu</p>
            <p class="padding-top5">Oslo Haggadone</p>
            <p class="padding-top5">Honnold Johnny</p>
          </div>
          <div class="text-center">
            <h5 class="padding-top20">Senior Division 1 (Classical)</h5>
            <p class="padding-top5">Moeckly Lane</p>
            <p class="padding-top5">Lewis Muehklberger</p>
            <p class="padding-top5">Fleming Kyle</p>
            <p class="padding-top5">Rong Max</p>
            <p class="padding-top5">Annie Tang</p>
          </div>
          <div class="text-center">
            <h5 class="padding-top20">Junior Division 2 (Classical)</h5>
            <p class="padding-top5">Cara Dominic</p>
            <p class="padding-top5">Joana Isabel Balino</p>
            <p class="padding-top5">Evan Kinder</p>
            <p class="padding-top5">Arrington Allen</p>
            <p class="padding-top5">Henley Moon</p>
          </div>
          <div class="text-center">
            <h5 class="padding-top20">Junior Division 1 (Classical)</h5>
            <p class="padding-top5">Sophie Yu</p>
            <p class="padding-top5">Merryn Rupp</p>
            <p class="padding-top5">Rachel Tyrer</p>
            <p class="padding-top5">Adriel Luna</p>
            <p class="padding-top5">Maria Kinder</p>
            <p class="padding-top5">Ethan Greenblatt</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Finalists"
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
