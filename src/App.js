import React, {useState} from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import './assets/css/App.css';
import './assets/css/Page.css';
import Header from './components/Header';
import Footer from './components/Footer';
import PageMain from './pages/PageMain';
import PageSearch from './pages/PageSearch';
import en from './lang/en';
import ru from './lang/ru';
import he from './lang/he';
import data from './lang/data';
import {ContextLang} from './context';

const langList = {
  en: "english",
  ru: "русский",
  he: "עברית"
};
const page = {en, ru, he};

export default function App() {
  let [lang, setLang] = useState("en");
  return (
    <BrowserRouter>
      <ContextLang.Provider value={{page: page[lang], langs: langList, lang, data}}>
        <Switch>
          <Route path="/search">
            <div className="Page">
              <Header changeLang={setLang} />
              <main className="content">
                <PageSearch />
              </main>
              <Footer />
            </div>
          </Route>
          <Route path="/">
            <div className="Page">
              <Header changeLang={setLang} />
              <main className="content">
                <PageMain />
              </main>
              <Footer />
            </div>
          </Route>
        </Switch>
      </ContextLang.Provider>
    </BrowserRouter>
  );
}