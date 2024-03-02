<template>
  <div class="all">
    <div class="header">
      <div class="main">
        <span></span>
        <span></span>
        <span></span>
        <div class="text">
          That`s my dream world.
        </div>
      </div>
      <div id="root" @mouseover="mouseover" @mouseout="startInterval">
        <!-- 大图轮播 -->
        <div id="1" class="view" ref="view">
          <img v-for="(img, index) in view" :name="index" :src="img" :key="index" />
        </div>
        <!-- 下方的阴影 -->
        <div class="shadow">
          <!-- 文字渐入渐出动画 -->
          <transition-group>
            <span v-for="(msgObj, index) in msg" ref="msg" v-show="msgObj.isShow" :key="index">{{ msgObj.msg }}</span>
          </transition-group>
          <!-- 右下角缩略图以及红框 -->
          <div class="preview" ref="preview">
            <img v-for="(pre, index) in preview" :name="index" :src="pre" :key="index" />
          </div>
        </div>
      </div>
      <div class="rootRight">
        <div class="text2">
          作品以 2022 年为舞台，大厂牌电子机械制造商“ARGUS”开发出——“NERvGear”——能连结虚拟世界的机器。完全的虚拟实境终于能够实现。主角桐人使用 NERvGear 游玩 VR MMORPG《Sword Art
          Online》的玩家，幸运地参与过封测并买下正式版的桐人，和正式营运就马上“完全潜行”享受着正式版的 SAO 世界。<br>
        </div>
        <div class="text3">
          就在游戏四小时多后，桐人发现到“登出”指令竟然消失。认为只是系统暂时出错的桐人和开始陷入混乱的所有玩家们一起被传送到开始地点广场，并传来游戏设计者的死亡游戏说明：不能登出是游戏的正常现象，只有打倒位于“艾恩葛朗特”顶楼的头目，达成“完全攻略”才是离开这个世界唯一的方法……
        </div>
      </div>
    </div>
    <div class="body">
      <div class="realBetween">
        <div id="2" class="people">
          <div class="First"> <span>主要人物介绍</span></div>
          <div class="charcter" v-for="item in List" :key="item.id">
            <div class="left">
              <img :src='item.src' alt="">
            </div>
            <div class="right">
              <p>姓名：{{ item.name }}</p>
              <p>性别：{{ item.gender }}</p>
              <p>CV：{{ item.Voice }}</p>
              <p>生日：{{ item.birth }}</p>
              <p>星座：{{ item.starSign }}</p>
              <p>角色经历：{{ item.story }}</p>
            </div>
          </div>
        </div>
        <div id="3" class="shell">
          <div class="sword">
            <div class="First"> <span>武器介绍</span></div>
            <div class="charcter" v-for="item in List2" :key="item.id">
              <div class="left">
                <img :src='item.src' alt="">
              </div>
              <div class="right">
                <p>武器名：{{ item.name }}</p>
                <p>持有者：{{ item.master }}</p>
                <p>背景故事：{{ item.story }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="fix-nav-container" v-show="display" @scroll="changeDisplay()">
      <div class="nav-item" @click="scrollToTarget('1')">动画</div>
      <div class="nav-item" @click="scrollToTarget('2')">人物</div>
      <div class="nav-item" @click="scrollToTarget('3')">武器</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WebAnimation",
  data() {
    return {
      fan: [
        { view: require("../assets/刀剑神域1.jpeg"), preview: require("../assets/刀剑神域1.jpeg"), msg: "刀剑神域：艾恩葛朗特" },
        { view: require("../assets/刀剑神域2.png"), preview: require("../assets/刀剑神域2.png"), msg: "刀剑神域：妖精之舞" },
        { view: require("../assets/刀剑神域3.png"), preview: require("../assets/刀剑神域3.png"), msg: "刀剑神域外传 幽灵子弹" },
        { view: require("../assets/刀剑神域4.jpg"), preview: require("../assets/刀剑神域4.jpg"), msg: "刀剑神域：圣母咏叹" },
        { view: require("../assets/刀剑神域5.png"), preview: require("../assets/刀剑神域5.png"), msg: "刀剑神域 Alicization" },
      ],
      view: [],
      preview: [],
      msg: [],
      index: 0,
      timer: null,
      display:false,
      List: [
        { id: '4', name: '爱丽丝·滋贝鲁库', gender: '女', Voice: '茅野爱衣', birth: '人界历361年4月9日', starSign: "无", story: '原本是卢利特村村长的女儿，也是尤吉欧与桐人的童年玩伴。后因为受到公理教会女祭司阿多米尼斯多雷特以“整合秘仪”洗脑而丧失记忆（实际上记忆被保存在中央大教堂的最顶端），成为第三十名整合骑士，拥有超过整合骑士副骑士长的实力，剑技强于亚丝娜。武器能使出像千本樱一样的攻击。之后在桐人的帮助下自己突破Code 871的控制 ，成为真正的A.L.I.C.E.（Artificial Labile Intelligence Cybernetic Existence）。', src: require('../assets/爱丽丝2.png') },
        { id: '5', name: '朝田诗乃', gender: '女', Voice: '泽城美雪', birth: '2009.8.21', starSign: "狮子座", story: '被称为“冰之狙击手”的GGO玩家。童年时被卷入银行强盗事件，在错乱中枪杀了威胁母亲的抢匪，之后留下了强烈的心理阴影。现实中是独自生活在东京都内的高一少女，在学校被称为杀人凶手而遭人欺负。“死枪”事件后在桐谷和人的邀请下转换到新生了ALO中，角色为猫妖精，擅长使用弓箭狙击。在小说第八卷中使用技能帮助桐人获得圣剑·Excalibur。Alicization篇中为了支援亚丝娜，通过菊冈给予GM账号“太阳之神·索鲁斯”登入Under World。', src: require('../assets/朝田.jpg') },
        { id: '6', name: '尤吉欧', gender: '男', Voice: '岛崎信长', birth: '人界历361年4月10日', starSign: "无", story: '尤吉欧，轻小说《刀剑神域》Alicization篇的主要人物。桐人在Under World中最先遇到的居民。爱丽丝的青梅竹马，亦是桐人最亲密的的挚友，身负砍断恶魔之树“基家斯西达”的天职。为了找回自己的青梅竹马爱丽丝，完成天职后和桐人一起走上了修剑士之路。后在与最高祭司一战中尤吉欧因受重伤天命耗尽而死亡。', src: require('../assets/U.jpg') },
        { id: '3', name: '结衣', gender: '女', Voice: '伊藤加奈惠', birth: '未知', starSign: "无", story: '在死亡游戏SAO开始后，原本作为负责管理、护理SAO玩家精神状态的程序但在游戏开始当天却被系统无原因强制阻隔。 因此只能继续监控玩家感情、健康数值，但由于玩家数值极其糟糕，结衣精神系统发生错乱。但后来发现精神状态完全不同的桐人和亚丝娜，漂浮在艾恩葛朗特第22层森林中寻找桐人和亚丝娜，后认正在过新婚生活的桐人（桐谷和人）和亚丝娜（结城明日奈）为父母。', src: require('../assets/结衣.jpg') },
        { id: '1', name: '结城明日奈', gender: '女', Voice: '户松遥', birth: '2007.9.30', starSign: "天秤座", story: '本是结城家的大小姐，从小接受精英式教育，被父母安排好了成功的人生，自己只是机械的达成他们的期望。与“活在SAO”的桐人相遇后，她改变了想法，开始享受在SAO中的生活，在长期的羁绊中逐渐喜欢上桐人，永远信任桐人，选择用自己的一生支持桐人的事业，放弃了家族所安排的精英路线。陪伴桐人度过了人生中最艰难和危险的时光，是桐人的心灵支柱', src: require('../assets/Y.jpg') },
        { id: '2', name: '桐谷和人', gender: '男', Voice: '松冈祯丞', birth: '2008.10.7', starSign: "天秤座", story: '桐谷和人，也被称为桐人，是轻小说《刀剑神域》及其衍生作品中的男主角。在《刀剑神域》SAO篇中，他和其他玩家一起被卷入了由茅场晶彦设计的阴谋中。他成为了游戏中最强的双剑士，也因此结识了一生的爱人亚丝娜。在虚幻与现实的交织中，他不断成长，收获了爱情、友情等无比珍贵的事物。', src: require('../assets/桐人1.png') }
      ],
      List2: [
        { id: '5', name: '金桂之剑', master: '爱丽丝', src: require('../assets/爱丽丝_武器.png'), story: '原本为Under World最古老的金桂树，曾生长在如今「中央大教堂」所耸立的，创世神史缇西亚赐予人类的「初始之地」的一座喷泉之旁，据桐人所说是Under World最初的不可破坏物体，后被公理教会最高祭司Adminstrator转变为该剑，具有“永恒不朽”的属性。' },
        { id: '4', name: '夜空之剑', master: '桐谷和人', src: require('../assets/夜空之剑.jpeg'), story: '夜空之剑，日本轻小说《刀剑神域》及其衍生作品中的武器，登场于Alicization篇。小说第10卷中首次出现，是桐人在Under World的主要武器之一，材料是“恶魔之树”基家斯西达最顶端的树枝。在大教堂顶端一战中，与蓝蔷薇之剑配合击败了公理教会最高祭司Administrator。' },
        { id: '3', name: '逐暗者', master: '桐谷和人', src: require('../assets/桐人_武器(艾恩葛朗特).png'), story: '逐暗者，日本轻小说《刀剑神域》及其衍生作品中的武器，桐人（桐谷和人）的佩剑之一。于小说第一卷，动画第一季第7话出现，陪伴主角直到刀剑神域的最后。在动画第一季中SAO篇的最后一话持之与希兹克利夫进行最后一战，在战斗中损坏。为桐人委托亚丝娜的好友莉兹贝特用水晶石英铸块所打造，平时不使用。与黑剑·阐释者一同为主角二刀流技能的两把佩剑。' },
        { id: '2', name: '细剑·闪烁之光', master: '亚丝娜', src: require('../assets/亚丝娜_武器.jpg'), story: '《刀剑神域》女主角亚丝娜的武器之一，拥有带着水晶般透明感的银色 [1]，由亚丝娜好友莉兹贝特打造，是其冶炼出来的剑当中最高级的逸品之一。武器的等级越高，专有名称就越多样化。但艾恩葛朗特出现的最高等级武器，像是亚丝娜的「闪烁之光」，在这个世界恐怕只有一把，只能制造出一次。' },
        { id: '1', name: '阐释者', master: '桐谷和人', src: require('../assets/阐释者.png'), story: '阐释者，日本轻小说《刀剑神域》及其衍生作品中的武器，桐人（桐谷和人）在SAO中的佩剑之一。于小说第一卷，动画第一季第7话出现，第8话后作为平时的使用剑。与白剑·逐暗者一同为主角二刀流技能的两把佩剑。该剑陪伴着桐人直到SAO的最后，桐人与希兹克利夫（茅场晶彦）进行最后一战时使用的武器之一。也是后来Alicization篇中“夜空之剑”的原型。' },
      ]

    };
  },
  methods: {
    changeDisplay(){
      if(window.scrollY > 600){
        this.display=true;
      }else{
        this.display=false;
      }
      return this.display;
    },
 
    scrollToTarget(idName) {
      // 获取目标元素
      const targetElement = document.getElementById(idName);


      // 滑动到目标元素
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop-122,
          behavior: 'smooth', // 使用平滑滚动效果
        });
      }
    },
    startInterval() {
      this.timer = setInterval(() => {
        this.isShoW = true
        this.$refs.view.style.transition = '0.3s';
        this.$refs.view.style.left = -1300 * this.index + 'px';
        this.index++;
      }, 3000);
    },
    // 鼠标悬浮在图片上时停止轮播
    mouseover(event) {
      clearInterval(this.timer);
      if (event.target.name !== undefined) {
        this.isShoW = true
        let name = Number(event.target.name);
        this.$refs.view.style.left = -1300 * name + 'px';
        this.index = name + 1;
      }
    },
  },
  mounted() {
    window.scrollTo(0,0);
    this.fan.forEach(item => {
      this.view.push(item.view);
      this.preview.push(item.preview);
      this.msg.push({ msg: item.msg, isShow: false });
    });
    this.view.push(this.view[0]);

    this.$refs.view.addEventListener('transitionend', () => {
      if (this.index == this.view.length) {
        this.index = 1;
        this.$refs.view.style.transition = '0s';
        this.$refs.view.style.left = '0px';
      }
    }, false);

    this.startInterval();
    window.addEventListener('scroll', this.changeDisplay);  
  },
  /*清除定时器*/
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
    window.removeEventListener('scroll', this.changeDisplay);  
  },
  watch: {
    index(newVal) {
      this.msg.forEach((item, index) => {
        if (index === newVal - 1 || index === 0 && newVal === this.fan.length + 1) {
          item.isShow = true;
        } else {
          item.isShow = false;
        }
      })
    }
  },
}


</script>

<style scoped>
.fix-nav-container {
  z-index: 9999;
  position: fixed;
  right: 30px;
  top: 40%;
  bottom: 0;
  padding: 20px;
  background: url(../assets/导航栏.jpg);
  background-size:cover;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
  opacity: 0.7;
}

.nav-item{
  cursor: pointer;
  flex: 1;
  border-radius: 5px;
  width: 100px;
  height: 80px;
  text-align: center;
  line-height: 80px;
  margin-bottom: 5px;
  font-family: Georgia, 'Times New Roman', Times, serif;
  color: aquamarine;
  font-size:20px;
}

.nav-item:hover{
  scale: 1.4;
}
.all {
  background: url(../assets/bg1.jpg) no-repeat;
  background-size: cover;
  user-select: none;
  height: 100%;
  background-attachment: fixed;
}

.rootRight {
  height: 500px;
  width: 400px;
  position: absolute;
  transform: translateX(950px);
  border-radius: 10px;
}

.rootRight .text2 {
  text-align: justify;
  font-size: 22px;
  white-space: wrap;
  text-indent: 2em;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  color: aliceblue;
}

.rootRight .text3 {
  height: 250px;
  text-align: justify;
  font-size: 22px;
  white-space: wrap;
  text-indent: 2em;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  color: aliceblue;
  border-bottom: solid;
  border-radius: 5px;
}

.header {
  width: 100%;
  height: 800px;
  background-color: #161616;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

#root {
  width: 1300px;
  height: 600px;
  margin: 50px auto;
  position: relative;
  overflow: hidden;
  border-radius: 15px;
  position: absolute;
  user-select: none;
}

.view {
  position: absolute;
  white-space: nowrap;
  transition: 0.5s;
}

.view img {
  width: 1300px;
  height: 600px;
}

.shadow {
  position: absolute;
  bottom: 0;
  height: 60px;
  width: 1300px;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7));
}

.preview {
  right: 5px;
  bottom: 5px;
  white-space: nowrap;
  transition: 0.3s;
  position: absolute;
}

.preview img {
  width: 64px;
  height: 48px;
  margin: 0 5px;
  border: 2px solid white;
  border-radius: 5px;
}


@keyframes msg {
  0% {
    opacity: 0;
  }

  50% {
    opacity: 0.3;
  }

  100% {
    opacity: 1;
  }
}

.v-leave-active {
  animation: msg 0.3s reverse;
}

.v-enter-active {
  animation: msg 0.3s;
}

#root span {
  color: white;
  margin: 5px 5px;
  bottom: 0;
  position: absolute;
  width: 1300px;
}

.main {
  user-select: none;
  width: 400px;
  height: 400px;
  position: absolute;
  transform: translateX(-1000px);
}

.main .text {
  color: white;
  width: 400px;
  height: 300px;
  position: absolute;
  font-size: 30px;
  left: 55%;
  top: 75%;
  transform: translate(-50%, -50%);
  white-space: wrap;
  text-align: center;
}

.main span {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: 0.8s linear;
  border: 2px solid white;
}

@keyframes roll {
  100% {
    transform: rotateZ(360deg);
  }
}

.main span:nth-child(1) {
  border-radius: 60% 70% 87% 66% / 35% 55% 70% 80%;
  animation: roll 5s linear infinite alternate;
}

.main span:nth-child(2) {
  border-radius: 87% 60% 69% 56% / 65% 85% 70% 30%;
  animation: roll 6s linear infinite alternate;
}

.main span:nth-child(3) {
  border-radius: 70% 80% 57% 86% / 85% 35% 70% 80%;
  animation: roll 5s linear infinite alternate;
}

.body {
  margin-top: 50px;
  display: flex;
  justify-content: center;
}

.body .realBetween {
  user-select: none;
  height: 390vh;
  width: 80vw;
  opacity: 0.8;
  border-radius: 25px;
}

.body .realBetween .people {
  width: 100%;
  height: 200vh;
  background-color: #969986;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-direction: column-reverse;
  border-radius: 25px;
  border-left: solid cadetblue 3px;
  border-right: solid cadetblue 3px;
}

.body .realBetween .people .First {
  width: 8vw;
  height: 5vh;
  position: absolute;
  transform: translateY(-95vh);
  margin-right: 90%;
  text-align: center;
  line-height: 5vh;
  border-bottom: solid black 1px;
}

.body .realBetween .people .First span {
  text-align: center;
  color: aliceblue;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: 1vw;
}

.charcter {
  width: 90%;
  height: 30vh;
  border-bottom: solid 3px transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  transform: translateY(50px);
}

.charcter .left {
  width: 30%;
  height: 28vh;
  background: black;
  margin-right: 100px;
  border-radius: 5px;
  border: solid #18171742;
}

.charcter .left img {
  width: 100%;
  height: 100%;
  border-radius: 5px;
}

.charcter .right {
  width: 60%;
  height: 25vh;
  text-align: justify;
  font-size: 1vw;
  font-weight: 400;
  text-indent: 1em;
  padding: 5px;
  border-radius: 10px;
  border-left: solid rgba(245, 245, 245, 0.25);
  border-right: solid rgba(245, 245, 245, 0.25);
  border-bottom: solid rgba(245, 245, 245, 0.25);
  box-shadow: inset -2px -2px 4px white;
}

.body .realBetween .sword {
  margin-top: 50px;
  width: 100%;
  height: 170vh;
  background-color: #90aaa6;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-direction: column-reverse;
  border-radius: 25px;

}

.realBetween .sword .First {
  width: 8vw;
  height: 5vh;
  position: absolute;
  transform: translateY(-80vh);
  margin-right: 90%;
  text-align: center;
  line-height: 5vh;
  border-bottom: solid black 1px;
}

.body .realBetween .sword .First span {
  text-align: center;
  color: aliceblue;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: 1vw;
}

.sword .charcter {
  transform: translateY(50px);
}

.sword .right {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: justify;
}
</style>

