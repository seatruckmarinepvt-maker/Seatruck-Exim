/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

// Direct module imports for Vite bundling and optimization
import logoMain from '../assets/images/logo-main.webp';
import heroHomeBanner from '../assets/images/hero-home-banner.webp';
import heroAboutCompany from '../assets/images/hero-about-company.webp';
import heroServicesLogistics from '../assets/images/hero-services-logistics.webp';
import heroProductsHarvest from '../assets/images/regenerated_image_1785134745249.png';
import heroContactShipping from '../assets/images/hero-contact-shipping.webp';
import heroFruitBanner from '../assets/images/hero-fruit-banner.webp';
import featureAgroHarvest from '../assets/images/feature-agro-harvest.webp';

import productAlmond from '../assets/images/product-almond.webp';
import productApple from '../assets/images/product-apple.webp';
import productBanana from '../assets/images/product-banana.webp';
import productBroccoli from '../assets/images/product-broccoli.webp';
import productCashew from '../assets/images/product-cashew.webp';
import productCorn from '../assets/images/product-corn.webp';
import productDrumstick from '../assets/images/product-drumstick.webp';
import productOnion from '../assets/images/product-onion.webp';
import productOrange from '../assets/images/product-orange.webp';
import productPistachio from '../assets/images/product-pistachio.webp';
import productPotato from '../assets/images/product-potato.webp';
import productRice from '../assets/images/product-rice.webp';
import productTomato from '../assets/images/product-tomato.webp';
import productWheat from '../assets/images/product-wheat.webp';

import flagIndia from '../assets/images/flag-india.webp';
import flagUae from '../assets/images/flag-uae.webp';
import ogSocialBanner from '../assets/images/og-social-banner.webp';

export function getAssetUrl(filename: string): string {
  return `/src/assets/images/${filename}`;
}

export function handleImageError(
  _e: React.SyntheticEvent<HTMLImageElement, Event>,
  _fallbackType: string = 'product'
) {
  // Graceful no-op as all images exist locally in src/assets/images/
}

// Pre-configured asset path helpers
export const ASSET_LOGOS = {
  main: logoMain,
  footer: logoMain,
};

export const ASSET_HEROES = {
  home: heroHomeBanner,
  about: heroAboutCompany,
  services: heroServicesLogistics,
  products: heroProductsHarvest,
  contact: heroContactShipping,
  fruitBanner: heroFruitBanner,
  agroHarvest: featureAgroHarvest,
};

export const ASSET_PRODUCTS = {
  almond: productAlmond,
  apple: productApple,
  banana: productBanana,
  broccoli: productBroccoli,
  cashew: productCashew,
  corn: productCorn,
  drumstick: productDrumstick,
  onion: productOnion,
  orange: productOrange,
  pistachio: productPistachio,
  potato: productPotato,
  rice: productRice,
  tomato: productTomato,
  wheat: productWheat,
};

export const ASSET_FLAGS = {
  india: flagIndia,
  uae: flagUae,
};

export const ASSET_SOCIAL = {
  ogBanner: ogSocialBanner,
};

