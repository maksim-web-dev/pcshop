/**
 * PCShop visual reference screenshot capture script.
 * Uses Playwright Firefox (headless) at 1440x900 viewport.
 * Run once to populate references/<theme>/screenshots/.
 */
const path = require('path');
const fs = require('fs');

const PLAYWRIGHT_PATH = '/home/max/.npm/_npx/e41f203b7505f1fb/node_modules/playwright';
const { firefox } = require(PLAYWRIGHT_PATH);

const VIEWPORT = { width: 1440, height: 900 };
const TIMEOUT = 30000;
const OUTPUT_BASE = path.join(__dirname, '../design/references');

const REFERENCES = [
  // Premium Minimalism
  {
    id: 'P01',
    theme: 'premium',
    slug: 'apple-store-product',
    url: 'https://www.apple.com/shop/buy-mac/mac',
    description: 'Apple Store product listing',
  },
  {
    id: 'P02',
    theme: 'premium',
    slug: 'apple-store-catalog',
    url: 'https://www.apple.com/shop/buy-mac',
    description: 'Apple Mac catalog page',
  },
  {
    id: 'P03',
    theme: 'premium',
    slug: 'bang-olufsen-homepage',
    url: 'https://www.bang-olufsen.com/en/int',
    description: 'Bang & Olufsen homepage',
  },
  {
    id: 'P04',
    theme: 'premium',
    slug: 'nothing-tech-homepage',
    url: 'https://nothing.tech/',
    description: 'Nothing Technology homepage',
  },
  {
    id: 'P05',
    theme: 'premium',
    slug: 'teenage-engineering-products',
    url: 'https://teenage.engineering/products',
    description: 'Teenage Engineering products',
  },
  {
    id: 'P06',
    theme: 'premium',
    slug: 'leica-camera-products',
    url: 'https://leica-camera.com/en-US/photography',
    description: 'Leica Camera photography products',
  },
  {
    id: 'P07',
    theme: 'premium',
    slug: 'sony-headphones',
    url: 'https://www.sony.com/en/products/headphone/',
    description: 'Sony headphones product page',
  },
  {
    id: 'P08',
    theme: 'premium',
    slug: 'dyson-homepage',
    url: 'https://www.dyson.com/en',
    description: 'Dyson homepage',
  },

  // Gaming & Technology
  {
    id: 'G01',
    theme: 'gaming',
    slug: 'asus-rog-homepage',
    url: 'https://rog.asus.com/',
    description: 'ASUS ROG homepage',
  },
  {
    id: 'G02',
    theme: 'gaming',
    slug: 'razer-gaming-mice',
    url: 'https://www.razer.com/gaming-mice',
    description: 'Razer gaming mice catalog',
  },
  {
    id: 'G03',
    theme: 'gaming',
    slug: 'razer-gaming-headsets',
    url: 'https://www.razer.com/gaming-headsets',
    description: 'Razer gaming headsets catalog',
  },
  {
    id: 'G04',
    theme: 'gaming',
    slug: 'alienware-homepage',
    url: 'https://www.alienware.com/',
    description: 'Alienware homepage hero',
  },
  {
    id: 'G05',
    theme: 'gaming',
    slug: 'corsair-keyboards',
    url: 'https://www.corsair.com/us/en/Categories/Products/Keyboards/c/Cor_Keyboards',
    description: 'Corsair keyboards catalog',
  },
  {
    id: 'G06',
    theme: 'gaming',
    slug: 'msi-laptops',
    url: 'https://www.msi.com/Laptops',
    description: 'MSI gaming laptops',
  },
  {
    id: 'G07',
    theme: 'gaming',
    slug: 'nvidia-geforce',
    url: 'https://www.nvidia.com/en-us/geforce/graphics-cards/',
    description: 'NVIDIA GeForce graphics cards',
  },
  {
    id: 'G08',
    theme: 'gaming',
    slug: 'steelseries-headsets',
    url: 'https://steelseries.com/gaming-headsets',
    description: 'SteelSeries gaming headsets catalog',
  },

  // Modern Technology Store
  {
    id: 'PR01',
    theme: 'professional',
    slug: 'bestbuy-canada-laptops',
    url: 'https://www.bestbuy.ca/en-ca/category/laptops/36461',
    description: 'Best Buy Canada laptop catalog',
  },
  {
    id: 'PR02',
    theme: 'professional',
    slug: 'bh-photo-laptops',
    url: 'https://www.bhphotovideo.com/c/browse/Laptops/ci/9039',
    description: 'B&H Photo laptop section',
  },
  {
    id: 'PR03',
    theme: 'professional',
    slug: 'newegg-laptops',
    url: 'https://www.newegg.com/Laptops-Notebooks/SubCategory/ID-32',
    description: 'Newegg laptop catalog',
  },
  {
    id: 'PR04',
    theme: 'professional',
    slug: 'pcpartpicker-cpu',
    url: 'https://pcpartpicker.com/products/cpu/',
    description: 'PCPartPicker CPU listings',
  },
  {
    id: 'PR05',
    theme: 'professional',
    slug: 'microcenter-laptops',
    url: 'https://www.microcenter.com/category/4294966998/laptops',
    description: 'Micro Center laptop category',
  },
  {
    id: 'PR06',
    theme: 'professional',
    slug: 'amazon-laptops',
    url: 'https://www.amazon.com/s?k=laptops&rh=n%3A565108',
    description: 'Amazon laptop search results',
  },
  {
    id: 'PR07',
    theme: 'professional',
    slug: 'coolblue-laptops',
    url: 'https://www.coolblue.nl/en/laptops',
    description: 'Coolblue laptops catalog',
  },
  {
    id: 'PR08',
    theme: 'professional',
    slug: 'apple-mac-accessories',
    url: 'https://www.apple.com/shop/buy-mac/mac-accessories',
    description: 'Apple Mac accessories catalog',
  },
];

