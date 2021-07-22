import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'
import AppProvider from './hooks'

import {Login} from './pages/Login'
import {ContactsList} from './pages/ContactsList'
import {AddContact} from './pages/AddContact'
import {Contact} from './pages/Contact'

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login/>
          </Route>
          <Route exact path="/:id/lista-contatos">
            <ContactsList/>
          </Route>
          <Route exact path="/:id/adionar-novo">
            <AddContact/>
          </Route>
          <Route exact path="/contato/:contactId">
            <Contact/>
          </Route>
        </Switch>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
