import React from 'react';
import Sidebar from './Sidebar';
import Posts from './Posts';
import BreadCrumbs from './BreadCrumbs';

function Contents() {
  return (
    <div class="ms-Grid" dir="ltr">
      <div class="ms-Grid-row">
        <BreadCrumbs />
      </div>
      <div class="ms-Grid-row">
        <div class="ms-Grid-col ms-lg2">
          <Sidebar />
        </div>
        <div class="ms-Grid-col ms-lg9">
          <Posts />
        </div>
      </div>
    </div>
  )
}

export default Contents;
