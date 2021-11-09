import React from 'react';
import Header from './components/Header';
import { ListUsersProvider } from './context/ApiContext';
import { HandleProvider } from './context/HandleContext';
import { HandleNewsProvider } from './context/HandleNewsContext';
import Routes from './routes/routes';

function App() {
  return (
    <div>
      <Header />
      <ListUsersProvider>
        <HandleProvider>
          <HandleNewsProvider>
            <Routes />
          </HandleNewsProvider>
        </HandleProvider>
      </ListUsersProvider>
    </div>
  );
}

export default App;
