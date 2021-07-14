<template>
  <div id="finalists">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <div class="padding-top20 text-center">
            <h2>
              2021 Conero International Piano Competition Canada Division
              Preliminary Round Result
            </h2>
            <div>
              <img src="../../../assets/img/logo3.png" alt="" />
            </div>
            <p>
              Note: For the finalists, only the first place has been ranked. The
              other students are in alphabetical order. The deadline for the
              Final Round application is on
              <span class="font-bold">July 20th</span> .
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row padding-top50">
        <div class="col-xs-12">
          <h3 class="text-center">Young Artists Division</h3>
          <h3 class="text-center padding-top15 font-blue">
            6-8 years old Finalists
          </h3>
          <div class="text-center">
            <p class="padding-top5">Travis Genpeng Li-1st Place</p>
            <p class="padding-top5">Baishen (Jayden) Chen</p>
            <p class="padding-top5">Derek Chen</p>
            <p class="padding-top5">Xiaochen (Shawn) Chen</p>
            <p class="padding-top5">Justin Jiang</p>
            <p class="padding-top5">Charlotte Deng</p>
            <p class="padding-top5">Lanna Lan</p>
            <p class="padding-top5">Anthony Li</p>
            <p class="padding-top5">Elaine Li</p>
            <p class="padding-top5">Lainey Liang</p>
            <p class="padding-top5">Grace Shi</p>
            <p class="padding-top5">Cici Wu</p>
          </div>
        </div>
      </div>

      <div class="row padding-top20">
        <div class="col-xs-12">
          <h3 class="text-center font-blue">9-11 years old Finalists</h3>
          <div class="text-center">
            <p class="padding-top5">Nina Chen-1st Place</p>
            <p class="padding-top5">Clyde Li</p>
            <p class="padding-top5">Zikai Li</p>
            <p class="padding-top5">Hannah Wang</p>
            <p class="padding-top5">Amice Xu</p>
            <p class="padding-top5">Yihao Zhang</p>
            <p class="padding-top5">Yuxi Evelyn Zhang</p>
          </div>
        </div>
      </div>

      <div class="row padding-top20">
        <div class="col-xs-12">
          <h3 class="text-center font-blue">12-14 years old Finalists</h3>
          <div class="text-center">
            <p class="padding-top5">Kiana Zhu- 1st Place</p>
            <p class="padding-top5">Wesley Deng</p>
            <p class="padding-top5">Adam Giorgis</p>
            <p class="padding-top5">Lukas Kan</p>
            <p class="padding-top5">Ethan Liu</p>
            <p class="padding-top5">Jessica Zhuang</p>
          </div>
        </div>
      </div>

      <div class="row padding-top20">
        <div class="col-xs-12">
          <h3 class="text-center font-blue">15-17 years old finalists</h3>
          <div class="text-center">
            <p class="padding-top5">Siyuan (Caroline) Ge-1st Place</p>
            <p class="padding-top5">Naomi Giorgis</p>
            <p class="padding-top5">YuTong Wang</p>
          </div>
        </div>
      </div>

      <div class="row padding-top20">
        <div class="col-xs-12">
          <h3 class="text-center padding-top20">
            Professional Young Artists Division Finalists
          </h3>
          <div class="text-center">
            <p class="padding-top5">Gabriel Wu- 1st Place</p>
            <p class="padding-top5">Wangqing (Anita) Hao</p>
            <p class="padding-top5">Michelle Han</p>
            <p class="padding-top5">Xihang (Jerry) Tian</p>
          </div>
        </div>
      </div>

      <div class="row padding-top20">
        <div class="col-xs-12">
          <h3 class="text-center">Amateur Adult Division Finalist</h3>
          <div class="text-center">
            <p class="padding-top5">Michelle Qian</p>
          </div>
        </div>
      </div>

      <div class="row padding-top20">
        <div class="col-xs-12">
          <h3 class="text-center">Professional Adult Division Finalist</h3>
          <div class="text-center">
            <p class="padding-top5">Nikki Wei- 1st Place</p>
          </div>
        </div>
      </div>

      <div class="row padding-top20">
        <div class="col-xs-12">
          <h3 class="text-center">Chamber Music Division Finalist</h3>
          <div class="text-center">
            <p class="padding-top5">Yvonne & Elaine Li</p>
            <p class="padding-top5">Amice and Maryanne Xu</p>
          </div>
        </div>
      </div>

      <div class="row padding-top50">
        <div class="col-xs-12">
          <h3 class="text-center">
            Congratulations to all the finalists’ teachers!
          </h3>
          <div class="text-center">
            <p class="padding-top5">
              Chee Hwa Chang, Yang Cheng, Chee Hwa Chiang, Olga Chichova, Enrico
              Elisi, Rosy Ge, Krzysztof Jablonski, Wolfram Linnebach, Louise
              Luo, Linh Nguyen, David Tutt, Emma Ruixuan Shi, Qiao Wang, Fafan
              Xiao
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "chinaFinalists",
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
