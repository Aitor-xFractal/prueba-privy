import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PrivyProvider } from '@privy-io/react-auth'
import './index.css'
import App from './App.tsx'
import { toSolanaWalletConnectors } from '@privy-io/react-auth/solana';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
<PrivyProvider
  appId={import.meta.env.VITE_PRIVY_APP_ID ?? 'cmctjxa27012xl80nefljos5k'}
  config={{
    appearance: {
      theme: 'dark',
      walletChainType: 'solana-only',
      walletList: ['phantom', 'solflare', 'backpack', 'wallet_connect', "okx_wallet"]
    },
    externalWallets: {
      solana: {
        connectors: toSolanaWalletConnectors()
      }
    },
  }}
>
      <App />
    </PrivyProvider>
  </StrictMode>,
)
