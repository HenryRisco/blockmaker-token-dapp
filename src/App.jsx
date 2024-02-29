import { ConnectKitProvider } from 'connectkit'
import { AppLayout } from './components/ui/layouts'
import { Home } from './pages'
import { WagmiConfig } from 'wagmi'
import { config } from './config/wagmi'

console.log('alchemy ID', import.meta.env.VITE_ALCHEMY_ID)
console.log('wallet connect ID', import.meta.env.VITE_WALLETCONNECT_PROJECT_ID)

function App() {  
  return (
    <WagmiConfig config={config}>
      <ConnectKitProvider mode='light'>
        <AppLayout>
          <Home />
        </AppLayout>
      </ConnectKitProvider>
    </WagmiConfig>
    
  )
}

export default App
