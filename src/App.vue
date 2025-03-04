<script setup>
import HelloWorld from './components/HelloWorld.vue'
import { ref } from 'vue';
import{reactive} from 'vue';
import { computed } from 'vue';


//the prepared langguage set, currently the project just has Japanese, Chinese, English. 
//Here also has a problem, how do we add the other langguage set to different object bellow except the way that write the code directly here. 
const lang_set = ["日本語","中文","English"];
const current_lang =ref(lang_set[0]) 

//titles, catch phrases in Japanese langguage
const title_ja = "Mates Talk";
const catch_phrase1_ja = "未知なる自分を、見つけてみませんか";
const catch_phrase2_ja = "語りながら、未来を築こう";

//titles, catch phrases in Chinese langguage
const title_ch = "Mates Talk";
const catch_phrase1_ch = "探寻那未知的自己"
const catch_phrase2_ch = "玩转外语，共筑未来"
 //purpose-oriented translation, its hardly find a word or a phrase in Chinese can perfectly match the meaning of japanese expression of "nagara".

//titles, catch phrases in English
const title_en = "Mates Talk";
const catch_phrase1_en = "Go and find, the unawared yourself";
const catch_phrase2_en ="Talking and build the future";

//The object contains the titles and catch phrases
const title_catch_phrase = reactive({
    [lang_set[0]]:{
       title: title_ja,
       catch_phrase1: catch_phrase1_ja,
       catch_phrase2: catch_phrase2_ja,
    },
    
    [lang_set[1]]:{
       title:title_ch,
       catch_phrase1: catch_phrase1_ch,
       catch_phrase2: catch_phrase2_ch,
    },

    [lang_set[2]]:{
       title:title_en,
       catch_phrase1: catch_phrase1_en,
       catch_phrase2: catch_phrase2_en,
    },
 })
//The current title and catch phrase will be displayed
 const current_title = ref(title_catch_phrase[lang_set[0]].title);
 const current_catch_phrase1 = ref(title_catch_phrase[lang_set[0]].catch_phrase1);
 const current_catch_phrase2 = ref(title_catch_phrase[lang_set[0]].catch_phrase2);
 const switch_current_titles = (lang) => {
  current_title.value = title_catch_phrase[lang].title;
  current_catch_phrase1.value = title_catch_phrase[lang].catch_phrase1;
  current_catch_phrase2.value = title_catch_phrase[lang].catch_phrase2;
}


// buttons named in Japanese
const beginner_button_ja = "初心者の方へ";
const study_button_ja = "学習へのアプローチ";
const improvment_button_ja = "成長への道";
const to_business_button_ja = "ビジネス成功への道";

// buttons named in Chinese
const beginner_button_ch = "我是初学者";
const study_button_ch = "学习方法";
const improvment_button_ch = "技巧提升";
const to_business_button_ch = "商务成功";

// buttons named in English
const beginner_button_en = "Beginners";
const study_button_en = "Study Methods";
const improvment_button_en = "Improvement methods";
const to_business_button_en = "Business";

//the object contains the named of buttons in diffdrent langguage
const button_info = reactive({
  [lang_set[0]]: {
    to_beginner: beginner_button_ja,
    study_info: study_button_ja,
    improvment: improvment_button_ja,
    to_business: to_business_button_ja,
  },
  [lang_set[1]]: {
    to_beginner: beginner_button_ch,
    study_info: study_button_ch,
    improvment: improvment_button_ch,
    to_business: to_business_button_ch,
  },
  [lang_set[2]]: {
    to_beginner: beginner_button_en,
    study_info: study_button_en,
    improvment: improvment_button_en,
    to_business: to_business_button_en,
  }
});

//The information will be displayed on the board in Japanese
const beginner_info_ja = "単語を覚えた。聴解、読解、一生懸命勉強した。テストでハイスコアを取った。でも、話せない。仕事につかえない。伝えたい言葉が、喉に詰まる。この現実を、一緒に変えてみませんか？あなたなら、もっとできるはずです。Mates Talkと一緒に、あなたのあるべき姿を見つけましょう、自信満ちて外国語を母国語のように話す自分、そしてビジネスで成功する未来を。"
const study_approch_info_ja = "Mates Talkは、学習者に最適化した学習プランを提供し、ビジネスに絞った簡単な単語やフレーズからはじめ、徐々にステップアップしていきます。最短なルートから確実にあなたの手を引きながら、最高母語話者のレベルまで成長させます。"
const improvment_info_ja = "Mates Talkは、最先端のデータ分析技術を導入し、あなたの学習パフォーマンスを多角的に捉え、学習プランを動的に調整し、確実に成長へと導きます。あなたの成功は、数的に証明されます。"
const to_business_info_ja = "Mates Talkでは、採用率1％以下を突破したビジネス＆語学教育の専門家からなるチームであなたへのサポートを徹底しています。Mates Talkでの学習は、語学力を高めるだけでなく、ビジネスで成功する様々な情報を入手できます。"

