<template>
  <div id="application">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <div class="componentTitle committeeTitle">
            <div class="titleBtn"><span class="titleBtnInside">{{$t('applyTitle.title')}}</span></div>
            <div><p class="title_p">{{$t('appPublic.row2')}}</p></div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
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
          <p class="padding-20">{{$t('applyFee.ps')}}</p>
        </div>
        <div class="col-xs-12 col-md-4">
          <p class="padding-20 textIndent">{{$t('applyFee.wcPay1')}}</p>
          <p class="textIndent">{{$t('applyFee.wcPay2')}}</p>
          <p class="padding-20 textIndent">{{$t('applyFee.wcPay3')}}</p>
        </div>
        <div class="col-xs-12 col-md-4 text-center">
          <img class="wcPay" src="../assets/img/wcPay.jpg" alt="">
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
            <!--<tr>-->
            <!--<td class="font-bold">{{$t('applyInstructions.title4')}}</td>-->
            <!--</tr>-->
            <!--<tr>-->
            <!--<td>{{$t('applyInstructions.row4')}}</td>-->
            <!--</tr>-->
            <tr>
              <td class="font-bold">{{$t('applyInstructions.title5')}}</td>
            </tr>
            <tr>
              <td>{{$t('applyInstructions.row5')}}</td>
            </tr>
            <tr>
              <td>{{$t('applyInstructions.row6')}}</td>
            </tr>
            <tr>
              <td>{{$t('applyInstructions.row7')}}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row padding-top50">
        <div class="col-xs-12 padding-top15">
          <h1>{{$t('applyTitle.title2')}}</h1>
          <p>{{$t('applyTitle.title2-2')}}</p>
          <table>
            <h2 class="padding-top15">{{$t('applyText1.title')}}</h2>
            <tr>
              <td>{{$t('applyText1.row1')}}</td>
            </tr>
            <tr>
              <td>{{$t('applyText1.row2')}}</td>
            </tr>
            <tr>
              <td>{{$t('applyText1.row3')}}</td>
            </tr>
            <tr>
              <td>{{$t('applyText1.row4')}}</td>
            </tr>
            <tr>
              <td>{{$t('applyText1.row5')}}</td>
            </tr>
            <tr>
              <td>{{$t('applyText1.row6')}}</td>
            </tr>
            <tr>
              <td>{{$t('applyText1.row7')}}</td>
            </tr>
            <!--<tr>-->
            <!--<td>{{$t('applyText1.row8')}}</td>-->
            <!--</tr>-->
            <tr>
              <td>{{$t('applyText1.row9')}}</td>
            </tr>
          </table>
        </div>

        <div class="col-xs-12 padding-top15">
          <table>
            <h2 class="padding-top15">{{$t('applyText2.title')}}</h2>
            <tr>
              <td>{{$t('applyText2.row1')}}</td>
            </tr>
            <tr>
              <td>{{$t('applyText2.row2')}}</td>
            </tr>
            <tr>
              <td>{{$t('applyText2.row3')}}</td>
            </tr>
            <tr>
              <td>{{$t('applyText2.row4')}}</td>
            </tr>
            <tr>
              <td>{{$t('applyText2.row5')}}</td>
            </tr>
            <tr>
              <td>{{$t('applyText2.row6')}}</td>
            </tr>
            <!--<tr>-->
            <!--<td>{{$t('applyText2.row7')}}</td>-->
            <!--</tr>-->
            <tr>
              <td>{{$t('applyText2.row8')}}</td>
            </tr>
          </table>
        </div>

        <div class="col-xs-12 padding-top15">
          <table>
            <h2 class="padding-top15">{{$t('applyText3.title')}}</h2>
            <tr>
              <td>{{$t('applyText3.row1')}}</td>
            </tr>
            <tr>
              <td>{{$t('applyText3.row2')}}</td>
            </tr>
            <tr>
              <td>{{$t('applyText3.row3')}}</td>
            </tr>
            <tr>
              <td>{{$t('applyText3.row4')}}</td>
            </tr>
            <tr>
              <td>{{$t('applyText3.row5')}}</td>
            </tr>
            <tr>
              <td>{{$t('applyText3.row6')}}</td>
            </tr>
            <!--<tr>-->
            <!--<td>{{$t('applyText3.row7')}}</td>-->
            <!--</tr>-->
            <tr>
              <td>{{$t('applyText3.row8')}}</td>
            </tr>
          </table>
        </div>

        <div class="col-xs-12 padding-top15">
          <table>
            <h2 class="padding-top15">{{$t('applyText4.title')}}</h2>
            <tr>
              <td>{{$t('applyText4.row1')}}</td>
            </tr>
            <tr>
              <td>{{$t('applyText4.row2')}}</td>
            </tr>
            <tr>
              <td>{{$t('applyText4.row3')}}</td>
            </tr>
            <!--<tr>-->
            <!--<td>{{$t('applyText4.row4')}}</td>-->
            <!--</tr>-->
            <tr>
              <td>{{$t('applyText4.row5')}}</td>
            </tr>
          </table>
        </div>

        <div class="col-xs-12 padding-top15">
          <table>
            <h2 class="padding-top15">{{$t('applyText5.title')}}</h2>
            <tr>
              <td>{{$t('applyText5.row1')}}</td>
            </tr>
            <tr>
              <td>{{$t('applyText5.row2')}}</td>
            </tr>
            <tr>
              <td>{{$t('applyText5.row3')}}</td>
            </tr>
            <tr>
              <td>{{$t('applyText5.row4')}}</td>
            </tr>
            <tr>
              <td>{{$t('applyText5.row5')}}</td>
            </tr>
            <tr>
              <td>{{$t('applyText5.row6')}}</td>
            </tr>
          </table>
        </div>

        <div class="col-xs-12 padding-top15">
          <h1 class="padding-top15">{{$t('applyText6.title')}}</h1>
        </div>

        <div class="col-xs-12 padding-top15">
          <table>
            <h2 class="padding-top15">{{$t('applyText6.title1')}}</h2>
            <tr>
              <td>{{$t('applyText6.row1-2')}}</td>
            </tr>
          </table>
        </div>

        <div class="col-xs-12 padding-top15">
          <table>
            <h3 class="padding-top15">{{$t('applyText6.title2')}}</h3>
            <tr>
              <td>{{$t('applyText6.row2-2')}}</td>
            </tr>
            <tr>
              <td>{{$t('applyText6.row2-3')}}</td>
            </tr>
          </table>
        </div>

        <div class="col-xs-12 padding-top15">
          <table>
            <h3 class="padding-top15">{{$t('applyText6.title3')}}</h3>
            <tr>
              <td>{{$t('applyText6.row3-1')}}</td>
            </tr>
          </table>
        </div>

        <div class="col-xs-12 padding-top15">
          <table>
            <h3 class="padding-top15">{{$t('applyText6.title4')}}</h3>
            <tr>
              <td>{{$t('applyText6.row4-1')}}</td>
            </tr>
            <tr>
              <td>{{$t('applyText6.row4-2')}}</td>
            </tr>
            <tr>
              <td>{{$t('applyText6.row4-3')}}</td>
            </tr>
            <tr>
              <td>{{$t('applyText6.row4-4')}}</td>
            </tr>
            <tr>
              <td>{{$t('applyText6.row4-5')}}</td>
            </tr>
          </table>
        </div>

        <div class="col-xs-12 padding-top15">
          <table>
            <h3 class="padding-top15">{{$t('applyText6.title5')}}</h3>
            <tr>
              <td>{{$t('applyText6.row5-1')}}</td>
            </tr>
            <tr>
              <td>{{$t('applyText6.row5-2')}}</td>
            </tr>
            <tr>
              <td>{{$t('applyText6.row5-3')}}</td>
            </tr>
          </table>
        </div>

        <div class="col-xs-12 padding-top15">
          <table>
            <h3 class="padding-top15">{{$t('applyText6.title6')}}</h3>
            <tr>
              <td>{{$t('applyText6.row6-1')}}</td>
            </tr>
            <tr>
              <td>{{$t('applyText6.row6-2')}}</td>
            </tr>
            <tr>
              <td>{{$t('applyText6.row6-3')}}</td>
            </tr>
            <tr>
              <td>{{$t('applyText6.row6-4')}}</td>
            </tr>
          </table>
        </div>

        <div class="col-xs-12 padding-top15">
          <table>
            <h2 class="padding-top15">{{$t('applyText6.title7')}}</h2>
            <tr>
              <td>{{$t('applyText6.row7-1')}}</td>
            </tr>
            <tr>
              <td>{{$t('applyText6.row7-2')}}</td>
            </tr>
            <tr>
              <td>{{$t('applyText6.row7-3')}}</td>
            </tr>
            <tr>
              <td>{{$t('applyText6.row7-4')}}</td>
            </tr>
            <tr>
              <td>{{$t('applyText6.row7-5')}}</td>
            </tr>
            <tr>
              <td>{{$t('applyText6.row7-6')}}</td>
            </tr>
            <tr>
              <td>{{$t('applyText6.row7-7')}}</td>
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
  }
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
</style>
