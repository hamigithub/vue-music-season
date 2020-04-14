<template>
  <div id="application">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <div class="componentTitle committeeTitle">
            <div class="titleBtn">
              <span class="titleBtnInside">{{$t('applyTitle.title')}}</span>
            </div>
            <div>
              <p class="title_p">{{$t('appPublic.row2')}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row padding-bottom100">
        <div class="col-xs-12">
          <div class="btn btnBgm">{{$t('applyTitle.title2')}}</div>
        </div>

        <div class="col-xs-6 col-md-3 padding-top50">
          <div class="text-center">
            <router-link :to="{name:'divisionUsa'}">
              <div class="pointer-hand division-all division1">{{$t('division.row1')}}</div>
            </router-link>
          </div>
        </div>
        <div class="col-xs-6 col-md-3 padding-top50">
          <div class="text-center">
            <router-link :to="{name:'divisionChina'}">
              <div class="pointer-hand division-all division2">{{$t('division.row2')}}</div>
            </router-link>
          </div>
        </div>
        <div class="col-xs-6 col-md-3 padding-top50">
          <div class="text-center">
            <router-link :to="{name:'divisionAustralia'}">
              <div class="pointer-hand division-all division3">{{$t('division.row3')}}</div>
            </router-link>
          </div>
        </div>
        <div class="col-xs-6 col-md-3 padding-top50">
          <div class="text-center">
            <router-link :to="{name:'divisionOnline'}">
              <div class="pointer-hand division-all division4">{{$t('division.row4')}}</div>
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row padding-top50">
        <div class="col-xs-12 col-md-6">
          <router-link to="/application/applyForm#applyForm">
            <div class="btn btnBgm">{{$t('applyTitle.title3')}}</div>
          </router-link>
        </div>
        <div class="col-xs-12 col-md-6">
          <div class="imgWrap text-center padding-top20">
            <img src="../assets/img/posterEnd.jpg" alt />
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row padding-top50">
        <div class="col-xs-12 padding-top15">
          <h1 class="padding-top15">{{$t('applyInstructions.title')}}</h1>
          <table>
            <tr>
              <td class="font-bold">{{$t('applyInstructions.title1')}}</td>
            </tr>
            <tr>
              <td>{{$t('applyInstructions.row1')}}</td>
            </tr>
            <tr>
              <td class="font-bold">{{$t('applyInstructions.title2')}}</td>
            </tr>
            <tr>
              <td>{{$t('applyInstructions.row2')}}</td>
            </tr>
            <tr>
              <td class="font-bold">{{$t('applyInstructions.title3')}}</td>
            </tr>
            <tr>
              <td>{{$t('applyInstructions.row3')}}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Application"
};
</script>

<style scoped>
.wcPay {
  width: 200px;
}

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

.passActivity {
  float: right;
  border-bottom: 1px solid #ccc;
}

.division-all {
  padding: 10px;
  color: #fff;
  border: 1px solid #cccccc;
  border-radius: 10px;
}

.division-all:hover {
  background: #e6d242;
  color: #000000;
  box-shadow: 1px 1px 1px #757575;
}

.division1 {
  background: #c2254c;
}

.division2 {
  background: #c2254c;
}

.division3 {
  background: #c2254c;
}

.division4 {
  background: #c2254c;
}

.imgWrap img {
  width: 80%;
}
</style>
