const tableData = {
  activeType: "elite",
  headingData: {
    silver: {
      id: "silver",
      name: "Argent",
      points: "1-199",
    },
    gold: {
      id: "gold",
      name: "Or",
      points: "200-799",
    },
    platinum: {
      id: "platinum",
      name: "Platine",
      points: "800-1,599",
    },
    elite: {
      id: "elite",
      name: "Élite",
      points: "1,600+",
    },
  },
  marketingTools: [
    {
      subtitle: "Outils de marketing",
    },
    {
      head: " Membre du répertoire Trouver un ConseillerPro",
      silver: "yes",
      gold: "yes",
      platinum: "yes",
      elite: "yes",
    },
    {
      head: "Médaillons ConseillerPro numériques",
      silver: "no",
      gold: "yes",
      platinum: "yes",
      elite: "yes",
    },
    {
      head: "Fonds de marketing ConseillersPro de QuickBooks",
      silver: "no",
      gold: "yes",
      platinum: "yes",
      elite: "yes",
      url: "https://quickbooks.intuit.com/ca/accountants/marketing-fund/",
    },
    {
      head: "Rabais sur Mailchimp | Marketing, automatisation et courriels (BÊTA)",
      silver: "no",
      gold: "15%",
      platinum: "15%",
      elite: "15%",
    },
    {
      head: "Trousse d’outils marketing du programme ConseillerPro",
      silver: "no",
      gold: "yes",
      platinum: "yes",
      elite: "yes",
    },
  ],
  productSupport: [
    {
      subtitle: "Soutien technique",
    },
    {
      head: " Soutien gratuit pour QuickBooks en ligne Comptable",
      silver: "yes",
      gold: "yes",
      platinum: "yes",
      elite: "yes",
    },
    {
      head: "Aide d’un spécialiste pour saisir vos données dans QuickBooks en ligne",
      sup: "4",
      silver: "no",
      gold: "yes",
      platinum: "yes",
      elite: "yes",
    },
    {
      head: "Soutien prioritaire concernant QuickBooks en ligne Comptable",
      silver: "no",
      gold: "no",
      platinum: "yes",
      elite: "yes",
    },
    {
      head: "Prenez rendez-vous avec un spécialiste de QuickBooks",
      sup: "5",
      silver: "no",
      gold: "no",
      platinum: "yes",
      elite: "yes",
    },
    {
      head: "Gestionnaire de compte dédié",
      silver: "no",
      gold: "no",
      platinum: "yes",
      elite: "yes",
    },
  ],
  enhanceYourKnowledge: [
    {
      subtitle: "Améliorez vos connaissances",
    },
    {
      head: "Webinaire Mise en route de QuickBooks en ligne Comptable",
      silver: "yes",
      gold: "yes",
      platinum: "yes",
      elite: "yes",
    },
    {
      head: "Formation et certification",
      silver: "yes",
      gold: "yes",
      platinum: "yes",
      elite: "yes",
    },
    {
      head: "Événements et webinaires",
      silver: "yes",
      gold: "yes",
      platinum: "yes",
      elite: "yes",
    },
    {
      head: "Documents de formation sur QuickBooks en ligne pour les clients professionnels",
      silver: "no",
      gold: "no",
      platinum: "yes",
      elite: "yes",
    },
    {
      head: "Accès gratuit à des ressources au contenu exclusif",
      silver: "no",
      gold: "no",
      platinum: "yes",
      elite: "yes",
    },
  ],
  softwareAndServices: [
    {
      subtitle: "Logiciels et services",
    },
    {
      head: "QuickBooks en ligne pour votre cabinet",
      silver: "yes",
      gold: "yes",
      platinum: "yes",
      elite: "yes",
    },
    {
      head: "Paie pour votre cabinet",
      silver: "yes",
      gold: "yes",
      platinum: "yes",
      elite: "yes",
    },
    {
      head: "Suivi des heures travaillées par QuickBooks Time pour votre cabinet",
      silver: "yes",
      gold: "yes",
      platinum: "yes",
      elite: "yes",
    },
    {
      head: "Rabais sur l’abonnement à QuickBooks pour vos clients",
      sup: "7",
      silver: "yes",
      gold: "yes",
      platinum: "yes",
      elite: "yes",
    },
    {
      head: "Réductions sur DocuSign eSignature en plus d’une offre spéciale pour les clients QuickBooks Online for your firm",
      silver: "20%",
      gold: "25%",
      platinum: "30%",
      elite: "40%",
    },
  ],
};

function showIcon(data) {
  if (data === "yes") {
    return `<span class="checkmark"></span>`;
  } else if (data === "no") {
    return ``;
  } else {
    return data;
  }
}

function tableContent(data) {
  if (data.subtitle) {
    return `<div class="tr thead">
  <div class="th head">${data.subtitle}</div>
              <div class="td silver-content ${
                tableData.activeType === "silver" && "active"
              }"></div>
              <div class="td gold-content ${
                tableData.activeType === "gold" && "active"
              }"></div>
              <div class="td platinum-content ${
                tableData.activeType === "platinum" && "active"
              }"></div>
              <div class="td elite-content ${
                tableData.activeType === "elite" && "active"
              }"></div>
            </div>`;
  }
  return `<div class="tr">
            ${
              data.url
                ? `<div class="th"><a href="${data.url}" target="_blank">${data.head}</div></a>`
                : `<div class="th">${data.head}</div>`
            }
            <div class="td silver-content ${
              tableData.activeType === "silver" && "active"
            }">${showIcon(data.silver)}</div>
            <div class="td gold-content ${
              tableData.activeType === "gold" && "active"
            }">${showIcon(data.gold)}</div>
            <div class="td platinum-content ${
              tableData.activeType === "platinum" && "active"
            }">${showIcon(data.platinum)}</div>
            <div class="td elite-content ${
              tableData.activeType === "elite" && "active"
            }">${showIcon(data.elite)}</div>
          </div>`;
}

function headingContent(data) {
  return `
  <div class="tr">
    <div class="th">Points</div>
    <div class="td ${tableData.activeType === "silver" && "active"}">
      <div class="package-type silver-heading">${data.silver.name}</div>
      <div class="points">${data.silver.points}</div>
    </div>
    <div class="td ${tableData.activeType === "gold" && "active"}">
      <div class="package-type gold-heading">${data.gold.name}</div>
      <div class="points">${data.gold.points}</div>
    </div>
    <div class="td ${tableData.activeType === "platinum" && "active"}">
      <div class="package-type platinum-heading">${data.platinum.name}</div>
      <div class="points">${data.platinum.points}</div>
    </div>
    <div class="td ${tableData.activeType === "elite" && "active"}">
      <div class="package-type elite-heading">${data.elite.name}</div>
      <div class="points">${data.elite.points}</div>
    </div>
    </div>
  `;
}

document.getElementById("tableHeading").innerHTML = `${headingContent(
  tableData.headingData
)}`;
document.getElementById(
  "marketingTools"
).innerHTML = `${tableData.marketingTools.map(tableContent).join("")}`;

document.getElementById(
  "productSupport"
).innerHTML = `${tableData.productSupport.map(tableContent).join("")}`;
document.getElementById(
  "enhanceYourKnowledge"
).innerHTML = `${tableData.enhanceYourKnowledge.map(tableContent).join("")}`;
document.getElementById(
  "softwareAndServices"
).innerHTML = `${tableData.softwareAndServices.map(tableContent).join("")}`;
