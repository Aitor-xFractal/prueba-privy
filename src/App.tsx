import { usePrivy } from '@privy-io/react-auth'
import './App.css'

function App() {
  const { 
    ready, 
    authenticated, 
    login, 
    logout, 
    user,
    linkEmail,
    linkWallet,
    unlinkEmail,
    unlinkWallet
  } = usePrivy()

  if (!ready) {
    return (
      <div className="app-container">
        <div className="loading">Loading...</div>
      </div>
    )
  }

  if (!authenticated) {
    return (
      <div className="app-container">
        <div className="login-container">
          <h1>Welcome to Privy Auth Demo</h1>
          <p>Connect your wallet or sign in with email to get started</p>
          <button 
            className="login-button"
            onClick={login}
          >
            Log In
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="app-container">
      <div className="user-info">
        <h1>Welcome!</h1>
        <div className="user-details">
          <h3>User Information</h3>
          <p><strong>User ID:</strong> {user?.id}</p>
          
          {user?.email && (
            <div className="account-section">
              <h4>Email Account</h4>
              <p>{user.email.address}</p>
              <button 
                className="action-button danger" 
                onClick={() => unlinkEmail(user.email!.address)}
              >
                Unlink Email
              </button>
            </div>
          )}

          {user?.wallet && (
            <div className="account-section">
              <h4>Connected Wallet</h4>
              <p>{user.wallet.address}</p>
              <p><strong>Type:</strong> {user.wallet.walletClientType}</p>
              <p><strong>Chain:</strong> {user.wallet.chainType}</p>
              <button 
                className="action-button danger" 
                onClick={() => unlinkWallet(user.wallet!.address)}
              >
                Unlink Wallet
              </button>
            </div>
          )}

          <div className="actions">
            {!user?.email && (
              <button 
                className="action-button" 
                onClick={linkEmail}
              >
                Link Email
              </button>
            )}
            
            {!user?.wallet && (
              <button 
                className="action-button" 
                onClick={linkWallet}
              >
                Link Wallet
              </button>
            )}
            
            <button 
              className="action-button logout" 
              onClick={logout}
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
