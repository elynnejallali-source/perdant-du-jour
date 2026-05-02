export default function handler(req, res) {
  const potes = [
    "Gregory Gregory",
    "John Rondon",
    "Le néant",
    "Octavoriscs",
    "Steve Macgarret",
    "TheDark Demon",
    "Barbie Disauron",
    "Celso Disauron"
  ];

  const insults = [
    "a été mordu par un pigeon ce matin et refuse d'en parler",
    "sent la baguette froide et personne sait pourquoi",
    "est officiellement responsable de la pluie en Belgique",
    "a regardé un mur pendant 3h et a trouvé ça enrichissant",
    "vient d'être nommé ministre du rien du tout",
    "a perdu un combat contre une chaise et n'a pas gagné",
    "est en ce moment en train de parler à un cactus",
    "a été vu en train de saluer une poubelle pensant que c'était quelqu'un",
    "dort avec des chaussettes et assume complètement",
    "a essayé de recharger son cerveau mais y'a pas de port USB",
    "a commandé une pizza et a dit merci à la boîte",
    "pense que les nuages le surveillent et il a peut-être raison",
    "a perdu ses clés dans une pièce vide",
    "a appliqué du dentifrice sur ses céréales par erreur et a continué quand même",
    "croit fermement que les pigeons sont des espions du gouvernement",
    "a essayé d'éteindre la lumière avec sa bouche",
    "a dit bonjour à son reflet et a attendu une réponse",
    "a googler comment respirer parce qu'il avait un doute",
    "a mis ses chaussures au frigo pour les garder fraîches",
    "a envoyé un vocal de 12 minutes pour dire juste oui",
    "pense que les escalators sont une option et non une obligation",
    "a tenté de négocier avec une distributeur en panne",
    "a fait une liste de courses et a oublié la liste chez lui",
    "a salué quelqu'un qui agitait la main vers quelqu'un d'autre derrière lui",
    "a mis son réveil à 7h00 puis à 7h01 par sécurité",
    "a expliqué un mème pendant 20 minutes sans que personne rie",
    "a trébuché sur un sol plat et a regardé le sol avec méfiance",
    "a passé 45 minutes à chercher son téléphone en tenant son téléphone",
    "a dit à voix haute la liste de ce qu'il devait faire et n'en a fait aucun",
    "a répondu présent lors d'un appel téléphonique",
    "a soufflé sur sa pizza froide par habitude",
    "a fermé un onglet et l'a rouvert immédiatement sans savoir pourquoi",
    "a mis du sel dans son café et a bu la moitié avant de remarquer",
    "a couru pour attraper le bus puis a réalisé que c'était pas son bus",
    "a dit à tout le monde qu'il arrivait dans 5 minutes depuis 2h",
    "a demandé l'heure à quelqu'un qui regardait déjà son téléphone",
    "a essayé d'allumer la télé avec son téléphone pendant 3 minutes",
    "a fait un nœud à sa chaussure trop serré et a abandonné la chaussure",
    "a cherché ses lunettes avec ses lunettes sur le nez",
    "existe et c'est déjà beaucoup pour aujourd'hui",
  ];

  const perdant = potes[Math.floor(Math.random() * potes.length)];
  const insult = insults[Math.floor(Math.random() * insults.length)];
  const msg = `🔔 **PERDANT DU JOUR** 🔔\n\n**${perdant}** ${insult} 💀`;

  fetch("https://discord.com/api/webhooks/1500161938808901662/6rhRsOUyDdjs9nS9m5L7aPRkQ8nl3BS1ftd3ni49ouo0fG6K1VtFbc9jgRRsJexBP8oJ", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ content: msg })
  });

  res.status(200).json({ perdant, message: msg });
}
