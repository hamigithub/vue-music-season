<template>
  <div id="constitution">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <div class="componentTitle committeeTitle">
            <div>
              {{$t('constitutionTitle.title')}}
              <div class="titleBtn">
                <span class="titleBtnInside">{{$t('appPublic.row1')}}</span>
              </div>
            </div>
            <div>
              <p class="title_p">{{$t('appPublic.row2')}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <h3 class="padding-bottom10">Daily Schedule</h3>
          <table class="text-center" border="1">
            <tr>
              <th>Dates</th>
              <th>Morning</th>
              <th>Afternoon</th>
              <th>Evening</th>
            </tr>
            <tr>
              <td>August 4th</td>
              <td colspan="2">Arrival & Registration</td>
              <td>Festival Opening Reception</td>
            </tr>
            <tr>
              <td>August 5th</td>
              <td colspan="2">2019 Italy Conero International Piano Competition (Final Round)</td>
              <td>Award Ceremony and Lorenzo Di Bella Piano Recital</td>
            </tr>
            <tr>
              <td>August 6th</td>
              <td>
                9:00-11:15
                <br />Piano lessons
                <br />11:30-13:00
                <br />Scott McBride Smith Pedagogy lecture
              </td>
              <td>
                14:45-16:15
                <br />Piano lessons
                <br />16:30-18:00
                <br />Enrico Elisi Masterclasses
                <br />18:00-18:30
                <br />Pedagogy forum
              </td>
              <td>
                20:30
                <br />Cristiano Burato
                <br />Piano Recital
              </td>
            </tr>
            <tr>
              <td>August 7th</td>
              <td>
                9:00-11:15
                <br />Piano lessons
                <br />11:30-13:00
                <br />Yandi Yang
                <br />Pedagogy lecture
              </td>
              <td>
                14:45-16:15
                <br />Tamara Licheli Masterclasses
                <br />17:00-18:00
                <br />Xiaohong Zhao Masterclasses
                <br />18:00-18:30
                <br />Pedagogy forum
              </td>
              <td>
                20:30
                <br />Tamara Licheli
                <br />Piano Recital
              </td>
            </tr>
            <tr>
              <td>August 8th</td>
              <td>Half day tour to Recanati Beach</td>
              <td>International Piano Pedagogy Symposium</td>
              <td>
                20:30
                <br />Student Recital
              </td>
            </tr>
            <tr>
              <td>August 9th</td>
              <td>
                9:00-11:15
                <br />Piano lessons
                <br />11:30-13:00
                <br />Cristiano Burato
                <br />Pedagogy lecture
              </td>
              <td>
                14:45-16:15
                <br />Piano lessons
                <br />16:30-18:00
                <br />Cristiano Burato Masterclasses
                <br />18:00-18:30
                <br />Pedagogy forum
              </td>
              <td>
                20:30
                <br />Student Recital
              </td>
            </tr>
            <tr>
              <td>August 10th</td>
              <td>
                9:00-11:15
                <br />Piano lessons
                <br />11:30-13:00
                <br />Scott McBride Smith
                <br />Pedagogy lecture
              </td>
              <td>
                14:45-16:15
                <br />Piano lessons
                <br />16:30-18:00
                <br />Scott Smith Masterclasses
                <br />18:00-18:30
                <br />Pedagogy forum
              </td>
              <td>
                20:30
                <br />Congcong Chai
                <br />Piano Recital
              </td>
            </tr>
            <tr>
              <td>August 11th</td>
              <td colspan="2">One day tour in historical towns</td>
              <td>
                20:30
                <br />Student Recital
              </td>
            </tr>
            <tr>
              <td>August 12th</td>
              <td>
                9:00-11:15
                <br />Piano lessons
                <br />11:30-13:00
                <br />Congcong Chai
                <br />Pedagogy lecture
              </td>
              <td>
                14:45-16:15
                <br />Piano lessons
                <br />16:30-18:00
                <br />Massimillano Ferrati Masterclasses
                <br />18:00-18:30
                <br />Pedagogy forum
              </td>
              <td>
                20:30
                <br />Asaf Kleimann
                <br />Piano Recital
              </td>
            </tr>
            <tr>
              <td>August 13th</td>
              <td>
                9:00-11:15
                <br />Piano lessons
                <br />11:30-13:00
                <br />Ivy Lu Wang
                <br />Pedagogy lecture
              </td>
              <td>
                14:45-16:15
                <br />Piano lessons
                <br />16:30-18:00
                <br />Asaf Kleimann Masterclasses
                <br />18:00-18:30
                <br />Pedagogy forum
              </td>
              <td>
                20:30
                <br />Massimillano Ferrati
                <br />Piano Recital
              </td>
            </tr>
            <tr>
              <td>August 14th</td>
              <td>
                9:00-11:15
                <br />Piano lessons
                <br />11:30-13:00
                <br />Asaf Kleinmann
                <br />Improvisation workshop
              </td>
              <td>
                14:45-16:15
                <br />Piano lessons
                <br />16:30-18:00
                <br />Congcong Chai Masterclasses
                <br />18:00-18:30
                <br />Pedagogy forum
              </td>
              <td>
                20:30
                <br />Festival Closing Ceremony & Rewards
              </td>
            </tr>
            <tr>
              <td>August 15th</td>
              <td colspan="3">Check out hotel</td>
            </tr>
          </table>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-xs-12 padding-top50">
          <h3 class="padding-bottom20">{{$t('constitutionForm2.title')}}</h3>
          <table border="1">
            <tr>
              <td class="font-bold">{{$t('constitutionForm2.row1')}}</td>
              <td class="font-bold">{{$t('constitutionForm2.row1-2')}}</td>
            </tr>
            <tr>
              <td colspan="2">{{$t('constitutionForm2.row1-3')}}</td>
            </tr>
            <tr>
              <td class="font-bold">{{$t('constitutionForm2.row2')}}</td>
              <td class="font-bold">{{$t('constitutionForm2.row2-2')}}</td>
            </tr>
            <tr>
              <td colspan="2">{{$t('constitutionForm2.row2-3')}}</td>
            </tr>
            <tr>
              <td class="font-bold">{{$t('constitutionForm2.row3')}}</td>
              <td class="font-bold">{{$t('constitutionForm2.row3-2')}}</td>
            </tr>
            <tr>
              <td colspan="2">{{$t('constitutionForm2.row3-3')}}</td>
            </tr>
            <tr>
              <td class="font-bold">{{$t('constitutionForm2.row4')}}</td>
              <td class="font-bold">{{$t('constitutionForm2.row4-2')}}</td>
            </tr>
            <tr>
              <td colspan="2">{{$t('constitutionForm2.row4-3')}}</td>
            </tr>
            <tr>
              <td class="font-bold">{{$t('constitutionForm2.row5')}}</td>
              <td class="font-bold">{{$t('constitutionForm2.row5-2')}}</td>
            </tr>
            <tr>
              <td colspan="2">{{$t('constitutionForm2.row5-3')}}</td>
            </tr>
            <tr>
              <td class="font-bold">{{$t('constitutionForm2.row6')}}</td>
              <td class="font-bold">{{$t('constitutionForm2.row6-2')}}</td>
            </tr>
            <tr>
              <td colspan="2">{{$t('constitutionForm2.row6-3')}}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-xs-12 padding-top50">
          <div class="asafWrap">
            <h3>Asaf Improvisation Workshop</h3>
            <h4 class="font-italic">——{{$t('constitutionText.title')}}</h4>
            <p class="padding-top15">{{$t('constitutionText.row1')}}</p>
            <p class="padding-top15">{{$t('constitutionText.row2')}}</p>
            <p class="padding-top15">{{$t('constitutionText.row3')}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Constitution"
};
</script>

<style scoped>
.titleBtn {
  background-image: linear-gradient(90deg, #00a0b6, #4cb602);
}

table {
  font-size: 12px;
}

.asafWrap {
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
</style>
