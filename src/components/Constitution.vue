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
                value="CL448JFGF8SKJ"
              />
              <table class="payTable">
                <tr>
                  <td>
                    <input
                      type="hidden"
                      name="on0"
                      value="Divisions"
                    />Divisions
                  </td>
                </tr>
                <tr>
                  <td>
                    <select name="os0">
                      <option value="Professional">
                        Professional $35.00 USD
                      </option>
                      <option value="Chamber Music">
                        Chamber Music $35.00 USD
                      </option>
                      <option value="Piano Teachers">
                        Piano Teachers $35.00 USD
                      </option>
                      <option value="Young Artist">
                        Young Artist $30.00 USD
                      </option>
                      <option value="Rising Star">
                        Rising Star $30.00 USD
                      </option>
                      <option value="Adult Amateur">
                        Adult Amateur $30.00 USD
                      </option>
                    </select>
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
              <span class="color-red">{{
                $t("constitution2021.group1.row1")
              }}</span>
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
            <h5 class="text-center padding-bottom20">{{ $t("constitution2021.form1.title") }}</h5>
            <div class="text-center">
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
                  <td>文本 1A</td>
                  <td>文本 1B</td>
                  <td>文本 1C</td>
                  <td>文本 1A</td>
                  <td>文本 1B</td>
                  <td>文本 1C</td>
                  <td>文本 1C</td>
                </tr>
                <tr>
                  <td>文本 1A</td>
                  <td>文本 1B</td>
                  <td>文本 1C</td>
                  <td>文本 1A</td>
                  <td>文本 1B</td>
                  <td>文本 1C</td>
                  <td>文本 1C</td>
                </tr>
                <tr>
                  <td>文本 1A</td>
                  <td>文本 1B</td>
                  <td>文本 1C</td>
                  <td>文本 1A</td>
                  <td>文本 1B</td>
                  <td>文本 1C</td>
                  <td>文本 1C</td>
                </tr>
                <tr>
                  <td>文本 1A</td>
                  <td>文本 1B</td>
                  <td>文本 1C</td>
                  <td>文本 1A</td>
                  <td>文本 1B</td>
                  <td>文本 1C</td>
                  <td>文本 1C</td>
                </tr>
                <tr>
                  <td>文本 1A</td>
                  <td>文本 1B</td>
                  <td>文本 1C</td>
                  <td>文本 1A</td>
                  <td>文本 1B</td>
                  <td>文本 1C</td>
                  <td>文本 1C</td>
                </tr>
                <tr>
                  <td>文本 1A</td>
                  <td>文本 1B</td>
                  <td>文本 1C</td>
                  <td>文本 1A</td>
                  <td>文本 1B</td>
                  <td>文本 1C</td>
                  <td>文本 1C</td>
                </tr>
                <tr>
                  <td>文本 1A</td>
                  <td>文本 1B</td>
                  <td>文本 1C</td>
                  <td>文本 1A</td>
                  <td>文本 1B</td>
                  <td>文本 1C</td>
                  <td>文本 1C</td>
                </tr>
              </table>
            </div>
          </div>
          <div class="padding-top20">
            <p>
              For morning activities (from 9AM to 12PM), young musicians will be
              in class with faculty members.
            </p>
            <p class="padding-top5">
              Afternoon activities (after 12PM) are optional. Young musicians
              are welcome to observe masterclasses and concerts, but they must
              be accompanied by a parent after 12PM
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
              <span class="color-red">Professional Musician Program</span>
            </h3>
            <p>Director: Dr. Ivy Lu Wang</p>
          </div>
          <div class="padding-top20">
            <p>
              Group activities every day with their age group:
              Theory/Improvisation/Ear training/Composition/Sight-reading
            </p>
            <p class="padding-top5">
              Three piano duo coaches with a faculty member, one rehearsal and a
              performance in the Conero Duo Concert
            </p>
            <p class="padding-top5">
              Two Performance classes – Gain stage experience and confidence
            </p>
            <p class="padding-top5">
              Be immersed for a full week with great musicians – free to observe
              all the professional level masterclasses and concerts happening in
              the festival
            </p>
            <p class="padding-top5">
              Masterclass/private lesson opportunities with world famous
              pianists/professors (will be selected based on video audition)
            </p>
            <p class="padding-top5">
              Opportunity to be featured in student honor recital
            </p>
          </div>
          <div class="padding-top20">
            <p>
              Conero Piano Faculty: Baruch Meir, Enrico Elisi, Lorenzo Di Bella,
              Jack Winerock, Scott McBride Smith, Massimillano Ferrati, Vladimir
              Valjarevic, and CongCong Chai.
            </p>
            <p class="padding-top5">
              Conero String Faculty： Dr. Boris Vayner and Alla Aranovskaya
            </p>
          </div>
          <div class="padding-top20">
            <h5 class="text-center padding-bottom20">Tentative schedule</h5>
            <div class="text-center">
              <table class="gridtable">
                <tr>
                  <th>信息标题 1</th>
                  <th>信息标题 2</th>
                  <th>信息标题 3</th>
                  <th>信息标题 1</th>
                  <th>信息标题 2</th>
                  <th>信息标题 3</th>
                  <th>信息标题 1</th>
                  <th>信息标题 2</th>
                </tr>
                <tr>
                  <td>文本 1A</td>
                  <td>文本 1B</td>
                  <td>文本 1C</td>
                  <td>文本 2A</td>
                  <td>文本 2B</td>
                  <td>文本 2C</td>
                  <td>文本 2B</td>
                  <td>文本 2C</td>
                </tr>
                <tr>
                  <td>文本 1A</td>
                  <td>文本 1B</td>
                  <td>文本 1C</td>
                  <td>文本 2A</td>
                  <td>文本 2B</td>
                  <td>文本 2C</td>
                  <td>文本 2B</td>
                  <td>文本 2C</td>
                </tr>
                <tr>
                  <td>文本 1A</td>
                  <td>文本 1B</td>
                  <td>文本 1C</td>
                  <td>文本 2A</td>
                  <td>文本 2B</td>
                  <td>文本 2C</td>
                  <td>文本 2B</td>
                  <td>文本 2C</td>
                </tr>
                <tr>
                  <td>文本 1A</td>
                  <td>文本 1B</td>
                  <td>文本 1C</td>
                  <td>文本 2A</td>
                  <td>文本 2B</td>
                  <td>文本 2C</td>
                  <td>文本 2B</td>
                  <td>文本 2C</td>
                </tr>
                <tr>
                  <td>文本 1A</td>
                  <td>文本 1B</td>
                  <td>文本 1C</td>
                  <td>文本 2A</td>
                  <td>文本 2B</td>
                  <td>文本 2C</td>
                  <td>文本 2B</td>
                  <td>文本 2C</td>
                </tr>
                <tr>
                  <td>文本 1A</td>
                  <td>文本 1B</td>
                  <td>文本 1C</td>
                  <td>文本 2A</td>
                  <td>文本 2B</td>
                  <td>文本 2C</td>
                  <td>文本 2B</td>
                  <td>文本 2C</td>
                </tr>
                <tr>
                  <td>文本 1A</td>
                  <td>文本 1B</td>
                  <td>文本 1C</td>
                  <td>文本 2A</td>
                  <td>文本 2B</td>
                  <td>文本 2C</td>
                  <td>文本 2B</td>
                  <td>文本 2C</td>
                </tr>
                <tr>
                  <td>文本 1A</td>
                  <td>文本 1B</td>
                  <td>文本 1C</td>
                  <td>文本 2A</td>
                  <td>文本 2B</td>
                  <td>文本 2C</td>
                  <td>文本 2B</td>
                  <td>文本 2C</td>
                </tr>
                <tr>
                  <td>文本 1A</td>
                  <td>文本 1B</td>
                  <td>文本 1C</td>
                  <td>文本 2A</td>
                  <td>文本 2B</td>
                  <td>文本 2C</td>
                  <td>文本 2B</td>
                  <td>文本 2C</td>
                </tr>
                <tr>
                  <td>文本 1A</td>
                  <td>文本 1B</td>
                  <td>文本 1C</td>
                  <td>文本 2A</td>
                  <td>文本 2B</td>
                  <td>文本 2C</td>
                  <td>文本 2B</td>
                  <td>文本 2C</td>
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
              <span class="color-red">Conero Piano Pedagogy Conference</span>
            </h3>
            <p>Conference Committee Chair: Dr. Scott McBride Smith</p>
            <p>Pedagogy Fellows: To be announced</p>
          </div>
          <div class="padding-top20">
            <p>
              Group activities every day with their age group:
              Theory/Improvisation/Ear training/Composition/Sight-reading
            </p>
            <p class="padding-top5">
              Three piano duo coaches with a faculty member, one rehearsal and a
              performance in the Conero Duo Concert
            </p>
            <p class="padding-top5">
              Two Performance classes – Gain stage experience and confidence
            </p>
            <p class="padding-top5">
              Be immersed for a full week with great musicians – free to observe
              all the professional level masterclasses and concerts happening in
              the festival
            </p>
            <p class="padding-top5">
              Masterclass/private lesson opportunities with world famous
              pianists/professors (will be selected based on video audition)
            </p>
            <p class="padding-top5">
              Opportunity to be featured in student honor recital
            </p>
            <p class="padding-top5">
              Opportunity to be featured in student honor recital
            </p>
          </div>
          <div class="padding-top20">
            <p>
              Conero Piano Faculty: Baruch Meir, Enrico Elisi, Lorenzo Di Bella,
              Jack Winerock, Scott McBride Smith, Massimillano Ferrati, Vladimir
              Valjarevic, and CongCong Chai.
            </p>
            <p class="padding-top5">
              Conero String Faculty： Dr. Boris Vayner and Alla Aranovskaya
            </p>
            <p class="padding-top5">
              Conero String Faculty： Dr. Boris Vayner and Alla Aranovskaya
            </p>
          </div>
          <div class="padding-top20">
            <div class="text-center">
              <table class="gridtable">
                <tr>
                  <th>信息标题 1</th>
                  <th>信息标题 2</th>
                  <th>信息标题 3</th>
                </tr>
                <tr>
                  <td>文本 1A</td>
                  <td>文本 1B</td>
                  <td>文本 1C</td>
                </tr>
                <tr>
                  <td>文本 2A</td>
                  <td>文本 2B</td>
                  <td>文本 2C</td>
                </tr>
                <tr>
                  <td>文本 2A</td>
                  <td>文本 2B</td>
                  <td>文本 2C</td>
                </tr>
              </table>
            </div>
          </div>
          <div class="padding-top20">
            <p>
              * All in-person activities will be divided into small group
              sessions. All adult participants are required to provide vaccine
              card and sign the waive.
            </p>
            <p class="padding-top5">
              Please note that the in-person Conero Festival housing and meals
              will not be available due to COVID restrictions.
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
  padding: 1px;
  border-style: solid;
  border-color: #666666;
  background-color: #dedede;
}
table.gridtable td {
  border-width: 1px;
  padding: 1px;
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
