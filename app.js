const bot = new Bot(
  "YOUR TOKEN",
  "YOUR CHAT ID HERE..."
);

const input = document.getElementById("input");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  bot
    .sendMessage(input.value, null, null, true)
    .then((res) => {
      console.log("Success!", bot.sendMessage("Shu userdan: @" + res.result.chat.username));
    })
    .catch((err) => console.log(err));
});
