import React from 'react';
import { ThemeProvider } from 'theming';

import baseTheme from '../src/themes/base';

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
