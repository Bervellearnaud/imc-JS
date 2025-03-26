/*
function calculerIMC() {
  let poids = parseFloat(document.getElementById("poids").value);
  let taille = parseFloat(document.getElementById("taille").value);

  if (isNaN(poids) || isNaN(taille) || taille <= 0) {
    document.getElementById("resultat").innerHTML =
      "Veuillez entrer des valeurs valides.";
    return;
  }

  let imc = poids / (taille * taille);
  let message = "Votre IMC est de " + imc.toFixed(2) + ". ";

  if (imc < 18.5) {
    message += "Vous êtes en insuffisance pondérale.";
  } else if (imc < 25) {
    message += "Votre poids est normal.";
  } else if (imc < 30) {
    message += "Vous êtes en surpoids.";
  } else {
    message += "Vous êtes en obésité.";
  }

  document.getElementById("resultat").innerHTML = message;
}  */

function calculerIMC() {
  let genre = document.getElementById("genre").value;
  let poids = parseFloat(document.getElementById("poids").value);
  let taille = parseFloat(document.getElementById("taille").value);

  if (isNaN(poids) || isNaN(taille) || taille <= 0) {
    document.getElementById("resultat").innerHTML =
      "Veuillez entrer des valeurs valides.";
    return;
  }

  let imc = poids / (taille * taille);
  let message = `Votre IMC est de ${imc.toFixed(2)}. `;

  if (imc < 18.5) {
    message += "Vous êtes en insuffisance pondérale.";
  } else if (imc < 25) {
    message += "Votre poids est normal.";
  } else if (imc < 30) {
    message += "Vous êtes en surpoids.";
  } else {
    message += "Vous êtes en obésité.";
  }

  // Recommandations selon le genre
  if (genre === "homme") {
    message +=
      " Les hommes ont généralement une masse musculaire plus élevée, il est important de compléter l'analyse avec d'autres indicateurs de santé.";
  } else if (genre === "femme") {
    message +=
      " Chez les femmes, un IMC plus bas peut être normal en raison des différences physiologiques, pensez à consulter un professionnel de santé pour une meilleure analyse.";
  }

  document.getElementById("resultat").innerHTML = message;
}
