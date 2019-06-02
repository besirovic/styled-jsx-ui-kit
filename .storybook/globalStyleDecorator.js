import React from 'react';

export default (storyFn) => (
  <React.Fragment>
    { storyFn() }
    <style jsx global>{`
      #root * {
        font-family: Menlo,'Courier New',Courier,monospace;
      }
    `}</style>
  </React.Fragment>
);