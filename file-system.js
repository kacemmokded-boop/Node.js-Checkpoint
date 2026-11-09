const fs = require("fs");

fs.writeFile("welcome.txt", "Hello Node", (err) => {
  if (err) {
    return console.error(err);
  }
  console.log("Fichier welcome.txt créé avec succès !");

  fs.readFile("hello.txt", "utf8", (err, data) => {
    if (err) {
      return console.log(
        "Erreur de lecture (Assurez-vous que hello.txt existe) :",
        err.message,
      );
    }
    console.log("Contenu de hello.txt :", data);
  });
});
