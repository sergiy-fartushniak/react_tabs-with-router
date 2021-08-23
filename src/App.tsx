import React from 'react';
import { Route } from 'react-router';
import { Switch } from 'react-router-dom';

import './App.scss';
import { HomePage } from './components/HomePage';
import { TabsPage } from './components/TabsPage';

/*
import { RouteComponentProps } from 'react-router-dom';

type TabsPageProps = React.FC<RouteComponentProps<{ tabId: string }>>;
const TabsPage: TabsPageProps = ({ match }) => {...};

or

import { useParams } from 'react-router-dom';

const TabsPage = () => {
  const { tabId } = useParams<{ tabId: string }>();
  ...
};
*/

// const tabs = [
//   { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
//   { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
//   { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
// ];

const App = () => (
  <Switch>
    <Route exact path="/">
      <HomePage />
    </Route>
    <Route path="/tabs">
      <TabsPage />
    </Route>
  </Switch>
);

export default App;
