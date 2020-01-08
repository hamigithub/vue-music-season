<template>
  <div id="gallery">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <div class="componentTitle">
            <div class="titleBtn font-white">{{$t('galleryTitle.title')}}</div>
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
          <h3>Faculty&Students</h3>
        </div>
        <div class="col-xs-6 col-md-3 text-center">
          <div class="imgWrap">
            <img class="galleryImg pointer-hand" src="../assets/img/together/group_1.jpg" alt />
          </div>
        </div>
        <div class="col-xs-6 col-md-3 text-center">
          <div class="imgWrap">
            <img class="galleryImg pointer-hand" src="../assets/img/together/group_2.jpg" alt />
          </div>
        </div>
        <div class="col-xs-6 col-md-3 text-center">
          <div class="imgWrap">
            <img class="galleryImg pointer-hand" src="../assets/img/together/group_3.jpg" alt />
          </div>
        </div>
        <div class="col-xs-6 col-md-3 text-center">
          <div class="imgWrap">
            <img class="galleryImg pointer-hand" src="../assets/img/together/group_4.jpg" alt />
          </div>
        </div>
        <div class="col-xs-6 col-md-3 text-center">
          <div class="imgWrap">
            <img class="galleryImg pointer-hand" src="../assets/img/together/group_5.jpg" alt />
          </div>
        </div>
        <div class="col-xs-6 col-md-3 text-center">
          <div class="imgWrap">
            <img class="galleryImg pointer-hand" src="../assets/img/together/group_6.jpg" alt />
          </div>
        </div>
        <div class="col-xs-6 col-md-3 text-center">
          <div class="imgWrap">
            <img class="galleryImg pointer-hand" src="../assets/img/together/group_7.jpg" alt />
          </div>
        </div>
        <div class="col-xs-6 col-md-3 text-center">
          <div class="imgWrap">
            <img class="galleryImg pointer-hand" src="../assets/img/together/group_8.jpg" alt />
          </div>
        </div>
        <div class="col-xs-6 col-md-3 text-center">
          <div class="imgWrap">
            <img class="galleryImg pointer-hand" src="../assets/img/together/student_1.jpg" alt />
          </div>
        </div>
        <div class="col-xs-6 col-md-3 text-center">
          <div class="imgWrap">
            <img class="galleryImg pointer-hand" src="../assets/img/together/student_2.jpg" alt />
          </div>
        </div>
        <div class="col-xs-6 col-md-3 text-center">
          <div class="imgWrap">
            <img class="galleryImg pointer-hand" src="../assets/img/together/student_3.jpg" alt />
          </div>
        </div>
        <div class="col-xs-6 col-md-3 text-center">
          <div class="imgWrap">
            <img class="galleryImg pointer-hand" src="../assets/img/together/student_4.jpg" alt />
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row padding-top50">
        <div class="col-xs-12">
          <h3>Fun Moments</h3>
        </div>
        <div class="col-xs-6 col-md-3 text-center">
          <div class="imgWrap">
            <img class="galleryImg pointer-hand" src="../assets/img/together/fun_1.jpg" alt />
          </div>
        </div>
        <div class="col-xs-6 col-md-3 text-center">
          <div class="imgWrap">
            <img class="galleryImg pointer-hand" src="../assets/img/together/fun_2.jpg" alt />
          </div>
        </div>
        <div class="col-xs-6 col-md-3 text-center">
          <div class="imgWrap">
            <img class="galleryImg pointer-hand" src="../assets/img/together/fun_3.jpg" alt />
          </div>
        </div>
        <div class="col-xs-6 col-md-3 text-center">
          <div class="imgWrap">
            <img class="galleryImg pointer-hand" src="../assets/img/together/fun_4.jpg" alt />
          </div>
        </div>
        <div class="col-xs-6 col-md-3 text-center">
          <div class="imgWrap">
            <img class="galleryImg pointer-hand" src="../assets/img/together/fun_5.jpg" alt />
          </div>
        </div>
        <div class="col-xs-6 col-md-3 text-center">
          <div class="imgWrap">
            <img class="galleryImg pointer-hand" src="../assets/img/together/fun_6.jpg" alt />
          </div>
        </div>
        <div class="col-xs-6 col-md-3 text-center">
          <div class="imgWrap">
            <img class="galleryImg pointer-hand" src="../assets/img/together/fun_7.jpg" alt />
          </div>
        </div>
        <div class="col-xs-6 col-md-3 text-center">
          <div class="imgWrap">
            <img class="galleryImg pointer-hand" src="../assets/img/together/fun_8.jpg" alt />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.homeSubject p {
  text-indent: 50px;
}

.titleBtn {
  background-image: linear-gradient(90deg, #0092b6, #b61588);
}

.imgWrap {
  margin-top: 10px;
}

.galleryImg {
  width: 250px;
  border-radius: 5%;
}

@media (max-width: 992px) {
  .galleryImg {
    width: 150px;
  }
}
</style>
