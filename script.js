const surpriseBtn = document.getElementById("surpriseBtn");
const surpriseMessage = document.getElementById("surpriseMessage");

const wishInput = document.getElementById("wishInput");
const wishBtn = document.getElementById("wishBtn");
const wishesList = document.getElementById("wishesList");

const birthdayDate = document.getElementById("birthdayDate");

// Birthday Date

if (birthdayDate) {
  const today = new Date();

  birthdayDate.textContent = today.toLocaleDateString("en-NG", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

// Lock Cake Surprise Initially

surpriseBtn.disabled = true;

surpriseBtn.textContent = "🔒 Write a Wish First";

// Add Wish

wishBtn.addEventListener("click", function () {
  const wishText = wishInput.value.trim();

  if (wishText === "") {
    alert("Please write a birthday wish first ❤️");
    return;
  }

  const emptyMessage = document.querySelector(".empty-wishes");

  if (emptyMessage) {
    emptyMessage.remove();
  }

  // Create Wish Card

  const wishCard = document.createElement("div");

  wishCard.classList.add("wish-card");

  // Create Wish Paragraph

  const wishParagraph = document.createElement("p");

  const heart = document.createElement("span");

  heart.classList.add("wish-heart");

  heart.textContent = "❤️";

  wishParagraph.appendChild(heart);

  wishParagraph.appendChild(document.createTextNode(" " + wishText));

  // Create Delete Button

  const deleteBtn = document.createElement("button");

  deleteBtn.textContent = "🗑️ Delete";

  deleteBtn.classList.add("delete-wish");

  // Delete Wish

  deleteBtn.addEventListener("click", function () {
    wishCard.remove();

    updateSurpriseButton();

    // Show Empty Message If There Are No Wishes

    const remainingWishes = document.querySelectorAll(".wish-card");

    if (remainingWishes.length === 0) {
      const emptyMessage = document.createElement("p");

      emptyMessage.classList.add("empty-wishes");

      emptyMessage.textContent = "Your wish could be the first one here...";

      wishesList.appendChild(emptyMessage);
    }
  });

  // Put Wish Inside Card

  wishCard.appendChild(wishParagraph);

  wishCard.appendChild(deleteBtn);

  // Put Card Inside Wishes List

  wishesList.appendChild(wishCard);

  // Clear Textarea

  wishInput.value = "";

  // Unlock Cake Surprise

  updateSurpriseButton();
});

// Update Cake Button

function updateSurpriseButton() {
  const wishes = document.querySelectorAll(".wish-card");

  if (wishes.length > 0) {
    surpriseBtn.disabled = false;

    surpriseBtn.textContent = "🎁 Cake Surprise";
  } else {
    surpriseBtn.disabled = true;

    surpriseBtn.textContent = "🔒 Write a Wish First";
  }
}

// Cake Surprise

surpriseBtn.addEventListener("click", function () {
  const flames = document.querySelectorAll(".flame");

  flames.forEach(function (flame) {
    flame.style.display = "none";
  });

  surpriseMessage.textContent =
    "🎉 Happy Birthday, Brother Chima! May this new year bring you greater blessings, greater opportunities and greater joy. ❤️ Hip Hip Hip, Hurray!!!";

  createConfetti();
});

// Confetti

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
