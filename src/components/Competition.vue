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
          <p class="font-bold">{{ $t("competition2021.titles.row1") }}</p>
          <p class="font-bold">{{ $t("competition2021.titles.row2") }}</p>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row padding-top50">
        <div class="col-xs-12">
          <h2 class="padding-bottom10 text-center">
            {{ $t("competition2021.guide.row1") }}
          </h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3 col-xs-12">
          <div>
            <table>
              <tr>
                <td>{{ $t("competition2021.guide.row2") }}</td>
                <td>{{ $t("competition2021.guide.row3") }}</td>
              </tr>
              <tr>
                <td>{{ $t("competition2021.guide.row4") }}</td>
                <td>{{ $t("competition2021.guide.row5") }}</td>
              </tr>
              <tr>
                <td></td>
                <td>{{ $t("competition2021.guide.row6") }}</td>
              </tr>
              <tr>
                <td>{{ $t("competition2021.guide.row7") }}</td>
                <td>{{ $t("competition2021.guide.row8") }}</td>
              </tr>
              <tr>
                <td></td>
                <td>{{ $t("competition2021.guide.row9") }}</td>
              </tr>
              <tr>
                <td></td>
                <td>{{ $t("competition2021.guide.row10") }}</td>
              </tr>
              <tr>
                <td>{{ $t("competition2021.guide.row11") }}</td>
                <td>{{ $t("competition2021.guide.row12") }}</td>
              </tr>
              <tr>
                <td></td>
                <td>{{ $t("competition2021.guide.row13") }}</td>
              </tr>
              <tr>
                <td></td>
                <td>{{ $t("competition2021.guide.row14") }}</td>
              </tr>
              <tr>
                <td></td>
                <td>{{ $t("competition2021.guide.row15") }}</td>
              </tr>
            </table>
          </div>
          <div class="padding-top50 text-center">
            <router-link to="/applyFinal">
              <div class="btn btnBgm">Final Round Application</div>
            </router-link>
          </div>
          <div class="padding-top20">
            <div>
              <div class="text-center">
                <form
                  action="https://www.paypal.com/cgi-bin/webscr"
                  method="post"
                  target="_top"
                >
                  <input type="hidden" name="cmd" value="_s-xclick" />
                  <input
                    type="hidden"
                    name="hosted_button_id"
                    value="M88EHHEDE2VTA"
                  />
                  <table class="payTable">
                    <tr>
                      <td>
                        <input
                          type="hidden"
                          name="on0"
                          value="Division"
                        />Division
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <select name="os0">
                          <option value="Professional Artist">
                            Professional Artist $100.00 USD
                          </option>
                          <option value="Chamber Music">
                            Chamber Music $100.00 USD
                          </option>
                          <option value="Piano Teacher">
                            Piano Teacher $100.00 USD
                          </option>
                          <option value="Amateur">Amateur $80.00 USD</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input
                          type="hidden"
                          name="on1"
                          value="Participant name(s):"
                        />Participant name(s):
                      </td>
                    </tr>
                    <tr>
                      <td><input type="text" name="os1" maxlength="200" /></td>
                    </tr>
                  </table>
                  <input type="hidden" name="currency_code" value="USD" />
                  <input
                    type="image"
                    src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif"
                    border="0"
                    name="submit"
                    alt="PayPal - The safer, easier way to pay online!"
                  />
                  <img
                    alt=""
                    border="0"
                    src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
                    width="1"
                    height="1"
                  />
                </form>
              </div>
              <p class="padding-20 text-center">{{ $t("applyFee.ps") }}</p>
            </div>
          </div>
        </div>
        <div class="col-md-8 col-xs-12">
          <div class="competitionImgWrap">
            <img
              src="../assets/img/competition_bg_1.jpg"
              alt="competition_bg"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="container padding-top50">
      <div class="row">
        <div class="col-xs-12">
          <h2 class="text-center padding-top20">
            {{ $t("competition2021.divisions.row1") }}
          </h2>
          <div class="text-center">
            <router-link :to="{ name: 'divisionUsa' }">
              <div class="pointer-hand division-all division1">
                {{ $t("competition2021.divisions.row2") }}
              </div>
            </router-link>
          </div>

          <div class="text-center">
            <router-link :to="{ name: 'divisionChina' }">
              <div class="pointer-hand division-all division1">
                {{ $t("competition2021.divisions.row3") }}
              </div>
            </router-link>
          </div>

          <div class="text-center">
            <router-link :to="{ name: 'divisionAustralia' }">
              <div class="pointer-hand division-all division1">
                {{ $t("competition2021.divisions.row4") }}
              </div>
            </router-link>
          </div>

          <div class="text-center">
            <router-link :to="{ name: 'divisionCanada' }">
              <div class="pointer-hand division-all division1">
                {{ $t("competition2021.divisions.row5") }}
              </div>
            </router-link>
          </div>

          <div class="text-center">
            <router-link :to="{ name: 'divisionOnline' }">
              <div class="pointer-hand division-all division1">
                {{ $t("competition2021.divisions.row6") }}
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
              {{ $t("competition2021.result") }}
            </div>
          </router-link>
        </div>
      </div>
    </div>

    <div class="container padding-top50">
      <div class="row">
        <div class="col-xs-12">
          <h2 class="text-center">{{ $t("competition2021.category.row1") }}</h2>
        </div>
      </div>
      <div class="row padding-top20">
        <div class="col-xs-12">
          <h2 class="text-center">{{ $t("competition2021.category.row2") }}</h2>
        </div>
      </div>
      <div class="row padding-top20">
        <div class="col-xs-12">
          <h3>{{ $t("competition2021.category.row3") }}</h3>
          <p>{{ $t("competition2021.category.row4") }}</p>
          <h3>{{ $t("competition2021.category.row5") }}</h3>
          <p>{{ $t("competition2021.category.row6") }}</p>
        </div>
      </div>
    </div>

    <div class="container padding-top50">
      <div class="row">
        <div class="col-xs-12">
          <h2 class="text-center">{{ $t("competition2021.category.row7") }}</h2>
        </div>
      </div>
      <div class="row padding-top20">
        <div class="col-xs-12">
          <h3>{{ $t("competition2021.category.row8") }}</h3>
          <p>{{ $t("competition2021.category.row9") }}</p>
          <h3>{{ $t("competition2021.category.row10") }}</h3>
          <p>{{ $t("competition2021.category.row11") }}</p>
          <h3>{{ $t("competition2021.category.row12") }}</h3>
          <p>{{ $t("competition2021.category.row13") }}</p>
          <h3>{{ $t("competition2021.category.row14") }}</h3>
          <p>{{ $t("competition2021.category.row15") }}</p>
        </div>
      </div>
    </div>

    <div class="container padding-top50">
      <div class="row">
        <div class="col-xs-12">
          <h2 class="text-center">
            {{ $t("competition2021.category.row16") }}
          </h2>
        </div>
      </div>
      <div class="row padding-top20">
        <div class="col-xs-6">
          <p class="font-bold">
            {{ $t("competition2021.category.row17") }}
          </p>
        </div>
      </div>
      <div class="row padding-top20">
        <div class="col-xs-6">
          <p class="font-bold">{{ $t("competition2021.category.row18") }}</p>
        </div>
        <div class="col-xs-6">
          <p class="font-bold">{{ $t("competition2021.category.row23") }}</p>
        </div>
      </div>
      <div class="row padding-top20">
        <div class="col-xs-6">
          <p>
            {{ $t("competition2021.category.row19") }}
          </p>
        </div>
        <div class="col-xs-6">
          <p>
            {{ $t("competition2021.category.row24") }}
          </p>
        </div>
      </div>
      <div class="row padding-top5">
        <div class="col-xs-6">
          <p>{{ $t("competition2021.category.row20") }}</p>
        </div>
      </div>
      <div class="row padding-top5">
        <div class="col-xs-6">
          <p>{{ $t("competition2021.category.row21") }}</p>
        </div>
      </div>
      <div class="row padding-top5">
        <div class="col-xs-6">
          <p>{{ $t("competition2021.category.row22") }}</p>
        </div>
      </div>
    </div>

    <div class="container padding-top50">
      <div class="row">
        <div class="col-xs-12">
          <h2 class="text-center">
            {{ $t("competition2021.category.row25") }}
          </h2>
        </div>
      </div>
      <div class="row padding-top20">
        <div class="col-xs-12">
          <h3>{{ $t("competition2021.category.row26") }}</h3>
          <p>{{ $t("competition2021.category.row27") }}</p>
          <h3>{{ $t("competition2021.category.row28") }}</h3>
          <p>{{ $t("competition2021.category.row29") }}</p>
          <h3>{{ $t("competition2021.category.row30") }}</h3>
          <p>{{ $t("competition2021.category.row31") }}</p>
          <p class="padding-top20">
            {{ $t("competition2021.category.row32") }}
          </p>
        </div>
      </div>
    </div>

    <div class="container padding-top50">
      <div class="row">
        <div class="col-xs-12">
          <h2 class="text-center">{{ $t("competition2021.awards.row1") }}</h2>
        </div>
      </div>
      <div class="row padding-top20">
        <div class="col-xs-12">
          <p class="font-bold">{{ $t("competition2021.awards.row1-1") }}</p>
          <p class="font-bold">{{ $t("competition2021.awards.row2") }}</p>
          <p>
            {{ $t("competition2021.awards.row3") }}
          </p>
          <p>
            {{ $t("competition2021.awards.row4") }}
          </p>
          <p>
            {{ $t("competition2021.awards.row5") }}
          </p>
          <p class="font-bold padding-top5">
            {{ $t("competition2021.awards.row6") }}
          </p>
          <p>
            {{ $t("competition2021.awards.row7") }}
          </p>
          <p>
            {{ $t("competition2021.awards.row8") }}
          </p>
          <p>
            {{ $t("competition2021.awards.row9") }}
          </p>
          <p class="font-bold padding-top5">
            {{ $t("competition2021.awards.row10") }}
          </p>
          <p>
            {{ $t("competition2021.awards.row11") }}
          </p>
          <p>
            {{ $t("competition2021.awards.row12") }}
          </p>
          <p>
            {{ $t("competition2021.awards.row13") }}
          </p>
          <p class="font-bold padding-top5">
            {{ $t("competition2021.awards.row14") }}
          </p>
          <p>
            {{ $t("competition2021.awards.row15") }}
          </p>
          <p>
            {{ $t("competition2021.awards.row16") }}
          </p>
          <p>
            {{ $t("competition2021.awards.row17") }}
          </p>
          <p class="font-bold padding-top5">
            {{ $t("competition2021.awards.row18") }}
          </p>
          <p>
            {{ $t("competition2021.awards.row19") }}
          </p>
          <h3 class="padding-top5">
            {{ $t("competition2021.awards.row20") }}
          </h3>
          <p class="text-center">
            {{ $t("competition2021.awards.row21") }}
          </p>
        </div>
      </div>
      <div class="row padding-top20">
        <div class="col-md-6 col-xs-12">
          <div class="imgWrap">
            <img
              class="feedbackImg"
              src="../assets/img/competition/feedback_1.jpg"
              alt="feedback"
            />
          </div>
        </div>
        <div class="col-md-6 col-xs-12">
          <div class="imgWrap">
            <img
              class="feedbackImg"
              src="../assets/img/competition/feedback_1.jpg"
              alt="feedback"
            />
          </div>
        </div>
      </div>
      <div class="row padding-top20">
        <div class="col-xs-12">
          <p class="font-bold">{{ $t("competition2021.awards.row22") }}</p>
          <p>{{ $t("competition2021.awards.row23") }}</p>
          <div class="text-center padding-top50">
            <div>
              <iframe
                src="https://www.youtube.com/embed/D3is2KXSvDs"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>

            <p class="text-center padding-top15 text-gray">
              {{ $t("competition2021.awards.row24") }}
            </p>
          </div>
        </div>
      </div>
      <div class="row padding-top20">
        <div class="col-xs-12">
          <p class="font-bold">
            {{ $t("competition2021.awards.row25") }}
          </p>
          <p>{{ $t("competition2021.awards.row26") }}</p>
          <p>{{ $t("competition2021.awards.row27") }}</p>
          <p>{{ $t("competition2021.awards.row28") }}</p>
        </div>
      </div>
      <div class="row padding-top20">
        <div class="col-xs-12">
          <p class="font-bold">{{ $t("competition2021.awards.row29") }}</p>
          <p>{{ $t("competition2021.awards.row30") }}</p>
        </div>
      </div>
      <div class="row padding-top20">
        <div class="col-xs-12">
          <p class="font-bold">{{ $t("competition2021.awards.row31") }}</p>
          <p>{{ $t("competition2021.awards.row32") }}</p>
        </div>
      </div>
      <div class="row padding-top20">
        <div class="col-xs-12">
          <p class="font-bold">{{ $t("competition2021.awards.row33") }}</p>
          <p>{{ $t("competition2021.awards.row34") }}</p>
        </div>
      </div>
    </div>

    <div class="container padding-top50">
      <div class="row">
        <div class="col-xs-12">
          <h2 class="text-center">
            {{ $t("competition2021.regulations.row1") }}
          </h2>
        </div>
      </div>
      <div class="row padding-top20">
        <div class="col-xs-12">
          <p>{{ $t("competition2021.regulations.row2") }}</p>
          <p>{{ $t("competition2021.regulations.row3") }}</p>
          <p>{{ $t("competition2021.regulations.row4") }}</p>
          <p>{{ $t("competition2021.regulations.row5") }}</p>
          <p>{{ $t("competition2021.regulations.row6") }}</p>
          <p>{{ $t("competition2021.regulations.row7") }}</p>
          <p>{{ $t("competition2021.regulations.row8") }}</p>
          <p>{{ $t("competition2021.regulations.row9") }}</p>
          <p>{{ $t("competition2021.regulations.row10") }}</p>
          <p>{{ $t("competition2021.regulations.row11") }}</p>
          <p>{{ $t("competition2021.regulations.row12") }}</p>
          <p>{{ $t("competition2021.regulations.row13") }}</p>
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

.payTable {
  margin: 0 auto;
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

.imgWrap {
  text-align: center;
}

.competitionImgWrap {
  text-align: center;
}

.competitionImgWrap img {
  width: 60%;
}

.feedbackImg {
  width: 80%;
}

@media (max-width: 992px) {
  .imgWrap img {
    width: 80%;
  }

  .competitionImgWrap img {
    width: 90%;
  }

  .competitionImgWrap {
    padding: 20px 0;
  }
}
</style>
