const surpriseBtn = document.getElementById("surpriseBtn");
const surpriseMessage = document.getElementById("surpriseMessage");

const wishInput = document.getElementById("wishInput");
const wishBtn = document.getElementById("wishBtn");
const wishesList = document.getElementById("wishesList");

const birthdayDate = document.getElementById("birthdayDate");

if (birthdayDate) {
  const today = new Date();

  birthdayDate.textContent = today.toLocaleDateString("en-NG", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

wishBtn.addEventListener("click", function () {
  const wishText = wishInput.value.trim();

  if (wishText === "") {
    alert("Please write a birthday wish first ❤️");
    return;
  }

  const wishCard = document.createElement("div");
  wishCard.classList.add("wish-card");

  const wishParagraph = document.createElement("p");
  wishParagraph.innerHTML = `<span class="wish-heart">❤️</span> ${wishText}`;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "🗑️ Delete";
  deleteBtn.classList.add("delete-wish");

  deleteBtn.addEventListener("click", function () {
    wishCard.remove();
  });

  wishCard.appendChild(wishParagraph);
  wishCard.appendChild(deleteBtn);

  wishesList.appendChild(wishCard);

  wishInput.value = "";
});


surpriseBtn.addEventListener("click", function () {
  const flames = document.querySelectorAll(".flame");

  flames.forEach(function (flame) {
    flame.style.display = "none";
  });

  surpriseMessage.textContent =
    "🎉 Happy Birthday, Brother Chima! May this new year bring you greater blessings, greater opportunities and greater joy. ❤️ Hip Hip Hip, Hurray!!! ";

  createConfetti();
});

function createConfetti() {
  for (let i = 0; i < 70; i++) {
    const confetti = document.createElement("div");

    confetti.textContent = "✨";

    confetti.style.position = "fixed";
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.top = "-20px";

    confetti.style.fontSize = Math.random() * 20 + 10 + "px";

    confetti.style.zIndex = "2000";

    confetti.style.pointerEvents = "none";

    document.body.appendChild(confetti);

    const duration = Math.random() * 2000 + 2000;

    confetti.animate(
      [
        {
          transform: "translateY(0) rotate(0deg)",
        },

        {
          transform: `translateY(${window.innerHeight + 50}px) rotate(360deg)`,
        },
      ],

      {
        duration: duration,
        easing: "linear",
      },
    );

    setTimeout(function () {
      confetti.remove();
    }, duration);
  }
}
