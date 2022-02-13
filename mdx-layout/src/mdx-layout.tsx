import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { CoreLayout } from '@divriots/dockit-react/mdx-layout-core';

import '@divriots/dockit-react/styles.css';

import '@kickstartds/design-system/dist/index.css';
import '@kickstartds/design-system/dist/index.js';

export const Layout = (props) => (
  <MDXProvider>
    <CoreLayout
      logo={
        <>
          <img src="https://www.kickstartds.com/logo.svg" />
          <h3 style={{ fontWeight: 700 }}>kickstartDS</h3>
        </>
      }
      {...props}
    />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/water.css@2/out/light.css"
    />
  </MDXProvider>
);
