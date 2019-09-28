<template>
  <div id="about">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <div class="componentTitle">
            <div class="titleBtn font-white">
              {{$t('aboutTitle.title')}}
            </div>
            <div><p class="title_p">{{$t('appPublic.row2')}}</p></div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <!--<div class="col-md-3 col-xs-12">-->
        <!--<div class="text-center padding-bottom20">-->
        <!--<img src="../assets/img/logo3.jpg" alt="">-->
        <!--</div>-->
        <!--</div>-->
        <div class="col-xs-12">
          <div class="homeSubject padding-bottom20">
            <div class="text-center col-md-4">
              <img class="aboutImg" src="../assets/img/conero-2.jpg" alt="">
            </div>
            <p class="padding-top15">
              {{$t('homeSubject.row1')}}
            </p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {}
</script>

<style scoped>
  .homeSubject p {
    text-indent: 50px;
  }

  .titleBtn {
    background-image: linear-gradient(90deg, #0092b6, #b61588);
  }

  .aboutImg {
    width: 80%;
  }
</style>
