import { config } from 'dotenv'
config()

import { PrismaClient, ParameterType } from '@prisma/client'

const prisma = new PrismaClient()

type ParamDef = {
  name: string
  key: string
  unit?: string
  type: ParameterType
  options?: string[]
  sortOrder: number
}

type ProductDef = {
  name: string
  slug: string
  description?: string
  price: number
  stock: number
  imageUrls: string[]
  params: Record<string, string>
}

type CategoryDef = {
  name: string
  slug: string
  parameters: ParamDef[]
  products: ProductDef[]
}

type ProductTypeDef = {
  name: string
  slug: string
  categories: CategoryDef[]
}

const DATA: ProductTypeDef[] = [
  {
    name: 'PC',
    slug: 'pc',
    categories: [
      {
        name: 'Gaming PC',
        slug: 'gaming-pc',
        parameters: [
          { name: 'CPU', key: 'cpu', type: ParameterType.ENUM, options: ['Intel Core i5', 'Intel Core i7', 'Intel Core i9', 'AMD Ryzen 7', 'AMD Ryzen 9'], sortOrder: 0 },
          { name: 'RAM', key: 'ram', unit: 'GB', type: ParameterType.NUMBER, sortOrder: 1 },
          { name: 'Storage', key: 'storage', unit: 'GB', type: ParameterType.NUMBER, sortOrder: 2 },
          { name: 'GPU', key: 'gpu', type: ParameterType.STRING, sortOrder: 3 },
          { name: 'Form Factor', key: 'form_factor', type: ParameterType.ENUM, options: ['ATX', 'Micro-ATX', 'Mini-ITX'], sortOrder: 4 },
        ],
        products: [
          {
            name: 'ASUS ROG Strix GT35',
            slug: 'asus-rog-strix-gt35',
            description: 'High-end gaming tower with RTX 4090 and liquid cooling.',
            price: 3499.99, stock: 8,
            imageUrls: ['https://placehold.co/600x400?text=ASUS+ROG+Strix+GT35'],
            params: { cpu: 'Intel Core i9', ram: '32', storage: '2000', gpu: 'NVIDIA RTX 4090', form_factor: 'ATX' },
          },
          {
            name: 'MSI MPG Velox 100R',
            slug: 'msi-mpg-velox-100r',
            description: 'Compact gaming powerhouse in a Mini-ITX chassis.',
            price: 1999.99, stock: 12,
            imageUrls: ['https://placehold.co/600x400?text=MSI+MPG+Velox'],
            params: { cpu: 'AMD Ryzen 7', ram: '16', storage: '1000', gpu: 'NVIDIA RTX 4070', form_factor: 'Mini-ITX' },
          },
        ],
      },
      {
        name: 'Office PC',
        slug: 'office-pc',
        parameters: [
          { name: 'CPU', key: 'cpu', type: ParameterType.ENUM, options: ['Intel Core i3', 'Intel Core i5', 'Intel Core i7'], sortOrder: 0 },
          { name: 'RAM', key: 'ram', unit: 'GB', type: ParameterType.NUMBER, sortOrder: 1 },
          { name: 'Storage', key: 'storage', unit: 'GB', type: ParameterType.NUMBER, sortOrder: 2 },
          { name: 'Integrated Graphics', key: 'integrated_graphics', type: ParameterType.BOOLEAN, sortOrder: 3 },
          { name: 'Form Factor', key: 'form_factor', type: ParameterType.ENUM, options: ['ATX', 'Micro-ATX', 'SFF'], sortOrder: 4 },
        ],
        products: [
          {
            name: 'HP EliteDesk 800 G9',
            slug: 'hp-elitedesk-800-g9',
            description: 'Reliable SFF office PC with energy-efficient design.',
            price: 899.99, stock: 25,
            imageUrls: ['https://placehold.co/600x400?text=HP+EliteDesk+800'],
            params: { cpu: 'Intel Core i5', ram: '16', storage: '256', integrated_graphics: 'true', form_factor: 'SFF' },
          },
          {
            name: 'Dell OptiPlex 7090',
            slug: 'dell-optiplex-7090',
            description: 'Business-class desktop with expandable storage.',
            price: 1299.99, stock: 18,
            imageUrls: ['https://placehold.co/600x400?text=Dell+OptiPlex+7090'],
            params: { cpu: 'Intel Core i7', ram: '32', storage: '512', integrated_graphics: 'false', form_factor: 'Micro-ATX' },
          },
        ],
      },
    ],
  },
  {
    name: 'Laptop',
    slug: 'laptop',
    categories: [
      {
        name: 'Gaming Laptop',
        slug: 'gaming-laptop',
        parameters: [
          { name: 'CPU', key: 'cpu', type: ParameterType.STRING, sortOrder: 0 },
          { name: 'RAM', key: 'ram', unit: 'GB', type: ParameterType.NUMBER, sortOrder: 1 },
          { name: 'Screen Size', key: 'screen_size', unit: 'inch', type: ParameterType.NUMBER, sortOrder: 2 },
          { name: 'GPU', key: 'gpu', type: ParameterType.STRING, sortOrder: 3 },
          { name: 'Refresh Rate', key: 'refresh_rate', unit: 'Hz', type: ParameterType.NUMBER, sortOrder: 4 },
        ],
        products: [
          {
            name: 'ASUS ROG Zephyrus G14',
            slug: 'asus-rog-zephyrus-g14',
            description: '14" gaming laptop with AMD Ryzen 9 and RTX 4090.',
            price: 2499.99, stock: 10,
            imageUrls: ['https://placehold.co/600x400?text=ASUS+ROG+Zephyrus+G14'],
            params: { cpu: 'AMD Ryzen 9 7945HX', ram: '32', screen_size: '14', gpu: 'NVIDIA RTX 4090', refresh_rate: '165' },
          },
          {
            name: 'MSI Raider GE76',
            slug: 'msi-raider-ge76',
            description: '17.3" powerhouse with 240Hz display for competitive gaming.',
            price: 3299.99, stock: 6,
            imageUrls: ['https://placehold.co/600x400?text=MSI+Raider+GE76'],
            params: { cpu: 'Intel Core i9-13980HX', ram: '32', screen_size: '17.3', gpu: 'NVIDIA RTX 4080', refresh_rate: '240' },
          },
          {
            name: 'Lenovo Legion Pro 7i',
            slug: 'lenovo-legion-pro-7i',
            description: '16" gaming laptop with excellent thermal management.',
            price: 2199.99, stock: 14,
            imageUrls: ['https://placehold.co/600x400?text=Lenovo+Legion+Pro+7i'],
            params: { cpu: 'Intel Core i9-13900HX', ram: '16', screen_size: '16', gpu: 'NVIDIA RTX 4070 Ti', refresh_rate: '240' },
          },
        ],
      },
      {
        name: 'Ultrabook',
        slug: 'ultrabook',
        parameters: [
          { name: 'CPU', key: 'cpu', type: ParameterType.STRING, sortOrder: 0 },
          { name: 'RAM', key: 'ram', unit: 'GB', type: ParameterType.NUMBER, sortOrder: 1 },
          { name: 'Screen Size', key: 'screen_size', unit: 'inch', type: ParameterType.NUMBER, sortOrder: 2 },
          { name: 'Battery Life', key: 'battery_life', unit: 'h', type: ParameterType.NUMBER, sortOrder: 3 },
          { name: 'Weight', key: 'weight', unit: 'kg', type: ParameterType.NUMBER, sortOrder: 4 },
        ],
        products: [
          {
            name: 'Apple MacBook Air 15',
            slug: 'apple-macbook-air-15',
            description: 'Ultra-thin 15" laptop with Apple M3 and all-day battery.',
            price: 1699.99, stock: 20,
            imageUrls: ['https://placehold.co/600x400?text=MacBook+Air+15'],
            params: { cpu: 'Apple M3', ram: '16', screen_size: '15.3', battery_life: '18', weight: '1.51' },
          },
          {
            name: 'Dell XPS 13 Plus',
            slug: 'dell-xps-13-plus',
            description: 'Premium thin-and-light with OLED display option.',
            price: 1499.99, stock: 15,
            imageUrls: ['https://placehold.co/600x400?text=Dell+XPS+13+Plus'],
            params: { cpu: 'Intel Core i7-1360P', ram: '16', screen_size: '13.4', battery_life: '12', weight: '1.23' },
          },
        ],
      },
    ],
  },
  {
    name: 'Monitor',
    slug: 'monitor',
    categories: [
      {
        name: 'Gaming Monitor',
        slug: 'gaming-monitor',
        parameters: [
          { name: 'Resolution', key: 'resolution', type: ParameterType.ENUM, options: ['1920x1080', '2560x1440', '3840x2160'], sortOrder: 0 },
          { name: 'Size', key: 'size', unit: 'inch', type: ParameterType.NUMBER, sortOrder: 1 },
          { name: 'Refresh Rate', key: 'refresh_rate', unit: 'Hz', type: ParameterType.NUMBER, sortOrder: 2 },
          { name: 'Panel Type', key: 'panel_type', type: ParameterType.ENUM, options: ['IPS', 'TN', 'VA', 'OLED'], sortOrder: 3 },
          { name: 'Response Time', key: 'response_time', unit: 'ms', type: ParameterType.NUMBER, sortOrder: 4 },
        ],
        products: [
          {
            name: 'ASUS ROG Swift PG27UQ',
            slug: 'asus-rog-swift-pg27uq',
            description: '27" 4K 144Hz IPS gaming monitor with HDR.',
            price: 899.99, stock: 9,
            imageUrls: ['https://placehold.co/600x400?text=ASUS+ROG+Swift+PG27UQ'],
            params: { resolution: '3840x2160', size: '27', refresh_rate: '144', panel_type: 'IPS', response_time: '1' },
          },
          {
            name: 'LG 27GP850-B',
            slug: 'lg-27gp850-b',
            description: '27" QHD 165Hz Nano IPS for smooth gaming.',
            price: 399.99, stock: 22,
            imageUrls: ['https://placehold.co/600x400?text=LG+27GP850-B'],
            params: { resolution: '2560x1440', size: '27', refresh_rate: '165', panel_type: 'IPS', response_time: '1' },
          },
        ],
      },
      {
        name: 'Professional Monitor',
        slug: 'professional-monitor',
        parameters: [
          { name: 'Resolution', key: 'resolution', type: ParameterType.ENUM, options: ['1920x1080', '2560x1440', '3840x2160'], sortOrder: 0 },
          { name: 'Size', key: 'size', unit: 'inch', type: ParameterType.NUMBER, sortOrder: 1 },
          { name: 'Color Gamut', key: 'color_gamut', type: ParameterType.ENUM, options: ['sRGB', 'AdobeRGB', 'DCI-P3'], sortOrder: 2 },
          { name: 'Panel Type', key: 'panel_type', type: ParameterType.ENUM, options: ['IPS', 'VA', 'OLED'], sortOrder: 3 },
          { name: 'Factory Calibrated', key: 'calibrated', type: ParameterType.BOOLEAN, sortOrder: 4 },
        ],
        products: [
          {
            name: 'BenQ PD3220U',
            slug: 'benq-pd3220u',
            description: '32" 4K professional monitor for designers and photographers.',
            price: 799.99, stock: 7,
            imageUrls: ['https://placehold.co/600x400?text=BenQ+PD3220U'],
            params: { resolution: '3840x2160', size: '32', color_gamut: 'DCI-P3', panel_type: 'IPS', calibrated: 'true' },
          },
          {
            name: 'Dell UltraSharp U2723QE',
            slug: 'dell-ultrasharp-u2723qe',
            description: '27" 4K IPS Black with USB-C hub and wide color.',
            price: 699.99, stock: 11,
            imageUrls: ['https://placehold.co/600x400?text=Dell+UltraSharp+U2723QE'],
            params: { resolution: '3840x2160', size: '27', color_gamut: 'sRGB', panel_type: 'IPS', calibrated: 'true' },
          },
        ],
      },
    ],
  },
  {
    name: 'Keyboard',
    slug: 'keyboard',
    categories: [
      {
        name: 'Mechanical Keyboard',
        slug: 'mechanical-keyboard',
        parameters: [
          { name: 'Switch Type', key: 'switch_type', type: ParameterType.ENUM, options: ['Cherry MX Red', 'Cherry MX Blue', 'Cherry MX Brown', 'Gateron Yellow', 'Razer Green'], sortOrder: 0 },
          { name: 'Form Factor', key: 'form_factor', type: ParameterType.ENUM, options: ['Full', 'TKL', '65%', '75%'], sortOrder: 1 },
          { name: 'RGB Backlight', key: 'rgb_backlight', type: ParameterType.BOOLEAN, sortOrder: 2 },
          { name: 'Connectivity', key: 'connectivity', type: ParameterType.ENUM, options: ['USB', 'USB-C'], sortOrder: 3 },
          { name: 'Polling Rate', key: 'polling_rate', unit: 'Hz', type: ParameterType.NUMBER, sortOrder: 4 },
        ],
        products: [
          {
            name: 'Ducky One 3 TKL',
            slug: 'ducky-one-3-tkl',
            description: 'Premium TKL mechanical keyboard with per-key RGB.',
            price: 149.99, stock: 30,
            imageUrls: ['https://placehold.co/600x400?text=Ducky+One+3+TKL'],
            params: { switch_type: 'Cherry MX Red', form_factor: 'TKL', rgb_backlight: 'true', connectivity: 'USB-C', polling_rate: '1000' },
          },
          {
            name: 'Keychron Q1 Pro',
            slug: 'keychron-q1-pro',
            description: 'Gasket-mounted 75% keyboard with aluminum frame.',
            price: 199.99, stock: 18,
            imageUrls: ['https://placehold.co/600x400?text=Keychron+Q1+Pro'],
            params: { switch_type: 'Gateron Yellow', form_factor: '75%', rgb_backlight: 'true', connectivity: 'USB-C', polling_rate: '1000' },
          },
        ],
      },
      {
        name: 'Wireless Keyboard',
        slug: 'wireless-keyboard',
        parameters: [
          { name: 'Switch Type', key: 'switch_type', type: ParameterType.ENUM, options: ['Red', 'Brown', 'Blue', 'Membrane'], sortOrder: 0 },
          { name: 'Form Factor', key: 'form_factor', type: ParameterType.ENUM, options: ['Full', 'TKL', 'Compact'], sortOrder: 1 },
          { name: 'Battery Life', key: 'battery_life', unit: 'days', type: ParameterType.NUMBER, sortOrder: 2 },
          { name: 'Connectivity', key: 'connectivity', type: ParameterType.ENUM, options: ['Bluetooth', '2.4GHz Dongle', 'Both'], sortOrder: 3 },
          { name: 'RGB Backlight', key: 'rgb_backlight', type: ParameterType.BOOLEAN, sortOrder: 4 },
        ],
        products: [
          {
            name: 'Logitech MX Keys',
            slug: 'logitech-mx-keys',
            description: 'Quiet wireless keyboard with backlit keys and multi-device support.',
            price: 119.99, stock: 35,
            imageUrls: ['https://placehold.co/600x400?text=Logitech+MX+Keys'],
            params: { switch_type: 'Membrane', form_factor: 'Full', battery_life: '10', connectivity: 'Both', rgb_backlight: 'false' },
          },
          {
            name: 'Keychron K3 Pro',
            slug: 'keychron-k3-pro',
            description: 'Compact wireless hot-swappable 75% mechanical keyboard.',
            price: 89.99, stock: 27,
            imageUrls: ['https://placehold.co/600x400?text=Keychron+K3+Pro'],
            params: { switch_type: 'Brown', form_factor: 'Compact', battery_life: '14', connectivity: 'Both', rgb_backlight: 'true' },
          },
        ],
      },
    ],
  },
  {
    name: 'Mouse',
    slug: 'mouse',
    categories: [
      {
        name: 'Gaming Mouse',
        slug: 'gaming-mouse',
        parameters: [
          { name: 'DPI', key: 'dpi', type: ParameterType.NUMBER, sortOrder: 0 },
          { name: 'Buttons', key: 'buttons', type: ParameterType.NUMBER, sortOrder: 1 },
          { name: 'Sensor Type', key: 'sensor_type', type: ParameterType.ENUM, options: ['Optical', 'Laser'], sortOrder: 2 },
          { name: 'Connectivity', key: 'connectivity', type: ParameterType.ENUM, options: ['Wired', 'Wireless'], sortOrder: 3 },
          { name: 'Weight', key: 'weight', unit: 'g', type: ParameterType.NUMBER, sortOrder: 4 },
        ],
        products: [
          {
            name: 'Logitech G Pro X Superlight 2',
            slug: 'logitech-g-pro-x-superlight-2',
            description: 'Ultra-lightweight wireless gaming mouse, 60g.',
            price: 159.99, stock: 20,
            imageUrls: ['https://placehold.co/600x400?text=Logitech+G+Pro+X+SL2'],
            params: { dpi: '32000', buttons: '5', sensor_type: 'Optical', connectivity: 'Wireless', weight: '60' },
          },
          {
            name: 'Razer DeathAdder V3 Pro',
            slug: 'razer-deathadder-v3-pro',
            description: 'Ergonomic wireless gaming mouse with Focus Pro sensor.',
            price: 149.99, stock: 16,
            imageUrls: ['https://placehold.co/600x400?text=Razer+DeathAdder+V3+Pro'],
            params: { dpi: '30000', buttons: '5', sensor_type: 'Optical', connectivity: 'Wireless', weight: '63' },
          },
          {
            name: 'Zowie EC2-C',
            slug: 'zowie-ec2-c',
            description: 'No-frills plug-and-play wired mouse for esports.',
            price: 79.99, stock: 40,
            imageUrls: ['https://placehold.co/600x400?text=Zowie+EC2-C'],
            params: { dpi: '3200', buttons: '5', sensor_type: 'Optical', connectivity: 'Wired', weight: '73' },
          },
        ],
      },
      {
        name: 'Office Mouse',
        slug: 'office-mouse',
        parameters: [
          { name: 'DPI', key: 'dpi', type: ParameterType.NUMBER, sortOrder: 0 },
          { name: 'Buttons', key: 'buttons', type: ParameterType.NUMBER, sortOrder: 1 },
          { name: 'Scroll Wheel', key: 'scroll_wheel', type: ParameterType.BOOLEAN, sortOrder: 2 },
          { name: 'Connectivity', key: 'connectivity', type: ParameterType.ENUM, options: ['USB', 'Wireless', 'Bluetooth'], sortOrder: 3 },
          { name: 'Ergonomic', key: 'ergonomic', type: ParameterType.BOOLEAN, sortOrder: 4 },
        ],
        products: [
          {
            name: 'Logitech MX Master 3S',
            slug: 'logitech-mx-master-3s',
            description: 'Advanced wireless mouse with MagSpeed scroll and app-specific profiles.',
            price: 99.99, stock: 30,
            imageUrls: ['https://placehold.co/600x400?text=Logitech+MX+Master+3S'],
            params: { dpi: '8000', buttons: '7', scroll_wheel: 'true', connectivity: 'Bluetooth', ergonomic: 'true' },
          },
          {
            name: 'Microsoft Arc Mouse',
            slug: 'microsoft-arc-mouse',
            description: 'Ultra-slim foldable Bluetooth mouse for travel.',
            price: 79.99, stock: 22,
            imageUrls: ['https://placehold.co/600x400?text=Microsoft+Arc+Mouse'],
            params: { dpi: '1800', buttons: '3', scroll_wheel: 'true', connectivity: 'Bluetooth', ergonomic: 'false' },
          },
        ],
      },
    ],
  },
]

