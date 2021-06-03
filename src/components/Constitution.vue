<template>
  <div id="constitution">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <div class="componentTitle committeeTitle">
            <div>
              {{ $t("constitutionTitle.title") }}
              <div class="titleBtn">
                <span class="titleBtnInside">{{ $t("appPublic.row1") }}</span>
              </div>
            </div>
            <div>
              <p class="title_p">{{ $t("appPublic.row2") }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <div class="text-center">
            <h3>{{ $t("constitution2021.content.row1") }}</h3>
            <p>{{ $t("constitution2021.content.row2") }}</p>
            <p class="font-bold">
              {{ $t("constitution2021.content.row3") }}
            </p>
          </div>
          <div class="text-center imgWrap2 padding-top20">
            <img src="../assets/img/constitution_bg_1.png" alt="" />
          </div>
          <div class="padding-top20">
            <p>
              {{ $t("constitution2021.content.row4") }}
            </p>
            <p class="padding-top20">
              {{ $t("constitution2021.content.row5") }}
            </p>
            <h5 class="text-center padding-top20">
              {{ $t("constitution2021.content.row6") }}
              <span class="font-blue">support@coneromusicfestival.com</span>
            </h5>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row padding-top50">
        <div class="col-xs-12 col-md-6 text-center">
          <router-link to="/application/applyForm">
            <div class="btn btnBgm">Apply Here --></div>
          </router-link>
        </div>
        <div class="col-xs-12 col-md-6">
          <div id="festivalPay" class="text-center">
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
          <p class="padding-20 text-center">{{ $t("applyFee.ps") }}</p>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row padding-top50 font12">
        <div class="col-xs-12">
          <div class="text-center">
            <h3>
              <span>{{ $t("constitution2021.group1.row1") }}</span>
            </h3>
            <p>{{ $t("constitution2021.group1.row2") }}</p>
            <p>{{ $t("constitution2021.group1.row3") }}</p>
          </div>
          <div class="padding-top20">
            <p>
              {{ $t("constitution2021.group1.row4") }}
            </p>
            <p class="padding-top5">
              {{ $t("constitution2021.group1.row5") }}
            </p>
            <p class="padding-top5">
              {{ $t("constitution2021.group1.row6") }}
            </p>
            <p class="padding-top5">
              {{ $t("constitution2021.group1.row7") }}
            </p>
            <p class="padding-top5">
              {{ $t("constitution2021.group1.row8") }}
            </p>
            <p class="padding-top5">
              {{ $t("constitution2021.group1.row9") }}
            </p>
          </div>

          <div class="padding-top20">
            <h5 class="text-center padding-bottom20">
              {{ $t("constitution2021.form1.title1") }}
            </h5>
            <div class="tableWrap text-center">
              <table class="gridtable">
                <tr>
                  <th>Time</th>
                  <th>August 4th</th>
                  <th>5th</th>
                  <th>6th</th>
                  <th>7th & 8th</th>
                  <th>9th</th>
                  <th>10th</th>
                </tr>
                <tr>
                  <td>9:00-9:15</td>
                  <td>{{ $t("constitution2021.form1.row1") }}</td>
                  <td>{{ $t("constitution2021.form1.row1") }}</td>
                  <td>{{ $t("constitution2021.form1.row1") }}</td>
                  <td></td>
                  <td>{{ $t("constitution2021.form1.row1") }}</td>
                  <td>{{ $t("constitution2021.form1.row1") }}</td>
                </tr>
                <tr>
                  <td>9:15-10:00</td>
                  <td>{{ $t("constitution2021.form1.row2") }}</td>
                  <td>{{ $t("constitution2021.form1.row2") }}</td>
                  <td>{{ $t("constitution2021.form1.row2") }}</td>
                  <td></td>
                  <td>{{ $t("constitution2021.form1.row2") }}</td>
                  <td>{{ $t("constitution2021.form1.row2") }}</td>
                </tr>
                <tr>
                  <td>10:10-10:50</td>
                  <td>{{ $t("constitution2021.form1.row3") }}</td>
                  <td>{{ $t("constitution2021.form1.row3") }}</td>
                  <td>{{ $t("constitution2021.form1.row3") }}</td>
                  <td></td>
                  <td>{{ $t("constitution2021.form1.row3") }}</td>
                  <td>{{ $t("constitution2021.form1.row3") }}</td>
                </tr>
                <tr>
                  <td>10:50-11:10</td>
                  <td>{{ $t("constitution2021.form1.row4") }}</td>
                  <td>{{ $t("constitution2021.form1.row4") }}</td>
                  <td>{{ $t("constitution2021.form1.row4") }}</td>
                  <td></td>
                  <td>{{ $t("constitution2021.form1.row4") }}</td>
                  <td>{{ $t("constitution2021.form1.row4") }}</td>
                </tr>
                <tr>
                  <td>11:10-11:55</td>
                  <td>{{ $t("constitution2021.form1.row5") }}</td>
                  <td>{{ $t("constitution2021.form1.row6") }}</td>
                  <td>{{ $t("constitution2021.form1.row5") }}</td>
                  <td></td>
                  <td>{{ $t("constitution2021.form1.row6") }}</td>
                  <td>{{ $t("constitution2021.form1.row7") }}</td>
                </tr>
                <tr>
                  <td>Noon</td>
                  <td>Pick up</td>
                  <td>Pick up</td>
                  <td>Pick up</td>
                  <td></td>
                  <td>Pick up</td>
                  <td>Pick up</td>
                </tr>
                <tr>
                  <td>3:30-5:00pm</td>
                  <td>{{ $t("constitution2021.form1.row8") }}</td>
                  <td>{{ $t("constitution2021.form1.row8") }}</td>
                  <td>{{ $t("constitution2021.form1.row8") }}</td>
                  <td></td>
                  <td>{{ $t("constitution2021.form1.row8") }}</td>
                  <td>{{ $t("constitution2021.form1.row8") }}</td>
                </tr>
                <tr>
                  <td>7:30pm</td>
                  <td>{{ $t("constitution2021.form1.row9") }}</td>
                  <td>{{ $t("constitution2021.form1.row10") }}</td>
                  <td>{{ $t("constitution2021.form1.row11") }}</td>
                  <td>{{ $t("constitution2021.form1.row12") }}</td>
                  <td>{{ $t("constitution2021.form1.row13") }}</td>
                  <td>{{ $t("constitution2021.form1.row14") }}</td>
                </tr>
              </table>
            </div>
          </div>
          <div class="padding-top20">
            <p>
              {{ $t("constitution2021.form1.row15") }}
            </p>
            <p class="padding-top5">
              {{ $t("constitution2021.form1.row16") }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row padding-top50 font12">
        <div class="col-xs-12">
          <div class="text-center">
            <h3>
              <span>{{ $t("constitution2021.group2.row1") }}</span>
            </h3>
          </div>
          <div class="padding-top20">
            <p>
              {{ $t("constitution2021.group2.row3") }}
            </p>
            <p class="padding-top5">
              {{ $t("constitution2021.group2.row4") }}
            </p>
            <p class="padding-top5">
              {{ $t("constitution2021.group2.row5") }}
            </p>
            <p class="padding-top5">
              {{ $t("constitution2021.group2.row6") }}
            </p>
            <p class="padding-top5">
              {{ $t("constitution2021.group2.row7") }}
            </p>
            <p class="padding-top5">
              {{ $t("constitution2021.group2.row8") }}
            </p>
          </div>
          <div class="padding-top20">
            <p>
              {{ $t("constitution2021.group2.row9") }}
            </p>
            <p class="padding-top5">
              {{ $t("constitution2021.group2.row10") }}
            </p>
          </div>
          <div class="padding-top20">
            <h5 class="text-center padding-bottom20">
              {{ $t("constitution2021.form2.title1") }}
            </h5>
            <div class="tableWrap text-center">
              <table class="gridtable">
                <tr>
                  <th>Time</th>
                  <th>August 4th</th>
                  <th>5th</th>
                  <th>6th</th>
                  <th>7th</th>
                  <th>8th</th>
                  <th>9th</th>
                  <th>10th</th>
                </tr>
                <tr>
                  <td>9:00-9:15</td>
                  <td>{{ $t("constitution2021.form2.row1") }}</td>
                  <td>{{ $t("constitution2021.form2.row1") }}</td>
                  <td>{{ $t("constitution2021.form2.row1") }}</td>
                  <td></td>
                  <td></td>
                  <td>{{ $t("constitution2021.form2.row1") }}</td>
                  <td>{{ $t("constitution2021.form2.row1") }}</td>
                </tr>
                <tr>
                  <td>9:15-10:00</td>
                  <td>{{ $t("constitution2021.form2.row2") }}1</td>
                  <td>{{ $t("constitution2021.form2.row2") }}2</td>
                  <td>{{ $t("constitution2021.form2.row2") }}3</td>
                  <td></td>
                  <td></td>
                  <td>{{ $t("constitution2021.form2.row2") }}4</td>
                  <td>{{ $t("constitution2021.form2.row2") }}5</td>
                </tr>
                <tr>
                  <td>10:10-11:00</td>
                  <td>{{ $t("constitution2021.form2.row3") }}</td>
                  <td>{{ $t("constitution2021.form2.row3") }}</td>
                  <td>{{ $t("constitution2021.form2.row3") }}</td>
                  <td></td>
                  <td></td>
                  <td>{{ $t("constitution2021.form2.row3") }}</td>
                  <td>{{ $t("constitution2021.form2.row3") }}</td>
                </tr>
                <tr>
                  <td>11:00-11:10</td>
                  <td>{{ $t("constitution2021.form2.row4") }}</td>
                  <td>{{ $t("constitution2021.form2.row4") }}</td>
                  <td>{{ $t("constitution2021.form2.row4") }}</td>
                  <td></td>
                  <td></td>
                  <td>{{ $t("constitution2021.form2.row4") }}</td>
                  <td>{{ $t("constitution2021.form2.row4") }}</td>
                </tr>
                <tr>
                  <td>11:10-12:00</td>
                  <td>{{ $t("constitution2021.form2.row5") }}</td>
                  <td>{{ $t("constitution2021.form2.row6") }}</td>
                  <td>{{ $t("constitution2021.form2.row5") }}</td>
                  <td></td>
                  <td></td>
                  <td>{{ $t("constitution2021.form2.row6") }}</td>
                  <td>{{ $t("constitution2021.form2.row7") }}</td>
                </tr>
                <tr>
                  <td>Noon</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>2:30-3:15</td>
                  <td></td>
                  <td>{{ $t("constitution2021.form2.row8") }}</td>
                  <td>{{ $t("constitution2021.form2.row8") }}</td>
                  <td></td>
                  <td></td>
                  <td>{{ $t("constitution2021.form2.row8") }}</td>
                  <td>{{ $t("constitution2021.form2.row8") }}</td>
                </tr>
                <tr>
                  <td>3:30-5:00</td>
                  <td>{{ $t("constitution2021.form2.row9") }}</td>
                  <td>{{ $t("constitution2021.form2.row9") }}</td>
                  <td>{{ $t("constitution2021.form2.row9") }}</td>
                  <td>{{ $t("constitution2021.form2.row10") }}</td>
                  <td></td>
                  <td>{{ $t("constitution2021.form2.row9") }}</td>
                  <td>{{ $t("constitution2021.form2.row9") }}</td>
                </tr>
                <tr>
                  <td>5:00pm</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>{{ $t("constitution2021.form2.row11") }}</td>
                </tr>
                <tr>
                  <td>7:30pm</td>
                  <td>{{ $t("constitution2021.form2.row12") }}</td>
                  <td>{{ $t("constitution2021.form2.row13") }}</td>
                  <td>{{ $t("constitution2021.form2.row14") }}</td>
                  <td>{{ $t("constitution2021.form2.row15") }}</td>
                  <td></td>
                  <td>{{ $t("constitution2021.form2.row16") }}</td>
                  <td>{{ $t("constitution2021.form2.row17") }}</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row padding-top50 font12">
        <div class="col-xs-12">
          <div class="text-center">
            <h3>
              <span>{{ $t("constitution2021.group3.row1") }}</span>
            </h3>
            <p>{{ $t("constitution2021.group3.row2") }}</p>
            <p>{{ $t("constitution2021.group3.row3") }}</p>
          </div>
          <div class="padding-top20">
            <p>
              {{ $t("constitution2021.group3.row4") }}
            </p>
            <p class="padding-top5">
              {{ $t("constitution2021.group3.row5") }}
            </p>
            <p class="padding-top5">
              {{ $t("constitution2021.group3.row6") }}
            </p>
            <p class="padding-top5">
              {{ $t("constitution2021.group3.row7") }}
            </p>
            <p class="padding-top5">
              {{ $t("constitution2021.group3.row8") }}
            </p>
            <p class="padding-top5">
              {{ $t("constitution2021.group3.row9") }}
            </p>
            <p class="padding-top5">
              {{ $t("constitution2021.group3.row10") }}
            </p>
          </div>
          <div class="padding-top20">
            <p>
              {{ $t("constitution2021.group3.row11") }}
            </p>
            <p class="padding-top5">
              {{ $t("constitution2021.group3.row12") }}
            </p>
            <p class="padding-top5">
              {{ $t("constitution2021.group3.row13") }}
            </p>
            <p class="padding-top5">
              {{ $t("constitution2021.group3.row14") }}
              <span class="font-blue">support@coneromusicfestival.com</span>
            </p>
          </div>
          <div class="padding-top20">
            <div class="text-center">
              <table class="gridtable">
                <tr>
                  <th>{{ $t("constitution2021.form3.row1") }}</th>
                  <th>{{ $t("constitution2021.form3.row2") }}</th>
                  <th>{{ $t("constitution2021.form3.row3") }}</th>
                </tr>
                <tr>
                  <td>{{ $t("constitution2021.form3.row4") }}</td>
                  <td>$40</td>
                  <td>$399</td>
                </tr>
                <tr>
                  <td>{{ $t("constitution2021.form3.row5") }}</td>
                  <td>$80</td>
                  <td>$899</td>
                </tr>
                <tr>
                  <td>{{ $t("constitution2021.form3.row6") }}</td>
                  <td>{{ $t("constitution2021.form3.row7") }}</td>
                  <td>{{ $t("constitution2021.form3.row8") }}</td>
                </tr>
                <tr>
                  <td>{{ $t("constitution2021.form3.row9") }}</td>
                  <td>{{ $t("constitution2021.form3.row10") }}</td>
                  <td>$300</td>
                </tr>
                <tr>
                  <td>{{ $t("constitution2021.form3.row11") }}</td>
                  <td>$0</td>
                  <td>$39</td>
                </tr>
                <tr>
                  <td>{{ $t("constitution2021.form3.row12") }}</td>
                  <td>$0</td>
                  <td>$69</td>
                </tr>
              </table>
            </div>
          </div>
          <div class="padding-top20">
            <p>* {{ $t("constitution2021.form3.row13") }}</p>
            <p class="padding-top5">
              {{ $t("constitution2021.form3.row14") }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <div class="passActivity padding-top50">
            <h3>Past Activity:</h3>
            <router-link to="/constitution/2019">
              <span class="font-bold padding-top20 padding-bottom10">2019</span>
            </router-link>
            <router-link to="/constitution/2020">
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
  name: "Constitution",
};
</script>

<style scoped>
.titleBtn {
  background-image: linear-gradient(90deg, #00a0b6, #4cb602);
}

table {
  font-size: 12px;
}

.textWrap {
  padding: 20px;
  border: #2c3e50 solid 1px;
  border-radius: 10px;
}

.concertsWrap {
  padding: 20px;
  border: transparent solid 1px;
  border-radius: 10px;
}

.concertsWrap:hover {
  border: #cccccc solid 1px;
  box-shadow: 1px 1px 5px #cccccc;
}

.concerts {
  background: linear-gradient(45deg, #ff0036, #ff9c00);
  color: #fff;
}

.passActivity {
  float: right;
  border-bottom: 1px solid #ccc;
}

.judgeImg {
  width: 250px;
  border-radius: 5%;
}

.judgeImg-2 {
  width: 300px;
  border-radius: 5%;
}

.flexBox {
  display: -webkit-flex; /* Safari */
  display: flex;
  flex-wrap: wrap;
}

.box-child-1 {
  display: inline-block;
  width: 33%;
}

.box-child-2 {
  display: inline-block;
  width: 48%;
}

.imgWrap {
  margin: 20px 0;
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

.imgWrap img {
  width: 70%;
}

.bg-wrap img {
  width: 100%;
}

.listsWrap {
  background: rgb(255, 39, 39);
  width: 320px;
  margin: 0 auto;
  border-radius: 3px;
  padding: 15px;
  font-size: 30px;
  color: #ffed4f;
}

.payTable {
  margin: 0 auto;
}

.sWidth {
  width: 300px;
}

.tableWrap {
  overflow: auto;
}

table.gridtable {
  margin: 0 auto;
  font-family: verdana, arial, sans-serif;
  font-size: 10px;
  color: #333333;
  border-width: 1px;
  border-color: #666666;
  border-collapse: collapse;
}
table.gridtable th {
  border-width: 1px;
  padding: 4px;
  border-style: solid;
  border-color: #666666;
  background-color: #dedede;
}
table.gridtable td {
  border-width: 1px;
  padding: 4px;
  border-style: solid;
  border-color: #666666;
  background-color: #ffffff;
}

@media (max-width: 992px) {
  .box-child-1 {
    width: 100%;
  }

  .box-child-2 {
    width: 100%;
  }

  .judgeImg-2 {
    width: 250px;
  }

  .imgWrap2 img {
    width: 90%;
  }

  p {
    font-size: 12px;
  }
}
</style>
