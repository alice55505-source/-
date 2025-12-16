import { Level, Audience } from "../types";

export const CATEGORY_NAMES = [
  "認識彼此",
  "生命經歷",
  "日常生活與屬靈追求",
  "召會生活與肢體",
  "展望、負擔與成全",
  "生活、人際與個人故事"
] as const;

export type CategoryType = typeof CATEGORY_NAMES[number];

export interface QuestionDef {
  text: string;
  category: string;
  level: Level;
  tags: string[]; // Functional tags (e.g., 'church-term', 'prayer')
  suitableFor?: Audience[]; // If undefined/empty, suitable for ALL (General)
}

// Helper to quickly create questions
const q = (text: string, category: string, level: Level, tags: string[] = [], suitableFor?: Audience[]): QuestionDef => ({
  text, category, level, tags, suitableFor
});

export const QUESTION_BANK: QuestionDef[] = [
  // ==========================================
  // 1. 認識彼此 (Icebreakers)
  // ==========================================

  // --- 通用 (General) ---
  q("你最喜歡的食物是什麼？", "認識彼此", Level.ONE, ["favorite", "food"]),
  q("分享一個你名字的由來，或是你的綽號？", "認識彼此", Level.ONE, ["general"]),
  q("用三個形容詞形容你自己的性格。", "認識彼此", Level.ONE, ["general"]),
  q("你最喜歡的季節是什麼？為什麼？", "認識彼此", Level.ONE, ["season", "favorite"]),
  q("你平常休閒時間都在做什麼？", "認識彼此", Level.ONE, ["leisure"]),
  q("你最喜歡的電影或影集是哪一部？", "認識彼此", Level.ONE, ["movie", "tv"]),
  q("你小時候的夢想是什麼？", "認識彼此", Level.ONE, ["childhood", "dream"]),
  q("你最喜歡的顏色是什麼？", "認識彼此", Level.ONE, ["color"]),
  q("你有沒有什麼怪癖或小習慣？", "認識彼此", Level.ONE, ["habit"]),
  q("你最喜歡的台灣小吃是什麼？", "認識彼此", Level.ONE, ["food", "taiwan"]),
  q("你喜歡早起還是晚睡？", "認識彼此", Level.ONE, ["habit", "lifestyle"]),
  q("你通常怎麼紓壓？", "認識彼此", Level.ONE, ["stress-relief"]),
  q("你比較喜歡山還是海？為什麼？", "認識彼此", Level.ONE, ["general"]),
  q("如果不考慮金錢，你最想從事什麼工作？", "認識彼此", Level.ONE, ["general"]),
  q("你最喜歡的動物是什麼？", "認識彼此", Level.ONE, ["animal"]),
  q("你最近讀過的一本好書是什麼？", "認識彼此", Level.ONE, ["reading"]),
  q("你覺得自己最像哪一種動物？為什麼？", "認識彼此", Level.ONE, ["animal", "personality"]),
  q("你擅長或想學的樂器是什麼？", "認識彼此", Level.ONE, ["music", "hobbies"]),
  q("你喜歡在家裡煮飯還是外出用餐？", "認識彼此", Level.ONE, ["food", "lifestyle"]),
  q("你覺得自己最大的優點是什麼？", "認識彼此", Level.ONE, ["strength"]),
  q("你最近學到的一個新技能或知識是什麼？", "認識彼此", Level.ONE, ["learning"]),
  q("你喜歡聽什麼類型的音樂？", "認識彼此", Level.ONE, ["music"]),
  q("你覺得最放鬆的活動是什麼？", "認識彼此", Level.ONE, ["relaxation"]),
  q("你喜歡旅行嗎？最難忘的旅行經驗是？", "認識彼此", Level.ONE, ["travel"]),
  q("你覺得自己最需要改進的地方是什麼？", "認識彼此", Level.ONE, ["growth"]),
  q("你喜歡看哪一類型的運動比賽？", "認識彼此", Level.ONE, ["sports"]),
  q("你覺得什麼樣的天氣最舒服？", "認識彼此", Level.ONE, ["weather"]),
  q("你喜歡喝咖啡、茶，還是其他飲料？", "認識彼此", Level.ONE, ["beverage"]),
  q("你覺得自己是一個有創意的人嗎？舉個例子。", "認識彼此", Level.ONE, ["creativity"]),
  q("你喜歡逛書店、唱片行，還是其他類型的店？", "認識彼此", Level.ONE, ["shopping"]),
  q("你覺得自己比較像內向還是外向的人？", "認識彼此", Level.ONE, ["personality"]),
  q("你喜歡看日出還是日落？", "認識彼此", Level.ONE, ["nature"]),
  q("你最近看過覺得很棒的展覽或表演是什麼？", "認識彼此", Level.ONE, ["art", "culture"]),
  q("你喜歡收集東西嗎？收集什麼？", "認識彼此", Level.ONE, ["hobbies"]),
  q("你覺得自己最像哪個卡通或動漫人物？", "認識彼此", Level.ONE, ["pop-culture"]),
  q("你喜歡吃甜食還是鹹食？", "認識彼此", Level.ONE, ["food"]),
  q("你覺得自己最厲害的才藝是什麼？", "認識彼此", Level.ONE, ["talent"]),
  q("你喜歡看哪一類型的書？小說、傳記、科普...", "認識彼此", Level.ONE, ["reading"]),
  q("你覺得自己最不擅長應付哪種人？", "認識彼此", Level.ONE, ["personality"]),
  q("你喜歡看喜劇片、動作片，還是其他類型的電影？", "認識彼此", Level.ONE, ["movie"]),
  q("你覺得自己最像哪個季節？為什麼？", "認識彼此", Level.ONE, ["season", "personality"]),
  q("你喜歡去遊樂園還是博物館？", "認識彼此", Level.ONE, ["leisure"]),
  q("你覺得自己最像哪種植物？為什麼？", "認識彼此", Level.ONE, ["nature", "personality"]),
  q("你喜歡吃水果還是蔬菜？", "認識彼此", Level.ONE, ["food"]),
  q("你覺得自己最像哪種交通工具？為什麼？", "認識彼此", Level.ONE, ["fun", "personality"]),
  q("你喜歡聽現場演唱會還是看線上直播？", "認識彼此", Level.ONE, ["music"]),
  q("你覺得自己最像哪種甜點？為什麼？", "認識彼此", Level.ONE, ["food", "fun", "personality"]),
  q("你喜歡爬山還是騎腳踏車？", "認識彼此", Level.ONE, ["sports", "outdoor"]),
  q("你覺得自己最像哪種自然景觀？為什麼？", "認識彼此", Level.ONE, ["nature", "personality"]),
  q("你喜歡吃麵還是吃飯？", "認識彼此", Level.ONE, ["food"]),
  q("你覺得自己最像哪個歷史人物？為什麼？", "認識彼此", Level.ONE, ["history", "personality"]),
  q("你喜歡看運動比賽還是自己參與運動？", "認識彼此", Level.ONE, ["sports"]),
  q("你覺得自己最像哪種寶石或礦物？為什麼？", "認識彼此", Level.ONE, ["fun", "personality"]),
  q("你喜歡吃火鍋、燒烤，還是其他類型的聚餐？", "認識彼此", Level.ONE, ["food", "social"]),
  q("你覺得自己最像哪種天氣？為什麼？", "認識彼此", Level.ONE, ["weather", "personality"]),
  q("你喜歡看電影還是追劇？", "認識彼此", Level.ONE, ["movie", "tv"]),
  q("你覺得自己最像哪種棋類遊戲？為什麼？", "認識彼此", Level.ONE, ["games", "personality"]),
  q("你喜歡吃中式料理還是西式料理？", "認識彼此", Level.ONE, ["food"]),
  q("你覺得自己最像哪種樂器？為什麼？", "認識彼此", Level.ONE, ["music", "personality"]),
  q("你喜歡去海邊玩水還是在山上健行？", "認識彼此", Level.ONE, ["nature", "outdoor"]),
  q("你覺得自己最像哪種棋盤遊戲？為什麼？", "認識彼此", Level.ONE, ["games", "personality"]),
  q("你喜歡吃早餐、午餐，還是晚餐？", "認識彼此", Level.ONE, ["food", "lifestyle"]),
  q("你覺得自己最像哪種建築風格？為什麼？", "認識彼此", Level.ONE, ["architecture", "personality"]),
  q("你喜歡看書還是聽有聲書？", "認識彼此", Level.ONE, ["reading"]),
  q("你覺得自己最像哪種藝術形式？繪畫、音樂、雕塑...", "認識彼此", Level.ONE, ["art", "personality"]),
  q("你喜歡吃熱食還是冷食？", "認識彼此", Level.ONE, ["food"]),
  q("你覺得自己最像哪種神話生物？為什麼？", "認識彼此", Level.ONE, ["fun", "personality"]),
  q("你喜歡自己一個人獨處還是跟朋友在一起？", "認識彼此", Level.ONE, ["social", "personality"]),
  q("你覺得自己最像哪種棋類遊戲的策略？為什麼？", "認識彼此", Level.ONE, ["games", "personality"]),
  q("你喜歡吃家常菜還是異國料理？", "認識彼此", Level.ONE, ["food"]),
  q("你覺得自己最像哪種科學領域？物理、化學、生物...", "認識彼此", Level.ONE, ["science", "personality"]),
  q("你喜歡看紀錄片還是劇情片？", "認識彼此", Level.ONE, ["movie", "tv"]),
  q("你覺得自己最像哪種文學類型？小說、詩歌、散文...", "認識彼此", Level.ONE, ["literature", "personality"]),
  q("你喜歡吃湯麵還是乾麵？", "認識彼此", Level.ONE, ["food"]),
  q("你覺得自己最像哪種節日？為什麼？", "認識彼此", Level.ONE, ["holiday", "personality"]),
  q("你喜歡聽快歌還是慢歌？", "認識彼此", Level.ONE, ["music"]),
  q("你覺得自己最像哪種顏色？為什麼？", "認識彼此", Level.ONE, ["color", "personality"]),
  q("你喜歡吃米飯還是麵包？", "認識彼此", Level.ONE, ["food"]),
  q("你覺得自己最像哪種時間？早晨、中午、晚上...", "認識彼此", Level.ONE, ["time", "personality"]),
  q("你喜歡看電視還是聽廣播？", "認識彼此", Level.ONE, ["media"]),
  q("你覺得自己最像哪種氣候？熱帶、溫帶、寒帶...", "認識彼此", Level.ONE, ["weather", "personality"]),
  q("你喜歡吃水果還是喝果汁？", "認識彼此", Level.ONE, ["food"]),
  q("你覺得自己最像哪種地形？山脈、平原、河流...", "認識彼此", Level.ONE, ["geography", "personality"]),
  q("你喜歡看漫畫還是小說？", "認識彼此", Level.ONE, ["reading"]),
  q("你覺得自己最像哪種元素？金、木、水、火、土...", "認識彼此", Level.ONE, ["fun", "personality"]),
  q("你喜歡吃炸的還是蒸煮的食物？", "認識彼此", Level.ONE, ["food"]),
  q("你覺得自己最像哪種星座特質？", "認識彼此", Level.ONE, ["fun", "personality"]),
  q("你喜歡聽故事還是講故事？", "認識彼此", Level.ONE, ["social", "communication"]),
  q("你覺得自己最像哪種神話故事的角色？", "認識彼此", Level.ONE, ["fun", "personality"]),
  q("你喜歡吃有嚼勁的食物還是軟嫩的食物？", "認識彼此", Level.ONE, ["food"]),
  q("你覺得自己最像哪種寶可夢？為什麼？", "認識彼此", Level.ONE, ["pop-culture", "fun", "personality"]),
  q("你喜歡看魔術表演還是特技表演？", "認識彼此", Level.ONE, ["entertainment"]),
  q("你覺得自己最像哪種童話故事的角色？", "認識彼此", Level.ONE, ["fun", "personality"]),
  q("你喜歡吃有湯的料理還是沒湯的料理？", "認識彼此", Level.ONE, ["food"]),
  q("你覺得自己最像哪種交通工具？腳踏車、汽車、飛機...", "認識彼此", Level.ONE, ["fun", "personality"]),
  q("你喜歡看煙火還是看星星？", "認識彼此", Level.ONE, ["leisure"]),
  q("你覺得自己最像哪種棋類遊戲的棋子？為什麼？", "認識彼此", Level.ONE, ["games", "fun", "personality"]),
  q("你喜歡吃辣還是不辣？", "認識彼此", Level.ONE, ["food"]),
  q("你覺得自己最像哪種遊戲角色？戰士、法師、牧師...", "認識彼此", Level.ONE, ["games", "fun", "personality"]),
  q("你喜歡看運動比賽的現場直播還是電視轉播？", "認識彼此", Level.ONE, ["sports"]),
  q("你覺得自己最像哪種桌遊？為什麼？", "認識彼此", Level.ONE, ["games", "fun", "personality"]),
  q("你喜歡吃海鮮還是肉類？", "認識彼此", Level.ONE, ["food"]),
  q("你覺得自己最像哪種手機APP？為什麼？", "認識彼此", Level.ONE, ["tech", "fun", "personality"]),
  q("你喜歡看電影首映還是等串流上架？", "認識彼此", Level.ONE, ["movie"]),
  q("你覺得自己最像哪種社群媒體？為什麼？", "認識彼此", Level.ONE, ["tech", "fun", "personality"]),
  q("你喜歡吃夜市小吃還是餐廳料理？", "認識彼此", Level.ONE, ["food"]),
  q("你覺得自己最像哪種家電？為什麼？", "認識彼此", Level.ONE, ["fun", "personality"]),
  q("你喜歡看實況主玩遊戲還是自己玩？", "認識彼此", Level.ONE, ["games"]),
  q("你覺得自己最像哪種交通工具的聲音？為什麼？", "認識彼此", Level.ONE, ["fun", "personality"]),
  q("你喜歡吃有加蔥蒜的食物嗎？", "認識彼此", Level.ONE, ["food"]),
  q("你覺得自己最像哪種自然現象？風、雨、雷、電...", "認識彼此", Level.ONE, ["nature", "fun", "personality"]),
  q("你喜歡看推理劇還是愛情劇？", "認識彼此", Level.ONE, ["tv"]),
  q("你覺得自己最像哪種數學符號？為什麼？", "認識彼此", Level.ONE, ["fun", "personality"]),
  q("你喜歡吃有加香料的食物嗎？", "認識彼此", Level.ONE, ["food"]),
  q("你覺得自己最像哪種語言？為什麼？", "認識彼此", Level.ONE, ["fun", "personality"]),
  q("你喜歡看科幻片還是奇幻片？", "認識彼此", Level.ONE, ["movie"]),
  q("你覺得自己最像哪種化學元素？為什麼？", "認識彼此", Level.ONE, ["science", "fun", "personality"]),
  q("你喜歡吃有加起司的食物嗎？", "認識彼此", Level.ONE, ["food"]),
  q("你覺得自己最像哪種物理定律？為什麼？", "認識彼此", Level.ONE, ["science", "fun", "personality"]),
  q("你喜歡看恐怖片還是喜劇片？", "認識彼此", Level.ONE, ["movie"]),
  q("你覺得自己最像哪種生物細胞？為什麼？", "認識彼此", Level.ONE, ["science", "fun", "personality"]),
  q("你喜歡吃有加蛋的食物嗎？", "認識彼此", Level.ONE, ["food"]),
  q("你覺得自己最像哪種天文現象？日蝕、月蝕、流星雨...", "認識彼此", Level.ONE, ["science", "fun", "personality"]),
  q("你喜歡看歷史劇還是現代劇？", "認識彼此", Level.ONE, ["tv"]),
  q("你覺得自己最像哪種地質構造？火山、峽谷、鐘乳石洞...", "認識彼此", Level.ONE, ["geography", "fun", "personality"]),
  q("你喜歡吃有加糖的食物嗎？", "認識彼此", Level.ONE, ["food"]),
  q("你覺得自己最像哪種生態系？雨林、沙漠、海洋...", "認識彼此", Level.ONE, ["science", "fun", "personality"]),
  q("你喜歡看動畫片還是真人電影？", "認識彼此", Level.ONE, ["movie"]),
  q("你覺得自己最像哪種程式語言？為什麼？", "認識彼此", Level.ONE, ["tech", "fun", "personality"]),
  q("你喜歡吃有加醋的食物嗎？", "認識彼此", Level.ONE, ["food"]),
  q("你覺得自己最像哪種設計風格？簡約、復古、工業風...", "認識彼此", Level.ONE, ["art", "fun", "personality"]),
  q("你喜歡看音樂劇還是歌劇？", "認識彼此", Level.ONE, ["art", "performance"]),
  q("你覺得自己最像哪種繪畫流派？印象派、野獸派、抽象派...", "認識彼此", Level.ONE, ["art", "fun", "personality"]),
  q("你喜歡吃有加醬油的食物嗎？", "認識彼此", Level.ONE, ["food"]),
  q("你覺得自己最像哪種舞蹈類型？芭蕾、街舞、國標...", "認識彼此", Level.ONE, ["art", "fun", "personality"]),
  q("你喜歡看舞台劇還是相聲？", "認識彼此", Level.ONE, ["performance"]),
  q("你覺得自己最像哪種攝影風格？風景、人像、街拍...", "認識彼此", Level.ONE, ["art", "fun", "personality"]),


  // --- 青少年 (Teens) 20題 ---
  q("在學校裡，你覺得最酷的一件事是什麼？", "認識彼此", Level.ONE, ["school"], [Audience.TEENS]),
  q("你最喜歡哪個YouTuber或網紅？為什麼？", "認識彼此", Level.ONE, ["pop-culture"], [Audience.TEENS]),
  q("如果你可以擁有一種超能力，你想要什麼？", "認識彼此", Level.ONE, ["fun"], [Audience.TEENS]),
  q("最近玩什麼遊戲或看什麼動漫讓你很入迷？", "認識彼此", Level.ONE, ["hobbies"], [Audience.TEENS]),
  q("你覺得大人最不了解你的一點是什麼？", "認識彼此", Level.TWO, ["deep"], [Audience.TEENS]),
  q("【二選一】永遠不能用手機 vs 永遠不能吃零食", "認識彼此", Level.ONE, ["choice"], [Audience.TEENS]),
  q("【二選一】擁有無限金錢 vs 擁有讀心術", "認識彼此", Level.ONE, ["choice"], [Audience.TEENS]),
  q("如果校規由你訂，第一條改什麼？", "認識彼此", Level.ONE, ["school"], [Audience.TEENS]),
  q("最想和哪個動漫角色交換身份？", "認識彼此", Level.ONE, ["anime"], [Audience.TEENS]),
  q("手機裡最常用的APP前三名？", "認識彼此", Level.ONE, ["tech"], [Audience.TEENS]),
  q("你覺得最過時的流行語？", "認識彼此", Level.ONE, ["pop-culture"], [Audience.TEENS]),
  q("【二選一】當網紅 vs 當電競選手？", "認識彼此", Level.ONE, ["choice"], [Audience.TEENS]),
  q("IG限動最常出現的內容？", "認識彼此", Level.ONE, ["social-media"], [Audience.TEENS]),
  q("最想擁有的3C產品？", "認識彼此", Level.ONE, ["tech"], [Audience.TEENS]),
  q("【二選一】整天打遊戲 vs 整天追劇？", "認識彼此", Level.ONE, ["choice"], [Audience.TEENS]),
  q("最想取消的校規？", "認識彼此", Level.ONE, ["school"], [Audience.TEENS]),
  q("最近在迷的偶像或團體？", "認識彼此", Level.ONE, ["pop-culture"], [Audience.TEENS]),
  q("用三個emoji形容你的生活？", "認識彼此", Level.ONE, ["fun"], [Audience.TEENS]),
  q("最想去的動漫場景？", "認識彼此", Level.ONE, ["anime"], [Audience.TEENS]),
  q("【二選一】全校第一名 vs 全校最受歡迎？", "認識彼此", Level.ONE, ["choice"], [Audience.TEENS]),

  // --- 年長聖徒 (Elderly) 20題 ---
  q("分享您年輕時最難忘的回憶", "認識彼此", Level.ONE, ["memory"], [Audience.ELDERLY]),
  q("您覺得現在和以前生活最大的不同？", "認識彼此", Level.ONE, ["life"], [Audience.ELDERLY]),
  q("分享您最拿手的家常菜", "認識彼此", Level.ONE, ["cooking"], [Audience.ELDERLY]),
  q("您最喜歡的一首老詩歌？", "認識彼此", Level.ONE, ["hymn"], [Audience.ELDERLY]),
  q("給年輕人一個建議", "認識彼此", Level.TWO, ["wisdom"], [Audience.ELDERLY]),
  q("您小時候最喜歡的遊戲？", "認識彼此", Level.ONE, ["childhood"], [Audience.ELDERLY]),
  q("您懷念的傳統節慶習俗？", "認識彼此", Level.ONE, ["tradition"], [Audience.ELDERLY]),
  q("您用過最耐用的物品？", "認識彼此", Level.ONE, ["memory"], [Audience.ELDERLY]),
  q("最想傳授的生活智慧？", "認識彼此", Level.TWO, ["wisdom"], [Audience.ELDERLY]),
  q("【二選一】手寫信 vs 手機訊息？", "認識彼此", Level.ONE, ["choice"], [Audience.ELDERLY]),
  q("您覺得消失最可惜的老店？", "認識彼此", Level.ONE, ["tradition"], [Audience.ELDERLY]),
  q("最懷念的傳統市場點心？", "認識彼此", Level.ONE, ["food"], [Audience.ELDERLY]),
  q("您那個年代最流行的休閒活動？", "認識彼此", Level.ONE, ["leisure"], [Audience.ELDERLY]),
  q("最難忘的廣播節目？", "認識彼此", Level.ONE, ["memory"], [Audience.ELDERLY]),
  q("您懷念的傳統技藝？", "認識彼此", Level.ONE, ["tradition"], [Audience.ELDERLY]),
  q("【二選一】腳踏車 vs 摩托車？", "認識彼此", Level.ONE, ["choice"], [Audience.ELDERLY]),
  q("您最珍惜的老照片故事？", "認識彼此", Level.ONE, ["memory"], [Audience.ELDERLY]),
  q("您最難忘的童年玩具？", "認識彼此", Level.ONE, ["childhood"], [Audience.ELDERLY]),
  q("您覺得最重要的家傳物品？", "認識彼此", Level.TWO, ["wisdom"], [Audience.ELDERLY]),
  q("給孫輩最重要的生活建議？", "認識彼此", Level.TWO, ["wisdom"], [Audience.ELDERLY]),

  // --- 福音朋友 (Gospel Friends) 40題 ---
  q("你心目中理想的「幸福」是什麼樣子？", "認識彼此", Level.ONE, ["life"], [Audience.GOSPEL_FRIENDS]),
  q("如果神真的存在，最想問祂的一個問題？", "認識彼此", Level.TWO, ["curiosity"], [Audience.GOSPEL_FRIENDS]),
  q("分享讓你感到平靜的地方", "認識彼此", Level.ONE, ["general"], [Audience.GOSPEL_FRIENDS]),
  q("你對「基督徒」的第一印象？", "認識彼此", Level.ONE, ["impression"], [Audience.GOSPEL_FRIENDS]),
  q("你覺得人生的意義是什麼？", "認識彼此", Level.TWO, ["deep"], [Audience.GOSPEL_FRIENDS]),
  q("當你感到無助時會怎麼做？", "認識彼此", Level.ONE, ["life"], [Audience.GOSPEL_FRIENDS]),
  q("【二選一】知道未來 vs 改變過去？", "認識彼此", Level.ONE, ["choice"], [Audience.GOSPEL_FRIENDS]),
  q("你對「平安」的定義？", "認識彼此", Level.TWO, ["deep"], [Audience.GOSPEL_FRIENDS]),
  q("最想感謝卻沒機會說的人？", "認識彼此", Level.TWO, ["life"], [Audience.GOSPEL_FRIENDS]),
  q("你覺得人需要信仰嗎？為什麼？", "認識彼此", Level.TWO, ["faith"], [Audience.GOSPEL_FRIENDS]),
  q("你心中「美好的生命」是什麼樣子？", "認識彼此", Level.TWO, ["life"], [Audience.GOSPEL_FRIENDS]),
  q("【二選一】財富自由 vs 心靈自由？", "認識彼此", Level.ONE, ["choice"], [Audience.GOSPEL_FRIENDS]),
  q("你遇過最溫暖的幫助？", "認識彼此", Level.ONE, ["life"], [Audience.GOSPEL_FRIENDS]),
  q("你對「禱告」的看法？", "認識彼此", Level.TWO, ["faith"], [Audience.GOSPEL_FRIENDS]),
  q("你覺得什麼是「真正的愛」？", "認識彼此", Level.TWO, ["deep"], [Audience.GOSPEL_FRIENDS]),
  q("你喜歡的節日背後意義？", "認識彼此", Level.ONE, ["culture"], [Audience.GOSPEL_FRIENDS]),
  q("你對「死亡」的看法？", "認識彼此", Level.THREE, ["deep"], [Audience.GOSPEL_FRIENDS]),
  q("【二選一】被所有人理解 vs 理解所有人？", "認識彼此", Level.TWO, ["choice"], [Audience.GOSPEL_FRIENDS]),
  q("你心中「家」的定義？", "認識彼此", Level.TWO, ["life"], [Audience.GOSPEL_FRIENDS]),
  q("你遇過最難的抉擇？", "認識彼此", Level.TWO, ["life"], [Audience.GOSPEL_FRIENDS]),
  q("你覺得「寬恕」重要嗎？", "認識彼此", Level.TWO, ["deep"], [Audience.GOSPEL_FRIENDS]),
  q("你對「聖經」的印象？", "認識彼此", Level.ONE, ["impression"], [Audience.GOSPEL_FRIENDS]),
  q("你希望被記住的特質？", "認識彼此", Level.TWO, ["life"], [Audience.GOSPEL_FRIENDS]),
  q("【二選一】天才但孤獨 vs 平凡但幸福？", "認識彼此", Level.TWO, ["choice"], [Audience.GOSPEL_FRIENDS]),
  q("你經歷過最神奇的事？", "認識彼此", Level.ONE, ["life"], [Audience.GOSPEL_FRIENDS]),
  q("你對「教會活動」的想像？", "認識彼此", Level.ONE, ["impression"], [Audience.GOSPEL_FRIENDS]),
  q("你覺得「祈禱」有效嗎？", "認識彼此", Level.TWO, ["faith"], [Audience.GOSPEL_FRIENDS]),
  q("你心中「成功的人生」？", "認識彼此", Level.TWO, ["life"], [Audience.GOSPEL_FRIENDS]),
  q("【二選一】預知死期 vs 不知死期？", "認識彼此", Level.THREE, ["choice"], [Audience.GOSPEL_FRIENDS]),
  q("你對「神蹟」的看法？", "認識彼此", Level.TWO, ["faith"], [Audience.GOSPEL_FRIENDS]),
  q("你遇過最巧合的事？", "認識彼此", Level.ONE, ["life"], [Audience.GOSPEL_FRIENDS]),
  q("你覺得「命運」能改變嗎？", "認識彼此", Level.TWO, ["deep"], [Audience.GOSPEL_FRIENDS]),
  q("你對「永生」的想法？", "認識彼此", Level.THREE, ["deep"], [Audience.GOSPEL_FRIENDS]),
  q("【二選一】完美但短暫 vs 有缺憾但長久？", "認識彼此", Level.TWO, ["choice"], [Audience.GOSPEL_FRIENDS]),
  q("你參觀廟宇或教堂的感受？", "認識彼此", Level.ONE, ["culture"], [Audience.GOSPEL_FRIENDS]),
  q("你覺得「苦難」有意義嗎？", "認識彼此", Level.THREE, ["deep"], [Audience.GOSPEL_FRIENDS]),
  q("你聽過最感動的生命故事？", "認識彼此", Level.ONE, ["life"], [Audience.GOSPEL_FRIENDS]),
  q("你對「罪」的理解？", "認識彼此", Level.THREE, ["deep"], [Audience.GOSPEL_FRIENDS]),
  q("【二選一】知道真理但痛苦 vs 無知但快樂？", "認識彼此", Level.THREE, ["choice"], [Audience.GOSPEL_FRIENDS]),
  q("你覺得「人死後」會如何？", "認識彼此", Level.THREE, ["deep"], [Audience.GOSPEL_FRIENDS]),

  // ==========================================
  // 2. 生命經歷 (Spiritual Experience)
  // ==========================================

  // --- 通用 (General) 120題 ---
  q("分享一個你覺得「主是真實的」的經歷。", "生命經歷", Level.TWO, ["experience"]),
  q("分享一次你的禱告蒙主垂聽的經歷。", "生命經歷", Level.TWO, ["prayer"]),
  q("有沒有什麼時候你覺得主很安慰你？", "生命經歷", Level.ONE, ["comfort"]),
  q("你覺得主最近在你身上有什麼新的帶領？", "生命經歷", Level.TWO, ["guidance"]),
  q("分享一次你在聚會中被主摸著的經歷。", "生命經歷", Level.ONE, ["meeting"]),
  q("你曾經有過信心動搖的時候嗎？怎麼走過來的？", "生命經歷", Level.THREE, ["faith"]),
  q("你覺得主在你生命中最大的奇蹟是什麼？", "生命經歷", Level.TWO, ["miracle"]),
  q("你曾經在身體軟弱時經歷主的力量？", "生命經歷", Level.TWO, ["health", "strength"]),
  q("你覺得自己最需要被主調整的是什麼？", "生命經歷", Level.TWO, ["growth"]),
  q("分享一次你傳福音的經歷，不論成功或失敗。", "生命經歷", Level.TWO, ["gospel-preaching"]),
  q("你有沒有在半夜禱告時突然感受到神的同在？", "生命經歷", Level.ONE, ["prayer", "presence"]), // ✩
  q("當你覺得很孤單的時候，神怎麼讓你覺得不孤單？", "生命經歷", Level.ONE, ["comfort", "loneliness"]), // ✩
  q("你遇過最神奇的禱告應允是什麼？可以分享一下嗎？", "生命經歷", Level.TWO, ["prayer", "miracle"]), // ✩
  q("在小排聚會中，哪一次讓你覺得『哇！主真的在說話』？", "生命經歷", Level.ONE, ["meeting", "guidance"]), // ✩
  q("你有沒有因為一句聖經經文，整個人生方向被改變的經驗？", "生命經歷", Level.TWO, ["bible", "guidance"]), // ✩
  q("當你對神超級失望時，後來怎麼重新相信祂的？", "生命經歷", Level.THREE, ["faith", "struggle"]), // ✩
  q("你覺得神最常用什麼方式對你說話？是透過人、聖經還是環境？", "生命經歷", Level.ONE, ["guidance", "communication"]), // ✩
  q("在服事中累到快崩潰時，神怎麼給你力量的？", "生命經歷", Level.TWO, ["service", "strength"]), // ✩
  q("你有沒有為一件小事禱告，結果神給你超大驚喜的經歷？", "生命經歷", Level.ONE, ["prayer", "joy"]), // ✩
  q("當你犯了大錯時，神怎麼讓你經歷祂的赦免和愛？", "生命經歷", Level.TWO, ["repentance", "love"]), // ✩
  q("在召會裡，哪一位聖徒的見證最衝擊你的生命？為什麼？", "生命經歷", Level.ONE, ["testimony", "community"]), // ✩
  q("你曾經在夢中清楚感受到神的指引嗎？那是什麼情況？", "生命經歷", Level.TWO, ["guidance", "dream"]), // ✩
  q("當你覺得『神啊，祢到底在哪裡？』的時候，後來怎麼找到祂的？", "生命經歷", Level.THREE, ["faith", "doubt"]), // ✩
  q("分享一個神用你想不到的方式供應你需要的經歷。", "生命經歷", Level.TWO, ["provision", "miracle"]), // ✩
  q("你有沒有在痛苦中經歷到一種說不出來的平安？那是怎樣的感覺？", "生命經歷", Level.ONE, ["comfort", "peace"]), // ✩
  q("當你讀聖經讀到一半突然被某句話電到，那是什麼經文？", "生命經歷", Level.ONE, ["bible", "revelation"]), // ✩
  q("你覺得神最近在調整你哪個壞習慣？過程辛苦嗎？", "生命經歷", Level.TWO, ["growth", "discipline"]), // ✩
  q("在傳福音時，你有沒有遇過讓你哭笑不得的神奇狀況？", "生命經歷", Level.ONE, ["gospel-preaching", "humor"]), // ✩
  q("當你覺得自己屬靈生命卡住時，神怎麼帶你突破？", "生命經歷", Level.TWO, ["growth", "breakthrough"]), // ✩
  q("你有沒有為仇敵禱告後，關係奇蹟般改變的經歷？", "生命經歷", Level.THREE, ["prayer", "reconciliation"]), // ✩
  q("在生病中，神怎麼讓你經歷祂是醫治的主？", "生命經歷", Level.TWO, ["health", "healing"]), // ✩
  q("你曾經在自然環境中（比如山上或海邊）強烈感受到神嗎？", "生命經歷", Level.ONE, ["creation", "presence"]), // ✩
  q("當你覺得禱告像在對空氣說話時，什麼讓你繼續堅持下去？", "生命經歷", Level.THREE, ["prayer", "perseverance"]), // ✩
  q("分享一個神保護你避開危險的『好險喔！』時刻。", "生命經歷", Level.ONE, ["protection", "miracle"]), // ✩
  q("在小排裡分享時，哪一次你邊說邊覺得『這真的是聖靈在動工』？", "生命經歷", Level.ONE, ["meeting", "spirit"]), // ✩
  q("你覺得神對你人生最意外的帶領是什麼？", "生命經歷", Level.TWO, ["guidance", "surprise"]), // ✩
  q("當你覺得自己不夠好時，神怎麼提醒你祂的愛？", "生命經歷", Level.ONE, ["love", "identity"]), // ✩
  q("你有沒有經歷過神用財務困境教你信心的功課？", "生命經歷", Level.TWO, ["faith", "finance"]), // ✩
  q("在服事中想放棄時，哪句話或哪個人讓你重新堅持？", "生命經歷", Level.TWO, ["service", "encouragement"]), // ✩
  q("你遇過最誇張的『巧合』，事後發現是神在幕後動工？", "生命經歷", Level.ONE, ["miracle", "guidance"]), // ✩
  q("當你為家人信主禱告多年都沒結果時，怎麼保持盼望？", "生命經歷", Level.THREE, ["prayer", "family"]), // ✩
  q("分享一個神用幽默感讓你學功課的經歷。", "生命經歷", Level.ONE, ["humor", "growth"]), // ✩
  q("你有沒有在唱詩歌時突然淚流不止的感動時刻？", "生命經歷", Level.ONE, ["worship", "emotion"]), // ✩
  q("當你覺得『神啊，這太不公平了！』時，祂怎麼回應你？", "生命經歷", Level.THREE, ["justice", "complaint"]), // ✩
  q("在低潮期，神有沒有透過某節聖經經文當成你的救命繩？", "生命經歷", Level.TWO, ["bible", "comfort"]), // ✩
  q("你曾經歷過神瞬間拿走你恐懼的平安嗎？那是什麼情境？", "生命經歷", Level.ONE, ["peace", "fear"]), // ✩
  q("當你覺得屬靈成長停滯時，什麼方法幫助你突破瓶頸？", "生命經歷", Level.TWO, ["growth", "stagnation"]), // ✩
  q("分享一個你本來不想服事，卻被神大大祝福的意外經歷。", "生命經歷", Level.TWO, ["service", "blessing"]), // ✩
  q("你有沒有為考試或工作面試禱告後，經歷神奇結果的時刻？", "生命經歷", Level.ONE, ["prayer", "work"]), // ✩
  q("當你對召會失望時，神怎麼恢復你的熱情？", "生命經歷", Level.THREE, ["community", "renewal"]), // ✩
  q("在關係破裂後，神怎麼帶領你和好或釋懷？", "生命經歷", Level.TWO, ["relationship", "healing"]), // ✩
  q("你覺得神最常透過什麼日常小事對你說話？", "生命經歷", Level.ONE, ["guidance", "daily"]), // ✩
  q("分享一個你以為是靠自己，事後才發現是神動工的經歷。", "生命經歷", Level.TWO, ["humility", "guidance"]), // ✩
  q("當你覺得『我做不到啦！』時，神怎麼給你超乎想像的力量？", "生命經歷", Level.ONE, ["strength", "empowerment"]), // ✩
  q("你有沒有在旅行中意外經歷神的帶領或保護？", "生命經歷", Level.ONE, ["travel", "guidance"]), // ✩
  q("在為別人代禱時，哪一次讓你強烈感受到神的同在？", "生命經歷", Level.TWO, ["prayer", "intercession"]), // ✩
  q("當你覺得聖經很無聊時，神怎麼重新點燃你讀經的熱情？", "生命經歷", Level.TWO, ["bible", "passion"]), // ✩
  q("分享一個神用失敗教你比成功更重要功課的經歷。", "生命經歷", Level.THREE, ["failure", "growth"]), // ✩
  q("你有沒有經歷過神在最後一秒才開路的『驚險供應』？", "生命經歷", Level.TWO, ["provision", "timing"]), // ✩
  q("當你被誤會或冤枉時，神怎麼安慰你並帶你回應？", "生命經歷", Level.TWO, ["comfort", "injustice"]), // ✩
  q("在小排中，哪次分享讓你覺得『原來不只我這樣想』的共鳴時刻？", "生命經歷", Level.ONE, ["meeting", "connection"]), // ✩
  q("你曾經歷過神用疾病讓你學到意想不到的祝福嗎？", "生命經歷", Level.THREE, ["health", "blessing"]), // ✩
  q("當你覺得禱告詞窮時，什麼幫助你繼續向神傾心吐意？", "生命經歷", Level.ONE, ["prayer", "honesty"]), // ✩
  q("分享一個神讓你遇見『對的人』在對的時間幫助你的經歷。", "生命經歷", Level.TWO, ["divine-appointment", "help"]), // ✩
  q("你有沒有在絕望中做最後禱告後，事情大逆轉的見證？", "生命經歷", Level.TWO, ["prayer", "miracle"]), // ✩
  q("當你對信仰產生懷疑時，哪個經歷讓你重新確信神的真實？", "生命經歷", Level.THREE, ["doubt", "confirmation"]), // ✩
  q("在服事青少年或兒童時，哪次讓你驚嘆『神真的在動工』？", "生命經歷", Level.ONE, ["service", "youth"]), // ✩
  q("你覺得神最近在教你什麼關於『等待』的功課？", "生命經歷", Level.TWO, ["patience", "growth"]), // ✩
  q("分享一個神用動物或大自然對你說話的有趣經歷。", "生命經歷", Level.ONE, ["creation", "humor"]), // ✩
  q("當你覺得不被理解時，神怎麼讓你感受到祂完全懂你？", "生命經歷", Level.ONE, ["comfort", "understanding"]), // ✩
  q("你有沒有經歷過神透過夢境給你明確指引或警告？", "生命經歷", Level.TWO, ["dream", "guidance"]), // ✩
  q("在財務緊繃時，神怎麼用創意方式供應你的需要？", "生命經歷", Level.TWO, ["provision", "finance"]), // ✩
  q("當你想隱藏自己的軟弱時，神怎麼光照你坦然面對？", "生命經歷", Level.TWO, ["vulnerability", "growth"]), // ✩
  q("分享一個你本來很怕做卻因順服神而蒙福的經歷。", "生命經歷", Level.TWO, ["obedience", "blessing"]), // ✩
  q("你有沒有在運動或比賽中經歷神賜下超自然體力的時刻？", "生命經歷", Level.ONE, ["strength", "sports"]), // ✩
  q("當你為國家或社會事件禱告時，有過什麼特別的感動？", "生命經歷", Level.TWO, ["prayer", "society"]), // ✩
  q("在屬靈爭戰感到壓迫時，神怎麼帶你突破黑暗權勢？", "生命經歷", Level.THREE, ["spiritual-warfare", "victory"]), // ✩
  q("分享一個神用『延遲』教你比『即時』更寶貴功課的經歷。", "生命經歷", Level.THREE, ["waiting", "growth"]), // ✩
  q("你有沒有在藝術創作（音樂/畫畫/寫作）中經歷神的啟發？", "生命經歷", Level.ONE, ["creativity", "inspiration"]), // ✩
  q("當你覺得召會傳統很束縛時，神怎麼調整你的觀點？", "生命經歷", Level.THREE, ["tradition", "renewal"]), // ✩
  q("在照顧家人或病人時，神怎麼加給你夠用的恩典？", "生命經歷", Level.TWO, ["caregiving", "grace"]), // ✩
  q("分享一個你順服神卻被嘲笑，但事後證明神是對的經歷。", "生命經歷", Level.THREE, ["obedience", "persecution"]), // ✩
  q("你有沒有在科技產品（如手機App）上經歷神的提醒？", "生命經歷", Level.ONE, ["technology", "guidance"]), // ✩
  q("當你覺得讀經像例行公事時，神怎麼重新點燃你的渴慕？", "生命經歷", Level.TWO, ["bible", "passion"]), // ✩
  q("在面對誘惑時，神怎麼給你逃脫的智慧和力量？", "生命經歷", Level.TWO, ["temptation", "victory"]), // ✩
  q("分享一個神用『失去』教你珍惜更重要事物的經歷。", "生命經歷", Level.THREE, ["loss", "growth"]), // ✩
  q("你有沒有在服務弱勢者時，反而被他們的生命見證震撼？", "生命經歷", Level.ONE, ["service", "humility"]), // ✩
  q("當你對未來超焦慮時，神怎麼用一句話安定你的心？", "生命經歷", Level.ONE, ["anxiety", "peace"]), // ✩
  q("在文化衝突中（如職場/學校），神怎麼幫助你持守信仰？", "生命經歷", Level.TWO, ["culture", "faithfulness"]), // ✩
  q("分享一個你本來想報復，卻因神感動選擇饒恕的經歷。", "生命經歷", Level.THREE, ["forgiveness", "obedience"]), // ✩
  q("你有沒有在自然災害中經歷神的平安與保護？", "生命經歷", Level.ONE, ["disaster", "protection"]), // ✩
  q("當你覺得神很遙遠時，什麼小跡象讓你重新感受祂靠近？", "生命經歷", Level.TWO, ["presence", "doubt"]), // ✩
  q("在學習新事物（如語言/技能）時，神怎麼成為你的幫助？", "生命經歷", Level.ONE, ["learning", "help"]), // ✩
  q("分享一個神用『環境關門』保護你走錯路的經歷。", "生命經歷", Level.TWO, ["guidance", "protection"]), // ✩
  q("你有沒有在運動或健身時，經歷神對你身體的看顧？", "生命經歷", Level.ONE, ["health", "fitness"]), // ✩
  q("當你為婚姻或感情禱告時，神怎麼調整你的期待？", "生命經歷", Level.TWO, ["prayer", "relationship"]), // ✩
  q("在面對不公義時，神怎麼給你智慧回應而非血氣？", "生命經歷", Level.THREE, ["justice", "wisdom"]), // ✩
  q("分享一個神用『暫停』讓你重新對焦生命的經歷。", "生命經歷", Level.TWO, ["rest", "reflection"]), // ✩

  // --- 大專/青年 (College/Young Adult) 40題 ---
  q("在面對未來（升學/就業）的選擇時，你如何經歷主的帶領？", "生命經歷", Level.TWO, ["guidance"], [Audience.COLLEGE, Audience.YOUNG_ADULT]),
  q("當同學/同事都在追求世界時，你如何保守自己的心？", "生命經歷", Level.THREE, ["world"], [Audience.COLLEGE, Audience.YOUNG_ADULT]),
  q("分享一次你在感情或人際關係上依靠主的經歷。", "生命經歷", Level.TWO, ["relationship"], [Audience.COLLEGE, Audience.YOUNG_ADULT]),
  q("你如何在忙碌的課業/工作中，擠出時間給主？", "生命經歷", Level.TWO, ["time"], [Audience.COLLEGE, Audience.YOUNG_ADULT]),
  q("你曾經在失業或換工作時經歷主的預備？", "生命經歷", Level.THREE, ["work", "provision"], [Audience.YOUNG_ADULT]),
  q("【價值觀】若工作高薪但需停止聚會，與薪水普通但能正常聚會，你如何選擇？", "生命經歷", Level.THREE, ["values", "choice"], [Audience.COLLEGE, Audience.YOUNG_ADULT]),
  q("考試壓力超大時，主怎麼給你平安？", "生命經歷", Level.TWO, ["stress"], [Audience.COLLEGE]),
  q("分享一次你為朋友禱告後看見改變的經歷？", "生命經歷", Level.ONE, ["prayer"], [Audience.COLLEGE]),
  q("宿舍生活裡，你怎麼維持跟主的關係？", "生命經歷", Level.ONE, ["spiritual-life"], [Audience.COLLEGE]),
  q("當朋友笑你信主很傻，主怎麼堅固你？", "生命經歷", Level.TWO, ["persecution"], [Audience.COLLEGE]),
  q("有沒有經文在你最需要時跳出來鼓勵你？", "生命經歷", Level.ONE, ["bible"], [Audience.COLLEGE]),
  q("你曾因信仰放棄過什麼機會嗎？後來怎樣？", "生命經歷", Level.THREE, ["testimony"], [Audience.COLLEGE]),
  q("小組員低潮時，你怎麼陪他經歷主？", "生命經歷", Level.TWO, ["fellowship"], [Audience.COLLEGE]),
  q("打工或實習時，怎麼活出基督徒的樣子？", "生命經歷", Level.ONE, ["testimony"], [Audience.COLLEGE]),
  q("分享一次陌生人突然幫助你的神奇經歷？", "生命經歷", Level.ONE, ["miracle"], [Audience.COLLEGE]),
  q("哪首詩歌在你難過時特別安慰你？", "生命經歷", Level.ONE, ["hymn"], [Audience.COLLEGE]),
  q("派對場合中，你怎麼守住聖潔的界線？", "生命經歷", Level.THREE, ["holiness"], [Audience.COLLEGE]),
  q("主怎麼幫你度過沒錢的窘境？", "生命經歷", Level.TWO, ["provision"], [Audience.COLLEGE]),
  q("當你嫉妒別人時，主怎麼調整你？", "生命經歷", Level.TWO, ["growth"], [Audience.COLLEGE]),
  q("你向教授或同學作過見證嗎？結果如何？", "生命經歷", Level.TWO, ["testimony"], [Audience.COLLEGE]),
  q("小組聚會無聊時，主怎麼重新點燃你？", "生命經歷", Level.ONE, ["revive"], [Audience.COLLEGE]),
  q("順服聖靈卻被笑很呆，你怎麼堅持？", "生命經歷", Level.THREE, ["obedience"], [Audience.COLLEGE]),
  q("怕被當怪人不敢傳福音，主怎麼幫你突破？", "生命經歷", Level.TWO, ["gospel-preaching"], [Audience.COLLEGE]),
  q("低潮到不想禱告時，主怎麼挽回你？", "生命經歷", Level.THREE, ["restore"], [Audience.COLLEGE]),
  q("主曾透過美景對你說話嗎？", "生命經歷", Level.ONE, ["nature"], [Audience.COLLEGE]),
  q("因守主日錯過重要活動，值得嗎？", "生命經歷", Level.TWO, ["testimony"], [Audience.COLLEGE]),
  q("家人反對你聚會，主怎麼開路？", "生命經歷", Level.THREE, ["family"], [Audience.COLLEGE]),
  q("你怎麼分辨是主帶領還是自己想法？", "生命經歷", Level.THREE, ["guidance"], [Audience.COLLEGE]),
  q("為小事禱告卻被主細心回應，有過嗎？", "生命經歷", Level.ONE, ["prayer"], [Audience.COLLEGE]),
  q("讀經很無聊時，主怎麼突破這狀況？", "生命經歷", Level.ONE, ["bible"], [Audience.COLLEGE]),
  q("網路時代怎麼保守眼睛和心思？", "生命經歷", Level.TWO, ["holiness"], [Audience.COLLEGE]),
  q("主曾透過夢境對你說話嗎？", "生命經歷", Level.THREE, ["dream"], [Audience.COLLEGE]),
  q("朋友都在談戀愛，你怎麼持守聖潔？", "生命經歷", Level.THREE, ["purity"], [Audience.COLLEGE]),
  q("因信仰被排擠，主怎麼安慰你？", "生命經歷", Level.TWO, ["persecution"], [Audience.COLLEGE]),
  q("出國時怎麼為主作見證？", "生命經歷", Level.ONE, ["testimony"], [Audience.COLLEGE]),
  q("對召會生活疲乏，主怎麼更新你？", "生命經歷", Level.TWO, ["revive"], [Audience.COLLEGE]),
  q("被問『基督徒也會犯錯』時你怎麼回應？", "生命經歷", Level.THREE, ["testimony"], [Audience.COLLEGE]),
  q("主曾保護你避開危險嗎？", "生命經歷", Level.ONE, ["protection"], [Audience.COLLEGE]),
  q("服事到沒力時，主怎麼加力量給你？", "生命經歷", Level.TWO, ["service"], [Audience.COLLEGE]),

  // --- 中年 (Middle Aged) 40題 ---
  q("在教養孩子的過程中，您如何經歷主的恩典？", "生命經歷", Level.TWO, ["parenting"], [Audience.MIDDLE_AGED]),
  q("分享一次家庭遇到困難（經濟/健康），主如何帶領你們度過。", "生命經歷", Level.THREE, ["crisis"], [Audience.MIDDLE_AGED]),
  q("如何在職場的壓力下，經歷主是您的安息？", "生命經歷", Level.TWO, ["work"], [Audience.MIDDLE_AGED]),
  q("分享這幾年來，您對「奉獻」有什麼新的體會？", "生命經歷", Level.THREE, ["consecration"], [Audience.MIDDLE_AGED]),
  q("夫妻吵架後，主怎麼幫你們和好？", "生命經歷", Level.TWO, ["marriage"], [Audience.MIDDLE_AGED]),
  q("怎麼帶青少年孩子親近主？遇到困難嗎？", "生命經歷", Level.THREE, ["parenting"], [Audience.MIDDLE_AGED]),
  q("照顧生病父母時，主怎麼給你力量？", "生命經歷", Level.TWO, ["health"], [Audience.MIDDLE_AGED]),
  q("財務危機中，主怎麼奇妙供應？", "生命經歷", Level.THREE, ["provision"], [Audience.MIDDLE_AGED]),
  q("加班文化中怎麼堅持主日聚會？", "生命經歷", Level.TWO, ["work"], [Audience.MIDDLE_AGED]),
  q("孩子不信主，你怎麼禱告等候？", "生命經歷", Level.THREE, ["parenting"], [Audience.MIDDLE_AGED]),
  q("同事曾向你傳福音嗎？結果如何？", "生命經歷", Level.ONE, ["testimony"], [Audience.MIDDLE_AGED]),
  q("中年轉職很不安？主怎麼帶領你？", "生命經歷", Level.TWO, ["work"], [Audience.MIDDLE_AGED]),
  q("屬靈生活變公式化，主怎麼突破？", "生命經歷", Level.TWO, ["revive"], [Audience.MIDDLE_AGED]),
  q("主曾醫治你心裡的傷嗎？", "生命經歷", Level.THREE, ["healing"], [Audience.MIDDLE_AGED]),
  q("在社區怎麼活出基督的樣式？", "生命經歷", Level.ONE, ["testimony"], [Audience.MIDDLE_AGED]),
  q("朋友有難時，主怎麼用你安慰他？", "生命經歷", Level.ONE, ["comfort"], [Audience.MIDDLE_AGED]),
  q("對十一奉獻有掙扎嗎？主怎麼說服你？", "生命經歷", Level.THREE, ["consecration"], [Audience.MIDDLE_AGED]),
  q("主曾保護你們全家平安嗎？", "生命經歷", Level.ONE, ["protection"], [Audience.MIDDLE_AGED]),
  q("工作、家庭、召會怎麼平衡？", "生命經歷", Level.THREE, ["balance"], [Audience.MIDDLE_AGED]),
  q("教養觀和配偶不同，主怎麼調和？", "生命經歷", Level.TWO, ["marriage"], [Audience.MIDDLE_AGED]),
  q("為孩子學業禱告有蒙應允嗎？", "生命經歷", Level.ONE, ["prayer"], [Audience.MIDDLE_AGED]),
  q("因信仰丟掉生意機會，後悔嗎？", "生命經歷", Level.THREE, ["testimony"], [Audience.MIDDLE_AGED]),
  q("身體開始老化，主怎麼調整你心態？", "生命經歷", Level.TWO, ["health"], [Audience.MIDDLE_AGED]),
  q("怎麼向年邁父母傳福音？困難嗎？", "生命經歷", Level.TWO, ["gospel-preaching"], [Audience.MIDDLE_AGED]),
  q("憂鬱低潮時，主怎麼伸手拉你？", "生命經歷", Level.THREE, ["healing"], [Audience.MIDDLE_AGED]),
  q("孩子離家後的空虛感怎麼面對？", "生命經歷", Level.TWO, ["parenting"], [Audience.MIDDLE_AGED]),
  q("世界價值觀和聖經衝突，怎麼教孩子？", "生命經歷", Level.THREE, ["parenting"], [Audience.MIDDLE_AGED]),
  q("主曾奇妙預備你需要的房子或車子嗎？", "生命經歷", Level.ONE, ["provision"], [Audience.MIDDLE_AGED]),
  q("職場誘惑很多，你怎麼持守清廉？", "生命經歷", Level.THREE, ["integrity"], [Audience.MIDDLE_AGED]),
  q("服事和家庭時間衝突時怎麼取捨？", "生命經歷", Level.TWO, ["balance"], [Audience.MIDDLE_AGED]),
  q("孫子曾說出讓你驚喜的屬靈話嗎？", "生命經歷", Level.ONE, ["family"], [Audience.MIDDLE_AGED]),
  q("對服事意義懷疑時，主怎麼解答？", "生命經歷", Level.TWO, ["service"], [Audience.MIDDLE_AGED]),
  q("親友離世，主怎麼安慰你的傷痛？", "生命經歷", Level.THREE, ["comfort"], [Audience.MIDDLE_AGED]),
  q("為叛逆期孩子禱告有見證嗎？", "生命經歷", Level.TWO, ["prayer"], [Audience.MIDDLE_AGED]),
  q("會議中主曾給你智慧化解危機嗎？", "生命經歷", Level.ONE, ["work"], [Audience.MIDDLE_AGED]),
  q("因堅持真理得罪人，主怎麼堅固你？", "生命經歷", Level.THREE, ["integrity"], [Audience.MIDDLE_AGED]),
  q("覺得孩子不需要你時，主怎麼調整？", "生命經歷", Level.TWO, ["parenting"], [Audience.MIDDLE_AGED]),
  q("怎麼向同事解釋週末不應酬？", "生命經歷", Level.ONE, ["testimony"], [Audience.MIDDLE_AGED]),
  q("寵物曾教你什麼生命功課嗎？", "生命經歷", Level.ONE, ["growth"], [Audience.MIDDLE_AGED]),
  q("夫妻能一起禱告嗎？有什麼突破？", "生命經歷", Level.TWO, ["marriage"], [Audience.MIDDLE_AGED]),

  // --- 年長聖徒 (Elderly) 40題 ---
  q("回顧一生，您覺得主給您最大的祝福是什麼？", "生命經歷", Level.ONE, ["blessing"], [Audience.ELDERLY]),
  q("分享一次您經歷病痛，主卻賜下平安的見證。", "生命經歷", Level.TWO, ["health"], [Audience.ELDERLY]),
  q("您如何維持幾十年來愛主的心不冷淡？", "生命經歷", Level.THREE, ["faithfulness"], [Audience.ELDERLY]),
  q("有沒有哪一節經節，是支撐您走過一生的力量？", "生命經歷", Level.TWO, ["bible"], [Audience.ELDERLY]),
  q("您這輩子最感恩主的一件事是什麼？", "生命經歷", Level.ONE, ["gratitude"], [Audience.ELDERLY]),
  q("兒女不在身邊，主怎麼成為您的陪伴？", "生命經歷", Level.ONE, ["comfort"], [Audience.ELDERLY]),
  q("孤單時主曾派天使來看你嗎？", "生命經歷", Level.ONE, ["angel"], [Audience.ELDERLY]),
  q("怎麼為孫子禱告？有蒙應允的嗎？", "生命經歷", Level.ONE, ["prayer"], [Audience.ELDERLY]),
  q("身體衰弱時，主怎麼加添你心靈力量？", "生命經歷", Level.TWO, ["strength"], [Audience.ELDERLY]),
  q("最常為年輕人代禱什麼內容？", "生命經歷", Level.ONE, ["prayer"], [Audience.ELDERLY]),
  q("老伴離開後，主怎麼安慰你？", "生命經歷", Level.THREE, ["comfort"], [Audience.ELDERLY]),
  q("覺得現在的年輕人最需要學什麼？", "生命經歷", Level.ONE, ["wisdom"], [Audience.ELDERLY]),
  q("行動不便不能聚會，怎麼維持肢體連結？", "生命經歷", Level.TWO, ["fellowship"], [Audience.ELDERLY]),
  q("醫生曾對你說過神提醒的話嗎？", "生命經歷", Level.ONE, ["healing"], [Audience.ELDERLY]),
  q("老朋友一個個離開，你怎麼面對？", "生命經歷", Level.THREE, ["comfort"], [Audience.ELDERLY]),
  q("哪首詩歌像在唱你的一生？", "生命經歷", Level.ONE, ["hymn"], [Audience.ELDERLY]),
  q("因順服主吃虧卻蒙福的經歷？", "生命經歷", Level.TWO, ["obedience"], [Audience.ELDERLY]),
  q("記性變差，主怎麼幫你記住祂的話？", "生命經歷", Level.ONE, ["bible"], [Audience.ELDERLY]),
  q("經濟困難時主怎麼供應？", "生命經歷", Level.ONE, ["provision"], [Audience.ELDERLY]),
  q("最想留給後代的屬靈資產是什麼？", "生命經歷", Level.ONE, ["legacy"], [Audience.ELDERLY]),
  q("覺得自己不中用時，主怎麼調整你？", "生命經歷", Level.TWO, ["growth"], [Audience.ELDERLY]),
  q("主曾保護你度過戰亂或天災嗎？", "生命經歷", Level.TWO, ["protection"], [Audience.ELDERLY]),
  q("怎麼為召會下一代領袖禱告？", "生命經歷", Level.ONE, ["prayer"], [Audience.ELDERLY]),
  q("躺在病床上最常跟主說什麼？", "生命經歷", Level.ONE, ["prayer"], [Audience.ELDERLY]),
  q("主曾透過夢境提醒你嗎？", "生命經歷", Level.ONE, ["dream"], [Audience.ELDERLY]),
  q("對死亡害怕過嗎？主怎麼釋放你？", "生命經歷", Level.THREE, ["faith"], [Audience.ELDERLY]),
  q("兒女信仰冷淡，你怎麼智慧勸勉？", "生命經歷", Level.TWO, ["wisdom"], [Audience.ELDERLY]),
  q("搬家過程主怎麼細心帶領？", "生命經歷", Level.ONE, ["guidance"], [Audience.ELDERLY]),
  q("現在用什麼簡單方式親近主？", "生命經歷", Level.ONE, ["spiritual-life"], [Audience.ELDERLY]),
  q("最想對主說的一句感謝是什麼？", "生命經歷", Level.ONE, ["gratitude"], [Audience.ELDERLY]),
  q("禱告好像沒回應時，主怎麼教你等候？", "生命經歷", Level.TWO, ["prayer"], [Audience.ELDERLY]),
  q("小動物曾帶給你屬靈的歡樂嗎？", "生命經歷", Level.ONE, ["joy"], [Audience.ELDERLY]),

  // ==========================================
  // 3. 日常生活與屬靈追求
  // ==========================================

  // --- 通用 (General) ---
  q("你最喜歡的一首詩歌是哪一首？", "日常生活與屬靈追求", Level.ONE, ["hymn"]),
  q("你通常在一天中的什麼時間禱告最享受？", "日常生活與屬靈追求", Level.ONE, ["habit"]),
  q("當你覺得靈裡低落時，通常會怎麼做來恢復？", "日常生活與屬靈追求", Level.TWO, ["recovery"]),
  q("分享你這週最享受的一段主的話。", "日常生活與屬靈追求", Level.TWO, ["enjoyment"]),
  q("你如何在忙碌中維持與主的關係？", "日常生活與屬靈追求", Level.TWO, ["balance"]),
  q("你覺得主最常用什麼方式提醒你？", "日常生活與屬靈追求", Level.TWO, ["reminder"]),
  q("早上起床第一件事會先跟主說什麼？", "日常生活與屬靈追求", Level.ONE, ["habit"]), // ✩
  q("通勤時你會用什麼方式和主連結？", "日常生活與屬靈追求", Level.ONE, ["daily"]), // ✩
  q("當工作壓力爆表時，怎麼快速回到主面前？", "日常生活與屬靈追求", Level.TWO, ["stress"]), // ✩
  q("你手機裡最常用的屬靈APP是哪個？為什麼？", "日常生活與屬靈追求", Level.ONE, ["technology"]), // ✩
  q("睡前最後一個禱告通常為什麼事？", "日常生活與屬靈追求", Level.ONE, ["habit"]), // ✩
  q("吃飯前謝飯禱告會特別注意什麼？", "日常生活與屬靈追求", Level.ONE, ["gratitude"]), // ✩
  q("當聖經讀不懂時，你會怎麼突破？", "日常生活與屬靈追求", Level.TWO, ["bible"]), // ✩
  q("你覺得哪種禱告姿勢最能幫助你專心？", "日常生活與屬靈追求", Level.ONE, ["prayer"]), // ✩
  q("被老闆罵完後怎麼立刻到主前得安慰？", "日常生活與屬靈追求", Level.TWO, ["comfort"]), // ✩
  q("家裡哪個角落最適合你親近主？", "日常生活與屬靈追求", Level.ONE, ["environment"]), // ✩
  q("當你超級想追劇卻該讀經時，怎麼選？", "日常生活與屬靈追求", Level.TWO, ["temptation"]), // ✩
  q("分享一個你用主的話解決日常難題的例子？", "日常生活與屬靈追求", Level.TWO, ["application"]), // ✩
  q("你怎麼在社群媒體上保持屬靈見證？", "日常生活與屬靈追求", Level.TWO, ["social-media"]), // ✩
  q("當朋友約的活動和聚會撞期時怎麼取捨？", "日常生活與屬靈追求", Level.THREE, ["priority"]), // ✩
  q("錢包裡會放經文小卡嗎？寫著什麼？", "日常生活與屬靈追求", Level.ONE, ["reminder"]), // ✩
  q("生氣到快爆炸時怎麼用禱告降溫？", "日常生活與屬靈追求", Level.TWO, ["emotion"]), // ✩
  q("你覺得哪類詩歌最幫助你遇見主？", "日常生活與屬靈追求", Level.ONE, ["hymn"]), // ✩
  q("怎麼在帶小孩的混亂中抓住時間親近主？", "日常生活與屬靈追求", Level.THREE, ["parenting"]), // ✩
  q("當同事說黃色笑話時你怎麼反應？", "日常生活與屬靈追求", Level.THREE, ["testimony"]), // ✩
  q("你書桌/辦公桌上有什麼屬靈小記號？", "日常生活與屬靈追求", Level.ONE, ["environment"]), // ✩
  q("用三個詞形容你今天的靈修狀況？", "日常生活與屬靈追求", Level.ONE, ["self-check"]), // ✩
  q("當你忘記禱告整天，晚上怎麼補救？", "日常生活與屬靈追求", Level.ONE, ["recovery"]), // ✩
  q("怎麼在健身房運動時也與主交通？", "日常生活與屬靈追求", Level.ONE, ["multitasking"]), // ✩
  q("你遇過最扯的屬靈干擾是什麼？怎麼勝過？", "日常生活與屬靈追求", Level.TWO, ["distraction"]), // ✩
  q("當你超想抱怨時，怎麼轉成感恩禱告？", "日常生活與屬靈追求", Level.TWO, ["attitude"]), // ✩
  q("手機桌布用什麼經文或屬靈圖片？", "日常生活與屬靈追求", Level.ONE, ["reminder"]), // ✩
  q("怎麼在KTV包廂裡維持聖徒見證？", "日常生活與屬靈追求", Level.THREE, ["testimony"]), // ✩
  q("你覺得「晨更」和「晚禱」哪個對你更有效？", "日常生活與屬靈追求", Level.ONE, ["habit"]), // ✩
  q("當讀經計畫落後時會焦慮嗎？怎麼調整？", "日常生活與屬靈追求", Level.TWO, ["bible"]), // ✩
  q("分享一個你把世界新聞轉成代禱的秘訣？", "日常生活與屬靈追求", Level.TWO, ["prayer"]), // ✩
  q("怎麼在家族聚餐時避開祭拜問題？", "日常生活與屬靈追求", Level.THREE, ["idolatry"]), // ✩
  q("你隨身必帶的屬靈小物是什麼？", "日常生活與屬靈追求", Level.ONE, ["tool"]), // ✩
  q("當你覺得禱告詞窮時怎麼辦？", "日常生活與屬靈追求", Level.ONE, ["prayer"]), // ✩
  q("怎麼在網購衝動時操練節制？", "日常生活與屬靈追求", Level.TWO, ["self-control"]), // ✩
  q("你遇過最難解釋的基督徒禁忌是什麼？", "日常生活與屬靈追求", Level.THREE, ["testimony"]), // ✩
  q("當朋友問「為什麼要聚會」時怎麼回答？", "日常生活與屬靈追求", Level.TWO, ["testimony"]), // ✩
  q("怎麼在加班地獄中保持喜樂？", "日常生活與屬靈追求", Level.TWO, ["joy"]), // ✩
  q("你覺得哪種天氣最適合親近主？", "日常生活與屬靈追求", Level.ONE, ["environment"]), // ✩
  q("當靈修時頻頻打瞌睡怎麼辦？", "日常生活與屬靈追求", Level.ONE, ["struggle"]), // ✩
  q("怎麼把等公車的時間變成屬靈時刻？", "日常生活與屬靈追求", Level.ONE, ["time"]), // ✩
  q("當小組員問「你昨天有禱告嗎」怎麼誠實回答？", "日常生活與屬靈追求", Level.TWO, ["accountability"]), // ✩
  q("你如何處理「想讀經」和「該睡覺」的衝突？", "日常生活與屬靈追求", Level.TWO, ["balance"]), // ✩
  q("當FB跳出負面新聞時怎麼轉為代禱？", "日常生活與屬靈追求", Level.ONE, ["social-media"]), // ✩
  q("用一句話形容你本週的屬靈胃口？", "日常生活與屬靈追求", Level.ONE, ["self-check"]), // ✩
  q("怎麼在醫院候診時經歷主？", "日常生活與屬靈追求", Level.ONE, ["circumstance"]), // ✩
  q("當孩子吵著要你陪無法靈修時怎麼辦？", "日常生活與屬靈追求", Level.THREE, ["parenting"]), // ✩
  q("你覺得哪節經文最適合貼在冰箱上？", "日常生活與屬靈追求", Level.ONE, ["reminder"]), // ✩
  q("怎麼在打掃家裡時也清理內心？", "日常生活與屬靈追求", Level.ONE, ["metaphor"]), // ✩
  q("當朋友送你占卜小物時怎麼處理？", "日常生活與屬靈追求", Level.THREE, ["idolatry"]), // ✩
  q("你如何把洗碗變成屬靈操練？", "日常生活與屬靈追求", Level.ONE, ["practice"]), // ✩
  q("當連續三天沒讀經時怎麼重新開始？", "日常生活與屬靈追求", Level.ONE, ["recovery"]), // ✩
  q("怎麼在捷運上不尷尬地讀聖經？", "日常生活與屬靈追求", Level.ONE, ["public"]), // ✩
  q("當同事發現你是基督徒後態度改變怎麼辦？", "日常生活與屬靈追求", Level.TWO, ["testimony"]), // ✩
  q("你覺得哪首詩歌最適合在塞車時唱？", "日常生活與屬靈追求", Level.ONE, ["hymn"]), // ✩
  q("怎麼在繳稅季節保持感恩？", "日常生活與屬靈追求", Level.TWO, ["gratitude"]), // ✩
  q("當家人反對你聚會時怎麼平衡？", "日常生活與屬靈追求", Level.THREE, ["family"]), // ✩
  q("你如何用主的話安慰失眠的自己？", "日常生活與屬靈追求", Level.ONE, ["sleeplessness"]), // ✩
  q("當IG滑到羨慕別人的生活時怎麼調整？", "日常生活與屬靈追求", Level.TWO, ["social-media"]), // ✩
  q("怎麼把咖啡時間變成屬靈小憩？", "日常生活與屬靈追求", Level.ONE, ["ritual"]), // ✩
  q("當朋友問「神為何允許苦難」時怎麼回應？", "日常生活與屬靈追求", Level.THREE, ["apologetics"]), // ✩
  q("你如何用聖經原則決定買不買奢侈品？", "日常生活與屬靈追求", Level.TWO, ["finance"]), // ✩
  q("當小組長問「本週靈修如何」時怎麼真實分享？", "日常生活與屬靈追求", Level.TWO, ["accountability"]), // ✩
  q("怎麼在健身房更衣室保持聖潔心思？", "日常生活與屬靈追求", Level.THREE, ["purity"]), // ✩
  q("你覺得哪種飲料最幫助你靈修？", "日常生活與屬靈追求", Level.ONE, ["environment"]), // ✩
  q("當新聞讓你焦慮時怎麼轉向主？", "日常生活與屬靈追求", Level.ONE, ["anxiety"]), // ✩
  q("怎麼在情人節單身時經歷主的愛？", "日常生活與屬靈追求", Level.TWO, ["singleness"]), // ✩
  q("當工作報告和靈修時間衝突時怎麼選？", "日常生活與屬靈追求", Level.THREE, ["priority"]), // ✩
  q("你如何用禱告預備上班日的會議？", "日常生活與屬靈追求", Level.ONE, ["work"]), // ✩
  q("當讀到暴力經文時怎麼理解？", "日常生活與屬靈追求", Level.THREE, ["bible"]), // ✩
  q("怎麼在烤肉趴避免祭拜問題？", "日常生活與屬靈追求", Level.TWO, ["idolatry"]), // ✩
  q("當朋友說「基督徒好偽善」時怎麼回應？", "日常生活與屬靈追求", Level.THREE, ["testimony"]), // ✩
  q("你覺得哪種音樂類型最幫助你敬拜？", "日常生活與屬靈追求", Level.ONE, ["worship"]), // ✩
  q("怎麼在排隊時做微型禱告？", "日常生活與屬靈追求", Level.ONE, ["prayer"]), // ✩
  q("當連續加班時如何避免屬靈耗盡？", "日常生活與屬靈追求", Level.TWO, ["burnout"]), // ✩
  q("你如何用主的話面對體重數字？", "日常生活與屬靈追求", Level.ONE, ["self-image"]), // ✩
  q("當臉書出現教會負評時怎麼處理？", "日常生活與屬靈追求", Level.TWO, ["social-media"]), // ✩
  q("怎麼在超商用餐區安靜靈修？", "日常生活與屬靈追求", Level.ONE, ["environment"]), // ✩
  q("當孩子打斷你禱告時怎麼辦？", "日常生活與屬靈追求", Level.TWO, ["parenting"]), // ✩
  q("你如何用聖經原則決定投資理財？", "日常生活與屬靈追求", Level.THREE, ["finance"]), // ✩
  q("當朋友問「為什麼守主日」時怎麼回答？", "日常生活與屬靈追求", Level.TWO, ["testimony"]), // ✩
  q("怎麼在跨年晚會保持屬靈清醒？", "日常生活與屬靈追求", Level.TWO, ["holiday"]), // ✩
  q("當醫生宣布壞消息時第一個禱告是什麼？", "日常生活與屬靈追求", Level.THREE, ["crisis"]), // ✩
  q("你如何把倒垃圾變成感恩操練？", "日常生活與屬靈追求", Level.ONE, ["gratitude"]), // ✩
  q("當Youtube推薦邪術內容時怎麼處理？", "日常生活與屬靈追求", Level.TWO, ["technology"]), // ✩
  q("怎麼在家族掃墓時持守信仰立場？", "日常生活與屬靈追求", Level.THREE, ["idolatry"]), // ✩
  q("當同事約拜拜團購時怎麼婉拒？", "日常生活與屬靈追求", Level.TWO, ["idolatry"]), // ✩
  q("你如何用聖經話語為手機充電時間禱告？", "日常生活與屬靈追求", Level.ONE, ["metaphor"]), // ✩
  q("當網紅基督徒跌倒時怎麼調整自己？", "日常生活與屬靈追求", Level.THREE, ["discouragement"]), // ✩
  q("怎麼在尾牙抽獎時保持知足？", "日常生活與屬靈追求", Level.TWO, ["contentment"]), // ✩
  q("當孩子問「為什麼要禱告」時怎麼回答？", "日常生活與屬靈追求", Level.TWO, ["parenting"]), // ✩
  q("你如何用主的話面對衰老跡象？", "日常生活與屬靈追求", Level.TWO, ["aging"]), // ✩
  q("當選舉撕裂關係時怎麼持守平安？", "日常生活與屬靈追求", Level.THREE, ["politics"]), // ✩
  q("怎麼在追垃圾車時練習耐心？", "日常生活與屬靈追求", Level.ONE, ["patience"]), // ✩
  q("當被要求祭祖才能分遺產時怎麼辦？", "日常生活與屬靈追求", Level.THREE, ["idolatry"]), // ✩
  q("你如何用禱告預備家庭旅遊？", "日常生活與屬靈追求", Level.ONE, ["travel"]), // ✩
  q("當網購遇到主日到貨怎麼處理？", "日常生活與屬靈追求", Level.TWO, ["sabbath"]), // ✩
  q("怎麼在寵物過世時經歷主安慰？", "日常生活與屬靈追求", Level.TWO, ["pet"]), // ✩
  q("當公司要求拜開工儀式時怎麼辦？", "日常生活與屬靈追求", Level.THREE, ["idolatry"]), // ✩
  q("你如何用聖經原則管理追劇時間？", "日常生活與屬靈追求", Level.ONE, ["entertainment"]), // ✩
  q("當醫生說「只能禱告了」時怎麼回應？", "日常生活與屬靈追求", Level.THREE, ["medical"]), // ✩
  q("怎麼在被客訴時操練溫柔？", "日常生活與屬靈追求", Level.TWO, ["gentleness"]), // ✩
  q("當孩子問「神為什麼讓人生病」時怎麼回答？", "日常生活與屬靈追求", Level.THREE, ["parenting"]), // ✩
  q("你如何用主的話面對更年期變化？", "日常生活與屬靈追求", Level.TWO, ["health"]), // ✩

  // --- 青少年 (Teens) 40題 ---
  q("考試壓力大時，你會怎麼禱告？", "日常生活與屬靈追求", Level.ONE, ["school"], [Audience.TEENS]),
  q("你覺得讀聖經最難的地方是什麼？", "日常生活與屬靈追求", Level.ONE, ["bible"], [Audience.TEENS]),
  q("分享一次你在學校心裡默默呼求主名的經驗。", "日常生活與屬靈追求", Level.ONE, ["calling"], [Audience.TEENS]),
  q("被同學排擠時，主怎麼安慰你？", "日常生活與屬靈追求", Level.TWO, ["comfort"], [Audience.TEENS]),
  q("手機成癮怎麼辦？主怎麼幫你節制？", "日常生活與屬靈追求", Level.TWO, ["addiction"], [Audience.TEENS]),
  q("爸媽不懂你的壓力，主怎麼當你朋友？", "日常生活與屬靈追求", Level.ONE, ["family"], [Audience.TEENS]),
  q("怎麼在補習班偷偷讀聖經？", "日常生活與屬靈追求", Level.ONE, ["bible"], [Audience.TEENS]),
  q("戀愛話題滿天飛，你怎麼持守純潔？", "日常生活與屬靈追求", Level.THREE, ["purity"], [Audience.TEENS]),
  q("主曾透過動漫或遊戲對你說話嗎？", "日常生活與屬靈追求", Level.ONE, ["revelation"], [Audience.TEENS]),
  q("分組報告遇到豬隊友，主怎麼教你忍耐？", "日常生活與屬靈追求", Level.TWO, ["patience"], [Audience.TEENS]),
  q("怎麼向閨蜜傳福音才不會尷尬？", "日常生活與屬靈追求", Level.ONE, ["gospel-preaching"], [Audience.TEENS]),
  q("考試作弊誘惑大，主怎麼保守你誠實？", "日常生活與屬靈追求", Level.THREE, ["integrity"], [Audience.TEENS]),
  q("IG發文前會先禱告嗎？", "日常生活與屬靈追求", Level.ONE, ["social-media"], [Audience.TEENS]),
  q("被笑「媽寶」還堅持聚會，值得嗎？", "日常生活與屬靈追求", Level.TWO, ["persecution"], [Audience.TEENS]),
  q("主怎麼幫你拒絕不良邀約？", "日常生活與屬靈追求", Level.TWO, ["peer-pressure"], [Audience.TEENS]),
  q("憂鬱來襲時，哪節經文最撐住你？", "日常生活與屬靈追求", Level.TWO, ["bible"], [Audience.TEENS]),
  q("團契玩遊戲太嗨，怎麼不失去分寸？", "日常生活與屬靈追求", Level.ONE, ["boundary"], [Audience.TEENS]),
  q("零用錢很少還堅持奉獻，為什麼？", "日常生活與屬靈追求", Level.ONE, ["offering"], [Audience.TEENS]),
  q("主曾透過流行歌對你說話嗎？", "日常生活與屬靈追求", Level.ONE, ["revelation"], [Audience.TEENS]),
  q("怎麼跟非基督徒好友保持關係又不妥協？", "日常生活與屬靈追求", Level.TWO, ["friendship"], [Audience.TEENS]),
  q("被爸媽罵時，主怎麼教你順服？", "日常生活與屬靈追求", Level.TWO, ["obedience"], [Audience.TEENS]),
  q("滑短影片到半夜，主怎麼提醒你節制？", "日常生活與屬靈追求", Level.TWO, ["addiction"], [Audience.TEENS]),
  q("學校午餐禱告被笑，你怎麼回應？", "日常生活與屬靈追求", Level.ONE, ["testimony"], [Audience.TEENS]),
  q("主日崇拜和社團活動衝突怎麼辦？", "日常生活與屬靈追求", Level.TWO, ["choice"], [Audience.TEENS]),
  q("暗戀對象不信主，你怎麼處理心情？", "日常生活與屬靈追求", Level.THREE, ["emotion"], [Audience.TEENS]),
  q("哪首敬拜搖滾詩歌讓你超有共鳴？", "日常生活與屬靈追求", Level.ONE, ["hymn"], [Audience.TEENS]),
  q("主怎麼幫你勝過對外表的自卑？", "日常生活與屬靈追求", Level.TWO, ["self-esteem"], [Audience.TEENS]),
  q("當同學都在追星，你的偶像是誰？", "日常生活與屬靈追求", Level.ONE, ["idol"], [Audience.TEENS]),
  q("被網路霸凌時，主怎麼保護你？", "日常生活與屬靈追求", Level.THREE, ["cyberbullying"], [Audience.TEENS]),
  q("小組查經打瞌睡怎麼辦？", "日常生活與屬靈追求", Level.ONE, ["bible-study"], [Audience.TEENS]),
  q("主曾透過寵物對你表達愛嗎？", "日常生活與屬靈追求", Level.ONE, ["love"], [Audience.TEENS]),
  q("怎麼在班級群組傳福音梗圖？", "日常生活與屬靈追求", Level.ONE, ["gospel-preaching"], [Audience.TEENS]),
  q("運動比賽前會求主幫助嗎？", "日常生活與屬靈追求", Level.ONE, ["prayer"], [Audience.TEENS]),
  q("當你覺得神很遠，怎麼重新靠近祂？", "日常生活與屬靈追求", Level.TWO, ["closeness"], [Audience.TEENS]),
  q("家人吵架時，你怎麼當和平使者？", "日常生活與屬靈追求", Level.TWO, ["peacemaker"], [Audience.TEENS]),
  q("主怎麼幫你面對父母離婚的傷痛？", "日常生活與屬靈追求", Level.THREE, ["healing"], [Audience.TEENS]),
  q("發考卷前，心裡最常呼求哪句主名？", "日常生活與屬靈追求", Level.ONE, ["calling"], [Audience.TEENS]),
  q("看到流浪漢時，主怎麼動你的心？", "日常生活與屬靈追求", Level.ONE, ["compassion"], [Audience.TEENS]),

  // --- 福音朋友 (Gospel Friends) 40題 ---
  q("你覺得「禱告」對你來說像什麼？（許願？說話？冥想？）", "日常生活與屬靈追求", Level.ONE, ["concept"], [Audience.GOSPEL_FRIENDS]),
  q("你平常心情不好時，都怎麼排解壓力？", "日常生活與屬靈追求", Level.ONE, ["stress"], [Audience.GOSPEL_FRIENDS]),
  q("如果有一本書能告訴你未來的答案，你會想看嗎？", "日常生活與屬靈追求", Level.ONE, ["curiosity"], [Audience.GOSPEL_FRIENDS]),
  q("聽到「神的愛」時，你腦中浮現什麼畫面？", "日常生活與屬靈追求", Level.ONE, ["concept"], [Audience.GOSPEL_FRIENDS]),
  q("當你感到絕望時，通常哪裡找希望？", "日常生活與屬靈追求", Level.ONE, ["hope"], [Audience.GOSPEL_FRIENDS]),
  q("你認為「罪」是什麼意思？", "日常生活與屬靈追求", Level.ONE, ["concept"], [Audience.GOSPEL_FRIENDS]),
  q("參加教會活動最怕遇到什麼狀況？", "日常生活與屬靈追求", Level.ONE, ["church"], [Audience.GOSPEL_FRIENDS]),
  q("你心中「理想的生命狀態」長怎樣？", "日常生活與屬靈追求", Level.ONE, ["life"], [Audience.GOSPEL_FRIENDS]),
  q("如果神真的存在，你想問祂什麼問題？", "日常生活與屬靈追求", Level.ONE, ["question"], [Audience.GOSPEL_FRIENDS]),
  q("看到基督徒犯錯時，你對信仰的想法是？", "日常生活與屬靈追求", Level.TWO, ["doubt"], [Audience.GOSPEL_FRIENDS]),
  q("什麼情況下你會考慮尋求宗教幫助？", "日常生活與屬靈追求", Level.ONE, ["faith"], [Audience.GOSPEL_FRIENDS]),
  q("你覺得人死後會去哪裡？", "日常生活與屬靈追求", Level.TWO, ["afterlife"], [Audience.GOSPEL_FRIENDS]),
  q("聽到「耶穌為你死」這句話感覺如何？", "日常生活與屬靈追求", Level.ONE, ["gospel"], [Audience.GOSPEL_FRIENDS]),
  q("曾經有過「這不是巧合」的超自然體驗嗎？", "日常生活與屬靈追求", Level.ONE, ["supernatural"], [Audience.GOSPEL_FRIENDS]),
  q("你認為聖經和佛經/古蘭經差別在哪？", "日常生活與屬靈追求", Level.TWO, ["comparison"], [Audience.GOSPEL_FRIENDS]),
  q("當基督徒說「平安喜樂」，你覺得是什麼感覺？", "日常生活與屬靈追求", Level.ONE, ["concept"], [Audience.GOSPEL_FRIENDS]),
  q("你對教會最大的誤解是什麼？", "日常生活與屬靈追求", Level.ONE, ["misunderstanding"], [Audience.GOSPEL_FRIENDS]),
  q("如果神給你三個願望，你會許什麼？", "日常生活與屬靈追求", Level.ONE, ["question"], [Audience.GOSPEL_FRIENDS]),
  q("看到基督徒在災難中仍感恩，你怎麼想？", "日常生活與屬靈追求", Level.ONE, ["observation"], [Audience.GOSPEL_FRIENDS]),
  q("你覺得「信教」和「迷信」差別在哪？", "日常生活與屬靈追求", Level.TWO, ["concept"], [Audience.GOSPEL_FRIENDS]),
  q("什麼樣的基督徒會讓你覺得「我也想這樣」？", "日常生活與屬靈追求", Level.ONE, ["testimony"], [Audience.GOSPEL_FRIENDS]),
  q("聽到「天堂」時，你期待看到什麼？", "日常生活與屬靈追求", Level.ONE, ["heaven"], [Audience.GOSPEL_FRIENDS]),
  q("你認為「禱告蒙應允」是巧合還是神蹟？", "日常生活與屬靈追求", Level.TWO, ["miracle"], [Audience.GOSPEL_FRIENDS]),
  q("當基督徒談「罪得赦免」，你理解是什麼意思？", "日常生活與屬靈追求", Level.ONE, ["concept"], [Audience.GOSPEL_FRIENDS]),
  q("你覺得聖經裡最難接受的故事是哪個？", "日常生活與屬靈追求", Level.ONE, ["bible"], [Audience.GOSPEL_FRIENDS]),
  q("在KTV唱〈奇異恩典〉時有什麼感覺？", "日常生活與屬靈追求", Level.ONE, ["hymn"], [Audience.GOSPEL_FRIENDS]),
  q("你認為「神愛世人」包含討厭的人嗎？", "日常生活與屬靈追求", Level.TWO, ["concept"], [Audience.GOSPEL_FRIENDS]),
  q("什麼情況下你會想翻聖經看看？", "日常生活與屬靈追求", Level.ONE, ["curiosity"], [Audience.GOSPEL_FRIENDS]),
  q("看到教會年輕人很熱情，你的第一反應是？", "日常生活與屬靈追求", Level.ONE, ["observation"], [Audience.GOSPEL_FRIENDS]),
  q("你覺得「十一奉獻」是合理的觀念嗎？", "日常生活與屬靈追求", Level.ONE, ["concept"], [Audience.GOSPEL_FRIENDS]),
  q("當基督徒生病卻不看病只禱告，你認同嗎？", "日常生活與屬靈追求", Level.TWO, ["doubt"], [Audience.GOSPEL_FRIENDS]),
  q("你心中「好的信仰」應該具備什麼特質？", "日常生活與屬靈追求", Level.ONE, ["faith"], [Audience.GOSPEL_FRIENDS]),
  q("聽到「上帝關一扇窗會開一扇門」覺得安慰嗎？", "日常生活與屬靈追求", Level.ONE, ["comfort"], [Audience.GOSPEL_FRIENDS]),
  q("你覺得人需要「救贖」嗎？為什麼？", "日常生活與屬靈追求", Level.TWO, ["salvation"], [Audience.GOSPEL_FRIENDS]),
  q("基督徒說「平安」和你說的「平安」意思一樣嗎？", "日常生活與屬靈追求", Level.ONE, ["comparison"], [Audience.GOSPEL_FRIENDS]),
  q("當你幫助別人時，心裡期待什麼回報？", "日常生活與屬靈追求", Level.ONE, ["motivation"], [Audience.GOSPEL_FRIENDS]),
  q("你認為「神」應該干涉人類戰爭嗎？", "日常生活與屬靈追求", Level.TWO, ["question"], [Audience.GOSPEL_FRIENDS]),
  q("看到教會發物資給窮人，你對信仰的印象是？", "日常生活與屬靈追求", Level.ONE, ["impression"], [Audience.GOSPEL_FRIENDS]),
  q("你覺得「禱告」和「正向思考」有什麼不同？", "日常生活與屬靈追求", Level.ONE, ["comparison"], [Audience.GOSPEL_FRIENDS]),
  q("如果參加查經班，你最想問什麼問題？", "日常生活與屬靈追求", Level.ONE, ["question"], [Audience.GOSPEL_FRIENDS]),

  // ==========================================
  // 4. 召會生活與肢體
  // ==========================================

  // --- 通用 (General) ---
  q("你最喜歡召會生活的哪一點？", "召會生活與肢體", Level.ONE, ["joy"]),
  q("分享一次你被弟兄姊妹的愛摸著的經歷。", "召會生活與肢體", Level.ONE, ["love"]),
  q("你覺得怎樣才算是「彼此相愛」？", "召會生活與肢體", Level.TWO, ["love"]),
  q("在配搭服事中，你曾遇到什麼困難？如何突破？", "召會生活與肢體", Level.THREE, ["service", "church-term"]),
  q("你覺得召會生活對你的成長有什麼幫助？", "召會生活與肢體", Level.ONE, ["growth"]),
  q("你有沒有曾經主動關心過新來的朋友？有什麼收穫？", "召會生活與肢體", Level.ONE, ["care"]),
  q("當小排聚會遲到時，你怎麼快速融入交通？", "召會生活與肢體", Level.ONE, ["meeting", "habit"]), // ✩
  q("分享一次你被弟兄姊妹的禱告扶持的感動經歷？", "召會生活與肢體", Level.ONE, ["prayer", "support"]), // ✩
  q("你覺得召會中最讓你窩心的小細節是什麼？", "召會生活與肢體", Level.ONE, ["joy", "detail"]), // ✩
  q("當服事配搭出現意見不合時，你怎麼尋求合一？", "召會生活與肢體", Level.THREE, ["service", "unity"]), // ✩
  q("你有沒有在召會聚餐中學到屬靈功課？分享看看？", "召會生活與肢體", Level.ONE, ["fellowship", "learning"]), // ✩
  q("當新朋友害羞不敢開口時，你怎麼主動破冰？", "召會生活與肢體", Level.TWO, ["newcomer", "care"]), // ✩
  q("你覺得哪種服事最能讓你經歷神的同工？", "召會生活與肢體", Level.TWO, ["service", "presence"]), // ✩
  q("分享一次你被小排同伴的見證激勵的經歷？", "召會生活與肢體", Level.ONE, ["testimony", "encouragement"]), // ✩
  q("當召會活動撞到私人行程時，你怎麼取捨？", "召會生活與肢體", Level.TWO, ["priority", "balance"]), // ✩
  q("你有沒有在打掃會所時體會服事的喜樂？", "召會生活與肢體", Level.ONE, ["service", "joy"]), // ✩
  q("當弟兄姊妹軟弱時，你怎麼用愛心挽回？", "召會生活與肢體", Level.THREE, ["love", "restoration"]), // ✩
  q("你覺得召會生活像個大家庭嗎？為什麼？", "召會生活與肢體", Level.ONE, ["family", "belonging"]), // ✩
  q("在交通分享時卡住說不出話，你怎麼化解尷尬？", "召會生活與肢體", Level.ONE, ["sharing", "recovery"]), // ✩
  q("分享一次你主動接送肢體參加聚會的溫暖經歷？", "召會生活與肢體", Level.ONE, ["care", "practical"]), // ✩
  q("當服事壓力大時，你怎麼從肢體得著扶持？", "召會生活與肢體", Level.TWO, ["service", "support"]), // ✩
  q("你有沒有在LINE群組裡用經文鼓勵小排同伴？", "召會生活與肢體", Level.ONE, ["technology", "encouragement"]), // ✩
  q("當看到新朋友默默離開時，你怎麼追上去關心？", "召會生活與肢體", Level.TWO, ["newcomer", "initiative"]), // ✩
  q("你覺得召會中最難忘的歡笑時刻是什麼？", "召會生活與肢體", Level.ONE, ["joy", "memory"]), // ✩
  q("在配搭服事中，你怎麼學習「順服」的功課？", "召會生活與肢體", Level.THREE, ["service", "submission"]), // ✩
  q("分享一次你被年長肢體的生命榜樣影響的經歷？", "召會生活與肢體", Level.ONE, ["mentorship", "growth"]), // ✩
  q("當小排討論冷場時，你怎麼帶動氣氛？", "召會生活與肢體", Level.ONE, ["meeting", "leadership"]), // ✩
  q("你有沒有在召會戶外活動中經歷肢體相愛？", "召會生活與肢體", Level.ONE, ["outdoor", "love"]), // ✩
  q("當你覺得「服事好累」時，什麼動力讓你堅持？", "召會生活與肢體", Level.TWO, ["service", "perseverance"]), // ✩
  q("你怎麼在召會中自然流露基督的馨香之氣？", "召會生活與肢體", Level.TWO, ["testimony", "fragrance"]), // ✩
  q("分享一次你為軟弱肢體默默代禱的經歷？", "召會生活與肢體", Level.ONE, ["prayer", "intercession"]), // ✩
  q("當新朋友問「召會是什麼」時，你怎麼簡單解釋？", "召會生活與肢體", Level.ONE, ["newcomer", "explanation"]), // ✩
  q("你有沒有在服事中發現自己隱藏的驕傲？", "召會生活與肢體", Level.THREE, ["service", "humility"]), // ✩
  q("當肢體間有誤會時，你怎麼主動和解？", "召會生活與肢體", Level.THREE, ["conflict", "reconciliation"]), // ✩
  q("你覺得召會聚餐時最溫暖的互動是什麼？", "召會生活與肢體", Level.ONE, ["fellowship", "warmth"]), // ✩
  q("在兒童服事中，你怎麼用創意傳遞真理？", "召會生活與肢體", Level.TWO, ["service", "creativity"]), // ✩
  q("分享一次你被年輕肢體的熱情感動的經歷？", "召會生活與肢體", Level.ONE, ["youth", "inspiration"]), // ✩
  q("當召會需要清潔整理時，你怎麼甘心樂意參與？", "召會生活與肢體", Level.ONE, ["service", "attitude"]), // ✩
  q("你有沒有在交通中意外得著問題解答的經歷？", "召會生活與肢體", Level.ONE, ["sharing", "revelation"]), // ✩
  q("當服事成果不如預期時，你怎麼調整心態？", "召會生活與肢體", Level.THREE, ["service", "mindset"]), // ✩
  q("你覺得小排中最寶貴的「彼此建造」是什麼？", "召會生活與肢體", Level.TWO, ["meeting", "edification"]), // ✩
  q("在探訪生病肢體時，你怎麼帶進基督的安慰？", "召會生活與肢體", Level.TWO, ["care", "comfort"]), // ✩
  q("分享一次你從配搭同伴學到忍耐的經歷？", "召會生活與肢體", Level.ONE, ["service", "patience"]), // ✩
  q("當新朋友第一次參加小排時，你怎麼讓他放鬆？", "召會生活與肢體", Level.ONE, ["newcomer", "welcome"]), // ✩
  q("你有沒有在召會圖書館被一本書深深摸著的經歷？", "召會生活與肢體", Level.ONE, ["resource", "touch"]), // ✩
  q("當面對肢體的批評時，你怎麼用愛心接受？", "召會生活與肢體", Level.THREE, ["criticism", "love"]), // ✩
  q("你覺得召會生活中最難的「捨己」功課是什麼？", "召會生活與肢體", Level.THREE, ["growth", "sacrifice"]), // ✩
  q("在詩歌服事中，你怎麼讓音樂成為真實敬拜？", "召會生活與肢體", Level.TWO, ["service", "worship"]), // ✩
  q("分享一次你為小排預備點心時的喜樂心情？", "召會生活與肢體", Level.ONE, ["fellowship", "joy"]), // ✩
  q("當召會推動新行動時，你怎麼積極響應？", "召會生活與肢體", Level.ONE, ["initiative", "response"]), // ✩
  q("你有沒有在交通中發現自己需要悔改的經歷？", "召會生活與肢體", Level.TWO, ["sharing", "repentance"]), // ✩
  q("當肢體搬家需要幫忙時，你怎麼樂意付出？", "召會生活與肢體", Level.ONE, ["care", "practical"]), // ✩
  q("你覺得召會中最美的「合一見證」是什麼？", "召會生活與肢體", Level.TWO, ["testimony", "unity"]), // ✩
  q("在帶領新人讀經時，你怎麼避免給壓力？", "召會生活與肢體", Level.TWO, ["newcomer", "guidance"]), // ✩
  q("分享一次你從年長姊妹學到溫柔的經歷？", "召會生活與肢體", Level.ONE, ["mentorship", "gentleness"]), // ✩
  q("當小排有人一直搶話時，你怎麼溫柔提醒？", "召會生活與肢體", Level.TWO, ["meeting", "patience"]), // ✩
  q("你有沒有在服事中經歷「神親自補足」的見證？", "召會生活與肢體", Level.ONE, ["service", "provision"]), // ✩
  q("當召會經費不足時，你怎麼甘心樂意奉獻？", "召會生活與肢體", Level.TWO, ["offering", "attitude"]), // ✩
  q("你覺得肢體間「敞開交通」的最大好處是什麼？", "召會生活與肢體", Level.TWO, ["sharing", "benefit"]), // ✩
  q("在戶外相調時，你怎麼藉著大自然見證神的創造？", "召會生活與肢體", Level.ONE, ["outdoor", "testimony"]), // ✩
  q("分享一次你被新朋友的單純信心激勵的經歷？", "召會生活與肢體", Level.ONE, ["newcomer", "inspiration"]), // ✩
  q("當服事遇到人力不足時，你怎麼禱告求神預備？", "召會生活與肢體", Level.TWO, ["service", "prayer"]), // ✩
  q("你有沒有在召會圖書借閱中得著及時幫助？", "召會生活與肢體", Level.ONE, ["resource", "help"]), // ✩
  q("當肢體失業時，你怎麼實際幫助並代禱？", "召會生活與肢體", Level.THREE, ["care", "support"]), // ✩
  q("你覺得小排中最容易忽略的「小羊」是誰？", "召會生活與肢體", Level.TWO, ["meeting", "care"]), // ✩
  q("在交通中聽到負面消息時，你怎麼轉向正面？", "召會生活與肢體", Level.TWO, ["sharing", "positivity"]), // ✩
  q("分享一次你從配搭服事學到謙卑的經歷？", "召會生活與肢體", Level.ONE, ["service", "humility"]), // ✩
  q("當新朋友問「為什麼要聚會」時，你怎麼回答？", "召會生活與肢體", Level.ONE, ["newcomer", "explanation"]), // ✩
  q("你有沒有在召會清潔日體會「彼此配搭」的喜樂？", "召會生活與肢體", Level.ONE, ["service", "cooperation"]), // ✩
  q("當面對服事倦怠時，你怎麼重新得力？", "召會生活與肢體", Level.THREE, ["service", "renewal"]), // ✩
  q("你覺得召會生活中最寶貴的「肢體關係」是什麼？", "召會生活與肢體", Level.TWO, ["relationship", "value"]), // ✩
  q("在探訪關懷時，你怎麼聆聽而不說教？", "召會生活與肢體", Level.TWO, ["care", "listening"]), // ✩
  q("分享一次你被肢體無條件接納的感動經歷？", "召會生活與肢體", Level.ONE, ["love", "acceptance"]), // ✩
  q("當小排有人長期不開口時，你怎麼私下關心？", "召會生活與肢體", Level.TWO, ["meeting", "care"]), // ✩
  q("你有沒有在召會慶典中經歷大家庭的溫暖？", "召會生活與肢體", Level.ONE, ["celebration", "warmth"]), // ✩
  q("當配搭服事出現功勞爭議時，你怎麼歸榮耀給神？", "召會生活與肢體", Level.THREE, ["service", "glory"]), // ✩
  q("你覺得「彼此認罪」在召會中為什麼重要？", "召會生活與肢體", Level.THREE, ["sharing", "repentance"]), // ✩
  q("在招待新朋友時，你怎麼讓他感受「回家」的溫暖？", "召會生活與肢體", Level.ONE, ["newcomer", "welcome"]), // ✩
  q("分享一次你從服事中發現自己恩賜的經歷？", "召會生活與肢體", Level.ONE, ["service", "gift"]), // ✩
  q("當召會推動讀經運動時，你怎麼積極參與？", "召會生活與肢體", Level.ONE, ["initiative", "response"]), // ✩
  q("你有沒有在肢體代禱中經歷神蹟的見證？", "召會生活與肢體", Level.ONE, ["prayer", "miracle"]), // ✩
  q("當面對文化差異的肢體時，你怎麼學習包容？", "召會生活與肢體", Level.THREE, ["diversity", "acceptance"]), // ✩
  q("你覺得小排中最能「互相激勵」的方式是什麼？", "召會生活與肢體", Level.TWO, ["meeting", "encouragement"]), // ✩
  q("在財務奉獻上，你怎麼操練「甘心樂意」的心？", "召會生活與肢體", Level.TWO, ["offering", "attitude"]), // ✩
  q("分享一次你被青少年肢體的熱情感染的經歷？", "召會生活與肢體", Level.ONE, ["youth", "inspiration"]), // ✩
  q("當服事計畫被打亂時，你怎麼尋求神的帶領？", "召會生活與肢體", Level.THREE, ["service", "guidance"]), // ✩
  q("你有沒有在召會圖書借閱中得著及時幫助？", "召會生活與肢體", Level.ONE, ["resource", "help"]), // ✩
  q("當肢體陷入低潮時，你怎麼長期陪伴不灰心？", "召會生活與肢體", Level.THREE, ["care", "perseverance"]), // ✩
  q("你覺得召會生活中最真實的「基督身體」體驗是什麼？", "召會生活與肢體", Level.TWO, ["body", "experience"]), // ✩
  q("在帶領新人禱告時，你怎麼讓他感覺自在？", "召會生活與肢體", Level.ONE, ["newcomer", "prayer"]), // ✩
  q("分享一次你從配搭同伴學到信心的經歷？", "召會生活與肢體", Level.ONE, ["service", "faith"]), // ✩
  q("當召會需要義工時，你怎麼克服忙碌參與？", "召會生活與肢體", Level.TWO, ["service", "priority"]), // ✩
  q("你有沒有在交通中「被一節經文點亮」的經歷？", "召會生活與肢體", Level.ONE, ["sharing", "revelation"]), // ✩

  // --- 大專/青年 (College/Young Adult) 40題 ---
  q("你覺得「活力伴」對你的重要性是什麼？", "召會生活與肢體", Level.TWO, ["companion", "church-term"], [Audience.COLLEGE, Audience.YOUNG_ADULT]),
  q("分享一次你和同伴一起熬夜交通或禱告的回憶。", "召會生活與肢體", Level.ONE, ["memory"], [Audience.COLLEGE, Audience.YOUNG_ADULT]),
  q("住在弟兄之家/姊妹之家，給你最大的幫助是什麼？", "召會生活與肢體", Level.TWO, ["living"], [Audience.COLLEGE]),
  q("期末考週時，你怎麼維持小排聚會不缺席？", "召會生活與肢體", Level.TWO, ["study-balance"], [Audience.COLLEGE]), // ✩
  q("當報告和特會撞期時，你會怎麼選擇？", "召會生活與肢體", Level.THREE, ["priority"], [Audience.COLLEGE]), // ✩
  q("分享一次在學餐邊吃飯邊交通的意外收穫？", "召會生活與肢體", Level.ONE, ["fellowship"], [Audience.COLLEGE]), // ✩
  q("你怎麼跟非基督徒室友解釋「弟兄之家」的意義？", "召會生活與肢體", Level.TWO, ["testimony"], [Audience.COLLEGE]), // ✩
  q("實習期間要怎麼維持召會生活？", "召會生活與肢體", Level.TWO, ["internship"], [Audience.YOUNG_ADULT]), // ✩
  q("當小組員變成你的必修課組員，感覺如何？", "召會生活與肢體", Level.ONE, ["relationship"], [Audience.COLLEGE]), // ✩
  q("分享一次用零用錢支持聖徒的感動經歷？", "召會生活與肢體", Level.TWO, ["giving"], [Audience.COLLEGE]), // ✩
  q("你覺得「線上小排」能取代實體聚會嗎？為什麼？", "召會生活與肢體", Level.TWO, ["technology"], [Audience.COLLEGE, Audience.YOUNG_ADULT]), // ✩
  q("當父母反對你參加暑期訓練怎麼辦？", "召會生活與肢體", Level.THREE, ["family"], [Audience.COLLEGE]), // ✩
  q("在社團招新和福音聚會衝突時怎麼取捨？", "召會生活與肢體", Level.TWO, ["time-management"], [Audience.COLLEGE]), // ✩
  q("第一次帶新人參加特會要注意什麼？", "召會生活與肢體", Level.ONE, ["newcomer"], [Audience.YOUNG_ADULT]), // ✩
  q("當打工排班總是卡到聚會時間怎麼辦？", "召會生活與肢體", Level.TWO, ["work"], [Audience.COLLEGE, Audience.YOUNG_ADULT]), // ✩
  q("分享一次在租屋處舉辦小排的趣事？", "召會生活與肢體", Level.ONE, ["gathering"], [Audience.YOUNG_ADULT]), // ✩
  q("你怎麼向同學解釋「召會」和一般教會的不同？", "召會生活與肢體", Level.TWO, ["testimony"], [Audience.COLLEGE]), // ✩
  q("當活力伴突然冷淡不聚會時，你會怎麼做？", "召會生活與肢體", Level.THREE, ["companion"], [Audience.COLLEGE]), // ✩
  q("畢業後要怎麼在新城市找到召會生活？", "召會生活與肢體", Level.ONE, ["transition"], [Audience.YOUNG_ADULT]), // ✩
  q("凌晨趕報告時，什麼動力讓你堅持晨禱？", "召會生活與肢體", Level.TWO, ["discipline"], [Audience.COLLEGE]), // ✩
  q("分享一次在系館樓梯間緊急禱告的經歷？", "召會生活與肢體", Level.ONE, ["prayer"], [Audience.COLLEGE]), // ✩
  q("你覺得「相調」對大學生最大的幫助是什麼？", "召會生活與肢體", Level.ONE, ["blending"], [Audience.COLLEGE]), // ✩
  q("當同學笑你「聚會太多很無聊」時怎麼回應？", "召會生活與肢體", Level.TWO, ["testimony"], [Audience.COLLEGE]), // ✩
  q("第一次參加服事卻搞砸了怎麼辦？", "召會生活與肢體", Level.TWO, ["service"], [Audience.YOUNG_ADULT]), // ✩
  q("怎麼用Line群組維持弟兄姊妹間的溫度？", "召會生活與肢體", Level.ONE, ["technology"], [Audience.COLLEGE, Audience.YOUNG_ADULT]), // ✩
  q("當研究所壓力大到不想聚會時怎麼突破？", "召會生活與肢體", Level.THREE, ["stress"], [Audience.COLLEGE]), // ✩
  q("分享一次在迎新宿營帶福音遊戲的經歷？", "召會生活與肢體", Level.TWO, ["evangelism"], [Audience.COLLEGE]), // ✩
  q("你如何平衡戀愛關係和召會生活？", "召會生活與肢體", Level.THREE, ["dating"], [Audience.YOUNG_ADULT]), // ✩
  q("當教授臨時調課影響小排時怎麼處理？", "召會生活與肢體", Level.ONE, ["schedule"], [Audience.COLLEGE]), // ✩
  q("初入職場要怎麼向同事解釋週五要聚會？", "召會生活與肢體", Level.TWO, ["workplace"], [Audience.YOUNG_ADULT]), // ✩
  q("分享一次用機車雙載去相調的歡樂回憶？", "召會生活與肢體", Level.ONE, ["memory"], [Audience.COLLEGE]), // ✩
  q("你覺得「晨興」對早八學生可能嗎？", "召會生活與肢體", Level.ONE, ["morning"], [Audience.COLLEGE]), // ✩
  q("當家人質疑「聚會影響學業」時怎麼回應？", "召會生活與肢體", Level.THREE, ["family"], [Audience.COLLEGE]), // ✩
  q("怎麼在社團活動中自然活出見證？", "召會生活與肢體", Level.TWO, ["testimony"], [Audience.COLLEGE]), // ✩
  q("第一次當小排負責人最怕什麼狀況？", "召會生活與肢體", Level.TWO, ["responsibility"], [Audience.YOUNG_ADULT]), // ✩
  q("分享一次用打工薪水奉獻的學習經歷？", "召會生活與肢體", Level.ONE, ["offering"], [Audience.COLLEGE, Audience.YOUNG_ADULT]), // ✩
  q("當室友反對你在房間禱告怎麼辦？", "召會生活與肢體", Level.THREE, ["living"], [Audience.COLLEGE]), // ✩
  q("你怎麼在IG限動分享召會生活不尷尬？", "召會生活與肢體", Level.ONE, ["social-media"], [Audience.COLLEGE, Audience.YOUNG_ADULT]), // ✩
  q("當小組員跟你借錢不還時怎麼處理？", "召會生活與肢體", Level.THREE, ["relationship"], [Audience.YOUNG_ADULT]), // ✩
  q("畢業季如何面對與屬靈同伴的分離？", "召會生活與肢體", Level.TWO, ["transition"], [Audience.COLLEGE]), // ✩
  q("分享一次在夜唱場合堅持不喝酒的經歷？", "召會生活與肢體", Level.TWO, ["testimony"], [Audience.COLLEGE]), // ✩

  // --- 福音朋友 (Gospel Friends) 40題 ---
  q("你覺得這個團體（聚會）給你什麼樣的感覺？", "召會生活與肢體", Level.ONE, ["feeling"], [Audience.GOSPEL_FRIENDS]),
  q("這裡的人和你平常接觸的朋友有什麼不一樣？", "召會生活與肢體", Level.ONE, ["comparison"], [Audience.GOSPEL_FRIENDS]),
  q("第一次被邀請參加聚會時，你心裡在想什麼？", "召會生活與肢體", Level.ONE, ["first-impression"], [Audience.GOSPEL_FRIENDS]), // ✩
  q("你觀察到聚會中的人最常提到什麼詞？", "召會生活與肢體", Level.ONE, ["observation"], [Audience.GOSPEL_FRIENDS]), // ✩
  q("聽到大家喊「阿們」時你有什麼感覺？", "召會生活與肢體", Level.ONE, ["custom"], [Audience.GOSPEL_FRIENDS]), // ✩
  q("你覺得這裡的氣氛像哪種類型的團體？", "召會生活與肢體", Level.ONE, ["atmosphere"], [Audience.GOSPEL_FRIENDS]), // ✩
  q("什麼原因讓你願意再來參加第二次？", "召會生活與肢體", Level.ONE, ["motivation"], [Audience.GOSPEL_FRIENDS]), // ✩
  q("你注意到基督徒在面對困難時有什麼不同？", "召會生活與肢體", Level.ONE, ["response"], [Audience.GOSPEL_FRIENDS]), // ✩
  q("聽到「交通」這個詞時你聯想到什麼？", "召會生活與肢體", Level.ONE, ["term"], [Audience.GOSPEL_FRIENDS]), // ✩
  q("看到大家讀聖經很投入，你覺得為什麼？", "召會生活與肢體", Level.ONE, ["observation"], [Audience.GOSPEL_FRIENDS]), // ✩
  q("你覺得「唱詩歌」和聽流行歌有什麼不同感受？", "召會生活與肢體", Level.ONE, ["music"], [Audience.GOSPEL_FRIENDS]), // ✩
  q("當有人為你禱告時，你的第一反應是什麼？", "召會生活與肢體", Level.ONE, ["reaction"], [Audience.GOSPEL_FRIENDS]), // ✩
  q("你覺得「召會」這個名稱特別在哪裡？", "召會生活與肢體", Level.ONE, ["term"], [Audience.GOSPEL_FRIENDS]), // ✩
  q("看到年輕人聚會不滑手機，你覺得驚訝嗎？", "召會生活與肢體", Level.ONE, ["observation"], [Audience.GOSPEL_FRIENDS]), // ✩
  q("聽到大家分享「經歷主」，你理解是什麼意思？", "召會生活與肢體", Level.ONE, ["term"], [Audience.GOSPEL_FRIENDS]), // ✩
  q("你覺得聚會中最難理解的部分是什麼？", "召會生活與肢體", Level.ONE, ["confusion"], [Audience.GOSPEL_FRIENDS]), // ✩
  q("看到有人聚會感動流淚，你會有什麼感覺？", "召會生活與肢體", Level.ONE, ["emotion"], [Audience.GOSPEL_FRIENDS]), // ✩
  q("你覺得基督徒常說的「平安」是指什麼？", "召會生活與肢體", Level.ONE, ["term"], [Audience.GOSPEL_FRIENDS]), // ✩
  q("聽到「小排」這個詞時，你以為是什麼活動？", "召會生活與肢體", Level.ONE, ["term"], [Audience.GOSPEL_FRIENDS]), // ✩
  q("你覺得這裡的人為什麼願意幫助陌生人？", "召會生活與肢體", Level.ONE, ["observation"], [Audience.GOSPEL_FRIENDS]), // ✩
  q("當大家說要「奉獻」時，你擔心被要求捐錢嗎？", "召會生活與肢體", Level.ONE, ["concern"], [Audience.GOSPEL_FRIENDS]), // ✩
  q("看到年輕人稱呼彼此「弟兄姊妹」，感覺如何？", "召會生活與肢體", Level.ONE, ["relationship"], [Audience.GOSPEL_FRIENDS]), // ✩
  q("你覺得聚會後大家不馬上離開是在等什麼？", "召會生活與肢體", Level.ONE, ["observation"], [Audience.GOSPEL_FRIENDS]), // ✩
  q("聽到「見證分享」時，你期待聽到什麼內容？", "召會生活與肢體", Level.ONE, ["expectation"], [Audience.GOSPEL_FRIENDS]), // ✩
  q("你覺得基督徒常說的「喜樂」和「快樂」有差嗎？", "召會生活與肢體", Level.ONE, ["term"], [Audience.GOSPEL_FRIENDS]), // ✩
  q("看到有人聚會時閉眼舉手，你會有什麼想法？", "召會生活與肢體", Level.ONE, ["observation"], [Audience.GOSPEL_FRIENDS]), // ✩
  q("你覺得「禱告」和「冥想」有什麼相似處？", "召會生活與肢體", Level.ONE, ["comparison"], [Audience.GOSPEL_FRIENDS]), // ✩
  q("聽到「主日」這個詞，你以為是什麼日子？", "召會生活與肢體", Level.ONE, ["term"], [Audience.GOSPEL_FRIENDS]), // ✩
  q("你覺得這裡的食物分享和一般聚餐有什麼不同？", "召會生活與肢體", Level.ONE, ["observation"], [Audience.GOSPEL_FRIENDS]), // ✩
  q("當大家說「感謝主」時，你覺得是口頭禪嗎？", "召會生活與肢體", Level.ONE, ["custom"], [Audience.GOSPEL_FRIENDS]), // ✩
  q("你注意到基督徒在聊天時很少抱怨嗎？", "召會生活與肢體", Level.ONE, ["observation"], [Audience.GOSPEL_FRIENDS]), // ✩
  q("聽到「牧養」這個詞時，你聯想到什麼畫面？", "召會生活與肢體", Level.ONE, ["term"], [Audience.GOSPEL_FRIENDS]), // ✩
  q("你覺得「聖經」和一般勵志書籍最大的不同是？", "召會生活與肢體", Level.ONE, ["comparison"], [Audience.GOSPEL_FRIENDS]), // ✩
  q("看到大家分享生活困難卻不沮喪，你覺得為什麼？", "召會生活與肢體", Level.ONE, ["observation"], [Audience.GOSPEL_FRIENDS]), // ✩
  q("你覺得「呼求主名」這個舉動特別在哪裡？", "召會生活與肢體", Level.ONE, ["custom"], [Audience.GOSPEL_FRIENDS]), // ✩
  q("當有人問「需要為你禱告嗎」，你會怎麼回應？", "召會生活與肢體", Level.ONE, ["response"], [Audience.GOSPEL_FRIENDS]), // ✩
  q("你覺得基督徒常說的「交通」是指聊天嗎？", "召會生活與肢體", Level.ONE, ["term"], [Audience.GOSPEL_FRIENDS]), // ✩
  q("看到聚會中不同年齡層混在一起，感覺奇怪嗎？", "召會生活與肢體", Level.ONE, ["observation"], [Audience.GOSPEL_FRIENDS]), // ✩
  q("你覺得「唱詩歌」能幫助放鬆心情嗎？", "召會生活與肢體", Level.ONE, ["music"], [Audience.GOSPEL_FRIENDS]), // ✩
  q("聽到「阿利路亞」時，你覺得是什麼意思？", "召會生活與肢體", Level.ONE, ["term"], [Audience.GOSPEL_FRIENDS]), // 第40題 ✩

  // ==========================================
  // 5. 展望、負擔與成全
  // ==========================================

  // --- 通用 (General) ---
  q("對於未來一年，你在屬靈上有什麼目標？", "展望、負擔與成全", Level.TWO, ["goal"]),
  q("你希望自己在服事或屬靈追求上，有什麼突破？", "展望、負擔與成全", Level.TWO, ["breakthrough"]),
  q("你最近最常為主禱告的一件事是什麼？", "展望、負擔與成全", Level.TWO, ["prayer"]),
  q("你願意為著召會的建造付上什麼代價？", "展望、負擔與成全", Level.THREE, ["cost"]),
  q("未來五年，你期待自己在真理認識上達到什麼程度？", "展望、負擔與成全", Level.TWO, ["vision"]),
  q("分享一次你為福音朋友代禱後看見的改變？", "展望、負擔與成全", Level.ONE, ["testimony"]),
  q("你覺得什麼是「健康的屬靈負擔」？舉例說明？", "展望、負擔與成全", Level.THREE, ["burden"]),
  q("在忙碌生活中，你如何維持每日靈修習慣？", "展望、負擔與成全", Level.ONE, ["discipline"]),
  q("如果主給你一個新負擔，你會優先從哪裡開始？", "展望、負擔與成全", Level.TWO, ["calling"]),
  q("你曾如何為教會增長付上實際行動？", "展望、負擔與成全", Level.ONE, ["action"]),
  q("面對服事瓶頸，你怎麼尋求突破？", "展望、負擔與成全", Level.THREE, ["challenge"]),
  q("你希望未來在團契中扮演什麼角色？", "展望、負擔與成全", Level.ONE, ["role"]),
  q("分享一個你為成全別人而犧牲的經歷？", "展望、負擔與成全", Level.TWO, ["sacrifice"]),
  q("你怎麼設定每季度的屬靈成長目標？", "展望、負擔與成全", Level.ONE, ["planning"]),
  q("當負擔沉重時，你如何從主得著力量？", "展望、負擔與成全", Level.TWO, ["strength"]),
  q("你期待未來在召會生活中看見什麼復興？", "展望、負擔與成全", Level.TWO, ["revival"]),
  q("你曾為福音工作放棄過什麼？值得嗎？", "展望、負擔與成全", Level.THREE, ["cost"]),
  q("怎麼平衡個人目標與團體負擔？", "展望、負擔與成全", Level.TWO, ["balance"]),
  q("你希望明年在禱告生活上有什麼突破？", "展望、負擔與成全", Level.ONE, ["breakthrough"]),
  q("分享一次你因順服負擔而經歷的成全？", "展望、負擔與成全", Level.TWO, ["obedience"]),
  q("你認為「付代價」在屬靈成長中多重要？", "展望、負擔與成全", Level.THREE, ["value"]),
  q("未來三年，你對家庭祭壇有什麼規劃？", "展望、負擔與成全", Level.ONE, ["family"]),
  q("你怎麼為青少年聖徒的未來代禱？", "展望、負擔與成全", Level.ONE, ["youth"]),
  q("當負擔不被理解時，你如何堅持？", "展望、負擔與成全", Level.THREE, ["perseverance"]),
  q("你希望自己在愛心上達到什麼標準？", "展望、負擔與成全", Level.ONE, ["love"]),
  q("分享一個你為城市復興禱告的負擔？", "展望、負擔與成全", Level.TWO, ["city"]),
  q("你願意在時間管理上為神調整什麼？", "展望、負擔與成全", Level.ONE, ["time"]),
  q("怎麼看待「成全」過程中的失敗？", "展望、負擔與成全", Level.TWO, ["failure"]),
  q("你期待未來在職場上如何見證主？", "展望、負擔與成全", Level.ONE, ["work"]),
  q("你曾為負擔而學習新技能嗎？舉例？", "展望、負擔與成全", Level.ONE, ["learning"]),
  q("在經濟上，你願意為福音奉獻多少？", "展望、負擔與成全", Level.THREE, ["offering"]),
  q("你如何為年老聖徒的成全代禱？", "展望、負擔與成全", Level.ONE, ["elderly"]),
  q("分享一次你因展望未來而得的平安？", "展望、負擔與成全", Level.ONE, ["peace"]),
  q("你覺得「負擔」和「壓力」有什麼不同？", "展望、負擔與成全", Level.TWO, ["comparison"]),
  q("未來十年，你對召會擴展有什麼異象？", "展望、負擔與成全", Level.THREE, ["vision"]),
  q("你願意在社交媒體上為神發聲嗎？", "展望、負擔與成全", Level.ONE, ["social"]),
  q("怎麼為未信者設定長期代禱目標？", "展望、負擔與成全", Level.ONE, ["intercession"]),
  q("你希望自己在忍耐上如何被成全？", "展望、負擔與成全", Level.TWO, ["patience"]),
  q("分享一個你為國際福音負擔的禱告？", "展望、負擔與成全", Level.ONE, ["global"]),
  q("當資源有限時，你怎麼優先負擔？", "展望、負擔與成全", Level.THREE, ["resource"]),
  q("你期待明年在讀經上突破什麼？", "展望、負擔與成全", Level.ONE, ["bible"]),
  q("你曾為成全別人而調整生涯規劃嗎？", "展望、負擔與成全", Level.TWO, ["adjustment"]),
  q("怎麼在忙碌中保持對負擔的熱情？", "展望、負擔與成全", Level.ONE, ["passion"]),
  q("你認為「屬靈展望」需要哪些紀律？", "展望、負擔與成全", Level.TWO, ["discipline"]),
  q("分享一次你因付代價而得的喜樂？", "展望、負擔與成全", Level.ONE, ["joy"]),
  q("你希望未來在社區服務中看見什麼果效？", "展望、負擔與成全", Level.ONE, ["community"]),
  q("當負擔落空時，你怎麼重新尋求？", "展望、負擔與成全", Level.THREE, ["disappointment"]),
  q("你願意為教會建造減少娛樂時間嗎？", "展望、負擔與成全", Level.ONE, ["sacrifice"]),
  q("怎麼設定可衡量的屬靈成長指標？", "展望、負擔與成全", Level.TWO, ["measurement"]),
  q("你對下一代聖徒的傳承有什麼負擔？", "展望、負擔與成全", Level.TWO, ["legacy"]),
  q("分享一個你為環境議題禱告的展望？", "展望、負擔與成全", Level.ONE, ["environment"]),
  q("在健康挑戰下，你如何持守負擔？", "展望、負擔與成全", Level.THREE, ["health"]),
  q("你希望明年在敬拜中有什麼新經歷？", "展望、負擔與成全", Level.ONE, ["worship"]),
  q("你曾因負擔而修復破裂關係嗎？", "展望、負擔與成全", Level.TWO, ["reconciliation"]),
  q("怎麼看待「成全」中的等候功課？", "展望、負擔與成全", Level.TWO, ["waiting"]),
  q("你期待未來在科技上如何應用於福音？", "展望、負擔與成全", Level.ONE, ["technology"]),
  q("分享一次你為經濟弱勢者的負擔禱告？", "展望、負擔與成全", Level.ONE, ["poverty"]),
  q("當家庭反對你的負擔時，怎麼辦？", "展望、負擔與成全", Level.THREE, ["opposition"]),
  q("你願意為宣教而學習新語言嗎？", "展望、負擔與成全", Level.ONE, ["mission"]),
  q("怎麼為個人恩賜的發展設定目標？", "展望、負擔與成全", Level.ONE, ["gift"]),
  q("你對文化宣教有什麼長期異象？", "展望、負擔與成全", Level.TWO, ["culture"]),
  q("分享一個你因展望而避免的試探？", "展望、負擔與成全", Level.ONE, ["temptation"]),
  q("在孤單中，你如何持守屬靈目標？", "展望、負擔與成全", Level.TWO, ["loneliness"]),
  q("你希望自己在信心上如何被成全？", "展望、負擔與成全", Level.ONE, ["faith"]),
  q("你曾為負擔而改變消費習慣嗎？", "展望、負擔與成全", Level.ONE, ["lifestyle"]),
  q("怎麼看待「付代價」與「智慧」的平衡？", "展望、負擔與成全", Level.THREE, ["wisdom"]),
  q("你期待明年在團契中更多參與什麼？", "展望、負擔與成全", Level.ONE, ["fellowship"]),
  q("分享一次你為政治局勢禱告的負擔？", "展望、負擔與成全", Level.TWO, ["politics"]),
  q("當精力不足時，你怎麼調整負擔？", "展望、負擔與成全", Level.ONE, ["energy"]),
  q("你願意為福音緣故遷居他鄉嗎？", "展望、負擔與成全", Level.THREE, ["relocation"]),
  q("怎麼設定每日的屬靈微目標？", "展望、負擔與成全", Level.ONE, ["daily"]),
  q("你對職場轉型有什麼屬靈展望？", "展望、負擔與成全", Level.TWO, ["career"]),
  q("分享一個你因成全別人而得的啟發？", "展望、負擔與成全", Level.ONE, ["inspiration"]),
  q("在資訊爆炸時代，你如何聚焦負擔？", "展望、負擔與成全", Level.TWO, ["focus"]),
  q("你希望未來在環保實踐中見證主嗎？", "展望、負擔與成全", Level.ONE, ["sustainability"]),
  q("你曾為負擔而尋求屬靈導師嗎？", "展望、負擔與成全", Level.ONE, ["mentorship"]),
  q("怎麼看待「長期負擔」與「短期目標」？", "展望、負擔與成全", Level.TWO, ["strategy"]),
  q("你期待明年在傳福音技巧上有突破？", "展望、負擔與成全", Level.ONE, ["evangelism"]),
  q("分享一次你為災區重建的負擔禱告？", "展望、負擔與成全", Level.ONE, ["disaster"]),
  q("當被誤解時，你如何持守異象？", "展望、負擔與成全", Level.THREE, ["misunderstanding"]),
  q("你願意為教會活動減少睡眠嗎？", "展望、負擔與成全", Level.ONE, ["commitment"]),
  q("怎麼為情緒健康設定屬靈目標？", "展望、負擔與成全", Level.ONE, ["emotion"]),
  q("你對家庭福音化有什麼具體計畫？", "展望、負擔與成全", Level.TWO, ["family"]),
  q("分享一個你因展望未來而得的勇氣？", "展望、負擔與成全", Level.ONE, ["courage"]),
  q("在快速變遷中，你如何更新負擔？", "展望、負擔與成全", Level.TWO, ["renewal"]),
  q("你希望自己在謙卑上如何被成全？", "展望、負擔與成全", Level.ONE, ["humility"]),
  q("你曾為負擔而參與社會運動嗎？", "展望、負擔與成全", Level.ONE, ["activism"]),
  q("怎麼平衡「個人異象」與「身體方向」？", "展望、負擔與成全", Level.THREE, ["alignment"]),
  q("你期待明年在音樂服事上有進步？", "展望、負擔與成全", Level.ONE, ["music"]),
  q("分享一次你為教育議題禱告的負擔？", "展望、負擔與成全", Level.ONE, ["education"]),
  q("當資源豐富時，你怎麼擴張負擔？", "展望、負擔與成全", Level.TWO, ["expansion"]),
  q("你願意為門徒訓練投資更多時間嗎？", "展望、負擔與成全", Level.ONE, ["discipleship"]),
  q("怎麼設定每週的屬靈覆盤習慣？", "展望、負擔與成全", Level.ONE, ["review"]),
  q("你對藝術創作中的福音見證有負擔？", "展望、負擔與成全", Level.TWO, ["art"]),
  q("分享一個你因成全過程而得的智慧？", "展望、負擔與成全", Level.ONE, ["wisdom"]),
  q("在數位時代，你如何持守傳統價值？", "展望、負擔與成全", Level.TWO, ["tradition"]),
  q("你希望未來在關懷弱勢上更深入？", "展望、負擔與成全", Level.ONE, ["compassion"]),
  q("你曾為負擔而挑戰舒適圈嗎？", "展望、負擔與成全", Level.ONE, ["comfort"]),
  q("怎麼看待「付代價」中的喜樂與痛苦？", "展望、負擔與成全", Level.THREE, ["paradox"]),
  q("你期待明年在領導力上被成全？", "展望、負擔與成全", Level.ONE, ["leadership"]),
  q("分享一次你為族群和諧禱告的展望？", "展望、負擔與成全", Level.ONE, ["unity"]),
  q("當負擔模糊時，你如何尋求清晰？", "展望、負擔與成全", Level.TWO, ["clarity"]),
  q("你願意為福音緣故簡化生活嗎？", "展望、負擔與成全", Level.ONE, ["simplicity"]),
  q("怎麼為靈命乾旱期設定恢復目標？", "展望、負擔與成全", Level.ONE, ["restoration"]),
  q("你對長照事工有什麼未來異象？", "展望、負擔與成全", Level.TWO, ["eldercare"]),
  q("分享一個你因展望而勝過焦慮的經歷？", "展望、負擔與成全", Level.ONE, ["anxiety"]),
  q("在多元文化中，你如何持守負擔？", "展望、負擔與成全", Level.TWO, ["diversity"]),
  q("你希望自己在喜樂上如何被成全？", "展望、負擔與成全", Level.ONE, ["joy"]),
  q("你曾為負擔而放棄升遷機會嗎？", "展望、負擔與成全", Level.ONE, ["opportunity"]),
  q("怎麼平衡「屬靈目標」與「現實限制」？", "展望、負擔與成全", Level.THREE, ["reality"]),
  q("你期待明年在禱告山上有新突破？", "展望、負擔與成全", Level.ONE, ["retreat"]),
  q("分享一次你為科技倫理禱告的負擔？", "展望、負擔與成全", Level.ONE, ["ethics"]),
  q("當教會分裂時，你如何持守異象？", "展望、負擔與成全", Level.THREE, ["division"]),
  q("你願意為青少年事工早起預備嗎？", "展望、負擔與成全", Level.ONE, ["preparation"]),
  q("怎麼設定每月的屬靈挑戰目標？", "展望、負擔與成全", Level.ONE, ["challenge"]),
  q("你對傳福音有什麼未來計畫？", "展望、負擔與成全", Level.TWO, ["creativity"]),
  q("分享一個你因成全而更認識主的見證？", "展望、負擔與成全", Level.ONE, ["knowledge"]),
  q("在經濟壓力下，你如何持守負擔？", "展望、負擔與成全", Level.TWO, ["finance"]),
  q("你希望未來在愛仇敵上被成全？", "展望、負擔與成全", Level.ONE, ["enemy"]),
  q("你曾為負擔而學習什麼技巧嗎？", "展望、負擔與成全", Level.ONE, ["counseling"]),

  // --- 青少年/大專 40題 ---
  q("你夢想中，未來的自己是個怎樣的基督徒？", "展望、負擔與成全", Level.ONE, ["dream"], [Audience.TEENS, Audience.COLLEGE]),
  q("你曾想過要參加全時間訓練嗎？為什麼？", "展望、負擔與成全", Level.TWO, ["training", "church-term"], [Audience.COLLEGE, Audience.YOUNG_ADULT]),
  q("你覺得年輕人可以如何影響召會？", "展望、負擔與成全", Level.TWO, ["influence"], [Audience.TEENS, Audience.COLLEGE]),
  q("大學期間你打算如何平衡課業與召會生活？", "展望、負擔與成全", Level.TWO, ["balance"], [Audience.COLLEGE]), // ✩
  q("如果開拓校園小排，你最想傳遞什麼負擔？", "展望、負擔與成全", Level.THREE, ["burden"], [Audience.COLLEGE]), // ✩
  q("你希望十年後的自己在召會中扮演什麼角色？", "展望、負擔與成全", Level.ONE, ["vision"], [Audience.TEENS]), // ✩
  q("當父母反對你參與服事時怎麼交通？", "展望、負擔與成全", Level.THREE, ["communication"], [Audience.TEENS]), // ✩
  q("你覺得Z世代青年最需要被成全哪方面？", "展望、負擔與成全", Level.TWO, ["perfecting"], [Audience.COLLEGE]), // ✩
  q("如果設計青年特會，你會聚焦什麼主題？", "展望、負擔與成全", Level.TWO, ["design"], [Audience.COLLEGE]), // ✩
  q("你如何用社群媒體傳遞屬靈負擔？", "展望、負擔與成全", Level.ONE, ["social-media"], [Audience.TEENS]), // ✩
  q("在專業領域中，你期待如何顯大基督？", "展望、負擔與成全", Level.THREE, ["testimony"], [Audience.COLLEGE]), // ✩
  q("你認為青年事工最急需突破的是什麼？", "展望、負擔與成全", Level.THREE, ["breakthrough"], [Audience.COLLEGE]), // ✩
  q("當同儕嘲笑你的信仰時如何堅定？", "展望、負擔與成全", Level.TWO, ["perseverance"], [Audience.TEENS]), // ✩
  q("你期待在弟兄/姊妹之家得著什麼造就？", "展望、負擔與成全", Level.ONE, ["dorm"], [Audience.COLLEGE]), // ✩
  q("如果發起校園福音行動，你會怎麼規劃？", "展望、負擔與成全", Level.TWO, ["gospel"], [Audience.COLLEGE]), // ✩
  q("你覺得青年聖徒最需要被加強的真理是什麼？", "展望、負擔與成全", Level.TWO, ["truth"], [Audience.TEENS]), // ✩
  q("面對AI時代，你期待如何用科技服事召會？", "展望、負擔與成全", Level.THREE, ["technology"], [Audience.COLLEGE]), // ✩
  q("你希望長輩如何成全你的服事恩賜？", "展望、負擔與成全", Level.TWO, ["mentorship"], [Audience.TEENS]), // ✩
  q("當實習與召會時間衝突時如何取捨？", "展望、負擔與成全", Level.THREE, ["priority"], [Audience.COLLEGE]), // ✩
  q("你夢想建立什麼創新型態的青年聚會？", "展望、負擔與成全", Level.ONE, ["innovation"], [Audience.TEENS]), // ✩
  q("面對低薪世代，你如何規劃奉獻見證？", "展望、負擔與成全", Level.THREE, ["offering"], [Audience.COLLEGE]), // ✩
  q("你期待婚姻如何成為服事平台的見證？", "展望、負擔與成全", Level.THREE, ["marriage"], [Audience.YOUNG_ADULT]), // ✩
  q("當世界價值觀衝擊信仰時如何持守？", "展望、負擔與成全", Level.THREE, ["faith"], [Audience.TEENS]), // ✩
  q("你希望未來在職場建立什麼樣的見證？", "展望、負擔與成全", Level.TWO, ["workplace"], [Audience.COLLEGE]), // ✩
  q("如果編寫青年教材，你會強調什麼內容？", "展望、負擔與成全", Level.TWO, ["material"], [Audience.COLLEGE]), // ✩
  q("你期待長輩如何理解年輕世代的文化？", "展望、負擔與成全", Level.ONE, ["generation"], [Audience.TEENS]), // ✩
  q("面對少子化，你對兒童服事有何負擔？", "展望、負擔與成全", Level.TWO, ["burden"], [Audience.YOUNG_ADULT]), // ✩
  q("你計劃如何用專業技能建造召會？", "展望、負擔與成全", Level.TWO, ["skill"], [Audience.COLLEGE]), // ✩
  q("當同齡人對信仰冷淡時如何激勵？", "展望、負擔與成全", Level.THREE, ["encouragement"], [Audience.TEENS]), // ✩
  q("你對校園禱告祭壇有什麼具體想像？", "展望、負擔與成全", Level.ONE, ["prayer"], [Audience.COLLEGE]), // ✩
  q("在多元性別議題中如何持守真理？", "展望、負擔與成全", Level.THREE, ["truth"], [Audience.COLLEGE]), // ✩
  q("你期待未來家庭如何參與召會生活？", "展望、負擔與成全", Level.TWO, ["family"], [Audience.YOUNG_ADULT]), // ✩
  q("面對氣候危機，你認為召會青年該如何回應？", "展望、負擔與成全", Level.THREE, ["environment"], [Audience.COLLEGE]), // ✩
  q("你計劃如何傳承年長聖徒的屬靈產業？", "展望、負擔與成全", Level.TWO, ["legacy"], [Audience.COLLEGE]), // ✩
  q("當社會運動興起時如何持守召會立場？", "展望、負擔與成全", Level.THREE, ["standpoint"], [Audience.COLLEGE]), // ✩
  q("你對建立跨校青年網絡有什麼構想？", "展望、負擔與成全", Level.TWO, ["network"], [Audience.COLLEGE]), // ✩
  q("在數位時代，你如何維持真實的肢體生活？", "展望、負擔與成全", Level.TWO, ["authenticity"], [Audience.TEENS]), // ✩
  q("你期待全時間訓練裝備你什麼能力？", "展望、負擔與成全", Level.ONE, ["equipping"], [Audience.COLLEGE]), // ✩
  q("面對高壓社會，你計劃如何保守靈修生活？", "展望、負擔與成全", Level.TWO, ["devotion"], [Audience.YOUNG_ADULT]), // ✩

  // --- 中年/年長 40題 ---
  q("您希望能為年輕一代留下什麼屬靈的榜樣？", "展望、負擔與成全", Level.THREE, ["legacy"], [Audience.MIDDLE_AGED, Audience.ELDERLY]),
  q("對於久不聚會的聖徒，您覺得我們該如何關心？", "展望、負擔與成全", Level.TWO, ["care"], [Audience.MIDDLE_AGED, Audience.ELDERLY]),
  q("您現在最大的禱告負擔是什麼？", "展望、負擔與成全", Level.TWO, ["burden"], [Audience.ELDERLY]),
  q("您希望未來能如何成全年輕人？", "展望、負擔與成全", Level.TWO, ["perfecting"], [Audience.MIDDLE_AGED, Audience.ELDERLY]),
  q("您最想傳承給年輕人的屬靈經歷是什麼？", "展望、負擔與成全", Level.TWO, ["heritage"], [Audience.ELDERLY]), // ✩
  q("面對退休生活，您計劃如何投入召會服事？", "展望、負擔與成全", Level.ONE, ["retirement"], [Audience.MIDDLE_AGED]), // ✩
  q("您覺得長輩在真理教導上該如何更新？", "展望、負擔與成全", Level.THREE, ["teaching"], [Audience.ELDERLY]), // ✩
  q("當年輕人質疑傳統做法時如何交通？", "展望、負擔與成全", Level.THREE, ["communication"], [Audience.MIDDLE_AGED]), // ✩
  q("您對建立「跨代同行」機制有什麼建議？", "展望、負擔與成全", Level.THREE, ["intergenerational"], [Audience.ELDERLY]), // ✩
  q("在數位化趨勢中，您期待如何被成全？", "展望、負擔與成全", Level.TWO, ["digital"], [Audience.MIDDLE_AGED]), // ✩
  q("您希望如何用人生智慧輔佐年輕同工？", "展望、負擔與成全", Level.TWO, ["wisdom"], [Audience.ELDERLY]), // ✩
  q("面對健康限制，您如何調整服事方式？", "展望、負擔與成全", Level.THREE, ["health"], [Audience.ELDERLY]), // ✩
  q("您對召會未來的福音開展有何異象？", "展望、負擔與成全", Level.THREE, ["vision"], [Audience.MIDDLE_AGED]), // ✩
  q("當年輕世代與您觀念衝突時如何合一？", "展望、負擔與成全", Level.THREE, ["unity"], [Audience.ELDERLY]), // ✩
  q("您計劃如何記錄並傳遞屬靈見證？", "展望、負擔與成全", Level.TWO, ["testimony"], [Audience.MIDDLE_AGED]), // ✩
  q("面對空巢期，您期待如何擴展服事？", "展望、負擔與成全", Level.TWO, ["empty-nest"], [Audience.MIDDLE_AGED]), // ✩
  q("您覺得長輩在禱告聚會中該扮演什麼角色？", "展望、負擔與成全", Level.TWO, ["prayer"], [Audience.ELDERLY]), // ✩
  q("當體力衰退時，如何維持屬靈影響力？", "展望、負擔與成全", Level.THREE, ["influence"], [Audience.ELDERLY]), // ✩
  q("您對「家庭祭壇」的傳承有什麼具體實踐？", "展望、負擔與成全", Level.TWO, ["family-altar"], [Audience.MIDDLE_AGED]), // ✩
  q("面對社會變遷，您認為召會最需持守的是什麼？", "展望、負擔與成全", Level.THREE, ["steadfastness"], [Audience.ELDERLY]), // ✩
  q("您希望如何用財務經驗幫助召會管理？", "展望、負擔與成全", Level.THREE, ["finance"], [Audience.MIDDLE_AGED]), // ✩
  q("當年輕人忽略聚會時，您會如何勸勉？", "展望、負擔與成全", Level.THREE, ["exhortation"], [Audience.ELDERLY]), // ✩
  q("您對建立「長者智慧庫」有什麼構想？", "展望、負擔與成全", Level.TWO, ["knowledge-base"], [Audience.ELDERLY]), // ✩
  q("在後疫情時代，您最關注召會哪方面重建？", "展望、負擔與成全", Level.THREE, ["post-pandemic"], [Audience.MIDDLE_AGED]), // ✩
  q("您期待如何參與校園福音事工？", "展望、負擔與成全", Level.ONE, ["campus"], [Audience.MIDDLE_AGED]), // ✩
  q("面對科技鴻溝，您希望年輕人如何幫助您？", "展望、負擔與成全", Level.ONE, ["technology"], [Audience.ELDERLY]), // ✩
  q("您對「以生命養育生命」的傳承有何實踐計劃？", "展望、負擔與成全", Level.THREE, ["nurturing"], [Audience.ELDERLY]), // ✩
  q("當召會方向與您經驗不符時如何順服？", "展望、負擔與成全", Level.THREE, ["submission"], [Audience.MIDDLE_AGED]), // ✩
  q("您最想教導年輕父母什麼育兒智慧？", "展望、負擔與成全", Level.TWO, ["parenting"], [Audience.ELDERLY]), // ✩
  q("面對高齡社會，您對銀髮事工有何負擔？", "展望、負擔與成全", Level.THREE, ["silver-hair"], [Audience.MIDDLE_AGED]), // ✩
  q("您如何用職場退休經驗輔導在職聖徒？", "展望、負擔與成全", Level.TWO, ["career"], [Audience.MIDDLE_AGED]), // ✩
  q("當身體軟弱成為見證時，您如何詮釋？", "展望、負擔與成全", Level.THREE, ["weakness"], [Audience.ELDERLY]), // ✩
  q("您對召會歷史的保存與傳承有何建議？", "展望、負擔與成全", Level.TWO, ["history"], [Audience.ELDERLY]), // ✩
  q("面對世代交替，您最想提醒年輕同工什麼？", "展望、負擔與成全", Level.THREE, ["reminder"], [Audience.MIDDLE_AGED]), // ✩
  q("您計劃如何用書信持續牧養年輕肢體？", "展望、負擔與成全", Level.TWO, ["letter"], [Audience.ELDERLY]), // ✩
  q("當文化衝擊真理時，您會如何堅固新人？", "展望、負擔與成全", Level.THREE, ["culture"], [Audience.MIDDLE_AGED]), // ✩
  q("您對建立「屬靈家譜」有什麼具體做法？", "展望、負擔與成全", Level.TWO, ["spiritual-lineage"], [Audience.ELDERLY]), // ✩
  q("面對人生終程，您最想完成的屬靈心願？", "展望、負擔與成全", Level.THREE, ["legacy"], [Audience.ELDERLY]), // ✩

  // ==========================================
  // 6. 生活、人際與個人故事
  // ==========================================

  // --- 通用 (General) 120題 ---
  q("信主後，你的人際關係或與人的相處方式有什麼調整？", "生活、人際與個人故事", Level.TWO, ["relationships"]),
  q("分享一個你感到孤單時，主與你同在的經歷。", "生活、人際與個人故事", Level.TWO, ["comfort"]),
  q("分享一次你與家人修復關係的見證。", "生活、人際與個人故事", Level.TWO, ["family"]),
  q("你覺得在現代社會做基督徒，最大的挑戰是什麼？", "生活、人際與個人故事", Level.TWO, ["society"]),
  q("有沒有哪個朋友的話語特別影響你？", "生活、人際與個人故事", Level.ONE, ["friendship"]),
  q("你覺得什麼時候最需要朋友的陪伴？", "生活、人際與個人故事", Level.ONE, ["companionship"]),
  q("當同事邀請你去夜店時，你會怎麼回應？", "生活、人際與個人故事", Level.TWO, ["workplace"]), // ✩
  q("分享一次用聖經原則解決同事衝突的經驗？", "生活、人際與個人故事", Level.TWO, ["conflict"]), // ✩
  q("你如何在社群媒體上活出基督徒見證？", "生活、人際與個人故事", Level.ONE, ["social-media"]), // ✩
  q("當朋友遭遇離婚時，你會怎麼陪伴？", "生活、人際與個人故事", Level.THREE, ["crisis"]), // ✩
  q("分享一次在職場被誤解卻選擇饒恕的經歷？", "生活、人際與個人故事", Level.THREE, ["forgiveness"]), // ✩
  q("你覺得基督徒約會與非基督徒最大不同是什麼？", "生活、人際與個人故事", Level.TWO, ["dating"]), // ✩
  q("當家人反對你的信仰時，如何維持關係？", "生活、人際與個人故事", Level.THREE, ["persecution"]), // ✩
  q("分享一次在公車上為陌生人禱告的勇氣？", "生活、人際與個人故事", Level.ONE, ["boldness"]), // ✩
  q("你怎麼處理小組員之間的金錢借貸問題？", "生活、人際與個人故事", Level.THREE, ["money"]), // ✩
  q("當朋友說「基督徒都很偽善」時怎麼回應？", "生活、人際與個人故事", Level.TWO, ["stereotype"]), // ✩
  q("分享一次用創意方式向鄰居表達關心的故事？", "生活、人際與個人故事", Level.ONE, ["neighbor"]), // ✩
  q("你如何在LINE群組中保持恩典的溝通？", "生活、人際與個人故事", Level.ONE, ["communication"]), // ✩
  q("當同事在辦公室說黃色笑話時怎麼應對？", "生活、人際與個人故事", Level.TWO, ["boundary"]), // ✩
  q("分享一次在超商安慰店員的微小見證？", "生活、人際與個人故事", Level.ONE, ["kindness"]), // ✩
  q("你覺得基督徒參與政治討論該注意什麼？", "生活、人際與個人故事", Level.THREE, ["politics"]), // ✩
  q("當朋友陷入憂鬱時，你如何陪伴不越界？", "生活、人際與個人故事", Level.THREE, ["mental-health"]), // ✩
  q("分享一次在健身房與人分享信仰的趣事？", "生活、人際與個人故事", Level.ONE, ["fitness"]), // ✩
  q("你怎麼處理教會肢體間的八卦問題？", "生活、人際與個人故事", Level.THREE, ["gossip"]), // ✩
  q("當父母要求祭祖時，如何兼顧孝順與信仰？", "生活、人際與個人故事", Level.THREE, ["tradition"]), // ✩
  q("分享一次在咖啡廳為服務生多給小費的感動？", "生活、人際與個人故事", Level.ONE, ["generosity"]), // ✩
  q("你如何在同學會中應對炫耀文化的壓力？", "生活、人際與個人故事", Level.TWO, ["comparison"]), // ✩
  q("當朋友問「神為什麼允許苦難」時怎麼回答？", "生活、人際與個人故事", Level.THREE, ["theodicy"]), // ✩
  q("分享一次在捷運上讓座引發的信仰對話？", "生活、人際與個人故事", Level.ONE, ["witness"]), // ✩
  q("你怎麼看待基督徒使用算命APP的現象？", "生活、人際與個人故事", Level.TWO, ["occult"]), // ✩
  q("當同事要求幫忙掩蓋錯誤時如何抉擇？", "生活、人際與個人故事", Level.THREE, ["integrity"]), // ✩
  q("分享一次在寵物喪失時經歷的屬靈安慰？", "生活、人際與個人故事", Level.TWO, ["grief"]), // ✩
  q("你如何在網路論壇面對攻擊性言論？", "生活、人際與個人故事", Level.TWO, ["online"]), // ✩
  q("當朋友沉迷手遊時，如何表達關心不說教？", "生活、人際與個人故事", Level.TWO, ["addiction"]), // ✩
  q("分享一次在醫院陪病時的意外福音機會？", "生活、人際與個人故事", Level.TWO, ["hospital"]), // ✩
  q("你覺得基督徒經營網紅事業的界線在哪？", "生活、人際與個人故事", Level.THREE, ["influencer"]), // ✩
  q("當家人堅持用傳統療法拒絕就醫時怎麼辦？", "生活、人際與個人故事", Level.THREE, ["health"]), // ✩
  q("分享一次在登山迷路時的禱告經歷？", "生活、人際與個人故事", Level.ONE, ["adventure"]), // ✩
  q("你如何處理小組內弟兄姊妹的戀愛糾紛？", "生活、人際與個人故事", Level.THREE, ["relationship"]), // ✩
  q("當同事抱怨公司時，如何不陷入負面氛圍？", "生活、人際與個人故事", Level.TWO, ["work-environment"]), // ✩
  q("分享一次在便利商店讀經被詢問的經歷？", "生活、人際與個人故事", Level.ONE, ["daily-life"]), // ✩
  q("你怎麼看待基督徒參與同志朋友婚禮？", "生活、人際與個人故事", Level.THREE, ["ethics"]), // ✩
  q("當朋友借錢不還時，如何兼顧愛心與智慧？", "生活、人際與個人故事", Level.THREE, ["loan"]), // ✩
  q("分享一次在國際航班上與鄰座分享見證？", "生活、人際與個人故事", Level.TWO, ["travel"]), // ✩
  q("你如何在家族群組傳福音不引發反感？", "生活、人際與個人故事", Level.TWO, ["evangelism"]), // ✩
  q("當孩子問「為什麼要禱告」時怎麼回答？", "生活、人際與個人故事", Level.ONE, ["parenting"]), // ✩
  q("分享一次在火車誤點時的平安見證？", "生活、人際與個人故事", Level.ONE, ["patience"]), // ✩
  q("你怎麼處理教會內不同世代的溝通落差？", "生活、人際與個人故事", Level.THREE, ["generation-gap"]), // ✩
  q("當朋友遭遇詐騙時，如何給予實際幫助？", "生活、人際與個人故事", Level.TWO, ["support"]), // ✩
  q("分享一次在尾牙拒酒引發的信仰對話？", "生活、人際與個人故事", Level.TWO, ["work-party"]), // ✩
  q("你如何在網路購物時實踐誠實原則？", "生活、人際與個人故事", Level.ONE, ["integrity"]), // ✩
  q("當鄰居噪音干擾時，如何以愛心溝通？", "生活、人際與個人故事", Level.TWO, ["community"]), // ✩
  q("分享一次在急診室為陌生人禱告的經歷？", "生活、人際與個人故事", Level.TWO, ["compassion"]), // ✩
  q("你覺得基督徒玩手遊抽卡算不算賭博？", "生活、人際與個人故事", Level.TWO, ["gaming"]), // ✩
  q("當親友推銷直銷時，如何婉拒不傷和氣？", "生活、人際與個人故事", Level.TWO, ["boundary"]), // ✩
  q("分享一次在停車場處理擦撞的恩典見證？", "生活、人際與個人故事", Level.ONE, ["accident"]), // ✩
  q("你如何在臉書紛爭中成為和平之子？", "生活、人際與個人故事", Level.TWO, ["peacemaker"]), // ✩
  q("當朋友問「基督徒可以練瑜伽嗎」怎麼回答？", "生活、人際與個人故事", Level.TWO, ["spirituality"]), // ✩
  q("分享一次在裁員潮中經歷的奇妙供應？", "生活、人際與個人故事", Level.THREE, ["provision"]), // ✩
  q("你怎麼處理小組員過度依賴你的問題？", "生活、人際與個人故事", Level.THREE, ["dependency"]), // ✩
  q("當家人堅持用風水擺設時如何回應？", "生活、人際與個人故事", Level.THREE, ["idolatry"]), // ✩
  q("分享一次在早餐店為老闆娘禱告的經歷？", "生活、人際與個人故事", Level.ONE, ["small-business"]), // ✩
  q("你如何看待基督徒參與萬聖節活動？", "生活、人際與個人故事", Level.TWO, ["holiday"]), // ✩
  q("當朋友婚姻觸礁時，如何避免錯誤建議？", "生活、人際與個人故事", Level.THREE, ["marriage"]), // ✩
  q("分享一次在颱風天幫助獨居長輩的故事？", "生活、人際與個人故事", Level.ONE, ["elderly"]), // ✩
  q("你如何在美食部落格推薦中保持誠實？", "生活、人際與個人故事", Level.ONE, ["review"]), // ✩
  q("當同事要求幫忙做假帳時如何堅守立場？", "生活、人際與個人故事", Level.THREE, ["ethics"]), // ✩
  q("分享一次在海外打工時的孤單與神同在？", "生活、人際與個人故事", Level.TWO, ["overseas"]), // ✩
  q("你怎麼處理教會內弟兄的權威掌控問題？", "生活、人際與個人故事", Level.THREE, ["authority"]), // ✩
  q("當孩子被霸凌時，如何教導以愛回應？", "生活、人際與個人故事", Level.THREE, ["bullying"]), // ✩
  q("分享一次在郵局櫃檯經歷的溫柔見證？", "生活、人際與個人故事", Level.ONE, ["service"]), // ✩
  q("你如何看待基督徒投資虛擬貨幣？", "生活、人際與個人故事", Level.TWO, ["investment"]), // ✩
  q("當朋友沉迷塔羅占卜時如何關懷？", "生活、人際與個人故事", Level.TWO, ["occult"]), // ✩
  q("分享一次在寵物咖啡廳的福音對話？", "生活、人際與個人故事", Level.ONE, ["cafe"]), // ✩
  q("你如何在家庭聚餐中化解信仰衝突？", "生活、人際與個人故事", Level.TWO, ["family-gathering"]), // ✩
  q("當被要求簽署違背信仰的文件時怎麼辦？", "生活、人際與個人故事", Level.THREE, ["conscience"]), // ✩
  q("分享一次在KTV拒絕點唱爭議歌曲的經歷？", "生活、人際與個人故事", Level.ONE, ["entertainment"]), // ✩
  q("你怎麼看待基督徒參與示威遊行？", "生活、人際與個人故事", Level.THREE, ["protest"]), // ✩
  q("當朋友問「神為何不醫治我」時怎麼回應？", "生活、人際與個人故事", Level.THREE, ["healing"]), // ✩
  q("分享一次在書店巧遇慕道友的對話？", "生活、人際與個人故事", Level.ONE, ["divine-appointment"]), // ✩
  q("你如何在網購退貨時實踐誠信原則？", "生活、人際與個人故事", Level.ONE, ["e-commerce"]), // ✩
  q("當親人臨終前未信主，如何處理悲傷？", "生活、人際與個人故事", Level.THREE, ["grief"]), // ✩
  q("分享一次在停電時幫助鄰舍的經歷？", "生活、人際與個人故事", Level.ONE, ["community-service"]), // ✩
  q("你怎麼處理教會姊妹間的嫉妒問題？", "生活、人際與個人故事", Level.THREE, ["jealousy"]), // ✩
  q("當同事批評你「太乖不好玩」時怎麼回應？", "生活、人際與個人故事", Level.TWO, ["peer-pressure"]), // ✩
  q("分享一次在夜市為攤販禱告的勇敢經歷？", "生活、人際與個人故事", Level.TWO, ["market"]), // ✩
  q("你如何看待基督徒玩暴力電玩？", "生活、人際與個人故事", Level.TWO, ["video-game"]), // ✩
  q("當朋友陷入婚外情時如何勸誡？", "生活、人際與個人故事", Level.THREE, ["adultery"]), // ✩
  q("分享一次在計程車上與司機聊信仰？", "生活、人際與個人故事", Level.ONE, ["taxi"]), // ✩
  q("你如何在臉書廣告中抵制虛假宣傳？", "生活、人際與個人故事", Level.ONE, ["advertising"]), // ✩
  q("當孩子被嘲笑「不拜拜」時如何安慰？", "生活、人際與個人故事", Level.TWO, ["parenting"]), // ✩
  q("分享一次在泳池救生時的平安見證？", "生活、人際與個人故事", Level.ONE, ["safety"]), // ✩
  q("你怎麼處理教會同工間的競爭心態？", "生活、人際與個人故事", Level.THREE, ["competition"]), // ✩
  q("當朋友問「基督徒可以刺青嗎」怎麼回答？", "生活、人際與個人故事", Level.TWO, ["tattoo"]), // ✩
  q("分享一次在火災現場協助疏散的經歷？", "生活、人際與個人故事", Level.TWO, ["emergency"]), // ✩
  q("你如何看待基督徒使用吸引力法則？", "生活、人際與個人故事", Level.TWO, ["new-age"]), // ✩
  q("當家人堅持安太歲時如何智慧回應？", "生活、人際與個人故事", Level.THREE, ["folk-religion"]), // ✩
  q("分享一次在垃圾場遇見拾荒者的服事？", "生活、人際與個人故事", Level.TWO, ["compassion"]), // ✩
  q("你如何在Google評論中實踐真實原則？", "生活、人際與個人故事", Level.ONE, ["review"]), // ✩
  q("當同事要求偽造學歷時如何拒絕？", "生活、人際與個人故事", Level.THREE, ["integrity"]), // ✩
  q("分享一次在颱風救災時的團隊見證？", "生活、人際與個人故事", Level.TWO, ["disaster"]), // ✩
  q("你怎麼處理教會青少年同儕排擠問題？", "生活、人際與個人故事", Level.THREE, ["youth"]), // ✩
  q("當朋友說「所有宗教都一樣」時怎麼回應？", "生活、人際與個人故事", Level.TWO, ["pluralism"]), // ✩
  q("分享一次在寵物喪禮中分享永恆盼望？", "生活、人際與個人故事", Level.TWO, ["pet"]), // ✩
  q("你如何看待基督徒參與廟會活動？", "生活、人際與個人故事", Level.TWO, ["festival"]), // ✩
  q("當親人沉迷股票賭博時如何勸誡？", "生活、人際與個人故事", Level.THREE, ["gambling"]), // ✩
  q("分享一次在登山遇難時的禱告蒙應允？", "生活、人際與個人故事", Level.TWO, ["adventure", "prayer"])
];
