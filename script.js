function changeNote(JSpath) {
  const note = JSpath;
  note.innerHTML = "20,00"
}

changeNote(document.querySelector("#GInterface\\.Instances\\[2\\]\\.Instances\\[1\\]_1_1_div > div > div > div > div:nth-child(1) > div.AlignementDroit"));
changeNote(document.querySelector("#GInterface\\.Instances\\[2\\]\\.Instances\\[1\\]_1_0_div > div > div > div > div:nth-child(1)"));
