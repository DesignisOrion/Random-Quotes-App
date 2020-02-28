//immediate invoked function expression
(function() {
  const quotes = [
    {
      quote:
        "On a mission your worst enemy is idle time.",
      author: "Nipsey hussle"
    },
    {
      quote:
        "You know it's funny when it rains it pours They got money for wars, but can't feed the poor.",
      author: "Tupac"
    },
    {
      quote:
        "If you scared to take chances, you'll never have the answers...",
      author: "Nas"
    },
    {
      quote: "Discipline makes things easier. Organize your life!",
      author: "Dead Prez"
    },
    {
      quote:
        "Patience, Practice and Persistence",
      author: "Mark Ford"
    },
    {
      quote:
        "Many pray for my downfall. God never answered their prayers. Blessed!",
      author: "@DesignIsOrion"
    }
  ];

  const btn = document.getElementById("generate-btn");

  btn.addEventListener("click", function() {
    let random = Math.floor(Math.random() * quotes.length);
    console.log(random);

    document.getElementById("quote").textContent = quotes[random].quote;
    document.querySelector(".author").textContent = quotes[random].author;
  });
})();
