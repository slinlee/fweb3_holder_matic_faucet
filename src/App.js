import {
  Error,
  Layout,
  ConnectButton,
  FaucetForm,
  Title,
  InstallMetaMask,
  DataDetails,
} from './components'

import { isWeb3Available, useEthers } from './lib'

function App() {
  const ethersState = useEthers()

  return (
    <div data-testid='app'>
      {isWeb3Available() ? (
        <Layout>
          <ConnectButton {...ethersState} />
          <Title networkName={ethersState?.network?.name} />
          <FaucetForm {...ethersState} />
          <Error {...ethersState} />
          <DataDetails {...ethersState} />
        </Layout>
      ) : (
        <InstallMetaMask />
      )}
    </div>
  )
}

export default App
