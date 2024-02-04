const Slideshare = require("slideshare-ash");

async function main() {
  const userData = await Slideshare.getUser("IsmaelNascimento5");
  console.log(userData);

  const presentations = await Slideshare.getAllPresentations("IsmaelNascimento5");
  console.log(presentations);

  const presentation = await Slideshare.getOnePresentation("https://pt.slideshare.net/IsmaelNascimento5/tecnologias-para-realidade-aumentadaar");
  console.log(presentation);
}

main();
