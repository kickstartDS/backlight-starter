import { IconSprite } from '@kickstartds/design-system/dist/components/icon-sprite/IconSpriteComponent';
import TeaserBoxStories, {
  Template,
} from '@kickstartds/base/lib/teaser-box/teaser-box.stories';
import { pack } from '@kickstartds/core/lib/storybook/helpers';
export default {
  ...TeaserBoxStories,
  title: 'Base/TeaserBox',
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <>
        <IconSprite />
        <Story />
      </>
    ),
  ],
};
export const Linked = Template.bind({});
Linked.args = pack({
  ratio: '16:9',
  topic: 'Lorem Ipsum',
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ispum dolor distinctio minima unde voluptatum aut. Lorem ipsum dolor sit amet.',
  link: {
    variant: 'solid',
    label: 'Mehr erfahren',
    hidden: true,
  },
});

export const Button = Template.bind({});
Button.args = pack({
  ...Linked.args,
  link: {
    variant: 'solid',
    label: 'mehr erfahren',
    hidden: false,
  },
});

export const Dark = Template.bind({});
Dark.args = pack({
  ...Linked.args,
  link: {
    variant: 'solid-inverted',
    label: 'mehr erfahren',
    hidden: false,
  },
  darkStyle: true,
});
