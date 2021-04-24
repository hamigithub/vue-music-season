<template>
  <div id="finalists">
    <div class="container">
      <div class="row padding-top50 text-center">
        <div class="col-xs-12">
          <h2 class="font-red">Australia Division Finalist</h2>

          <div class="text-center padding-top20">
            <h3>6-8 Age Group</h3>
            <p class="padding-top5">Justin LI</p>
            <p class="padding-top5">Angelina Kexin LE</p>
            <p class="padding-top5">Mia GU</p>
            <p class="padding-top5">Johnny WANG</p>
            <p class="padding-top5">Evangeline WANG</p>
            <p class="padding-top5">Jenny WU</p>
            <p class="padding-top5">Ellie CHEN</p>
            <p class="padding-top5">Aaron SU</p>
            <p class="padding-top5">Wentao Zhang</p>
            <p class="padding-top5">Felix Zhang SUO</p>
          </div>
          <div class="text-center padding-top20">
            <h3>9-11 Age Group</h3>
            <p class="padding-top5">Louis SUN</p>
            <p class="padding-top5">Zhifei(Sara) CHEN</p>
            <p class="padding-top5">Gino YAO</p>
            <p class="padding-top5">Richard SU</p>
            <p class="padding-top5">Thea LUKITO</p>
            <p class="padding-top5">Gloria Chen XIE</p>
            <p class="padding-top5">Albert Chengmin YU</p>
            <p class="padding-top5">Hang Zhi LIU</p>
            <p class="padding-top5">Serenity LAO</p>
            <p class="padding-top5">Saville ZHANG</p>
          </div>
          <div class="text-center padding-top20">
            <h3>12-14 Age Group</h3>
            <p class="padding-top5">Michael Tian LIU</p>
            <p class="padding-top5">Sophia MAN</p>
            <p class="padding-top5">Yubing Polly LEE</p>
            <p class="padding-top5">Edwin LIU</p>
            <p class="padding-top5">George HUANG</p>
            <p class="padding-top5">Justin ZHAO</p>
          </div>
          <div class="text-center padding-top20">
            <h3>15-17 Age Group</h3>
            <p class="padding-top5">Yongfeng JIANG</p>
            <p class="padding-top5">Yu FANGFEI</p>
            <p class="padding-top5">Tianqing XU</p>
            <p class="padding-top5">Xiaohe (Mary) YU</p>
            <p class="padding-top5">Laura SUN</p>
            <p class="padding-top5">Racheal ZHOU</p>
          </div>
          <div class="text-center padding-top20">
            <h3>Adult Group</h3>
            <p class="padding-top5">1st Prize：Kevin CHEN</p>
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
