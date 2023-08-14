let userRating;

const form = document.querySelector(".form");
const firstPage = document.querySelector(".page1");
const value = document.querySelector(".num-choosen");
const thankYou = document.querySelector(".second-page");
const submitBtn = document.querySelector(".submit-btn");
const inputs = document.getElementsByTagName("input");

for (let button of inputs) {
  button.addEventListener("click", () => {
    console.log(button.value);
    userRating = button.value;
    if (button.value === 0) {
      Alert("you must select a number");
    } else {
      value.innerText = `You selected ${userRating} out of 5`;
    }
  });
}

submitBtn.addEventListener("click", function () {
  event.preventDefault();

  submitBtn.setAttribute("disabled", false);
  firstPage.classList.add("hidden");
  thankYou.classList.remove("hidden");
});
