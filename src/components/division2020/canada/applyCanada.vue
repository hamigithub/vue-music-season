<template>
  <div id="applyCanada">
    <div class="container">
      <div class="row padding-top50">
        <div class="col-xs-12">
          <h1>Competition Application，Canada</h1>
          <p v-show="key !== 1" class="padding-top15">
            Please complete the form below, and submit your application fee via
            Paypal on the main Application page.
          </p>
        </div>
      </div>
    </div>

    <div v-show="key !== 1" class="container">
      <div class="row padding-top50">
        <div class="col-md-8 col-xs-12">
          <form>
            <div class="padding-top15">
              <div>Name:</div>
              <div class="inputWrap formWrap">
                <label class="font12">
                  <input
                    class="inputBox"
                    v-model="participant.firstName"
                    name="firstName"
                    v-validate="'required'"
                    placeholder="First Name"
                  />
                </label>
                <span v-show="errors.has('firstName')" class="is-danger">{{
                  errors.first("firstName")
                }}</span>
              </div>
              <div class="inputWrap formWrap marginLeft2">
                <label class="font12">
                  <input
                    class="inputBox"
                    v-model="participant.lastName"
                    name="lastName"
                    v-validate="'required'"
                    placeholder="Last Name"
                  />
                </label>
                <span v-show="errors.has('lastName')" class="is-danger">{{
                  errors.first("lastName")
                }}</span>
              </div>
            </div>

            <div class="clearfix"></div>

            <div class="padding-top15">
              <div class="inputWrap formWrap">
                <label class="font12">
                  <span>Date Of Birth:</span>
                  <input
                    class="inputBox"
                    v-model="participant.dateOfBirth"
                    placeholder="MM/DD/YYYY"
                  />
                </label>
              </div>
              <div class="inputWrap formWrap marginLeft2">
                <label class="font12">
                  <span>Country Of Birth:</span>
                  <input
                    class="inputBox"
                    v-model="participant.countryOfBirth"
                    placeholder
                  />
                </label>
              </div>
            </div>

            <div class="clearfix"></div>

            <div class="padding-top15">
              <div class="wrapMargin">
                <span>Gender:</span>
                <label>
                  <select v-model="participant.gender">
                    <option disabled value>Please Select</option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </label>
              </div>
            </div>

            <div class="clearfix"></div>

            <div class="padding-top15">
              <div>E-mail：</div>
              <div>
                <label class="font12">
                  <input
                    class="inputBox"
                    type="text"
                    name="myEmail"
                    v-model="participant.email"
                    v-validate="'required|email'"
                    placeholder="yourmail@xx.com"
                  />
                </label>
              </div>
              <span v-show="errors.has('myEmail')" class="is-danger">{{
                errors.first("myEmail")
              }}</span>
            </div>

            <div class="padding-top15">
              <div>Phone Number:</div>
              <div>
                <label class="font12">
                  <input
                    class="inputBox"
                    v-model="participant.phoneNumber"
                    placeholder="+1-888-888-8888 Include Country Extension"
                  />
                </label>
              </div>
            </div>

            <div class="padding-top15">
              <div>Address Line 1:</div>
              <div>
                <label class="font12">
                  <input
                    class="inputBox"
                    v-model="participant.addressLine1"
                    placeholder
                  />
                </label>
              </div>
            </div>

            <div class="padding-top15">
              <div>Address Line 2:</div>
              <div>
                <label class="font12">
                  <input
                    class="inputBox"
                    v-model="participant.addressLine2"
                    placeholder
                  />
                </label>
              </div>
            </div>

            <div class="padding-top15">
              <div class="inputWrap20 formWrap">
                <label class="font12">
                  <span>City:</span>
                  <input
                    class="inputBox"
                    v-model="participant.city"
                    placeholder
                  />
                </label>
              </div>
              <div class="inputWrap20 formWrap marginLeft2">
                <label class="font12">
                  <span>Province:</span>
                  <input
                    class="inputBox"
                    v-model="participant.province"
                    placeholder
                  />
                </label>
              </div>
              <div class="inputWrap20 formWrap marginLeft2">
                <label class="font12">
                  <span>Postal Code:</span>
                  <input
                    class="inputBox"
                    v-model="participant.postalCode"
                    placeholder
                  />
                </label>
              </div>
              <div class="inputWrap20 formWrap marginLeft2">
                <label class="font12">
                  <span>Country Of Residence</span>
                  <input
                    class="inputBox"
                    v-model="participant.countryOfResidence"
                    placeholder
                  />
                </label>
              </div>
            </div>

            <div class="clearfix"></div>

            <div class="padding-top15">
              <div>Education:</div>
              <div>
                <label class="font12">
                  <input
                    class="inputBox"
                    v-model="participant.education"
                    placeholder="Education"
                  />
                </label>
              </div>
            </div>

            <div class="padding-top15">
              <div>Bio:</div>
              <div class="wrapMargin">
                <label class="font12">
                  <textarea
                    class="textArea"
                    v-model="participant.bio"
                  ></textarea>
                </label>
              </div>
            </div>

            <div class="padding-top15">
              <div class="wraoMargin">
                <span>How You Found:</span>
                <label>
                  <select v-model="participant.howYouFound">
                    <option disabled value>Please Select</option>
                    <option>Social Media</option>
                    <option>Professor/Teacher</option>
                    <option>Friend/Colleague</option>
                    <option>Other</option>
                  </select>
                </label>
              </div>
            </div>

            <div class="clearfix"></div>

            <div class="padding-top15">
              <div>Parents/Guardian Email:</div>
              <div>
                <label class="font12">
                  <input
                    class="inputBox"
                    v-model="participant.PGEmail"
                    placeholder="Parents/Guardian Email@xxx.com"
                  />
                </label>
              </div>
            </div>

            <div class="padding-top15">
              <div>Parent Phone Number:</div>
              <div>
                <label class="font12">
                  <input
                    class="inputBox"
                    v-model="participant.parentPhoneNumber"
                    placeholder
                  />
                </label>
              </div>
            </div>

            <div class="padding-top15">
              <div class="inputWrap formWrap">
                <label class="font12">
                  <span>Piano Teacher Name:</span>
                  <input
                    class="inputBox"
                    v-model="participant.pianoTeacherName"
                    placeholder
                  />
                </label>
              </div>
              <div class="inputWrap formWrap marginLeft2">
                <label class="font12">
                  <span>Piano Teacher Phone Number:</span>
                  <input
                    class="inputBox"
                    v-model="participant.pianoTeacherPhoneNumber"
                    placeholder
                  />
                </label>
              </div>
            </div>

            <div class="clearfix"></div>

            <div class="padding-top15">
              <div>Piano Teacher Email:</div>
              <div>
                <label class="font12">
                  <input
                    class="inputBox"
                    v-model="participant.pianoTeacherEmail"
                    placeholder="Teacher Email@xx.com"
                  />
                </label>
              </div>
            </div>

            <div class="padding-top15">
              <div>Competition Category:</div>
              <div>
                <label class="font12">
                  <input
                    class="inputBox"
                    v-model="participant.competitionCategory"
                    placeholder="Type In"
                  />
                </label>
              </div>
            </div>

            <div class="padding-top15">
              <div>Recording Link:</div>
              <div>
                <label class="font12">
                  <input
                    class="inputBox"
                    v-model="participant.recordingLink"
                    placeholder=""
                  />
                </label>
              </div>
            </div>

            <div class="row padding-top20">
              <div class="col-xs-12 text-center">
                <button
                  class="submitBtn"
                  @click.prevent="onSubmit"
                  :disabled="submitDisabled !== 0"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div v-show="key === 1" class="container">
      <div class="row padding-top15">
        <div class="col-xs-12">
          <p>{{ $t("applyMsg.row1") }}</p>
        </div>
      </div>
    </div>

    <div v-show="key === 2" class="container">
      <div class="row padding-top15">
        <div class="col-xs-12">
          <p class="is-danger">{{ $t("applyMsg.row2") }}</p>
        </div>
      </div>
    </div>

    <div v-show="key === 3" class="container">
      <div class="row padding-top15">
        <div class="col-xs-12">
          <p class="is-danger">{{ $t("applyMsg.row3") }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "applyCanada",
  data() {
    return {
      key: 0,
      submitDisabled: 0,
      participant: {
        firstName: "",
        lastName: "",
        dateOfBirth: "", //MM/DD/YYYY
        countryOfBirth: "",
        gender: "", //[Male,Female]
        email: "",
        phoneNumber: "", //include country extension
        addressLine1: "",
        addressLine2: "",
        city: "",
        province: "", //or state
        postalCode: "", //or zip code
        countryOfResidence: "", //Country List?
        education: "",
        bio: "",
        howYouFound: "", //[Social Media,Professor/Teacher,Friend/Colleague,Other]
        PGEmail: "",
        parentPhoneNumber: "", //required if younger than 18
        pianoTeacherName: "", //*
        pianoTeacherPhoneNumber: "", //*
        pianoTeacherEmail: "", //*
        competitionCategory: "",
        location: "Canada",
      },
    };
  },
  methods: {
    onSubmit() {
      this.key = 0;
      this.submitDisabled = 1;
      this.$validator.validate().then((result) => {
        if (!result) {
          this.key = 2;
          this.submitDisabled = 0;
        } else {
          let data = this.participant;
          let jsonData = JSON.stringify(data);
          this.$http
            .post("https://formspree.io/f/mbjqdwja", jsonData, {
              emulateJSON: true,
            })
            .then(
              function () {
                this.key = 1;
                this.$router.push({ path: "/submitted" });
              },
              function () {
                this.key = 3;
                this.submitDisabled = 0;
              }
            );
        }
      });
    },
  },
};
</script>

