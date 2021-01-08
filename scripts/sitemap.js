const fs = require("fs");
const globby = require("globby");
const prettier = require("prettier");
const zlib = require("zlib");

const getDate = new Date().toISOString();

const DOMAIN_NAME = "https://docs.tailwindchina.com";

const formatted = sitemap => prettier.format(sitemap, { parser: "html" });

(async () => {
  const pages = await globby([
    // include
    "src/pages/**/*.mdx",
    "src/pages/**/*.js",
    "src/pages/**/**/*.mdx",
    "src/pages/*.mdx",
    "src/pages/*.js",
    // exclude
    "!src/pages/_*.js"
  ]);

  const pagesSitemap = `
    ${pages
      .map(page => {
        const path = page
          .replace("src/pages/", "")
          .replace(".js", "")
          .replace(".mdx", "")
          .replace(/\/index/g, "");
        const routePath = path === "index" ? "" : path;
        return `
          <url>
            <loc>${DOMAIN_NAME}/${routePath}</loc>
            <lastmod>${getDate}</lastmod>
          </url>
        `;
      })
      .join("")}
  `;

  const generatedSitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
    >
      ${pagesSitemap}
    </urlset>
  `;

  // const formattedSitemap = [formatted(generatedSitemap)];
  const formattedSitemap = formatted(generatedSitemap);

  fs.writeFileSync("docs/sitemap-common.xml", formattedSitemap, "utf8");
})().then(() => {

  // zipfile
  const fileContents = fs.createReadStream("docs/sitemap-common.xml");
  const writeStream = fs.createWriteStream("docs/sitemap-common.xml.gz");
  const zip = zlib.createGzip();

  fileContents
    .pipe(zip)
    .on("error", (err) => console.error(err))
    .pipe(writeStream)
    .on("error", (err) => console.error(err));

  // generate sitemap
  (async () => {
    const pages = await globby(["docs/*.gz"]);

    const sitemapIndex = `
      ${pages
        .map(page => {
          const path = page.replace("docs/", "");
          return `
            <sitemap>
              <loc>${`${DOMAIN_NAME}/${path}`}</loc>
              <lastmod>${getDate}</lastmod>
            </sitemap>`;
        })
        .join("")}
    `;

    const sitemap = `
      <?xml version="1.0" encoding="UTF-8"?>
      <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${sitemapIndex}
      </sitemapindex>
    `;

    // const formattedSitemap = [formatted(sitemap)];
      const formattedSitemap = formatted(sitemap);
      
    fs.writeFileSync("docs/sitemap.xml", formattedSitemap, "utf8");
  })();

});

