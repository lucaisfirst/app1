const quotes = [
  {
    quote: "단순함을 얻기란 복잡함을 얻기보다 어렵다.",
    author: "Steve Jobs",
  },
  {
    quote: "해군이 되느니 해적이 되는 쪽이 흥미롭다.",
    author: "Steve Jobs",
  },
  {
    quote: "시간이 없습니다. 누군가를 위해 당신의 삶을 버리지 마세요.",
    author: "Steve Jobs",
  },
  {
    quote: "지식보다 중요한 것은 상상력이다.",
    author: "Albert Einstein",
  },
  {
    quote: "지식은 한계가 있다. 하지만 상상력은 세상의 모든 것을 끌어안는다.",
    author: "Albert Einstein",
  },
  {
    quote: "창의성의 비밀은 그 원천을 숨길 수 있는 것이다.",
    author: "Albert Einstein",
  },
  {
    quote:
      "강한 사람이란 자기를 억누룰 수 있는 사람과 적을 벗으로 바꿀 수 있는 사람이다.",
    author: "Talmud",
  },
  {
    quote: "껍질만 보지 말라.  안에 들어 있는 것을 보라.",
    author: "Talmud",
  },
  {
    quote:
      "섹스는 자연의 일부이다.그러므로 섹스 할 때에는 본래, 부자연스런 것은 무엇 하나 있을 리가 없다.",
    author: "Talmud",
  },
  {
    quote:
      "승자는 다른 길도 있으리라 생각하지만, 패자는 길이 오직 하나뿐이라고 고집 한다.",
    author: "Talmud",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuotes = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuotes.quote;
author.innerText = todayQuotes.author;
fsafds;
