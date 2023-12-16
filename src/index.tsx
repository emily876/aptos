// src/index.tsx
import './polyfills';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultWallets, RainbowKitProvider, midnightTheme } from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum, goerli } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
// import { ApolloProvider } from '@apollo/client';

// import {IdentityConnectWallet} from "@identity-connect/wallet-adapter-plugin";
import App from './App';

// const { chains, provider, webSocketProvider } = configureChains(
//   [
//     mainnet,
//     polygon,
//     optimism,
//     arbitrum,
//     ...(process.env.REACT_APP_ENABLE_TESTNETS === 'true' ? [goerli] : []),
//   ],
//   [publicProvider()]
// );

// const { connectors } = getDefaultWallets({
//   appName: 'Netsepio',
//   chains,
// });

// const wagmiClient = createClient({
//   autoConnect: true,
//   connectors,
//   provider,
//   webSocketProvider,
// });



const rootElement = document.getElementById('root') as HTMLElement;

const root = ReactDOM.createRoot(rootElement);

// function walletsForNetwork() {
//   const wallets: any[] = [
//     new PetraWallet(),
    // new PontemWallet(),
    // new MartianWallet(),
    // new FewchaWallet(),
    // new RiseWallet(),
    // MSafeWallet,
    // new NightlyWallet(),
    // new OpenBlockWallet(),
    // new TokenPocketWallet(),
    // new TrustWallet(),
    // new WelldoneWallet(),
    // Blocto supports Testnet/Mainnet for now.
    // new BloctoWallet({
    //   network: NetworkName.Testnet,
    //   bloctoAppId: "6d85f56e-5f2e-46cd-b5f2-5cf9695b4d46",
    // }),
    // new OKXWallet(),
  // ];
  // if (network === NetworkName.Mainnet) {
  //   wallets.unshift(
  //     new IdentityConnectWallet(IdentityConnectId, {
  //       networkName: NetworkName.Mainnet,
  //     }),
  //   );
  // } else if (network === NetworkName.Testnet) {
  //   wallets.unshift(
  //     new IdentityConnectWallet(IdentityConnectId, {
  //       networkName: NetworkName.Testnet,
  //     }),
  //   );
  // } else if (network === NetworkName.Devnet) {
  //   wallets.unshift(
  //     new IdentityConnectWallet(IdentityConnectId, {
  //       networkName: NetworkName.Devnet,
  //     }),
  //   );
  // }
//   return wallets;
// }

root.render(
  <React.StrictMode>
          
            <App />
            
  </React.StrictMode>
);
