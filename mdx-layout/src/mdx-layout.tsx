import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { CoreLayout } from '@divriots/dockit-react/mdx-layout-core';

import '@divriots/dockit-react/style.css';
import '~/mdx-layout/src/styleshowcase.css';

import '@kickstartds/core/lib/design-tokens/tokens.css';
import '@kickstartds/base/lib/global/base.js';
import '@kickstartds/base/lib/global/base.css';

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
