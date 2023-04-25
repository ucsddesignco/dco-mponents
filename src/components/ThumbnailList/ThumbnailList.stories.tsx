import React from 'react';
import type { Meta, StoryFn, StoryObj } from '@storybook/react';
import ThumbnailList from './ThumbnailList';
import type { DCoThumbnail } from './ThumbnailList';

const testImages: DCoThumbnail[] = [
  {
    caption: 'Angy',
    src: 'https://preview.redd.it/voiac279e2461.png?auto=webp&s=68ac149085a1bab71f1dd4d71d0a509bcc4a316e',
    href: 'https://www.youtube.com/shorts/uWhPnAQTH5E',
    alt: 'Angy guy',
  },
  {
    caption: 'Frew Up',
    src: 'https://i.pinimg.com/564x/5b/02/47/5b0247d140ff9659066d61fa63edc79a.jpg',
    href: 'https://www.youtube.com/shorts/uWhPnAQTH5E',
    alt: 'Mom i frew up',
  },
  {
    caption: 'Happy',
    src: 'https://i.pinimg.com/originals/ba/92/7f/ba927ff34cd961ce2c184d47e8ead9f6.jpg',
    href: 'https://www.youtube.com/shorts/uWhPnAQTH5E',
    alt: 'Happy catto',
  },
  {
    caption: 'Hello',
    src: 'https://i.kym-cdn.com/entries/icons/original/000/043/403/cover3.jpg',
    href: 'https://www.youtube.com/shorts/uWhPnAQTH5E',
    alt: 'Hello yes hi hello',
  },
  {
    caption: 'Melvin',
    src: 'https://preview.redd.it/r3lcc7gf64791.png?width=540&format=png&auto=webp&s=9d32ec46f884486fd59dfd01453bf5d07bf30d75',
    href: 'https://www.youtube.com/shorts/uWhPnAQTH5E',
    alt: 'Melvin',
  },
  {
    caption: 'Polite',
    src: 'https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg?auto=compress&fm=pjpg',
    href: 'https://www.youtube.com/shorts/uWhPnAQTH5E',
    alt: 'Polite gentleman',
  },
  {
    caption: 'Sadge',
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDkNL450VCdu6u6eWC7IYwb2I9WB5uT8XKnF4ZVtsOaA&usqp=CAU&ec=48665701',
    href: 'https://www.youtube.com/shorts/uWhPnAQTH5E',
    alt: ':(',
  },
  {
    caption: 'Stinky',
    src: 'https://i.cbc.ca/1.5359228.1577206958!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/smudge-the-viral-cat.jpg',
    href: 'https://www.youtube.com/shorts/uWhPnAQTH5E',
    alt: 'Real stinker right here',
  },
];

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'DComponents/ThumbnailList',
  component: ThumbnailList,
  tags: ['autodocs'],
} satisfies Meta<typeof ThumbnailList>;

export default meta;

type Story = StoryObj<typeof ThumbnailList>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn = (args) => (
  <ThumbnailList
    thumbnails={testImages}
    thumbnailsPerRow={4}
    imagePadding={10}
    {...args}
  />
);

export const ForceSquare: Story = Template.bind({});
// // More on args: https://storybook.js.org/docs/react/writing-stories/args
ForceSquare.args = { forceSquare: true };

export const NoForceSquare: Story = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
NoForceSquare.args = { forceSquare: false };
