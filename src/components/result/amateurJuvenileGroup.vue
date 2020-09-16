<template>
  <div id="amateurJuvenileGroup">
    <div class="container">
      <div class="row padding-top50">
        <div class="col-xs-12">
          <div class="text-center">
            <h1>Amateur Juvenile Group</h1>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row padding-top50">
        <div class="col-xs-12">
          <div class="text-center">
            <p class="padding-top5">Gold Award:</p>
            <p class="padding-top5">Annie Tang(US) tie with</p>
            <p class="padding-top5">Weetiwat Siriwattanakorn (Thailand)</p>
            <p class="padding-top5">Silver Award:</p>
            <p class="padding-top5">Shuangjia Ye (China)</p>
            <p class="padding-top5">Bronze Award:</p>
            <p class="padding-top5">Ling Bai (China)</p>
          </div>
        </div>
        <div class="col-xs-12 padding-top50">
          <div class="text-center">
            <h4 class="padding-top20">Most Distinguished Performance Award</h4>
            <p class="padding-top5">Daniel Stang</p>
            <p class="padding-top5">Harry Wang</p>
            <p class="padding-top5">Jiayi Xiao</p>
            <p class="padding-top5">Megan Cao</p>
            <p class="padding-top5">Pinn Mahasaranond</p>
            <p class="padding-top5">Sun Yining</p>
          </div>
        </div>
        <div class="col-xs-12 padding-top50">
          <div class="text-center">
            <h4 class="padding-top20">Distinguished Performance Award</h4>
            <p class="padding-top5">Charles Huang</p>
            <p class="padding-top5">Ethan Hsiao</p>
            <p class="padding-top5">Ethan Liu</p>
            <p class="padding-top5">Lewis McLaughlin Muehlberger</p>
            <p class="padding-top5">Wanying Xie</p>
            <p class="padding-top5">Xuheng Chen</p>
            <p class="padding-top5">Yuwei Lin</p>
            <p class="padding-top5">Yuejia Luo</p>
            <p class="padding-top5">Yukun He</p>
            <p class="padding-top5">Yangyoujia Yu</p>
            <p class="padding-top5">Yuxuan Ji</p>
          </div>
        </div>
        <div class="col-xs-12 padding-top50">
          <div class="text-center">
            <h4 class="padding-top20">Excellent Performance Award</h4>
            <p class="padding-top5">Anjali Kambhampati</p>
            <p class="padding-top5">Celes Kramer</p>
            <p class="padding-top5">Jiayi Liu</p>
            <p class="padding-top5">Johnny Honnold</p>
            <p class="padding-top5">Lane Moeckly</p>
            <p class="padding-top5">Liqian Zhou</p>
            <p class="padding-top5">Nathan Chen</p>
            <p class="padding-top5">Oslo Haggadone</p>
            <p class="padding-top5">Vivian Hsiao</p>
            <p class="padding-top5">Yinqi Wang</p>
            <p class="padding-top5">Yiqiu Cao</p>
            <p class="padding-top5">Zhuoyuan Teng</p>
            <p class="padding-top5">Zhenyu Zhou</p>
          </div>
        </div>
        <div class="col-xs-12 padding-top50">
          <div class="text-center">
            <h4 class="padding-top20">Special prizes:</h4>
            <p class="padding-top5">Dance Macabre Prize – Shuangjia Ye (China)</p>
            <p class="padding-top5">Debussy Reverie Prize– Daniel Stang (German)</p>
            <p class="padding-top5">Debussy Children's Corner Prize - Liqian Zhou (China)</p>
            <p class="padding-top5">Ginastera’s Danzas Argentinas Prize– Ethan Liu (Canada)</p>
            <p class="padding-top5">Kuhlau Sonatina Prize– Yukun He (China)</p>
            <p class="padding-top5">Kapustin Etude Prize– Weetiwat Siriwattanakorn (Thailand)</p>
            <p class="padding-top5">Khachaturian Sonatina Prize – Ethan Hsiao (US)</p>
            <p
              class="padding-top5"
            >Liszt Annees de Pelerinage Prize- Lewis McLaughlin Muehlberger (US)</p>
            <p class="padding-top5">Ravel Prize -Annie Tang (US)</p>
            <p class="padding-top5">Saint-Sean Prize- Megan Cao (US)</p>
            <p class="padding-top5">Schumann “Abegg” Prize- Yining Sun ( Singapore)</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AmateurJuvenileGroup",
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
