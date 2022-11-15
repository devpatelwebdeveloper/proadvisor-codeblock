
const tableData = {
  activeType: "elite",
  headingData: {
    silver: {
      id: "silver",
      name: "Silver",
      points: "1‑199",
    },
    gold: {
      id: "gold",
      name: "Gold",
      points: "200‑799",
    },
    platinum: {
      id: "platinum",
      name: "Platinum",
      points: "800-1,599",
    },
    elite: {
      id: "elite",
      name: "Elite",
      points: "1,600+",
    },
  },
  marketingTools: [
    {
      subtitle: "Marketing tools",
    },
    {
      head: "Data in the Find-a-ProAdvisor directory",
      silver: "yes",
      gold: "yes",
      platinum: "yes",
      elite: "yes",
    },
    {
      head: "Digital ProAdvisor badges",
      silver: "no",
      gold: "yes",
      platinum: "yes",
      elite: "yes",
    },
    {
      head: "QuickBooks ProAdvisor Marketing Fund",
      silver: "no",
      gold: "yes",
      platinum: "yes",
      elite: "yes",
      url: "https://quickbooks.intuit.com/ca/accountants/marketing-fund/",
    },
    {
      head: "Mailchimp | Marketing Automation & Email (BETA)",
      silver: "no",
      gold: "15%",
      platinum: "15%",
      elite: "15%",
    },
    {
      head: "ProAdvisor Program marketing toolkit",
      silver: "no",
      gold: "yes",
      platinum: "yes",
      elite: "yes",
    },
  ],
  productSupport: [
    {
      subtitle: "Product support",
    },
    {
      head: "Free QuickBooks Online Accountant support",
      silver: "yes",
      gold: "yes",
      platinum: "yes",
      elite: "yes",
    },
    {
      head: "Specialist to help you move your data into QuickBooks Online",
      sup: "4",
      silver: "no",
      gold: "yes",
      platinum: "yes",
      elite: "yes",
    },
    {
      head: "Priority support for QuickBooks Online Accountant",
      silver: "no",
      gold: "no",
      platinum: "yes",
      elite: "yes",
    },
    {
      head: "Book a call with a QuickBooks product specialist",
      sup: "5",
      silver: "no",
      gold: "no",
      platinum: "yes",
      elite: "yes",
    },
    {
      head: "Dedicated Account Manager",
      silver: "no",
      gold: "no",
      platinum: "yes",
      elite: "yes",
    },
  ],
  enhanceYourKnowledge: [
    {
      subtitle: "Enhance your knowledge",
    },
    {
      head: "Getting started with QuickBooks Online Accountant webinar",
      silver: "yes",
      gold: "yes",
      platinum: "yes",
      elite: "yes",
    },
    {
      head: "Training and certification",
      silver: "yes",
      gold: "yes",
      platinum: "yes",
      elite: "yes",
    },
    {
      head: "Events and Webinars",
      silver: "yes",
      gold: "yes",
      platinum: "yes",
      elite: "yes",
    },
    {
      head: "Professional QuickBooks Online client training material",
      silver: "no",
      gold: "no",
      platinum: "yes",
      elite: "yes",
    },
    {
      head: "Free access to exclusive content resources",
      silver: "no",
      gold: "no",
      platinum: "yes",
      elite: "yes",
    },
  ],
  softwareAndServices: [
    {
      subtitle: "Software and services",
    },
    {
      head: "QuickBooks Online for your firm",
      silver: "yes",
      gold: "yes",
      platinum: "yes",
      elite: "yes",
    },
    {
      head: "Payroll for your firm",
      silver: "yes",
      gold: "yes",
      platinum: "yes",
      elite: "yes",
    },
    {
      head: "Quickbooks Time tracking for your firm",
      silver: "yes",
      gold: "yes",
      platinum: "yes",
      elite: "yes",
    },
    {
      head: "Discounts on QuickBooks subscriptions for your clients",
      sup: "7",
      silver: "yes",
      gold: "yes",
      platinum: "yes",
      elite: "yes",
    },
    {
      head: "Discounts on DocuSign eSignature, plus special client offer",
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
              <div class="td ${
                tableData.activeType === "silver" && "active"
              }"></div>
              <div class="td ${
                tableData.activeType === "gold" && "active"
              }"></div>
              <div class="td ${
                tableData.activeType === "platinum" && "active"
              }"></div>
              <div class="td ${
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
            <div class="td ${
              tableData.activeType === "silver" && "active"
            }">${showIcon(data.silver)}</div>
            <div class="td ${
              tableData.activeType === "gold" && "active"
            }">${showIcon(data.gold)}</div>
            <div class="td ${
              tableData.activeType === "platinum" && "active"
            }">${showIcon(data.platinum)}</div>
            <div class="td ${
              tableData.activeType === "elite" && "active"
            }">${showIcon(data.elite)}</div>
          </div>`;
}

function headingContent(data) {
  return `
  <div class="tr">
    <div class="th">Points</div>
    <div class="td ${tableData.activeType === "silver" && "active"}">
      <div class="package-type silver">${data.silver.name}</div>
      <div class="points">${data.silver.points}</div>
    </div>
    <div class="td ${tableData.activeType === "gold" && "active"}">
      <div class="package-type gold">${data.gold.name}</div>
      <div class="points">${data.gold.points}</div>
    </div>
    <div class="td ${tableData.activeType === "platinum" && "active"}">
      <div class="package-type platinum">${data.platinum.name}</div>
      <div class="points">${data.platinum.points}</div>
    </div>
    <div class="td ${tableData.activeType === "elite" && "active"}">
      <div class="package-type elite">${data.elite.name}</div>
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