async function main() {
  console.log('Seeding database...')

  // Clean up existing data in reverse dependency order
  await prisma.productParameter.deleteMany()
  await prisma.product.deleteMany()
  await prisma.categoryParameter.deleteMany()
  await prisma.category.deleteMany()
  await prisma.productType.deleteMany()

  for (const ptDef of DATA) {
    const productType = await prisma.productType.create({
      data: { name: ptDef.name, slug: ptDef.slug },
    })
    console.log(`  Created ProductType: ${productType.name}`)

    for (const catDef of ptDef.categories) {
      const category = await prisma.category.create({
        data: { name: catDef.name, slug: catDef.slug, productTypeId: productType.id },
      })

      const parameterMap = new Map<string, string>() // key → id

      for (const paramDef of catDef.parameters) {
        const param = await prisma.categoryParameter.create({
          data: {
            categoryId: category.id,
            name: paramDef.name,
            key: paramDef.key,
            unit: paramDef.unit ?? null,
            type: paramDef.type,
            options: paramDef.options ?? [],
            sortOrder: paramDef.sortOrder,
          },
        })
        parameterMap.set(param.key, param.id)
      }

      for (const prodDef of catDef.products) {
        const product = await prisma.product.create({
          data: {
            name: prodDef.name,
            slug: prodDef.slug,
            description: prodDef.description ?? null,
            price: prodDef.price,
            stock: prodDef.stock,
            imageUrls: prodDef.imageUrls,
            productTypeId: productType.id,
            categoryId: category.id,
          },
        })

        for (const [key, value] of Object.entries(prodDef.params)) {
          const categoryParameterId = parameterMap.get(key)
          if (!categoryParameterId) {
            console.warn(`    Warning: no parameter "${key}" for category "${category.name}"`)
            continue
          }
          await prisma.productParameter.create({
            data: { productId: product.id, categoryParameterId, value },
          })
        }

        console.log(`    Created Product: ${product.name}`)
      }
    }
  }

  console.log('Seeding complete.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())