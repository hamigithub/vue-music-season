<template>
  <div id="divisionOnline">
    <div class="container">
      <div class="row padding-top50">
        <div class="col-xs-12">
          <div class="text-center">
            <h1>{{$t('divisionOnline.row1')}}</h1>
            <h1 class="padding-top20">{{$t('divisionOnline.row2')}}</h1>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row padding-top50">
        <div class="container">
          <div class="row padding-top50">
            <div class="col-xs-12">
              <table>
                <tr>
                  <td>First Round：</td>
                  <td>Video submission due by April 30th.</td>
                </tr>
                <tr>
                  <td>Final Round:</td>
                  <td>Video submission due by August 10th.</td>
                </tr>
                <tr>
                  <td></td>
                  <td>(Every finalist must submit their final round application. Registration should completed within 30 days of the preliminary round result)</td>
                </tr>
                <tr>
                  <td>Registration fee for final round:</td>
                  <td>Professional Groups/ Teachers’ Group: $100</td>
                </tr>
                <tr>
                  <td></td>
                  <td>All Amateur Groups: $80</td>
                </tr>
              </table>
            </div>
          </div>
          <div class="row padding-top20">
            <div class="col-xs-12 col-md-6 text-center padding-bottom20">
              <router-link to="/division/online/apply">
                <div class="btn btnBgm">{{$t('applyTitle.title4')}}</div>
              </router-link>
            </div>
            <div class="col-xs-12 col-md-6">
              <div class="text-center">
                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                  <input type="hidden" name="cmd" value="_s-xclick" />
                  <input type="hidden" name="hosted_button_id" value="RZH4HAC9T4BRN" />
                  <table class="payTable">
                    <tr>
                      <td>
                        <input type="hidden" name="on0" value="Group Type" />Group Type
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <select name="os0">
                          <option value="Professionals/Teachers">Professionals/Teachers $100.00 USD</option>
                          <option value="Amateurs">Amateurs $80.00 USD</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input type="hidden" name="on1" value="Participant name(s):" />Participant name(s):
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input type="text" name="os1" maxlength="200" />
                      </td>
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
                    alt
                    border="0"
                    src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
                    width="1"
                    height="1"
                  />
                </form>
              </div>
              <p class="padding-20">{{$t('applyFee.ps')}}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12 col-md-6 text-center padding-bottom20">
              <router-link to="/division/online/finalists">
                <div class="listsWrap font-italic text-center">Finalist</div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row padding-top50">
        <div class="col-xs-12">
          <h3>{{$t('divisionOnline.row3')}}</h3>
          <p>{{$t('divisionOnline.row4')}}</p>
          <p>{{$t('divisionOnline.row5')}}</p>
          <p>{{$t('divisionOnline.row6')}}</p>
        </div>

        <div class="col-xs-12">
          <h3 class="padding-top20">{{$t('divisionOnline.row7')}}</h3>
          <p>{{$t('divisionOnline.row8')}}</p>
          <p>{{$t('divisionOnline.row9')}}</p>
          <p>{{$t('divisionOnline.row10')}}</p>
        </div>

        <div class="col-xs-12">
          <h3 class="padding-top20">{{$t('divisionOnline.row11')}}</h3>
          <p>{{$t('divisionOnline.row12')}}</p>
          <p>{{$t('divisionOnline.row13')}}</p>
        </div>

        <div class="col-xs-12">
          <h3 class="padding-top20">{{$t('divisionOnline.row14')}}</h3>
          <p>{{$t('divisionOnline.row15')}}</p>
          <p>{{$t('divisionOnline.row16')}}</p>
        </div>

        <div class="col-xs-12">
          <h3 class="padding-top20">{{$t('divisionOnline.row17')}}</h3>
          <p>{{$t('divisionOnline.row18')}}</p>
        </div>

        <div class="col-xs-12">
          <h3 class="padding-top20">{{$t('divisionOnline.row19')}}</h3>
          <p>{{$t('divisionOnline.row20')}}</p>
        </div>

        <div class="col-xs-12">
          <h3 class="padding-top20">{{$t('divisionOnline.row21')}}</h3>
          <p>{{$t('divisionOnline.row22')}}</p>
          <p>{{$t('divisionOnline.row23')}}</p>
        </div>

        <div class="col-xs-12">
          <h3 class="padding-top20">{{$t('divisionOnline.row24')}}</h3>
          <p>{{$t('divisionOnline.row25')}}</p>
          <p>{{$t('divisionOnline.row26')}}</p>
        </div>

        <div class="col-xs-12">
          <h3 class="padding-top20">{{$t('divisionOnline.row27')}}</h3>
          <p>{{$t('divisionOnline.row28')}}</p>
          <p>{{$t('divisionOnline.row29')}}</p>
        </div>
      </div>
    </div>

    <!-- <div class="container">
      <div class="row padding-top50">
        <div class="col-xs-12">
          <h2>{{$t('divisionOnline.row30')}}</h2>
          <p class="padding-top20">{{$t('divisionOnline.row31')}}</p>
          <p>{{$t('divisionOnline.row32')}}</p>
          <p>{{$t('divisionOnline.row33')}}</p>
          <p>{{$t('divisionOnline.row34')}}</p>
          <p>{{$t('divisionOnline.row35')}}</p>
          <p>{{$t('divisionOnline.row36')}}</p>
          <p>{{$t('divisionOnline.row37')}}</p>
          <p>{{$t('divisionOnline.row38')}}</p>
          <p>{{$t('divisionOnline.row39')}}</p>
          <p>{{$t('divisionOnline.row40')}}</p>
          <p>{{$t('divisionOnline.row41')}}</p>
        </div>
      </div>
    </div>-->

    <div class="container">
      <div class="row padding-top50">
        <div class="col-xs-12">
          <h2>Competition Regulations</h2>
          <p
            class="padding-top20 font-red font-bold"
          >In order to express our love and care for the medical workers who fought against the epidemic of 2019-nCoV, their children who sigh up to participate in the preliminary will be exempt from the registration fee. Please contact us if you are eligible.</p>
          <p
            class="padding-top20"
          >1) Because of the corona virus, the 2020 competition will be held online through video recording submission</p>
          <p>2) All the pieces should be performed from memory.</p>
          <p>3) Changes would not be allowed once the repertoires are submitted.</p>
          <p>4) Piano concerto, own composition, or own transcriptions are not accepted.</p>
          <p>5) Repeats are not required except the place marked with D.C..</p>
          <p>6) Video recordings must be performed by applicants and may not be edited (the performance must be 'one take', no cuts), nor should any effects be added.（You will not be penalized for the recording quality of your video, although it is important that it is good enough for the jury to be able to see and hear you clearly.）</p>
          <p>7) Preliminary videos should be recorded no more than 12 months before the date of your submission. Final round videos should be recorded after 2020 June.</p>
          <p>8) Judges reserve the right of final decision.</p>
          <p>9) The organizing competition committee has the copyright of performance’s videos, audios and pictures of the competition and the award ceremony. The organizing competition committee has the legal right of using these materials.</p>
          <p>10) The organizing competition committee reserves all the right for the final interpretation.</p>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row padding-top50">
        <div class="col-xs-12">
          <h3>{{$t('divisionOnline.row42')}}</h3>
          <p class="padding-top20">{{$t('divisionOnline.row43')}}</p>
          <p>{{$t('divisionOnline.row44')}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DivisionOnline"
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

.listsWrap {
  background: rgb(255, 39, 39);
  width: 333px;
  margin: 0 auto;
  border-radius: 3px;
  padding: 15px;
  font-size: 30px;
  color: #ffed4f;
}

.payTable {
  margin: 0 auto;
}
</style>
