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
          <div class="row">
            <div class="col-xs-12 col-md-6 text-center padding-bottom20">
              <router-link to="/division/online/apply">
                <div class="btn btnBgm">{{$t('applyTitle.title2')}}</div>
              </router-link>
            </div>
            <div class="col-xs-12 col-md-6">
              <div class="text-center">
                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                  <input type="hidden" name="cmd" value="_s-xclick" />
                  <input type="hidden" name="hosted_button_id" value="CL448JFGF8SKJ" />
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

    <div class="container">
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
</style>
