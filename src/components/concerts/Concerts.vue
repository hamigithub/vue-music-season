<template>
  <div id="concerts">
    <div class="container">
      <div class="row padding-top50">
        <div class="col-xs-12">
          <h1>Faculty Concerts</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12">
          <div id="nav">
            <ul class="tabs">
              <li
                class="li-tab pointer-hand"
                v-for="(item,index) in tabsParam"
                :key="index"
                @click="toggleTabs(index)"
                :class="{active:index===isShow,noactive:index!==isShow}"
              >{{item}}</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12">
          <h2>2019 CONERO INTERNATIONAL MUSIC FESTIVAL</h2>
          <div class="divTab" v-show="isShow===0">
            <div class="flexWrap padding-10">
              <p class="font-bold">Sonata in D minor L. 413</p>
              <p class="textRight">
                Domenico Scarlatti
                <br />(1685-1757)
              </p>
            </div>
            <div class="flexWrap padding-10">
              <p class="font-bold">
                Kreisleriana Op. 16
                <br />(Eight fantasies for piano)
              </p>
              <p class="textRight">
                Robert Schumann
                <br />(1810-1856)
              </p>
            </div>
            <div class="flexWrap padding-10">
              <p class="font-bold">Prelude Op.23 n.5</p>
              <p class="textRight">
                Sergei Rachmaninov
                <br />(1873-1943)
              </p>
            </div>
            <div class="flexWrap padding-10">
              <p class="font-bold">
                “Dopo una lettura di Dante”
                <br />(Fantasia quasi sonata)
              </p>
              <p class="textRight">
                Franz Liszt
                <br />(1811-1886)
              </p>
            </div>
          </div>
          <div class="divTab" v-show="isShow===1">
            <ul class="text-center">
              <li class="font-bold">Frédéric Chopin</li>
              <li class="font-bold">(1810-1849)</li>
              <li class="padding-top20">Ballade No.1 in G minor, Op. 23</li>
              <li>Nocturne in F major , Op. 15 No. 1</li>
              <li>Ballade No. 3 in A flat major, Op. 47</li>
              <li>Nocturne in F sharp major, Op. 15 No. 2</li>
              <li>Scherzo No. 1 in B minor, Op. 20</li>
              <li>Nocturne in G minor, Op. 15 No. 3</li>
              <li>Scherzo No. 2 in B flat minor, Op. 31</li>
            </ul>
          </div>
          <div class="divTab" v-show="isShow===2">
            <div class="flexWrap padding-10">
              <p class="font-bold">Après une Lecture de Dante: Fantasia Quasi Sonata</p>
              <p class="textRight">
                Franz Liszt
                <br />(1811-1886)
              </p>
            </div>
            <div class="flexWrap padding-10">
              <p class="font-bold">Rhapsody No. 11</p>
              <p class="textRight">Franz Liszt</p>
            </div>
            <div class="flexWrap padding-10">
              <p class="font-bold">Consolation No. 3</p>
              <p class="textRight">Franz Liszt</p>
            </div>
            <div class="flexWrap padding-10">
              <p class="font-bold">Faust Valse</p>
              <p class="textRight">
                Charles Gounod
                <br />(1818-1893)
              </p>
            </div>
            <div class="flexWrap padding-10">
              <p class="font-bold">
                5 pieces for piano:
                <br />"A Little Modal Ballade"
                <br />"The Tune"
                <br />"A Journey"
                <br />"The
                Isthmus"
                <br />"Tribute to Georgian Pianists"
              </p>
              <p class="textRight">L. Djincharadze</p>
            </div>
            <div class="flexWrap padding-10">
              <p class="font-bold">La Valse</p>
              <p class="textRight">
                Maurice Ravel
                <br />(1875-1937)
              </p>
            </div>
          </div>
          <div class="divTab" v-show="isShow===3">
            <div class="flexWrap padding-10">
              <p class="font-bold">
                Fantasy in C major op.17
                <br />I.Durchaus fantastisch und leidenschaftlichvorzutragen;
                Im Legenden-Ton
              </p>
              <p class="textRight">
                Robert Schumann
                <br />(1810-1856)
              </p>
            </div>
            <div class="flexWrap padding-10">
              <p class="font-bold">Fantasia for Piano in G minor, Op. 77</p>
              <p class="textRight">
                Ludwig van Beethoven
                <br />(1770-1827)
              </p>
            </div>
            <div class="flexWrap padding-10">
              <p class="font-bold">Fantasy in D minor, K397</p>
              <p class="textRight">
                Wolfgang Amadeus Mozart
                <br />(1756-1791)
              </p>
            </div>
            <div class="flexWrap padding-10">
              <p class="font-bold">Fantaisie in B minor, Op. 28</p>
              <p class="textRight">
                Alexander Scriabin
                <br />(1871-1915)
              </p>
            </div>
            <div class="flexWrap padding-10">
              <p class="font-bold">Sonata in B minor</p>
              <p class="textRight">
                Franz Liszt
                <br />(1811-1886)
              </p>
            </div>
          </div>
          <div class="divTab" v-show="isShow===4">
            <div class="flexWrap padding-10">
              <p class="font-bold">Prelude, Fugue and Variation, op.18</p>
              <p>
                Cesar Frank/Harold Bauer
                <br />(1822-1890)/(1873-1951)
              </p>
            </div>
            <div class="flexWrap padding-10">
              <ul>
                <li class="font-bold">Piano Sonata No. 31 in A flat major, Op. 110</li>
                <li class="font-bold">Moderato cantabile molto espressivo</li>
                <li class="font-bold">Allegro molto</li>
                <li class="font-bold">Adagio ma non troppo</li>
                <li class="font-bold">Fuga. Allegro ma non troppo</li>
              </ul>
              <p>
                Ludwig van Beethoven
                <br />(1770-1827)
              </p>
            </div>
            <div class="flexWrap padding-10">
              <p class="font-bold">Fantasy in C, Op. 17</p>
              <p>
                Robert Schumann
                <br />(1810-1856)
              </p>
            </div>
            <ul class="padding-10">
              <li>
                Durchaus phantastisch und leidenschaftlich vorzutragen - Im Legendenton - Erstes Tempo - Adagio - Im
                Tempo
              </li>
              <li>Mässig. Durchaus energisch. - Etwas bewegter. - Viel bewegter</li>
              <li>
                Langsam getragen. Durchweg leise zu halten. - Etwas bewegter. - Nach und nach bewegter und schneller.
                - Adagio
              </li>
            </ul>
          </div>
          <div class="divTab" v-show="isShow===5">
            <div class="flexWrap padding-10">
              <p class="font-bold">Moment Musical in C Minor, Op. 94 No. 1</p>
              <p class="textRight">
                Franz Schubert,Op.94 No. 1
                <br />(1797-1828)
              </p>
            </div>
            <div class="flexWrap padding-10">
              <p class="font-bold">Sonata in C Major, Op. 53 “Waldstein”</p>
              <p class="textRight">
                Ludwig Beethoven Op.53
                <br />(1810-1849)
              </p>
            </div>
            <div class="flexWrap padding-10">
              <p class="font-bold">Prelude and Fugue in G Sharp Minor (1st book)</p>
              <p class="textRight">
                Johann Sebastian Bach
                <br />(1685-1750)
              </p>
            </div>
            <div class="flexWrap padding-10">
              <p class="font-bold">Moment Musical in C Sharp Minor, Op. 94 No. 4</p>
              <p class="textRight">
                Franz Schubert, Op.94 No. 4
                <br />(1685-1750)
              </p>
            </div>
            <div class="flexWrap padding-10">
              <p class="font-bold">Polonaise No. 1 in C Sharp Minor, Op. 26 No. 1</p>
              <p class="textRight">
                Frédéric Chopin Op. 26 No. 1
                <br />(1810-1849)
              </p>
            </div>
            <div class="flexWrap padding-10">
              <p class="font-bold">Onedine from “Gaspard de la nuit”</p>
              <p class="textRight">
                Maurice Ravel
                <br />(1875-1937)
              </p>
            </div>
            <h3 class="text-center">Intermission</h3>
            <div class="flexWrap padding-10">
              <p class="font-bold">Moment Musical in A Flat Major, Op. 94 No. 6</p>
              <p class="textRight">Franz Schubert , Op.94 No. 6</p>
            </div>
            <div class="flexWrap padding-10">
              <p class="font-bold">Ballade No. 1 in G Minor, Op. 23</p>
              <p class="textRight">Frédéric Chopin Op. 23</p>
            </div>
            <div class="flexWrap padding-10">
              <p class="font-bold">Andante spianato et Grande Polonaise Brilliante, Op. 22</p>
              <p class="textRight">Frédéric Chopin Op. 22</p>
            </div>
            <div class="flexWrap padding-10">
              <p class="font-bold">Polonaise No. 6 in A Flat Major, Op. 53</p>
              <p class="textRight">Frédéric Chopin Op. 53</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Concerts",
  data() {
    return {
      tabsParam: [
        "Lorenzo Di Bella--August 5th",
        "Cristiano Burato--August 6th",
        "Tata Lecheli--August 7th",
        "Congcong Chai--August 10th",
        "Asaf Kleimann--August 12th",
        "Massimillano Ferrati--August 13th"
      ],
      isShow: 0
    };
  },
  methods: {
    toggleTabs(index) {
      this.isShow = index;
      console.log(index);
    }
  }
};
</script>

<style scoped>
#nav {
  margin: 30px 0;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #ff0036;
}

.active {
  color: #fff;
  background-color: #505050;
  box-shadow: 1px 1px 5px #888888;
}

.noactive {
  background-color: #f4f1eb;
}

.li-tab {
  margin: 5px;
  padding: 10px;
  border-radius: 5px;
  /*display: inline-block;*/
  text-align: center;
}

.divTab {
  margin-top: 20px;
  padding: 50px;
  color: #505050;
  border: #888888 solid 1px;
  box-shadow: 1px 1px 8px #888888;
  border-radius: 5px;
}

.flexWrap {
  display: flex;
  justify-content: space-between;
}

.textRight {
  text-align: right;
}

@media screen and (min-width: 996px) {
  .li-tab {
    /*display: inline-block;*/
  }
}
</style>