//The information will be displayed on the board in Chinese
const beginner_info_ch = "单词，听力，阅读，作文。努力学习，考试得了高分，却说不出流利的英语，也不能用于工作，想传达给对方，却最终卡在喉咙里。其实，你应该能做得更好。与Mates Talk一起，找到你应该有的样子，像说母语般充满自信地说外语，以及在商务上取得成功的未来。"
const study_approch_info_ch = "Mates Talk提供了最适合学习者的学习计划，从简单的商务单词和短语开始，逐步提升。我们将以最短的路径，确保您最高达到母语水平。"
const improvment_info_ch = "Mates Talk引入了最先进的数据分析技术，全方位地捕捉您的学习表现，动态调整学习计划，确保您稳步成长。您的成功将得到数字上的证明。"
const to_business_info_ch = "Mates Talk的团队由通过了1％以下录取率的商务和语言教育专家组成，并全力支持您的学习。Mates Talk的学习不仅可以提高语言能力，还可以获得在商务上取得成功的各种信息。"

//The information will be displayed on the board in English
const beginner_info_en = "You memorized words. You studied hard for listening, reading, and writing. You got high scores on tests. But you can't speak. You can't use it for work. The words you want to convey get stuck in your throat. Why don't you change this reality together? You should be able to do more. With Mates Talk, let's find out what you should be, speak foreign languages with confidence like a native speaker, and build a future of success in business."
const study_approch_info_en = "Mates Talk provides a learning plan optimized for learners, starting with simple business words and phrases and gradually stepping up. We will take you by the hand in the shortest route and ensure that you grow to the highest level of a native speaker."
const improvment_info_en = "Mates Talk introduces advanced data analysis technology, captures your learning performance from multiple perspectives, dynamically adjusts the learning plan, and ensures steady growth. Your success will be numerically proven."
const to_business_info_en = "Mates Talk thoroughly supports you with a team of business and language education experts who have passed a recruitment rate of less than 1%. Learning with Mates Talk not only improves your language skills, but also provides various information for success in business."

//The object contains the infomation in different langguage that will be displayed on the board
const study_info = reactive({
  [lang_set[0]]: {
    to_beginner: beginner_info_ja,
    study_info: study_approch_info_ja,
    improvment: improvment_info_ja,
    to_business: to_business_info_ja,
  },
  [lang_set[1]]: {
    to_beginner: beginner_info_ch,
    study_info: study_approch_info_ch,
    improvment: improvment_info_ch,
    to_business: to_business_info_ch,
  },
  [lang_set[2]]: {
    to_beginner: beginner_info_en,
    study_info: study_approch_info_en,
    improvment: improvment_info_en,
    to_business: to_business_info_en,
  }
});
const current_study_info = ref(study_info[current_lang.value].to_beginner);

const switch_lang = (lang) =>{
  current_lang.value = lang;
  console.log(current_lang.value);
  current_study_info.value = study_info[current_lang.value].to_beginner;
  
}

const switch_current_info = (key) =>{
  current_study_info.value = study_info[current_lang.value][key];
}

const q_text_ja = "レベルをテスト(開発中)";
const q_text_ch = "测试当前水平(待开发)";
const q_text_en = "Test your Level（developing)";

const video_text_ja = "サンプル動画を見る";
const video_text_ch = "观看实例动画";
const video_text_en = "Watch sample videos";

const designer_info_ja = "このサイトはHe.Y.JがBizMatesの技術テスト後、自分の技量に不満に思いつつ勉強と試行錯誤を重ねて作ったMatesTalk.Ver.5.0です。現在He.Y.JはC#, python, HTML, CSS, JavaScriptに触れており、VUEとUnityを使用できます。";
const designer_info_ch = "此网页由He.Y.J在BizMates技术测试后，对自己的技术感到不满，通过学习和试错作成的MatesTalk.Ver.5.0。现在He.Y.J能够使用的编程语言有C#，Python,HTML,CSS,JavaScript,能使用VUE框架和Unity。";
const designer_info_en = "This website is made by He.Y.J through the study, trial and error after the techenique test of BizMates for felt unsatisfied of selves technique. He.Y.J now knows about C#, Python, HTML, CSS, javaScript, is able to use VUE and Unity.";

