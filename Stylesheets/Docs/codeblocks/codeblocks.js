function copyFunction(index) {
  const copyText = codeBoxList[index].textContent;
  const textArea = document.createElement("textarea");
  textArea.textContent = copyText;
  document.body.append(textArea);
  textArea.select();
  document.execCommand("copy");
  textArea.remove();
}

const snippetBtnList = document.querySelectorAll(".snippet-btn");
const codeBoxList = document.querySelectorAll("#myInput"); 

snippetBtnList.forEach((button, index) => {
    let counter = index;
    button.addEventListener("click", ()=> {
        copyFunction(counter);
        button.innerHTML = `<i class="fa-solid fa-check"></i>`;
        setTimeout(function () {
            button.innerHTML = `<i class="fas fa-copy"></i>`;
        }, 1000);
    })
})