<template>
  <div id="applyChina">
    <div v-show="isWechat === false" class="applyWrap">
      <div class="container">
        <div class="row padding-top50">
          <div class="col-xs-12">
            <h1>比赛申请，中国赛区</h1>
            <p v-show="key !== 1" class="padding-top15">
              请填写以下表格，并通过 Paypal 在主申请页面提交您的申请费用。
            </p>
          </div>
        </div>
      </div>

      <div v-show="key !== 1" class="container">
        <div class="row padding-top50">
          <div class="col-md-8 col-xs-12">
            <form>
              <div class="padding-top15">
                <div>姓名：</div>
                <div>
                  <label class="font12">
                    <input
                      class="inputBox"
                      v-model="participant.firstName"
                      name="firstName"
                      v-validate="'required'"
                      placeholder="你的名字"
                    />
                  </label>
                  <span v-show="errors.has('firstName')" class="is-danger">{{
                    errors.first("firstName")
                  }}</span>
                </div>
              </div>

              <div class="clearfix"></div>

              <div class="padding-top15">
                <div class="inputWrap formWrap">
                  <label class="font12">
                    <span>出生日期：</span>
                    <input
                      class="inputBox"
                      v-model="participant.dateOfBirth"
                      placeholder="月/日/年"
                    />
                  </label>
                </div>
                <div class="inputWrap formWrap marginLeft2">
                  <label class="font12">
                    <span>出生地：</span>
                    <input
                      class="inputBox"
                      v-model="participant.countryOfBirth"
                      placeholder="城市"
                    />
                  </label>
                </div>
              </div>

              <div class="clearfix"></div>

              <div class="padding-top15">
                <div class="wrapMargin">
                  <span>性别：</span>
                  <label>
                    <select v-model="participant.gender">
                      <option disabled value>请选择</option>
                      <option>男</option>
                      <option>女</option>
                    </select>
                  </label>
                </div>
              </div>

              <div class="clearfix"></div>

              <div class="padding-top15">
                <div>电子邮箱：</div>
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
                <div>手机号码：</div>
                <div>
                  <label class="font12">
                    <input
                      class="inputBox"
                      v-model="participant.phoneNumber"
                      placeholder="+86-888-888-8888"
                    />
                  </label>
                </div>
              </div>

              <div class="padding-top15">
                <div>地址一：</div>
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
                <div>地址二：</div>
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
                    <span>市：</span>
                    <input
                      class="inputBox"
                      v-model="participant.city"
                      placeholder
                    />
                  </label>
                </div>
                <div class="inputWrap20 formWrap marginLeft2">
                  <label class="font12">
                    <span>省：</span>
                    <input
                      class="inputBox"
                      v-model="participant.province"
                      placeholder
                    />
                  </label>
                </div>
                <div class="inputWrap20 formWrap marginLeft2">
                  <label class="font12">
                    <span>邮政编码：</span>
                    <input
                      class="inputBox"
                      v-model="participant.postalCode"
                      placeholder
                    />
                  </label>
                </div>
                <div class="inputWrap20 formWrap marginLeft2">
                  <label class="font12">
                    <span>居住国家：</span>
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
                <div>教育经历：</div>
                <div>
                  <label class="font12">
                    <input class="inputBox" v-model="participant.education" />
                  </label>
                </div>
              </div>

              <div class="padding-top15">
                <div>个人简历：</div>
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
                  <span>你如何找到科雷诺比赛：</span>
                  <label>
                    <select v-model="participant.howYouFound">
                      <option disabled value>
                        请选择：
                      </option>
                      <option>社会媒体</option>
                      <option>教授/老师</option>
                      <option>朋友/同事</option>
                      <option>其它</option>
                    </select>
                  </label>
                </div>
              </div>

              <div class="clearfix"></div>

              <div class="padding-top15">
                <div>家长/监护人 邮箱:</div>
                <div>
                  <label class="font12">
                    <input
                      class="inputBox"
                      v-model="participant.PGEmail"
                      placeholder="Email@xxx.com"
                    />
                  </label>
                </div>
              </div>

              <div class="padding-top15">
                <div>家长电话：</div>
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
                    <span>教师姓名：</span>
                    <input
                      class="inputBox"
                      v-model="participant.pianoTeacherName"
                      placeholder
                    />
                  </label>
                </div>
                <div class="inputWrap formWrap marginLeft2">
                  <label class="font12">
                    <span>教师手机号码：</span>
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
                <div>教师邮箱：</div>
                <div>
                  <label class="font12">
                    <input
                      class="inputBox"
                      v-model="participant.pianoTeacherEmail"
                      placeholder="Email@xx.com"
                    />
                  </label>
                </div>
              </div>

              <div class="padding-top15">
                <div class="inputWrap formWrap">
                  <label class="font12">
                    <span>推荐人/机构</span>
                    <input
                      class="inputBox"
                      v-model="participant.referenceName"
                      placeholder
                    />
                  </label>
                </div>
                <div class="inputWrap formWrap marginLeft2">
                  <label class="font12">
                    <span>联系电话</span>
                    <input
                      class="inputBox"
                      v-model="participant.referenceNumber"
                      placeholder
                    />
                  </label>
                </div>
              </div>

              <div class="clearfix"></div>

              <div class="padding-top15">
                <div>比赛类别：</div>
                <div>
                  <label class="font12">
                    <input
                      class="inputBox"
                      v-model="participant.competitionCategory"
                      placeholder="请填写您对应的类别"
                    />
                  </label>
                </div>
              </div>

              <div class="padding-top15">
                <div>
                  <span>请选择参赛的面试地点：</span>
                  <label>
                    <select v-model="participant.places">
                      <option disabled value>请选择</option>
                      <option>北京</option>
                      <option>上海</option>
                      <option>广州</option>
                      <option>武汉</option>
                      <option>厦门</option>
                      <option>线上指定连线</option>
                    </select>
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
                    提交
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
            <p>谢谢,您的申请已经递交，若还没有提交申请费用请尽快完成。</p>
          </div>
        </div>
      </div>

      <div v-show="key === 2" class="container">
        <div class="row padding-top15">
          <div class="col-xs-12">
            <p class="is-danger">请填写缺失的信息，然后再试一次。</p>
          </div>
        </div>
      </div>

      <div v-show="key === 3" class="container">
        <div class="row padding-top15">
          <div class="col-xs-12">
            <p class="is-danger">提交表格时出现错误，请联系: support@coneromusicfestival.com.</p>
          </div>
        </div>
      </div>
    </div>
    <div v-show="isWechat === true" class="tipWrap"></div>
  </div>
</template>

<script>
export default {
  name: "applyChina",
  data() {
    return {
      key: 0,
      submitDisabled: 0,
      isWechat: false,
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
        referenceName: "",
        referenceNumber: "",
        competitionCategory: "",
        places: "",
        location: "China",
      },
    };
  },
  created: function () {
    // console.log(navigator.userAgent.toLowerCase());
    var ua = navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == "micromessenger") {
      this.isWechat = true;
    } else {
      this.isWechat = false;
    }
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
            .post("https://formspree.io/f/xayanjnl", jsonData, {
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

.tipWrap {
  background: rgba(0, 0, 0, 0.699) url(../../../assets/img/WeChatTip.png)
    no-repeat fixed top;
  background-size: 96%;
  z-index: 999;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>
