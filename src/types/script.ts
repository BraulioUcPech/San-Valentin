const buttonNo: HTMLButtonElement | null = document.querySelector("#no");
const buttonYes: HTMLButtonElement | null = document.querySelector("#yes");
const message: HTMLElement | null = document.querySelector("#message");

let fontSize: number = 2;

let messages: string[] = [
  "Estas segura?",
  "Piensalo bien",
  "Piensalo muy bien",
  "Piensalo",
  "Mira el otro botón",
];

if (buttonNo) {
  buttonNo.addEventListener("click", () => {
    fontSize = fontSize + 0.5;
    if (buttonYes) {
      buttonYes.style.fontSize = `${fontSize}rem`;
    }

    const indexRandom: number = Math.floor(Math.random() * messages.length);

    buttonNo.textContent = messages[indexRandom];
  });
}

if (buttonYes && message) {
  buttonYes.addEventListener("click", () => {
    message.style.display = "flex";
  });
}
