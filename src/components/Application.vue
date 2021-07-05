<template>
  <div id="application">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <div class="componentTitle committeeTitle">
            <div class="titleBtn">
              <span class="titleBtnInside">{{ $t("applyTitle.title") }}</span>
            </div>
            <div>
              <p class="title_p">{{ $t("appPublic.row2") }}</p>
            </div>
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
          </div>
        </div>
        <div class="col-xs-12 col-md-6 padding-top20">
          <div class="text-center">
            <router-link to="/application/applyForm#applyForm">
              <div class="btn btnBgm">{{ $t("applyTitle.title3") }}</div>
            </router-link>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-md-6 padding-top20">
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
                value="WBXT4Q5WXYDA8"
              />
              <table class="payTable">
                <tr>
                  <td>
                    <input
                      type="hidden"
                      name="on0"
                      value="Festival Fees"
                    />Festival Fees
                  </td>
                </tr>
                <tr>
                  <td>
                    <select class="sWidth" name="os0">
                      <option value="Application Fee: Young Musician Program">
                        Application Fee: Young Musician Program $40.00 USD
                      </option>
                      <option
                        value="Application Fee: Professional Pianist Program"
                      >
                        Application Fee: Professional Pianist Program $60.00 USD
                      </option>
                      <option
                        value="Application Fee: Pedagogy Conference Presenter"
                      >
                        Application Fee: Pedagogy Conference Presenter $80.00
                        USD
                      </option>
                      <option value="Young Musician Program">
                        Young Musician Program $399.00 USD
                      </option>
                      <option value="Professional Pianist Program">
                        Professional Pianist Program $899.00 USD
                      </option>
                      <option
                        value="Professional Pianist Program with Chamber Workshop"
                      >
                        Professional Pianist Program with Chamber Workshop
                        $1,199.00 USD
                      </option>
                      <option value="Piano Pedagogy Conference">
                        Piano Pedagogy Conference $199.00 USD
                      </option>
                      <option value="Festival Concert Pass">
                        Festival Concert Pass $69.00 USD
                      </option>
                      <option value="Single Masterclass/Workshop Observation">
                        Single Masterclass/Workshop Observation $39.00 USD
                      </option>
                      <option value="Chamber Workshop">
                        Chamber Workshop $300.00 USD
                      </option>
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
        </div>
        <div class="col-xs-12 col-md-6 padding-top20">
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
                value="DTN3N9KF8WNN6"
              />
              <table class="autoMargin">
                <tr>
                  <td>Custom payment</td>
                </tr>
                <tr>
                  <td>
                    <input
                      type="hidden"
                      name="on0"
                      value="Participant name:"
                    />Participant name:
                  </td>
                </tr>
                <tr>
                  <td><input type="text" name="os0" maxlength="200" /></td>
                </tr>
                <tr>
                  <td>
                    <input
                      type="hidden"
                      name="on1"
                      value="What the payment is for:"
                    />What the payment is for:
                  </td>
                </tr>
                <tr>
                  <td><input type="text" name="os1" maxlength="200" /></td>
                </tr>
              </table>
              <input
                type="image"
                src="https://www.paypalobjects.com/en_US/i/btn/btn_paynowCC_LG.gif"
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
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-md-6">
          <div class="text-center padding-top20"></div>
        </div>
        <div class="col-xs-12 col-md-6">
          <div class="text-center padding-top20"></div>
        </div>
      </div>
    </div>

    <!-- <div class="container">
      <div class="row padding-top50">
        <div class="col-xs-12">
          <h1>{{ $t("application.categories.title") }}</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12">
          <h3 class="padding-top15">
            {{ $t("application.categories.pianist") }}
          </h3>
          <p>{{ $t("application.categories.pianist2") }}</p>
          <p>{{ $t("application.categories.pianist3") }}</p>
          <p>{{ $t("application.categories.pianist4") }}</p>
          <p>{{ $t("application.categories.pianist5") }}</p>
          <p>{{ $t("application.categories.pianist6") }}</p>
          <p>{{ $t("application.categories.pianist7") }}</p>
          <p>{{ $t("application.categories.pianist8") }}</p>
        </div>
      </div>
      <div class="row padding-top15">
        <div class="col-xs-12">
          <h3 class="padding-top15">
            {{ $t("application.categories.scholars") }}
          </h3>
          <p>{{ $t("application.categories.scholars2") }}</p>
          <p>{{ $t("application.categories.scholars3") }}</p>
          <p>{{ $t("application.categories.scholars4") }}</p>
          <p>{{ $t("application.categories.scholars5") }}</p>
          <p>{{ $t("application.categories.scholars6") }}</p>
        </div>
      </div>
      <div class="row padding-top15">
        <div class="col-xs-12">
          <h3 class="padding-top15">
            {{ $t("application.categories.amateur") }}
          </h3>
          <p>{{ $t("application.categories.amateur2") }}</p>
          <p>{{ $t("application.categories.amateur3") }}</p>
          <p>{{ $t("application.categories.amateur4") }}</p>
          <p>{{ $t("application.categories.amateur5") }}</p>
        </div>
      </div>

      <div class="row padding-top15">
        <div class="col-xs-12">
          <h3 class="padding-top15">
            {{ $t("application.categories.observers") }}
          </h3>
          <p>{{ $t("application.categories.observers2") }}</p>
          <p>{{ $t("application.categories.observers3") }}</p>
          <p>{{ $t("application.categories.observers4") }}</p>
        </div>
      </div>
    </div> -->

    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <div class="padding-top20">
            <p>
              Interested participants must submit a performance video link in
              your application form, in order to be accepted into the festival.
              Application videos will also be used to determine Scholarship
              opportunities, master class/lectures/honor recital and closing
              recital performers.
            </p>
            <p class="text-center padding-top20">
              Questions? Contact us! <span class="font-blue"
                >support@coneromusicfestival.com</span
              >
            </p>
            <p class="padding-top20">In-person Location：</p>
            <p>Bell Culture Event Center</p>
            <p>2030 E College Way</p>
            <p>Olathe, KS 66062, United States</p>
          </div>
          <div class="padding-top20">
            <div class="tableWrap">
              <table class="fesTable" border="0">
                <tr>
                  <th></th>
                  <th>Application fee</th>
                  <th>Fees</th>
                </tr>
                <tr>
                  <td>Young Musician Program (In-person)</td>
                  <td>$40</td>
                  <td>$399</td>
                </tr>
                <tr>
                  <td>Professional Pianist Program (In-person)</td>
                  <td>$80</td>
                  <td>$899</td>
                </tr>
                <tr>
                  <td>Conero Piano Pedagogy Conference</td>
                  <td>$80 Presenters only</td>
                  <td>$199</td>
                </tr>
                <tr>
                  <td>Chamber Workshop</td>
                  <td>
                    $40 (If you are already applied previous program, the fee
                    will be waived)
                  </td>
                  <td>$300</td>
                </tr>
                <tr>
                  <td>Single Masterclass/ Workshop Observation</td>
                  <td>$0</td>
                  <td>$39</td>
                </tr>
                <tr>
                  <td>Concert Pass</td>
                  <td>$0</td>
                  <td>$69</td>
                </tr>
              </table>
            </div>
          </div>
          <div class="padding-top20">
            <p>
              * All in-person activities will be divided into small group
              sessions. All adult participants are required to provide vaccine
              card and sign the waiver. Please note that on-site Conero Festival
              housing and meals will not be available due to COVID restrictions.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <div class="text-center padding-top50">
            <h4>2021 Conero Winner Gala Concert</h4>
          </div>
          <div class="text-center imgWrap padding-top20">
            <img src="../assets/img/constitution_bg_2.png" alt="" />
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row padding-top50">
        <div class="col-xs-12">
          <h1 class="padding-top15">
            {{ $t("application.applyInstructions.title") }}
          </h1>
          <table>
            <tr>
              <td class="font-bold">
                {{ $t("application.applyInstructions.title1") }}
              </td>
            </tr>
            <tr>
              <td>{{ $t("application.applyInstructions.row1") }}</td>
            </tr>
            <tr>
              <td class="font-bold">
                {{ $t("application.applyInstructions.title2") }}
              </td>
            </tr>
            <tr>
              <td>{{ $t("application.applyInstructions.row2") }}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Application",
};
</script>

<style scoped>
.payTable {
  margin: 0 auto;
}

.sWidth {
  width: 300px;
}

.tableWrap {
  overflow: auto;
}

.fesTable {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}
.fesTable td,
.fesTable th {
  border: 1px solid #ddd;
  padding: 8px;
}

.fesTable th {
  padding-top: 12px;
  padding-bottom: 12px;
  background-color: #c4c4c4;
}

table {
  font-size: 14px;
}

.wcPay {
  width: 200px;
}

.autoMargin {
  margin: 0 auto;
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
  width: 70%;
}

.payImg img {
  width: 40%;
}
</style>
