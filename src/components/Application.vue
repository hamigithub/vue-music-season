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
          <div class="imgWrap text-center padding-top20">
            <div class="payImg padding-bottom20">
              <img src="../assets/img/chinaPay.jpg" alt />
            </div>
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
            <p class="padding-20">{{$t('applyFee.ps')}}</p>
          </div>
        </div>
        <div class="col-xs-12 col-md-6 padding-top20">
          <router-link to="/application/applyForm#applyForm">
            <div class="btn btnBgm">{{$t('applyTitle.title3')}}</div>
          </router-link>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row padding-top50">
        <div class="col-xs-12">
          <h1>{{$t('application.tuition.title')}}</h1>
          <table class="text-center margin-top20" border="1">
            <tr>
              <td>{{$t('application.tuition.row1')}}</td>
              <td>{{$t('application.tuition.row1-2')}}</td>
              <td rowspan="3">
                {{$t('application.tuition.row1-3')}}
                <br />
                {{$t('application.tuition.row1-4')}}
              </td>
            </tr>

            <tr>
              <td>{{$t('application.tuition.row2')}}</td>
              <td>{{$t('application.tuition.row2-2')}}</td>
            </tr>

            <tr>
              <td>{{$t('application.tuition.row3')}}</td>
              <td>{{$t('application.tuition.row3-2')}}</td>
            </tr>

            <tr>
              <td>{{$t('application.tuition.row4')}}</td>
              <td>
                {{$t('application.tuition.row4-2')}}
                <br />
                {{$t('application.tuition.row4-3')}}
              </td>
              <td>
                {{$t('application.tuition.row4-4')}}
                <br />
                {{$t('application.tuition.row4-5')}}
              </td>
            </tr>
          </table>
          <h5 class="padding-top15">{{$t('application.tuition.row5')}}</h5>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row padding-top50">
        <div class="col-xs-12">
          <h1>{{$t('application.categories.title')}}</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12">
          <h3 class="padding-top15">{{$t('application.categories.pianist')}}</h3>
          <p>{{$t('application.categories.pianist2')}}</p>
          <p>{{$t('application.categories.pianist3')}}</p>
          <p>{{$t('application.categories.pianist4')}}</p>
          <p>{{$t('application.categories.pianist5')}}</p>
          <p>{{$t('application.categories.pianist6')}}</p>
          <p>{{$t('application.categories.pianist7')}}</p>
          <p>{{$t('application.categories.pianist8')}}</p>
        </div>
      </div>
      <div class="row padding-top15">
        <div class="col-xs-12">
          <h3 class="padding-top15">{{$t('application.categories.scholars')}}</h3>
          <p>{{$t('application.categories.scholars2')}}</p>
          <p>{{$t('application.categories.scholars3')}}</p>
          <p>{{$t('application.categories.scholars4')}}</p>
          <p>{{$t('application.categories.scholars5')}}</p>
          <p>{{$t('application.categories.scholars6')}}</p>
        </div>
      </div>
      <div class="row padding-top15">
        <div class="col-xs-12">
          <h3 class="padding-top15">{{$t('application.categories.amateur')}}</h3>
          <p>{{$t('application.categories.amateur2')}}</p>
          <p>{{$t('application.categories.amateur3')}}</p>
          <p>{{$t('application.categories.amateur4')}}</p>
          <p>{{$t('application.categories.amateur5')}}</p>
        </div>
      </div>

      <div class="row padding-top15">
        <div class="col-xs-12">
          <h3 class="padding-top15">{{$t('application.categories.observers')}}</h3>
          <p>{{$t('application.categories.observers2')}}</p>
          <p>{{$t('application.categories.observers3')}}</p>
          <p>{{$t('application.categories.observers4')}}</p>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row padding-top50">
        <div class="col-xs-12">
          <h1 class="padding-top15">{{$t('application.applyInstructions.title')}}</h1>
          <table>
            <tr>
              <td class="font-bold">{{$t('application.applyInstructions.title1')}}</td>
            </tr>
            <tr>
              <td>{{$t('application.applyInstructions.row1')}}</td>
            </tr>
            <tr>
              <td class="font-bold">{{$t('application.applyInstructions.title2')}}</td>
            </tr>
            <tr>
              <td>{{$t('application.applyInstructions.row2')}}</td>
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
table {
  font-size: 14px;
}

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

.payImg img {
  width: 60%;
}
</style>
