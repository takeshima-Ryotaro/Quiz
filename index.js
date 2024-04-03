const question = ["ゲーム史上、最も売れたゲームは次の内どれ？", "cos^2 (x) + sin^2 (x) = ?", "ポーカーで最強の役は？"]
const answers = [[
  "スーパーファミコン",
  "プレイステーション２",
  "ニンテンドースイッチ",
  "ニンテンドーDS"
],
[
  "0",
  "1",
  "-1",
  "∞"
],
[
  "フルハウス",
  "フォーカード",
  "ストレート",
  "ロイヤルストレートフラッシュ"
]];
const correct = ["ニンテンドーDS", "1", "ロイヤルストレートフラッシュ"];
let i = 0;
let chose = answers[1].length;


let quize = document.getElementById("js-question");
quize.textContent = question[i];
for(let j = 0; j < answers[i].length; j ++){
  let button = document.getElementsByTagName("button")[j];
  button.textContent = answers[i][j];
  console.log(button.textContent)
  button.addEventListener("click", function(){
    if(button.textContent == correct[i]){
      alert("正解");
      try{
        i ++;
        document.getElementById("js-question").textContent = question[i];
        for(let k = 0; k < answers[i].length; k ++){
          let button = document.getElementsByTagName("button")[k];
          button.textContent = answers[i][k];
        }
      }catch{
        let list = ["お", "め", "で", "と"];
        quize.textContent = "finish";
        for(let k = 0; k < chose; k ++){
          let button = document.getElementsByTagName("button")[k];
          button.textContent = list[k];
        }
      }
      
    }else{
      alert("不正解");
    }
  })
}




