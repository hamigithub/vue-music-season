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
          <h1>gallery</h1>
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
</style>
