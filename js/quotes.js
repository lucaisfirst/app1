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
    quote: "성장하고 싶냐? 로켓에 올라타라. 그리고 존나 버텨라.",
    author: "김스타트업",
  },
  {
    quote: "조급해하지말고 묵직하게 하루하루를 진정성 있게 살아라!",
    author: "Luca",
  },
  {
    quote:
      "Sex는 자연의 일부이다.그러므로 성관계할 때에는 본래, 부자연스런 것은 무엇 하나 있을 리가 없다.",
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
