import{H as e}from"./Header.5dc1900f.js";import{j as t}from"./jsx-runtime.0886262c.js";import"./Button.7a8c7592.js";import"./index.d2d2a84a.js";var p={title:"Example/Header",component:e,parameters:{storySource:{source:`import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Header } from './Header';

export default {
  title: 'Example/Header',
  component: Header,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {
    name: 'Jane Doe',
  },
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
`,locationsMap:{"logged-in":{startLoc:{col:48,line:15},endLoc:{col:78,line:15},startBody:{col:48,line:15},endBody:{col:78,line:15}},"logged-out":{startLoc:{col:48,line:15},endLoc:{col:78,line:15},startBody:{col:48,line:15},endBody:{col:78,line:15}}}},layout:"fullscreen"}};const o=n=>t(e,{...n}),r=o.bind({});r.args={user:{name:"Jane Doe"}};const a=o.bind({});a.args={};const m=["LoggedIn","LoggedOut"];export{r as LoggedIn,a as LoggedOut,m as __namedExportsOrder,p as default};
//# sourceMappingURL=Header.stories.95d5d51c.js.map