const mates_link_ja = "もっと知りたい方はこちらへ";
const mates_link_ch = "点我获取更多信息"; 
const mates_link_en = "further information"; 

const current_q_text = ref(q_text_ja);
const current_video_text = ref(video_text_ja)
const current_designer_info = ref(designer_info_ja);
const show_current_designer_info = ref("");
const current_link_info = ref(mates_link_ja);

const switch_q_and_video_text_lang = () =>{
  if(current_lang.value === lang_set[0]){
    current_q_text.value = q_text_ja;
    current_video_text.value = video_text_ja;
    current_designer_info.value = designer_info_ja;
    current_link_info.value = mates_link_ja;
  }
  else if(current_lang.value === lang_set[1]){
    current_q_text.value = q_text_ch;
    current_video_text.value = video_text_ch;
    current_designer_info.value = designer_info_ch;
    current_link_info.value = mates_link_ch;

  }
  else if(current_lang.value === lang_set[2]){
    current_q_text.value = q_text_en;
    current_video_text.value = video_text_en;
    current_designer_info.value = designer_info_en;
    current_link_info.value = mates_link_en;
    
  }
}

const show_designer_info = (current_designer_info) =>{
  show_current_designer_info.value = current_designer_info;

}
const hide_designer_info = () =>{
  show_current_designer_info.value = " ";
}




</script>

<template>
  <!-- catch phrases show on left page -->
  <div class="catch_phrase_box">
    <h1 class="title">{{ current_title }}</h1>
    <h2 class="catch_phrase">{{ current_catch_phrase1}}</h2>
    <h3 class="catch_phrase2">{{ current_catch_phrase2}}</h3>
  </div>

  <!--study messages show below on left page-->
  <div class="study_info_box">
    <div class="info_container">
      <div class="info_button" @mouseover="switch_current_info('to_beginner')">
        {{ button_info[current_lang].to_beginner}}
      </div>
      <div class="info_button" @mouseover="switch_current_info('study_info')">
        {{ button_info[current_lang].study_info}}
      </div>
      <div class="info_button" @mouseover="switch_current_info('improvment')">
        {{ button_info[current_lang].improvment}}
      </div>
      <div class="info_button" @mouseover="switch_current_info('to_business')">
        {{button_info[current_lang].to_business}}
      </div>
    </div>
    <div class="show_information">
      <p>{{ current_study_info }}</p>
    </div>
  </div>

  <!-- Switch langguage buttons on right page -->
  <div class="langguage_choice">
    <button @click="switch_lang(lang_set[0]); switch_current_titles(lang_set[0]); switch_q_and_video_text_lang()" class="langguage_button">日本語</button>
    <button @click="switch_lang(lang_set[1]); switch_current_titles(lang_set[1]); switch_q_and_video_text_lang()" class="langguage_button">中文</button>
    <button @click="switch_lang(lang_set[2]); switch_current_titles(lang_set[2]); switch_q_and_video_text_lang()" class="langguage_button">English</button>
  </div>
<!-- Use the female and male character, always make sure the there is a slash before your file name! and your picuture file must be in the public folder!  -->
  <img src = "/animateBusinessGirl.png" alt = "Business girl" class = "girl"> 

  <button class = "my_chara_botton">
    <img @mouseover = "show_designer_info(current_designer_info)" @mouseleave = "hide_designer_info()" src = "/myChara.png" alt = "designer_info" class = "designer">
  </button>
<button class = "circle"> {{current_q_text}} </button>
<div>
    <a href="/MatesTalkDemo//WatchVideos.html" class="circle_1">
      {{ current_video_text }}
    </a>
</div>
<div class = "designer_info">{{show_current_designer_info}}</div>

<!-- link buttons on right page -->
<a href="https://www.bizmates.jp" class="jump_to_bizM">
  {{current_link_info}}
  </a>


</template>



