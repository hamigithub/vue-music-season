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

    <div class="container">
      <div class="row">
        <div class="col-xs-12 padding-top50">
          <div class="padding-bottom10 text-center">
            <h2>{{ $t("competition2020text4.row1") }}</h2>
          </div>

          <table>
            <tr>
              <td class="font-bold">{{ $t("competition2020text4.row2") }}</td>
            </tr>
            <tr>
              <td>{{ $t("competition2020text4.row3") }}</td>
            </tr>
          </table>

          <table class="padding-top15">
            <tr>
              <td class="font-bold">{{ $t("competition2020text4.row4") }}</td>
            </tr>
            <tr>
              <td>{{ $t("competition2020text4.row5") }}</td>
            </tr>
          </table>

          <table class="padding-top15">
            <tr>
              <td class="font-bold">{{ $t("competition2020text4.row6") }}</td>
            </tr>
            <tr>
              <td class="font-bold">{{ $t("competition2020text4.row7") }}</td>
            </tr>
            <tr>
              <td class="font-bold">{{ $t("competition2020text4.row8") }}</td>
              <td class="font-bold">{{ $t("competition2020text4.row13") }}</td>
            </tr>
            <tr>
              <td>{{ $t("competition2020text4.row9") }}</td>
              <td>{{ $t("competition2020text4.row14") }}</td>
            </tr>
            <tr>
              <td>{{ $t("competition2020text4.row10") }}</td>
            </tr>
            <tr>
              <td>{{ $t("competition2020text4.row11") }}</td>
            </tr>
            <tr>
              <td>{{ $t("competition2020text4.row12") }}</td>
            </tr>
          </table>

          <table class="padding-top15">
            <tr>
              <td class="font-bold">{{ $t("competition2020text4.row15") }}</td>
            </tr>
            <tr>
              <td>{{ $t("competition2020text4.row16") }}</td>
            </tr>
          </table>

          <table class="padding-top15">
            <tr>
              <td class="font-bold">{{ $t("competition2020text4.row17") }}</td>
            </tr>
            <tr>
              <td>{{ $t("competition2020text4.row18") }}</td>
            </tr>
          </table>

          <table class="padding-top15">
            <tr>
              <td class="font-bold">{{ $t("competition2020text4.row19") }}</td>
            </tr>
            <tr>
              <td>{{ $t("competition2020text4.row20") }}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row padding-top50">
        <div class="col-xs-12 padding-top50">
          <h2 class="padding-bottom10">
            {{ $t("competition2020text5.row1") }}
          </h2>
          <table>
            <tr>
              <td class="font-bold">{{ $t("competition2020text5.row2") }}</td>
            </tr>
            <tr>
              <td class="font-bold">{{ $t("competition2020text5.row3") }}</td>
            </tr>
            <tr>
              <td>{{ $t("competition2020text5.row4") }}</td>
            </tr>
            <tr>
              <td>{{ $t("competition2020text5.row5") }}</td>
            </tr>
            <tr>
              <td>{{ $t("competition2020text5.row6") }}</td>
            </tr>
          </table>

          <table class="padding-top15">
            <tr>
              <td class="font-bold">{{ $t("competition2020text5.row7") }}</td>
            </tr>
            <tr>
              <td>{{ $t("competition2020text5.row8") }}</td>
            </tr>
            <tr>
              <td>{{ $t("competition2020text5.row9") }}</td>
            </tr>
            <tr>
              <td>{{ $t("competition2020text5.row10") }}</td>
            </tr>
          </table>

          <table class="padding-top15">
            <tr>
              <td class="font-bold">{{ $t("competition2020text5.row11") }}</td>
            </tr>
            <tr>
              <td>{{ $t("competition2020text5.row12") }}</td>
            </tr>
            <tr>
              <td>{{ $t("competition2020text5.row13") }}</td>
            </tr>
            <tr>
              <td>{{ $t("competition2020text5.row14") }}</td>
            </tr>
          </table>

          <table class="padding-top15">
            <tr>
              <td class="font-bold">{{ $t("competition2020text5.row15") }}</td>
            </tr>
            <tr>
              <td>{{ $t("competition2020text5.row16") }}</td>
            </tr>
          </table>

          <table class="padding-top15">
            <tr>
              <td class="font-bold">{{ $t("competition2020text5.row17") }}</td>
            </tr>
            <tr>
              <td>{{ $t("competition2020text5.row18") }}</td>
            </tr>
          </table>

          <table class="padding-top15">
            <tr>
              <td class="font-bold">{{ $t("competition2020text5.row19") }}</td>
            </tr>
            <tr>
              <td>{{ $t("competition2020text5.row20") }}</td>
            </tr>
          </table>

          <table class="padding-top15">
            <tr>
              <td class="font-bold">
                <h3>{{ $t("competition2020text5.row20-2") }}</h3>
              </td>
            </tr>
          </table>

          <table class="padding-top15">
            <tr>
              <td class="font-bold">{{ $t("competition2020text5.row21") }}</td>
            </tr>
            <tr>
              <td>{{ $t("competition2020text5.row22") }}</td>
            </tr>
          </table>

          <table class="padding-top15">
            <tr>
              <td class="font-bold">{{ $t("competition2020text5.row23") }}</td>
            </tr>
            <tr>
              <td>{{ $t("competition2020text5.row24") }}</td>
            </tr>
            <tr>
              <td>{{ $t("competition2020text5.row25") }}</td>
            </tr>
            <tr>
              <td>{{ $t("competition2020text5.row26") }}</td>
            </tr>
          </table>

          <table class="padding-top15">
            <tr>
              <td class="font-bold">{{ $t("competition2020text5.row27") }}</td>
            </tr>
            <tr>
              <td>{{ $t("competition2020text5.row28") }}</td>
            </tr>
            <tr>
              <td>{{ $t("competition2020text5.row29") }}</td>
            </tr>
          </table>

          <table class="padding-top15">
            <tr>
              <td class="font-bold">{{ $t("competition2020text5.row30") }}</td>
            </tr>
            <tr>
              <td>{{ $t("competition2020text5.row31") }}</td>
            </tr>
          </table>

          <table class="padding-top15">
            <tr>
              <td class="font-bold">{{ $t("competition2020text5.row32") }}</td>
            </tr>
            <tr>
              <td>{{ $t("competition2020text5.row33") }}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row padding-top50">
        <div class="col-xs-12 padding-top50">
          <h2 class="padding-bottom10">
            {{ $t("competition2020text5.row34") }}
          </h2>
          <table>
            <tr>
              <td>{{ $t("competition2020text5.row35") }}</td>
            </tr>
            <tr>
              <td>{{ $t("competition2020text5.row36") }}</td>
            </tr>
            <tr>
              <td>{{ $t("competition2020text5.row37") }}</td>
            </tr>
            <tr>
              <td>{{ $t("competition2020text5.row38") }}</td>
            </tr>
            <tr>
              <td>{{ $t("competition2020text5.row39") }}</td>
            </tr>
            <tr>
              <td>{{ $t("competition2020text5.row40") }}</td>
            </tr>
            <tr>
              <td>{{ $t("competition2020text5.row41") }}</td>
            </tr>
            <tr>
              <td>{{ $t("competition2020text5.row42") }}</td>
            </tr>
            <tr>
              <td>{{ $t("competition2020text5.row43") }}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <div class="passActivity padding-top50">
            <h3>Past Activity:</h3>
            <router-link to="/competition/2019">
              <span class="font-bold padding-top20 padding-bottom10">2019</span>
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
