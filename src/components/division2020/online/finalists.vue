<template>
  <div id="finalists">
    <div class="container">
      <div class="row padding-top50 text-center">
        <div class="col-xs-12">
          <h3 class="font-red">Full scholarship lists</h3>
          <h3 class="font-red">for participating the 2020 Conero International Piano Festival</h3>
          <div class="text-center">
            <p class="padding-top5">Wenting Yu</p>
            <p class="padding-top5">Aristotelis Papadimitriou</p>
            <p class="padding-top5">Roberto Di Napoli</p>
            <p class="padding-top5">Onodera Takuma</p>
            <p class="padding-top5">Jacky Zhang</p>
          </div>
        </div>

        <div class="col-xs-12 padding-top50">
          <h3 class="font-red">Finalists for 2020 Conero International Piano Competition</h3>
          <div class="text-center">
            <h4 class="padding-top20">Piano Teachers’ Group</h4>
            <p class="padding-top5">Jingci Liu</p>
            <p class="padding-top5">Aristotelis Papadimitriou</p>
            <p class="padding-top5">Wenting Yu</p>
          </div>
          <div class="text-center">
            <h4 class="padding-top20">Professional Adult Group</h4>
            <p class="padding-top5">Jeanne Hourez</p>
            <p class="padding-top5">Jingci Liu</p>
            <p class="padding-top5">Mutong Mai</p>
            <p class="padding-top5">Roberto Di Napoli</p>
            <p class="padding-top5">Giusy Ines Tuttolomondo</p>
            <p class="padding-top5">Wenting Yu</p>
            <p class="padding-top5">Sixuan Zhang</p>
          </div>

          <div class="text-center">
            <h4 class="padding-top20">Professional Young Artist Group 1&2</h4>
            <p class="padding-top5">Pinn Mahasaranond</p>
            <p class="padding-top5">Angelina Natal</p>
            <p class="padding-top5">Matteo Perlin</p>
            <p class="padding-top5">Weetiwat Siriwattanakorn</p>
            <p class="padding-top5">Onodera Takuma</p>
            <p class="padding-top5">Jacky Zhang</p>
          </div>

          <div class="text-center">
            <h4 class="padding-top20">Youth Class 1&2</h4>
            <p class="padding-top5">Ethan Liu</p>
            <p class="padding-top5">Pinn Mahasaranond</p>
            <p class="padding-top5">Weetiwat Siriwattanakorn</p>
            <p class="padding-top5">Daniel Stang</p>
            <p class="padding-top5">Yining Sun</p>
          </div>

          <div class="text-center">
            <h4 class="padding-top20">Children Group 1&2</h4>
            <p class="padding-top5">Somboonvechakarn Chanya Bayla</p>
            <p class="padding-top5">Arianna Castellani</p>
            <p class="padding-top5">Davin Ghazavi</p>
            <p class="padding-top5">Arianna Salvalaggio</p>
            <p class="padding-top5">Eli Sun</p>
            <p class="padding-top5">Yikai Sun</p>
            <p class="padding-top5">Sterling Tran</p>
            <p class="padding-top5">Ng Sapphire Yuka</p>
            <p class="padding-top5">Alexandra Natal</p>
          </div>

          <div class="text-center">
            <h5
              class="padding-top20"
            >Please be aware that the final round group is different, please double check the rules in the competition main page before you sign up the final round.</h5>
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
