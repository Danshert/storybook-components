import { ComponentMeta, ComponentStory } from '@storybook/react';

import { MyLabel } from '../../components/MyLabel';

export default {
	title: 'UI/MyLabel',
	component: MyLabel,
	argTypes: {
		size: { control: 'select' },
		color: { control: 'select' },
		fontColor: { control: 'color' },
	},
} as ComponentMeta<typeof MyLabel>;

const Template: ComponentStory<typeof MyLabel> = (args) => (
	<MyLabel {...args} />
);

export const Basic = Template.bind({});

Basic.args = {
	label: 'Mi etiqueta',
	size: 'normal',
};

export const AllCaps = Template.bind({});
AllCaps.args = {
	label: 'Mi etiqueta',
	size: 'normal',
	allCaps: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
	label: 'Mi etiqueta',
	size: 'normal',
	color: 'secondary',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
	label: 'Mi etiqueta',
	size: 'normal',
	color: 'tertiary',
};

export const custoFormColor = Template.bind({});
custoFormColor.args = {
	label: 'Mi etiqueta',
	fontColor: '#5517ac',
	size: 'h1',
};
