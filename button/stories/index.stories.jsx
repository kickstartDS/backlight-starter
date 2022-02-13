import ButtonStories, {
  Template,
} from '@kickstartds/base/lib/button/button.stories';
import { pack } from '@kickstartds/core/lib/storybook/helpers';
export default {
  ...ButtonStories,
  title: 'Base/Button',
  parameters: {
    layout: 'centered',
  },
};
export const Solid = Template.bind({});
Solid.args = pack({
  variant: 'solid',
  href: '#',
  label: 'mehr erfahren',
});