async function captureScreenshot(browser, ref) {
  const filename = `ref-${ref.id}-${ref.slug}.png`;
  const outputPath = path.join(OUTPUT_BASE, ref.theme, 'screenshots', filename);

  const page = await browser.newPage();
  let finalUrl = ref.url;
  let status = 'success';
  let errorMsg = null;

  try {
    await page.setViewportSize(VIEWPORT);
    const response = await page.goto(ref.url, {
      waitUntil: 'domcontentloaded',
      timeout: TIMEOUT,
    });
    finalUrl = page.url();

    // Wait a bit for visual content to settle
    await page.waitForTimeout(3000);

    await page.screenshot({ path: outputPath, fullPage: false });
    console.log(`  ✓ ${ref.id} — saved: ${filename}`);
  } catch (err) {
    status = 'failed';
    errorMsg = err.message.split('\n')[0];
    console.log(`  ✗ ${ref.id} — FAILED: ${errorMsg}`);
  } finally {
    await page.close();
  }

  return {
    id: ref.id,
    theme: ref.theme,
    slug: ref.slug,
    description: ref.description,
    candidateUrl: ref.url,
    finalUrl,
    filename,
    outputPath,
    status,
    errorMsg,
    accessDate: new Date().toISOString().split('T')[0],
  };
}

async function main() {
  console.log('PCShop Visual Reference Screenshot Capture');
  console.log('Browser: Firefox (headless), Viewport: 1440x900\n');

  const browser = await firefox.launch({ headless: true });
  const results = [];

  for (const ref of REFERENCES) {
    console.log(`[${ref.theme}] ${ref.id} — ${ref.description}`);
    const result = await captureScreenshot(browser, ref);
    results.push(result);
  }

  await browser.close();

  // Write results JSON
  const resultsPath = path.join(__dirname, 'screenshot_results.json');
  fs.writeFileSync(resultsPath, JSON.stringify(results, null, 2));

  console.log('\n--- Summary ---');
  const success = results.filter(r => r.status === 'success').length;
  const failed = results.filter(r => r.status === 'failed').length;
  console.log(`Captured: ${success}/${results.length}`);
  if (failed > 0) {
    console.log(`Failed: ${failed}`);
    results.filter(r => r.status === 'failed').forEach(r => {
      console.log(`  - ${r.id}: ${r.errorMsg}`);
    });
  }
  console.log(`Results saved to: ${resultsPath}`);
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});