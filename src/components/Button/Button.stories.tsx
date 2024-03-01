import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Button, {ButtonProps} from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// export default {
//   title: 'ReactComponentLibrary/Button',
//   component: Button,
// } as ComponentMeta<typeof Button>;

// // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

// export const HelloWorld = Template.bind({});
// // More on args: https://storybook.js.org/docs/react/writing-stories/args
// HelloWorld.args = {
//   label: 'Hello world!',
// };

// export const ClickMe = Template.bind({});
// ClickMe.args = {
//   label: 'Click me!',
// };

export default {
  title: "Button",
  component: Button,
}

export const Red = () => <Button label="Red" />;