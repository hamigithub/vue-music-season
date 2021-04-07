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
      <div class="row padding-top50">
        <div class="col-xs-12">
          <div class="textWrap">
            <h1>Coming Soon!</h1>
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
}
</style>
