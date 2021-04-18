<template>
  <div id="competition">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <div class="componentTitle text-center">
            <div class="titleBtn">
              <span class="titleBtnInside font-bold">{{
                $t("competitionTitle.title2")
              }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <p class="font-bold">{{ $t("competition2020text1.row1") }}</p>
          <p class="font-bold">{{ $t("competition2020text1.row2") }}</p>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row padding-top50">
        <div class="col-xs-12">
          <h2 class="padding-bottom10 text-center">
            {{ $t("competition2020text2.row1") }}
          </h2>
          <table>
            <tr>
              <td>Preliminary Round:</td>
              <td>Please check the rules and deadlines in your division.</td>
            </tr>
            <tr>
              <td>Final Round:</td>
              <td>August 2nd -3rd</td>
            </tr>
            <tr>
              <td></td>
              <td>
                · Every finalist must play the final round in a live
                performance, if you are not from the listed country, please sign
                up “ The Other Countries” Division.”
              </td>
            </tr>
            <tr>
              <td>Registration fee:</td>
              <td>
                Preliminary round – Please check the fee in your division link.
              </td>
            </tr>
            <tr>
              <td></td>
              <td>Final round- Professional Groups/ Teachers’ Group: $100</td>
            </tr>
            <tr>
              <td></td>
              <td>All Amateur Groups: $80</td>
            </tr>
            <tr>
              <td>Location:</td>
              <td>United States- Kansas City</td>
            </tr>
            <tr>
              <td></td>
              <td>China- Hai Nan</td>
            </tr>
            <tr>
              <td></td>
              <td>Australia- Melbourne</td>
            </tr>
            <tr>
              <td></td>
              <td>Canada- Toronto</td>
            </tr>
          </table>
        </div>
      </div>
    </div>

    <div class="container padding-top50">
      <div class="row">
        <div class="col-xs-12">
          <h2 class="text-center padding-top20">
            2021 Preliminary Round Rules
          </h2>
          <div class="text-center">
            <router-link :to="{ name: 'divisionUsa' }">
              <div class="pointer-hand division-all division1">
                {{ $t("division.row1") }}
              </div>
            </router-link>
          </div>

          <div class="text-center">
            <router-link :to="{ name: 'divisionChina' }">
              <div class="pointer-hand division-all division1">
                {{ $t("division.row2") }}
              </div>
            </router-link>
          </div>

          <div class="text-center">
            <router-link :to="{ name: 'divisionAustralia' }">
              <div class="pointer-hand division-all division1">
                {{ $t("division.row3") }}
              </div>
            </router-link>
          </div>

          <div class="text-center">
            <router-link :to="{ name: 'divisionCanada' }">
              <div class="pointer-hand division-all division1">
                {{ $t("division.row4") }}
              </div>
            </router-link>
          </div>

          <div class="text-center">
            <router-link :to="{ name: 'divisionOnline' }">
              <div class="pointer-hand division-all division1">
                {{ $t("division.row5") }}
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <div class="container padding-top20">
      <div class="row">
        <div class="col-xs-12">
          <router-link :to="{ name: 'resultGuide' }">
            <div class="text-center pointer-hand division-all division1">
              2020 Competition Result
            </div>
          </router-link>
        </div>
      </div>
    </div>

    <!-- <div class="container padding-top50">
      <div class="row">
        <div class="col-xs-12">
          <h2 class="text-center">Final Round Category</h2>
        </div>
      </div>
      <div class="row padding-top20">
        <div class="col-xs-12">
          <h3 class="text-center">· Professional Artist Division</h3>
        </div>
      </div>
    </div> -->

    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <div class="passActivity padding-top50">
            <h3>Past Activity:</h3>
            <router-link to="/competition/2019">
              <span class="font-bold padding-top20 padding-bottom10">2019</span>
            </router-link>
            <router-link to="/competition/2020">
              <span class="font-bold padding-top20 padding-bottom10">2020</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "competition",
};
</script>

<style scoped>
.titleBtn {
  background-image: linear-gradient(90deg, #b6a314, #b61d92);
}

.btn {
  display: inline-block;
  padding: 20px;
  font-size: 24px;
  color: #fff;
  border-radius: 3px;
}

.btnBgm {
  background: linear-gradient(45deg, #ff0036, #ff9c00);
  font-style: italic;
  /*background-size: 1400% 300%;*/
  /*animation: mymove 4.5s ease infinite;*/
  /*-webkit-animation: mymove 4.5s ease infinite;*/
  /*-moz-animation: mymove 4.5s ease infinite;*/
}

.btnBgm:hover {
  opacity: 8;
  color: #fff;
}

/*@keyframes mymove {*/
/*0% {*/
/*background-position: 0% 25%;*/
/*}*/
/*25% {*/
/*background-position: 25% 50%;*/
/*}*/
/*50% {*/
/*background-position: 50% 75%;*/
/*}*/
/*75% {*/
/*background-position: 75% 100%;*/
/*}*/
/*100% {*/
/*background-position: 100% 0%;*/
/*}*/
/*}*/

.passActivity {
  float: right;
  border-bottom: 1px solid #ccc;
}

.division-all {
  margin: 40px 40px;
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

.imgWrap img {
  width: 80%;
}

@media (max-width: 992px) {
  .imgWrap img {
    width: 80%;
  }
}
</style>
