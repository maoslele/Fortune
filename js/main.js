'use strict';
{
  // const results = [
  //   "very lucky",
  //   "lucky",
  //   "soso",
  //   "unlucky",
  // ];

  // document.querySelector("button").addEventListener('click', () => {
  //   box.textContent = `You are ${results[Math.floor(Math.random() * results.length)]}.`;
  // });

  const box = document.getElementById('box');
  const suggestion = document.getElementById('suggestion');
  const star = document.getElementById('star');

  btn.addEventListener('click', getFortune);
  function getFortune() {
    const results = Math.random();
    if (results <= 0.20) {  //20%
      star.textContent = '★★★★';
      box.textContent = 'Super lucky!';
      suggestion.textContent = 'You may see rainbow.';
    } else if (results <= 0.45) { //25%
      star.textContent = '★★★☆';
      box.textContent = 'Lucky!';
      suggestion.textContent = 'You may get some food from your neigbours.';
    } else if (results <= 0.7) { //30%
      star.textContent = '★★☆☆';
      box.textContent = 'Soso...';
      suggestion.textContent = 'You may see handsome guy in your dream.';
    } else { //15%
      star.textContent = '★☆☆☆';
      box.textContent = 'Unlucky.';
      suggestion.textContent = 'You might lose something. Be careful!';
    }
    }

}


//運勢を示した後に、その運勢ごとに「XXがあるかもしれない」という予言をしたい
//予言に複数種類をもたせて、それをランダムに表示したい
//関数内に複数のtextContentを記載しているが、まとめられないか。考えてみる。
//日本語版と英語版切り替えられるようにする