<template>
  <div id="applyForm">
    <div class="container">
      <div class="row padding-top50">
        <div class="col-xs-12">
          <h2>{{$t('applyForm.title')}}</h2>
          <p v-show="key!==1" class="padding-top15">{{$t('applyForm.title2')}}</p>
        </div>
      </div>
    </div>

    <div v-show="key!==1" class="container">
      <div class="row padding-top50">
        <div class="col-md-8 col-xs-12">
          <form>
            <div class="padding-top15">
              <div>{{$t('applyForm.name')}}</div>
              <div class="inputWrap formWrap">
                <label class="font12">
                  <input
                    class="inputBox"
                    v-model="participant.firstName"
                    name="firstName"
                    v-validate="'required'"
                    placeholder="First Name"
                  >
                </label>
                <span
                  v-show="errors.has('firstName')"
                  class="is-danger"
                >{{ errors.first('firstName')}}</span>
              </div>
              <div class="inputWrap formWrap marginLeft2">
                <label class="font12">
                  <input
                    class="inputBox"
                    v-model="participant.lastName"
                    name="lastName"
                    v-validate="'required'"
                    placeholder="Last Name"
                  >
                </label>
                <span
                  v-show="errors.has('lastName')"
                  class="is-danger"
                >{{ errors.first('lastName')}}</span>
              </div>
            </div>

            <div class="clearfix"></div>
            <div class="padding-top15">
              <div class="wrapMargin">
                <span>{{$t('applyForm.participantType')}}</span>
                <label>
                  <select v-model="participant.participantType">
                    <option disabled value>{{$t('applyForm.disabled')}}</option>
                    <option>{{$t('applyForm.pt1')}}</option>
                    <option>{{$t('applyForm.pt2')}}</option>
                    <option>{{$t('applyForm.pt3')}}</option>
                    <option>{{$t('applyForm.pt4')}}</option>
                    <option>{{$t('applyForm.pt5')}}</option>
                    <option>{{$t('applyForm.pt6')}}</option>
                  </select>
                </label>
              </div>
            </div>

            <div class="padding-top15">
              <div class="inputWrap formWrap">
                <label class="font12">
                  <span>{{$t('applyForm.dateOfBirth')}}</span>
                  <input
                    class="inputBox"
                    v-model="participant.dateOfBirth"
                    placeholder="MM/DD/YYYY"
                  >
                </label>
              </div>
              <div class="inputWrap formWrap marginLeft2">
                <label class="font12">
                  <span>{{$t('applyForm.countryOfBirth')}}</span>
                  <input class="inputBox" v-model="participant.countryOfBirth" placeholder>
                </label>
              </div>
            </div>

            <div class="clearfix"></div>
            <div class="padding-top15">
              <div>{{$t('applyForm.preferredLanguage')}}</div>
              <div>
                <label class="font12">
                  <input
                    class="inputBox"
                    v-model="participant.preferredLanguage"
                    placeholder="Preferred Language"
                  >
                </label>
              </div>
            </div>

            <div class="padding-top15">
              <div class="wrapMargin">
                <span>{{$t('applyForm.englishSkill')}}Level：</span>
                <label>
                  <select v-model="participant.englishSkill">
                    <option disabled value>{{$t('applyForm.disabled')}}</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                  </select>
                </label>
              </div>
            </div>

            <div class="padding-top15">
              <div class="wrapMargin">
                <span>{{$t('applyForm.gender')}}</span>
                <label>
                  <select v-model="participant.gender">
                    <option disabled value>{{$t('applyForm.disabled')}}</option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </label>
              </div>
            </div>

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
                  >
                </label>
              </div>
              <span v-show="errors.has('myEmail')" class="is-danger">{{ errors.first('myEmail')}}</span>
            </div>

            <div class="padding-top15">
              <div>{{$t('applyForm.phoneNumber')}}</div>
              <div>
                <label class="font12">
                  <input
                    class="inputBox"
                    v-model="participant.phoneNumber"
                    placeholder="+1-888-888-8888 Include Country Extension"
                  >
                </label>
              </div>
            </div>

            <div class="padding-top15">
              <div>{{$t('applyForm.addressLine1')}}</div>
              <div>
                <label class="font12">
                  <input class="inputBox" v-model="participant.addressLine1" placeholder>
                </label>
              </div>
            </div>

            <div class="padding-top15">
              <div>{{$t('applyForm.addressLine2')}}</div>
              <div>
                <label class="font12">
                  <input class="inputBox" v-model="participant.addressLine2" placeholder>
                </label>
              </div>
            </div>

            <div class="padding-top15">
              <div class="inputWrap20 formWrap">
                <label class="font12">
                  <span>{{$t('applyForm.city')}}</span>
                  <input class="inputBox" v-model="participant.city" placeholder>
                </label>
              </div>
              <div class="inputWrap20 formWrap marginLeft2">
                <label class="font12">
                  <span>{{$t('applyForm.province')}}</span>
                  <input class="inputBox" v-model="participant.province" placeholder>
                </label>
              </div>
              <div class="inputWrap20 formWrap marginLeft2">
                <label class="font12">
                  <span>{{$t('applyForm.postalCode')}}</span>
                  <input class="inputBox" v-model="participant.postalCode" placeholder>
                </label>
              </div>
              <div class="inputWrap20 formWrap marginLeft2">
                <label class="font12">
                  <span>{{$t('applyForm.countryOfResidence')}}</span>
                  <input class="inputBox" v-model="participant.countryOfResidence" placeholder>
                </label>
              </div>
            </div>

            <div class="clearfix"></div>
            <div class="padding-top15">
              <div>{{$t('applyForm.education')}}</div>
              <div>
                <label class="font12">
                  <input class="inputBox" v-model="application.education" placeholder="Education">
                </label>
              </div>
            </div>

            <div class="padding-top15">
              <div>{{$t('applyForm.essay')}}</div>
              <div class="wrapMargin">
                <label class="font12">
                  <textarea class="textArea" v-model="application.essay"></textarea>
                </label>
              </div>
            </div>

            <div class="padding-top15">
              <div class="wraoMargin">
                <span>{{$t('applyForm.howYouFound')}}</span>
                <label>
                  <select v-model="application.howYouFound">
                    <option disabled value>{{$t('applyForm.disabled')}}</option>
                    <option>{{$t('applyForm.hyf1')}}</option>
                    <option>{{$t('applyForm.hyf2')}}</option>
                    <option>{{$t('applyForm.hyf3')}}</option>
                    <option>{{$t('applyForm.hyf4')}}</option>
                  </select>
                </label>
              </div>
            </div>

            <div class="padding-top15">
              <div class="inputWrap formWrap">
                <label class="font12">
                  <span>{{$t('applyForm.referringPersonName')}}</span>
                  <input class="inputBox" v-model="application.referringPersonName" placeholder>
                </label>
              </div>
              <div class="inputWrap formWrap marginLeft2">
                <label class="font12">
                  <span>{{$t('applyForm.parentEmail')}}</span>
                  <input class="inputBox" v-model="application.parentEmail" placeholder>
                </label>
              </div>
            </div>

            <div class="clearfix"></div>
            <div class="padding-top15">
              <div class="inputWrap formWrap">
                <label class="font12">
                  <span>{{$t('applyForm.parentPhoneNumber')}}</span>
                  <input class="inputBox" v-model="application.parentPhoneNumber" placeholder>
                </label>
              </div>
              <div class="inputWrap formWrap marginLeft2">
                <label class="font12">
                  <span>{{$t('applyForm.roommateRequest')}}</span>
                  <input class="inputBox" v-model="application.roommateRequest" placeholder>
                </label>
              </div>
            </div>

            <div class="clearfix"></div>
            <div class="padding-top15">
              <div class="inputWrap formWrap">
                <label class="font12">
                  <span>{{$t('applyForm.pianoTeacherName')}}</span>
                  <input class="inputBox" v-model="application.pianoTeacherName" placeholder>
                </label>
              </div>
              <div class="inputWrap formWrap marginLeft2">
                <label class="font12">
                  <span>{{$t('applyForm.pianoTeacherPhoneNumber')}}</span>
                  <input class="inputBox" v-model="application.pianoTeacherPhoneNumber" placeholder>
                </label>
              </div>
            </div>

            <div class="clearfix"></div>
            <div class="padding-top15">
              <div>{{$t('applyForm.pianoTeacherEmail')}}</div>
              <div>
                <label class="font12">
                  <input
                    class="inputBox"
                    v-model="application.pianoTeacherEmail"
                    placeholder="teacherEmail@xx.com"
                  >
                </label>
              </div>
            </div>

            <div class="padding-top15">
              <div class="wrapMargin">
                <span>{{$t('applyForm.applicationType')}}</span>
                <label>
                  <select v-model="application.applicationType">
                    <option disabled value>{{$t('applyForm.disabled')}}</option>
                    <option>{{$t('applyForm.at1')}}</option>
                    <option>{{$t('applyForm.at2')}}</option>
                    <option>{{$t('applyForm.at3')}}</option>
                  </select>
                </label>
              </div>
            </div>

            <div class="padding-top15">
              <div>{{$t('applyForm.preferredTeachers')}}</div>
              <div>
                <label class="font12">
                  <input class="inputBox" v-model="application.preferredTeachers" placeholder>
                </label>
              </div>
            </div>

            <div class="padding-top15">
              <div>{{$t('applyForm.recordingLink')}}</div>
              <div>
                <label class="font12">
                  <input
                    class="inputBox"
                    v-model="application.recordingLink"
                    placeholder="Youtube or other video/audio link"
                  >
                </label>
              </div>
            </div>

            <div class="row padding-top20">
              <div class="col-xs-12 text-center">
                <button
                  class="submitBtn"
                  @click.prevent="onSubmit"
                  :disabled="submitDisabled!==0"
                >{{$t('applyForm.submit')}}</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div v-show="key===1" class="container">
      <div class="row padding-top15">
        <div class="col-xs-12">
          <p>{{$t('applyMsg.row1')}}</p>
        </div>
      </div>
    </div>

    <div v-show="key===2" class="container">
      <div class="row padding-top15">
        <div class="col-xs-12">
          <p class="is-danger">{{$t('applyMsg.row2')}}</p>
        </div>
      </div>
    </div>

    <div v-show="key===3" class="container">
      <div class="row padding-top15">
        <div class="col-xs-12">
          <p class="is-danger">{{$t('applyMsg.row3')}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "applyForm",
  data() {
    return {
      key: 0,
      submitDisabled: 0,
      participant: {
        firstName: "",
        lastName: "",
        participantType: "", //[Piano Professional,Amateur Pianist,Pedagogy Scholar,Local Auditor,Accompanying Person]
        dateOfBirth: "", //MM/DD/YYYY
        countryOfBirth: "",
        preferredLanguage: "",
        englishSkill: "", //Self rated skill, from 1-10
        gender: "", //[Male,Female]
        email: "",
        phoneNumber: "", //include country extension
        addressLine1: "",
        addressLine2: "",
        city: "",
        province: "", //or state
        postalCode: "", //or zip code
        countryOfResidence: "" //Country List?
      },
      application: {
        education: "",
        essay: "",
        howYouFound: "", //[Social Media,Professor/Teacher,Friend/Colleague,Other]
        referringPersonName: "", //Always visible
        parentEmail: "", //required if younger than 18
        parentPhoneNumber: "", //required if younger than 18
        roommateRequest: "", //*Name of preferred roommate. They must also request you
        pianoTeacherName: "", //*
        pianoTeacherPhoneNumber: "", //*
        pianoTeacherEmail: "", //*
        applicationType: "", //[Competition only, Festival only, Competition and Festival]
        preferredTeachers: "", //*In order of preference (three)
        recordingLink: "" //*Youtube or other video/audio link
      }
    };
  },
  methods: {
    onSubmit() {
      this.key = 0;
      this.submitDisabled = 1;
      this.$validator.validate().then(result => {
        if (!result) {
          this.key = 2;
          this.submitDisabled = 0;
        } else {
          let data = {
            participant: this.participant,
            application: this.application
          };
          let jsonData = JSON.stringify(data);
          this.$http
            .post(
              "http://crm.coneromusicfestival.com:8080/application/create",
              jsonData,
              { emulateJSON: true }
            )
            .then(
              function() {
                this.key = 1;
              },
              function() {
                this.key = 3;
                this.submitDisabled = 0;
              }
            );
        }
      });
    }
  }
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
</style>
