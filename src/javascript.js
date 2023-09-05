function changeDescription() {
  let quotes = [
    "You have to be thin, but not too thin. And you can never say you want to be thin. You have to say you want to be healthy, but also you have to be thin.",
    "You have to have money, but you can't ask for money because that's crass.",
    "You have to be a boss, but you can't be mean. You have to lead, but you can't squash other people's ideas.",
    "You're supposed to love being a mother, but don't talk about your kids all the damn time.",
    "You have to be a career woman but also always be looking out for other people.",
    "You have to answer for men's bad behavior, which is insane, but if you point that out, you're accused of complaining.",
    "You're supposed to stay pretty for men, but not so pretty that you tempt them too much or that you threaten other women because you're supposed to be a part of the sisterhood.",
  ];

  let quoteChange = document.getElementById("opener-quotes");

  let currentValue = 0;

  setInterval(() => {
    quoteChange.innerHTML = quotes[currentValue];
    currentValue = (currentValue + 1) % quotes.length;
  }, 4000);
}

changeDescription();

$(document).on("scroll", function () {
  var pageTop = $(document).scrollTop();
  var pageBottom = pageTop + $(window).height();
  var tags = $(".tag");

  for (var i = 0; i < tags.length; i++) {
    var tag = tags[i];
    if ($(tag).position().top < pageBottom) {
      $(tag).addClass("visible");
    } else {
      $(tag).removeClass("visible");
    }
  }
});
