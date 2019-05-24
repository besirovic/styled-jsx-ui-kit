import React from 'react';

export default (storyFn) => (
  <ThemeProvider theme={baseTheme}>
    <React.Fragment>
      { storyFn() }
      <style jsx global>{`
        #root * {
          font-family: Menlo,'Courier New',Courier,monospace;
        }
      `}</style>
    </React.Fragment>
  </ThemeProvider>
);