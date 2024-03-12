import type { Meta, StoryObj } from '@storybook/react';
import Products from '../app/products/page';

const meta = {
  title: 'Product - List Page Component',
  component: Products
} satisfies Meta<typeof Products>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};
