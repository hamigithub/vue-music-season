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
        <div class="col-xs-12">
          <router-link to="/application/applyForm#applyForm">
            <div class="btn btnBgm">{{$t('applyTitle.title3')}}</div>
          </router-link>
        </div>
      </div>
      <div class="row padding-top20">
        <div class="col-xs-12 col-md-4">
          <!--<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">-->
          <!--<input type="hidden" name="cmd" value="_xclick">-->
          <!--<input type="hidden" name="business" value="associazioneclaraschumann2018@gmail.com">-->
          <!--<input type="hidden" name="lc" value="US">-->
          <!--<input type="hidden" name="item_name" value="Festival and Competition Fees">-->
          <!--<input type="hidden" name="button_subtype" value="services">-->
          <!--<input type="hidden" name="no_note" value="0">-->
          <!--<input type="hidden" name="currency_code" value="EUR">-->
          <!--<input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynowCC_LG.gif:NonHostedGuest">-->
          <!--<table>-->
          <!--<tr>-->
          <!--<td><input type="hidden" name="on0" value="Fees">{{$t('applyFee.applicationFee')}}</td>-->
          <!--</tr>-->
          <!--<tr>-->
          <!--<td><select name="os0">-->
          <!--<option value="Festival Application">{{$t('applyFee.option1')}}</option>-->
          <!--<option value="Festival Deposit">{{$t('applyFee.option2')}}</option>-->
          <!--<option value="Competition final 1">{{$t('applyFee.option3')}}</option>-->
          <!--<option value="Competition final 2">{{$t('applyFee.option4')}}</option>-->
          <!--</select></td>-->
          <!--</tr>-->
          <!--</table>-->
          <!--<input type="hidden" name="option_select0" value="Festival Application">-->
          <!--<input type="hidden" name="option_amount0" value="150.00">-->
          <!--<input type="hidden" name="option_select1" value="Festival Deposit">-->
          <!--<input type="hidden" name="option_amount1" value="500.00">-->
          <!--<input type="hidden" name="option_select2" value="Competition final 1">-->
          <!--<input type="hidden" name="option_amount2" value="60.00">-->
          <!--<input type="hidden" name="option_select3" value="Competition final 2">-->
          <!--<input type="hidden" name="option_amount3" value="80.00">-->
          <!--<input type="hidden" name="option_index" value="0">-->
          <!--<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0"-->
          <!--name="submit" alt="PayPal - The safer, easier way to pay online!">-->
          <!--<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">-->
          <!--</form>-->
          <!-- <p class="padding-20">{{$t('applyFee.ps')}}</p> -->
        </div>
        <!-- <div class="col-xs-12 col-md-4">
          <p class="padding-20 textIndent">{{$t('applyFee.wcPay1')}}</p>
          <p class="textIndent">{{$t('applyFee.wcPay2')}}</p>
          <p class="padding-20 textIndent">{{$t('applyFee.wcPay3')}}</p>
        </div> -->
        <!-- <div class="col-xs-12 col-md-4 text-center">
          <img class="wcPay" src="../assets/img/wcPay.jpg" alt />
        </div> -->
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
</style>
