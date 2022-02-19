import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { CoreLayout } from '@divriots/dockit-react/mdx-layout-core';

import '@divriots/dockit-react/style.css';
import '~/mdx-layout/src/styleshowcase.css';

import '@kickstartds/design-system/dist/index.css';
import '@kickstartds/design-system/dist/index.js';

import '~/colors/src/tokens.css';

export const Layout = (props) => (
  <MDXProvider>
    <CoreLayout
      logo={<img src="https://www.kickstartds.com/logo.svg" />}
      {...props}
    />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/water.css@2/out/light.css"
    />
  </MDXProvider>
);
