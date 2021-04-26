<template>
  <div id="divisionOnline">
    <div class="container">
      <div class="row padding-top50">
        <div class="col-xs-12">
          <div class="text-center">
            <h1>
              2021 Conero International Piano Competition Preliminary Round
            </h1>
            <h3>Other Countries Division</h3>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row padding-top50">
        <div class="col-xs-12">
          <table>
            <tr>
              <td>Preliminary Round：</td>
              <td>Video submission due by June 20th.</td>
            </tr>
            <tr>
              <td>Final Round:</td>
              <td>August 2nd -3rd，2021</td>
            </tr>

            <tr>
              <td>Registration fee for preliminary round:</td>
              <td>
                $30 for Young Artist Division, Amateur Adult Division
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                $35 for Professional Division, Piano Teachers’ Division and
                Chamber Division
              </td>
            </tr>
            <tr>
              <td>Registration fee for final round</td>
              <td>Professional/ Piano Teachers’ / Chamber Division $100</td>
            </tr>
            <tr>
              <td></td>
              <td>All Amateur Groups: $80</td>
            </tr>
          </table>
          <p>
            For the final round on August 2-3, a live remote performance is
            required. The committee will contact each finalist to schedule a
            time.
          </p>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row padding-top50">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-md-6 text-center padding-bottom20">
              <router-link to="/division/online/apply">
                <div class="btn btnBgm">Apply Online Division --></div>
              </router-link>
              <div class="text-center padding-top20">
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
              <p class="padding-20">{{ $t("applyFee.ps") }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row"></div>
    </div>

    <div class="container">
      <div class="row padding-50">
        <div class="col-xs-12">
          <div>
            <h2>Categories</h2>
            <h3 class="padding-top20">Young Artist Division</h3>
            <p class="font-bold">Age 15 to 17</p>
            <p>
              1 or 2 free choices not exceeding the max duration of 10 mins.
            </p>
            <p class="font-bold">Age 12 to 14</p>
            <p>1 or 2 free choices not exceeding the max duration of 8 mins.</p>
            <p class="font-bold">Age 9 to 11</p>
            <p>1 or 2 free choices not exceeding the max duration of 6 mins.</p>
            <p class="font-bold">Age 6 to 8</p>
            <p>1 or 2 free choices not exceeding the max duration of 5 mins.</p>
          </div>
          <div class="padding-top20">
            <h3>Professional Division:</h3>
            <p class="font-bold">Age 18 to 32</p>
            <p>No more than 30 mins.</p>
            <p class="font-bold">Age 13 to 17</p>
            <p>No more than 20 mins.</p>
          </div>
          <div class="padding-top20">
            <h3>Piano Teachers Division: Age above 22 years old.</h3>
            <p>
              One Baroque piece and one Romantic piece. No more than 15 mins.
            </p>
          </div>
          <div class="padding-top20">
            <h3>Amateur Adult Division: Age above 18 years old.</h3>
            <p>1-2 free choices not exceeding the max duration of 10mins.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row padding-50">
        <div class="col-xs-12">
          <div>
            <h2>Chamber Music Division:</h2>
            <h3 class="font-blue">Memorization not required.</h3>
            <h3 class="font-bold padding-top20">
              Adult Piano Duet / Four Hands: Average age above 18 years old.
            </h3>
            <p>
              Free choice from three different periods; one of them must be the
              Classical period. No more than 25 mins.
            </p>
          </div>
          <div class="padding-top20">
            <h3>
              Youth Piano Duet / Four Hands: Average age no more than 18 years
              old.
            </h3>
            <p>1-2 free choices not exceeding the max duration of 12mins.</p>
          </div>
          <div class="padding-top20">
            <h3>
              Adult Chamber Group: (Piano with string or woodwind) Average ages
              above 18 years old.
            </h3>
            <p>
              Free choices from three different periods. No more than 30 mins.
            </p>
          </div>
          <div class="padding-top20">
            <h3>
              Youth Chamber Group: (Piano with string or woodwind) Average age
              no more than 18 years old.
            </h3>
            <p>1-2 free choices not exceeding the max duration of 15mins.</p>
          </div>
          <div class="padding-top20">
            <p class="font-bold">
              All contestants must meet the age requirements at the time of the
              competition. Their current age before August 1st, 2021, will
              determine the category they must compete in. For example, if the
              student turns 19 on August 1st or after, he will compete in the
              adult category.
            </p>
          </div>
          <div class="padding-top20">
            <h3>Awards for Online Preliminary Competition</h3>
            <p>
              1. The festival committee will select the final candidates based
              on their performance. The result will be announced at the end of
              June.
            </p>
            <p>
              2. The selected outstanding performers will obtain a scholarship
              to participate in the Conero International Festival and final
              competition.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row padding-top50">
        <div class="col-xs-12">
          <h2>Competition Regulations</h2>
          <p class="padding-top20">
            1) The 2021 Conero International Piano Competition has two rounds:
            Preliminary Round and Final Round.
          </p>
          <p>
            2) The Preliminary round of the 2021 Conero International Piano
            Competition has China Division, United States Division, Canada
            Division, Australia Division, and Other Countries Division (Online).
            Please double-check the dates and rules in your division.
          </p>
          <p>
            3) Preliminary round for “Other Countries Division” will accept the
            video recording. Videos should be recorded no more than 12 months
            before the date of your submission. Video recordings must be
            performed by applicants and may not be edited (the performance must
            be 'one take', no cuts), nor should any effects be added.（You will
            not be penalized for the recording quality of your video, although
            it is important that it is good enough for the jury to be able to
            see and hear you clearly.）
          </p>
          <p>
            4) The final round will apply the common rules and regulations for
            all finalists. Final round dates: August 2nd -3rd.
          </p>
          <p>
            5) The final round is voluntary; eligible candidates should complete
            the application and submit the fee before July 20th.
          </p>
          <p>
            6) If applying for more than one division in the competition,
            applicants must complete separate applications and pay the required
            fees for each division.
          </p>
          <p>
            7) Young Artist Divisions, Piano Teachers Group, Amateur Adult
            Division, Professional Adult Division should be performed from
            memory.
          </p>
          <p>
            8) Piano concertos, self-composed pieces, or transcriptions done by
            the performer are not accepted.
          </p>
          <p>9) Repeats are not required except the place marked with D.C.</p>
          <p>10) Judges’ decisions are final.</p>
          <p>
            11) The Conero International Piano Festival retains copyright of
            performance video, audio, and pictures of the competition and the
            award ceremony. The festival has the legal right to use these
            materials.
          </p>
          <p>
            12) The competition committee reserves all the right for the final
            interpretation of the regulations.
          </p>
          <p class="padding-top20">
            <a
              target="_blank"
              href="http://www.coneromusicfestival.com/division/usa/additional"
              >Technical recommendations for online participants (minimum
              requirements)
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DivisionOnline",
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
