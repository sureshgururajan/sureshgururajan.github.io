import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import Contents from './Contents';

function App() {
  return (
    <div class="ms-Grid" dir="ltr">
      <div class="ms-Grid-row">
        <div class="ms-Grid-col ms-lg2"></div>
        <div class="ms-Grid-col ms-lg8">
          <NavBar />
          <div class="ms-Grid-row"> &nbsp; </div>
          <Contents />
          <div class="ms-Grid-row"> &nbsp; </div>
          <Footer />
        </div>
        <div class="ms-Grid-col ms-lg2"></div>
      </div>
    </div>
  );
}

export default App;
