<template>
  <div id="resultGuide">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <h2 class="text-center padding-top20">2020 Result Announcement</h2>
          <div class="text-center">
            <router-link :to="{ name: 'youngArtistGroup' }">
              <div class="pointer-hand division-all division1">
                Professional Young Artist Group
              </div>
            </router-link>
          </div>
          <div class="text-center">
            <router-link :to="{ name: 'professionalAdultGroup' }">
              <div class="pointer-hand division-all division1">
                Professional Adult Group
              </div>
            </router-link>
          </div>
          <div class="text-center">
            <router-link :to="{ name: 'pianoTeachersGroup' }">
              <div class="pointer-hand division-all division1">
                Piano Teachers Group
              </div>
            </router-link>
          </div>
          <div class="text-center">
            <router-link :to="{ name: 'childrenGroup' }">
              <div class="pointer-hand division-all division1">
                Children Group
              </div>
            </router-link>
          </div>
          <div class="text-center">
            <router-link :to="{ name: 'amateurJuvenileGroup' }">
              <div class="pointer-hand division-all division1">
                Amateur Juvenile Group
              </div>
            </router-link>
          </div>
          <div class="text-center">
            <router-link :to="{ name: 'amateurAdultGroup' }">
              <div class="pointer-hand division-all division1">
                Amateur Adult Group
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResultGuide",
};
</script>

<style scoped>
.passActivity {
  float: right;
  border-bottom: 1px solid #ccc;
}

.division-all {
  margin: 40px 40px;
  padding: 10px;
  color: #fff;
  border: 1px solid #cccccc;
  border-radius: 10px;
}

.division-all:hover {
  background: #e6d242;
  color: #000000;
  box-shadow: 1px 1px 1px #757575;
}

.division1 {
  background: #c2254c;
}
</style>
