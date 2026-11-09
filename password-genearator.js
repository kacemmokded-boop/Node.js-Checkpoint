const generator = require("generate-password");

function generateRandomPassword() {
  const password = generator.generate({
    length: 12,
    numbers: true,
    symbols: true,
    uppercase: true,
    lowercase: true,
  });

  console.log("Mot de passe généré :", password);
}

generateRandomPassword();
