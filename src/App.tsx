import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import { Page } from './components/base/base'
import { TopBar } from './components/TopBar'
import { GlobalStyle } from './global/GlobalStyle'
import { Balance } from './pages/Balance'
import { Prices } from './pages/Prices'
import { Graph } from './pages/Graph'
import { Block } from './pages/Block'
import { About } from './pages/About'
import { Tokens } from './pages/Tokens'
import { Nft} from './pages/Nft'
import { Search} from './pages/Search'
import { NFTPort} from './pages/NFTPort'
import { Transactions } from './pages/Transactions'
import { SendEtherPage } from './pages/SendEtherPage'
import { NotificationsList } from './components/Transactions/History'
import { Buy } from './pages/Buy'
import { Covalent } from './pages/Covalent'
import { NFTTransactions} from './pages/NFTTransactions'

export function App() {
  return (
    <Page>
      <GlobalStyle />
      <BrowserRouter>
        <TopBar />
        <Switch>
          <Route exact path="/balance" component={Balance} />
          <Route exact path="/graph" component={Graph} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/prices" component={Prices} />
          <Route exact path="/tokens" component={Tokens} />
          <Route exact path="/send" component={SendEtherPage} />
          <Route exact path="/transactions" component={Transactions} />
          <Route exact path="/nft" component={Nft} />
          <Route exact path="/covalent" component={Covalent} />
          <Route exact path="/nftport" component={NFTPort} />
          <Route exact path="/buy" component={Buy} />
          <Route exact path="/nfttransactions" component={NFTTransactions} />
          <Route exact path="/about" component={About} />
          <Redirect exact from="/" to="/balance" />
        </Switch>
      </BrowserRouter>
      <NotificationsList />
    </Page>
  )
}