<style scoped>
.jump_to_bizM{
 
  position:absolute;
  top:65vh;
  right:120px;
  border-radius: 30px;
  width: 500px;
  height: 80px;
  background-color: lightblue;
  text-align: center;
  line-height: 70px;  /* 让文字垂直居中 */
  cursor: pointer;
  color: #454607;
  text-decoration: none; /* 去掉下划线 */
  font-size: 2em;
}
.jump_to_bizM:hover{
  background-color: deepskyblue;
}
.designer_info{
  position:absolute;
  top:75vh;
  right:150px;
  width:500px;
  height:auto;
  display: flex;/*use flex to organize the postiion of elements */
  flex-direction: column; /* set the direction as column */
  justify-content: center;/* horizon center */
  align-items: flex-start;/* start from left */
  text-indent:1em;
  color:#1f1f69;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 1.3em;
  
  
  

}
.circle{
  position:absolute;
  top:250px;
  right:450px;
  width: 200px;
  height: 75px;
  padding:20px;
  border-radius: 40px;
  display: flex;
  text-align: center;
  padding-bottom: 30px;
  justify-content: center;
  text-align: center;
  color:#1f1f69;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 1.3em;
  background:linear-gradient(to right,rgb(231, 231, 77),rgb(227, 230, 207));
  
}
.circle_1{
  position:absolute;
  top:250px;
  right:90px;
  width: 250px;
  height: 75px;
  padding:20px;
  border-radius: 40px;
  display: flex;
  text-align: center;
  justify-content: center;
  color:#1f1f69;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 1.3em;
  background:linear-gradient(to right,rgb(231, 231, 77),rgb(227, 230, 207));
}
.designer{
  position:fixed;
  top:85vh;
  right:0px;
  width:150px;
  height:auto;
}

.girl{
  position:absolute;
  top:150px;
  right:245px;
  width:250px;
  height:auto;
  cursor:pointer;
}
.langguage_button{
  width: 200px;
  height: 50px;
 
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  font-family: 'Noto Sans JP', sans-serif;
  font-size: 20px;
  color: #19191b;
  cursor:pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}
.langguage_choice{
  position:absolute;
  top: 0px;
  right: 0px;
  width: 400px;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap:30px;
  
  border-radius: 0 0 20px 0;
 
}
.show_information p{
  margin: 0;
  padding: 0;
  text-indent: 1em; /* indentation for the first line */
        
}
.show_information{
  position:absolute;
  top: 15vh;
  left: 0px;
  width: 1100px;
  height: 305px;
  display: flex;/*use flex to organize the postiion of elements */
  flex-direction: column; /* set the direction as column */
  justify-content: center;/* horizon center */
  align-items: flex-start;/* start from left */
  
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  border-radius: 0 0 20px 0;

  font-family: 'Noto Sans JP', sans-serif;
  font-size: 1.5em;
  color: #fbfbfd;
 
  text-align: left;
}

/* set the property of information shower */
.info_button{
  width: 230px;
  height: 50px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 

  font-family: 'Noto Sans JP', sans-serif;
  font-size: 1.5em;
  color: #eeeef3;
  text-align: center;
  cursor:pointer;
  
}

/*set the property  of the info container box */
.info_container{
  position:absolute;
  top: 0px;
  left: 0px;
  width: 1100px;
  height: 100px;
  margin-top:30px;
  display: flex;
  flex-direction: row;
  gap:50px;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  border-radius: 0 0 20px 0;
  
}

/* set the property of the study info box */
.study_info_box{
  position:absolute;
  top:460px; /* set the top position */
  left: 0px; /* set the left position */
  width: 1100px; /* set the width as long as catch_phrase_box*/
  height: 450px; /* set the height as high as catch_catch_phrae_box*/
  display: flex;
  flex-direction: column;
  justify-content: center;  /* horizon center  */
  align-items: center;      /* vertical center */
  background: linear-gradient(90deg, #6f1a72, #646cff);
  border-radius: 0 0 20px 0; /* set the border radius */
}
.catch_phrase_box{
  position: absolute; /* set the  */
  top: 10px;
  left: 0px;
  /* set the width and height, font or other elements style */
  width: 1100px;
  height:450px;
  display: flex;
  flex-direction: column;
  justify-content: center;  /* horizon center  */
  align-items: center;      /* vertical center */
  border-radius: 0 20px 0 0; /* set the border radius */
/* set background color*/
  background: linear-gradient(90deg, #6f1a72, #646cff);
 
}
.title{
  position:absolute;
  top: 5vw;
  left: 20vh;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 5em;
  color: #646cff;
  text-align: center;
  position:absolute;
  
}
.catch_phrase{
  position:absolute;
  top: 13vw;
  left: 20vh;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 2em;
  color: #646cff;
  text-align: center;
  position:absolute;
 
  
}

.catch_phrase2{
    position:absolute;
    top: 17vw;
    left: 35vh;
    font-family: 'Noto Sans JP', sans-serif;
    font-size: 2em;
    color: #646cff;
    text-align: center;
    position:absolute;
   
  }

  html, body {
  margin: 0;
  padding: 0;
  /* reset the defualt style */
}

</style>