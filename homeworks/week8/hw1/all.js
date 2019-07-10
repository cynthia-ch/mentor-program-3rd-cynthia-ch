const container = document.querySelector('.container')
const startprize = document.querySelector('.start');

function getfirstprize() {
  container.innerHTML = `
  <h1>日本東京雙人遊</h1>
  <img src="./flight.png">`;
}

function getsecondprize() {
  container.innerHTML = `
  <h1>90吋電視一台</h1>
  <img src="./tv.png">`;
}

function getthirdprize() {
  container.innerHTML = `
  <h1 class="youtubetitle">知名 YouTuber 簽名握手會入場券一張，Bang！</h1>
  <img src="./youtube.png">`;
}

function getnone() {
  container.innerHTML = `
  <h1 class="thankyou">銘謝惠顧</h1>`;
}

function getprize(p) {
  switch (p) {
    case 'FIRST': getfirstprize();
      break;

    case 'SECOND': getsecondprize();
      break;

    case 'THIRD': getthirdprize();
      break;

    case 'NONE': getnone();
      break;

    default:
      alert('系統不穩定請再試一次！');
      break;
  }
}


document.querySelector('.start').addEventListener('click', () => {
  const request = new XMLHttpRequest();
  const lotteryURL = 'https://dvwhnbka7d.execute-api.us-east-1.amazonaws.com/default/lottery';
  request.open('GET', lotteryURL);
  request.onload = () => {
    if (request.status >= 200 && request.status < 400) {
      const { prize } = JSON.parse(request.responseText);
      getprize(prize);
    } 
  };
  request.send();
});
