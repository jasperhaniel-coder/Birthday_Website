const surpriseBtn = document.getElementById("surpriseBtn");
const surpriseMessage = document.getElementById("surpriseMessage");

surpriseBtn.addEventListener("click", function () {

    surpriseMessage.textContent =
        "Your biggest gift is coming... A better version of me. ❤️🎂";

    createConfetti();

});

const birthdayDate = document.getElementById("birthdayDate");

const today = new Date();

birthdayDate.textContent =
    today.toLocaleDateString("en-NG", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    });

function createConfetti() {

    for (let i = 0; i < 50; i++) {

        const confetti = document.createElement("div");

        confetti.textContent = "❤️";

        confetti.style.position = "fixed";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-20px";
        confetti.style.fontSize = Math.random() * 20 + 10 + "px";
        confetti.style.zIndex = "2000";
        confetti.style.pointerEvents = "none";

        document.body.appendChild(confetti);

        const fallDistance =
            window.innerHeight + 50;

        const duration =
            Math.random() * 2000 + 2000;

        confetti.animate(
            [
                {
                    transform: "translateY(0) rotate(0deg)"
                },
                {
                    transform:
                        `translateY(${fallDistance}px) rotate(360deg)`
                }
            ],
            {
                duration: duration,
                easing: "linear"
            }
        );

        setTimeout(function () {
            confetti.remove();
        }, duration);
    }
}