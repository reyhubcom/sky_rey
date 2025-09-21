import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Exchange',
      links: [
        {
          text: 'Exchange Bitcoin [ BTC ]',
          href: getPermalink('/homes/btc'),
        },
        {
          text: 'Exchange Ethereum [ ETH ]',
          href: getPermalink('/homes/eth'),
        },
        {
          text: 'Exchange Ripple [ XRP ]',
          href: getPermalink('/homes/xrp'),
        },
        {
          text: 'Exchange Binance [ BNB ]',
          href: getPermalink('/homes/bnb'),
        },
        {
          text: 'Exchange Cardano [ ADA ]',
          href: getPermalink('/homes/ada'),
        },
        {
          text: 'Exchange Cosmos [ ATOM ]',
          href: getPermalink('/homes/atom'),
        },
      ],
    },
    {
      text: 'Buy',
      links: [
        {
          text: 'Buy Bitcoin [ BTC ]',
          href: getPermalink('#'),
        },
        {
          text: 'Buy Ethereum [ ETH ]',
          href: getPermalink('#'),
        },
        {
          text: 'Buy Ripple [ XRP ]',
          href: getPermalink('#'),
        },
        {
          text: 'Buy Binance [ BNB ]',
          href: getPermalink('#'),
        },
        {
          text: 'Buy Solana [ SOL ]',
          href: getPermalink('#'),
        },
         {
          text: 'Buy Algorand [ ALGO ]',
          href: getPermalink('#'),
        },

      ],
    },
    {
      text: 'Sell',
      links: [
        {
          text: 'Sell Bitcoin [ BTC ]',
          href: getPermalink('#'),
        },
        {
          text: 'Sell Ethereum [ ETH ]',
          href: getPermalink('#'),
        },
        {
          text: 'Sell Binance [ BNB ]',
          href: getPermalink('#'),
        },
        {
          text: 'Sell Solana [ SOL ]',
          href: getPermalink('#'),
        },
        {
          text: 'Sell Ripple [ XRP ]',
          href: getPermalink('#'),
        },
        {
          text: 'Sell Algorand [ ALGO ]',
          href: getPermalink('#'),
        },
      ],
    },
    {
      text: 'Support',
      links: [
        {
          text: 'How it Work',
          href: getPermalink('#'),
        },
        {
          text: 'Contact Support',
          href: getPermalink('#'),
        },
        {
          text: 'Help Centre',
          href: getPermalink('#'),
        },
        {
          text: 'Check Exchange Status',
          href: getPermalink('#'),
        },
        {
          text: 'FAQ',
          href: getPermalink('#'),
        },
      ],
    },
   {
      text: 'Crypto Markets',
      links: [{
        text: ' All Crypto Market', 
        href: getPermalink('/homes/crypto'),
      }
      ]
    },
  ],
  actions: [{ text: 'Cold Wallet', href: 'https://tangem.com', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Buy Crypto',
      links: [
        { text: 'Buy Bitcoin [ BTC ]', href: '#' },
        { text: 'Buy Ethereum [ ETH ]', href: '#' },
        { text: 'Buy Ripple [ XRP ]', href: '#' },
        { text: 'Buy Binance [ BNB ]', href: '#' },
        { text: 'Buy Solana [ SOL ]', href: '#' },
        { text: 'Buy Cosmos [ ATOM ]', href: '#' },
        { text: 'Buy Avalanche [ AVAX ]', href: '#' },
      ],
    },
    {
      title: 'Exchange',
      links: [
        { text: 'Exchange Bitcoin [ BTC ]', href: '#' },
        { text: 'Exchange Ethereum [ ETH ]', href: '#' },
        { text: 'Exchange Polygon [ POL ]', href: '#' },
        { text: 'Exchange Solana [ SOL ]', href: '#' },
        { text: 'Exchange Binance [ BNB ]', href: '#' },
        { text: 'All Crypto', href: '/homes/crypto' },
      ],
    },
    {
      title: 'Exchange Pairs',
      links: [
        { text: 'BTC to ETH', href: '#' },
        { text: 'ETH to USDT', href: '#' },
        { text: 'BNB to SOL', href: '#' },
        { text: 'XRP to BTC', href: '#' },
        { text: 'USDC to TRX', href: '#' },
        { text: 'All Crypto', href: '/homes/crypto' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'FAQ', href: '#' },
        { text: 'How it Work', href: '#' },
        { text: 'Glossary', href: '#' },
        { text: 'Contac Us', href: '#' },
        { text: 'Help Center', href: '#' },
        { text: 'Status Page', href: '#' },
        { text: 'Saka Shop', href: 'https://linktr.ee/reystaking' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('#') },
    { text: 'Privacy Policy', href: getPermalink('#') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href:'#'},
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/' },
  ],
  footNote: `
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://reyhub.com"> Rey</a> ·2025 Skyro.xyz  All Rights Reserved.
  `,
};
