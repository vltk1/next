import type { Meta, StoryObj } from "@storybook/react";

import { CardList } from "./CardList";
import { Card } from "./Card";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Molecules/Cards/CardList",
  component: CardList,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    width: { control: "number" },
    height: { control: "number" },
    children: { control: "string" },
    color: { control: "color" },
    border: { control: "color" },
  },
} satisfies Meta<typeof CardList>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {
    children: (
      <>
        <Card
          currency="UC"
          description="With image backgrounds"
          name="Desk and Office"
          price={25}
          src="https://demo.sirv.com/chair.jpg?scale.width=283&hue=43"
          width={200}
        />
        <Card
          currency="UC"
          description="With image backgrounds"
          name="Desk and Office"
          price={25}
          src="https://demo.sirv.com/chair.jpg?scale.width=283&hue=43"
          width={200}
        />
        <Card
          currency="UC"
          description="With image backgrounds"
          name="Desk and Office"
          price={25}
          src="https://demo.sirv.com/chair.jpg?scale.width=283&hue=43"
          width={200}
        />
      </>
    ),
  },
};
