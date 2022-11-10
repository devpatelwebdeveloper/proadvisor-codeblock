import "./styles.css";

const activeType = "platinum";

const marketingTools = [
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
];
const productSupport = [
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
];

const enhanceYourKnowledge = [
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
    head: "PEvents and Webinars",
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
];

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
              <div class="td ${activeType === "silver" && "active"}"></div>
              <div class="td ${activeType === "gold" && "active"}"></div>
              <div class="td ${activeType === "platinum" && "active"}"></div>
              <div class="td ${activeType === "elite" && "active"}"></div>
            </div>`;
  }
  return `<div class="tr">
            ${
              data.url
                ? `<div class="th"><a href="${data.url}" target="_blank">${data.head}</div></a>`
                : `<div class="th">${data.head}</div>`
            }
            <div class="td ${activeType === "silver" && "active"}">${showIcon(
    data.silver
  )}</div>
            <div class="td ${activeType === "gold" && "active"}">${showIcon(
    data.gold
  )}</div>
            <div class="td ${activeType === "platinum" && "active"}">${showIcon(
    data.platinum
  )}</div>
            <div class="td ${activeType === "elite" && "active"}">${showIcon(
    data.elite
  )}</div>
          </div>`;
}

document.getElementById("marketingTools").innerHTML = `${marketingTools
  .map(tableContent)
  .join("")}`;
document.getElementById("productSupport").innerHTML = `${productSupport
  .map(tableContent)
  .join("")}`;
document.getElementById(
  "enhanceYourKnowledge"
).innerHTML = `${enhanceYourKnowledge.map(tableContent).join("")}`;
