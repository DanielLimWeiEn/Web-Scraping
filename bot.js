const puppeteer = require("puppeteer");

const bot = async () => {
  const browser = puppeteer.launch({
    headless: true,
    args: ["--no-sandbox"],
  });

  const page = (await browser).newPage();
  (await page).goto("https://google.com", {
    waitUntil: "networkidle2",
  });

  (await browser).close();
  return "Done";
};

module.exports = bot;