const result = document.getElementById("result");
const noResult = document.getElementById("no-result");
const outputText = document.getElementById("outputText");

function encrypt() {
  const inputText = document.getElementById("inputText").value;
  const mapping = {
    e: "enter",
    i: "imes",
    a: "ai",
    o: "ober",
    u: "ufat",
  };

  noResult.style.display = "none";
  result.style.display = "flex";
  outputText.innerHTML = inputText.replace(
    /[eioua]/g,
    (match) => mapping[match]
  );
}

function decrypt() {
  const inputText = document.getElementById("inputText").value;
  const reverseMapping = {
    enter: "e",
    imes: "i",
    ai: "a",
    ober: "o",
    ufat: "u",
  };

  noResult.style.display = "none";
  result.style.display = "flex";

  outputText.innerHTML = inputText.replace(
    /(enter|imes|ai|ober|ufat)/g,
    (match) => reverseMapping[match]
  );
}

function copyToClipboard() {
  const outputText = document.getElementById("outputText");
  navigator.clipboard.writeText(outputText.innerHTML);
  alert("Texto copiado al portapapeles.");
}