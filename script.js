const inputs = document.querySelectorAll(".properties input");
const outputs = document.querySelectorAll(".properties output");
// const outputs = document.querySelectorAll(".properties output");

function handleUpdate() {
  const suffix = this.dataset.sizing || "";
  console.log(this.name);
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value / 5 + suffix
  );
  // const pole = document.querySelector(`#${this.name + "o"}`);
  outputs.forEach((item) => {
    if (item.getAttribute("for") === this.name) {
      item.value = this.value;
    }
  });
}

inputs.forEach((input) => input.addEventListener("change", handleUpdate));
inputs.forEach((input) => input.addEventListener("mousemove", handleUpdate));

//кнопки;
const btns = document.querySelectorAll(".btns button");
console.log(btns);
btns.forEach((item) => {
  item.addEventListener("click", (e) => {
    if (e.toElement.outerText === "Reset") {
      inputs.forEach((input) => {
        input.value = 0;
        document.documentElement.style.setProperty(`--${input.id}`, 0);
      });
      outputs.forEach((item) => {
        item.value = 0;
      });
    }
  });
});
