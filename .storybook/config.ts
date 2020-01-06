import { configure } from '@storybook/react';

// automatically import all files ending in __stories__/*.stories.js
configure(require.context('../src/components', true, /\.stories\.(js|ts)x?$/), module);
