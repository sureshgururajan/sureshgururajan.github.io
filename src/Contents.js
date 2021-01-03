import React from 'react';
import Sidebar from './Sidebar';

function Contents() {
  return (
    <div class="ms-Grid" dir="ltr">
      <div class="ms-Grid-row">
        <div class="ms-Grid-col ms-lg2">
          <Sidebar />
        </div>
        <div class="ms-Grid-col ms-lg9">
          Main contents
        </div>
      </div>
    </div>
  )
}

export default Contents;