<style scoped>
.tab-tit {
  font-size: 0;
  width: 600px;
}

.tab-tit a {
  display: inline-block;
  height: 50px;
  line-height: 50px;
  width: 25%;
  font-size: 18px;
  text-align: center;
  background: #ccc;
  color: #333;
  text-decoration: none;
}

.tab-tit .cur {
  background: #09f;
  color: #fff;
}

.tab-con div {
  border: 1px solid #ccc;
  height: 400px;
  width: 598px;
  margin: 0 auto;
  padding-top: 20px;
}

.formWrap {
  float: left;
}

.textArea {
  width: 100%;
  min-height: 100px;
  resize: vertical;
}

.wrapMargin {
  margin: 6px 0;
}

.marginLeft2 {
  margin-left: 2%;
}

.inputWrap {
  width: 49%;
}

.inputWrap20 {
  width: 23%;
}

.font12 {
  font-size: 12px;
}

.inputBox {
  width: 100%;
  padding: 12px;
  margin: 6px 0 4px;
  border: 1px solid #ccc;
  background: #fafafa;
  color: #000;
  font-family: sans-serif;
  font-size: 12px;
  line-height: normal;
  box-sizing: border-box;
  -webkit-border-radius: 2px;
  border-radius: 2px;
}

.is-danger {
  color: #ff0000;
}

.submitBtn {
  padding: 10px 20px;
}

.payTable {
  margin: 0 auto;
}
</style>
