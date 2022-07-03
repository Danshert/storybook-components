import{j as a}from"./jsx-runtime.0886262c.js";import"./index.d2d2a84a.js";const o=({label:e="No label",size:t="normal",allCaps:l=!1,color:n="primary",fontColor:s})=>a("span",{className:` ${t}  text-${n}`,style:{color:s},children:l?e.toUpperCase():e});try{o.displayName="MyLabel",o.__docgenInfo={description:"",displayName:"MyLabel",props:{label:{defaultValue:{value:"No label"},description:"Este es el mensaje a mostrar en la etiqueta",name:"label",required:!1,type:{name:"string"}},size:{defaultValue:{value:"normal"},description:"Este es el tamano de la etiqueta",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'}]}},allCaps:{defaultValue:{value:"false"},description:"capitaliza todas las palabras",name:"allCaps",required:!1,type:{name:"boolean"}},color:{defaultValue:{value:"primary"},description:"Este es el color de la etiqueta",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},fontColor:{defaultValue:null,description:"Color personalizado de la fuente",name:"fontColor",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/MyLabel.tsx#MyLabel"]={docgenInfo:o.__docgenInfo,name:"MyLabel",path:"src/components/MyLabel.tsx#MyLabel"})}catch{}var b={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';\r
\r
import { MyLabel } from '../../components/MyLabel';\r
\r
export default {\r
	title: 'UI/MyLabel',\r
	component: MyLabel,\r
	argTypes: {\r
		size: { control: 'select' },\r
		color: { control: 'select' },\r
		fontColor: { control: 'color' },\r
	},\r
} as ComponentMeta<typeof MyLabel>;\r
\r
const Template: ComponentStory<typeof MyLabel> = (args) => (\r
	<MyLabel {...args} />\r
);\r
\r
export const Basic = Template.bind({});\r
\r
Basic.args = {\r
	label: 'Mi etiqueta',\r
	size: 'normal',\r
};\r
\r
export const AllCaps = Template.bind({});\r
AllCaps.args = {\r
	label: 'Mi etiqueta',\r
	size: 'normal',\r
	allCaps: true,\r
};\r
\r
export const Secondary = Template.bind({});\r
Secondary.args = {\r
	label: 'Mi etiqueta',\r
	size: 'normal',\r
	color: 'secondary',\r
};\r
\r
export const Tertiary = Template.bind({});\r
Tertiary.args = {\r
	label: 'Mi etiqueta',\r
	size: 'normal',\r
	color: 'tertiary',\r
};\r
\r
export const custoFormColor = Template.bind({});\r
custoFormColor.args = {\r
	label: 'Mi etiqueta',\r
	fontColor: '#5517ac',\r
	size: 'h1',\r
};\r
`,locationsMap:{basic:{startLoc:{col:49,line:15},endLoc:{col:1,line:17},startBody:{col:49,line:15},endBody:{col:1,line:17}},"all-caps":{startLoc:{col:49,line:15},endLoc:{col:1,line:17},startBody:{col:49,line:15},endBody:{col:1,line:17}},secondary:{startLoc:{col:49,line:15},endLoc:{col:1,line:17},startBody:{col:49,line:15},endBody:{col:1,line:17}},tertiary:{startLoc:{col:49,line:15},endLoc:{col:1,line:17},startBody:{col:49,line:15},endBody:{col:1,line:17}},"custo-form-color":{startLoc:{col:49,line:15},endLoc:{col:1,line:17},startBody:{col:49,line:15},endBody:{col:1,line:17}}}}},title:"UI/MyLabel",component:o,argTypes:{size:{control:"select"},color:{control:"select"},fontColor:{control:"color"}}};const r=e=>a(o,{...e}),i=r.bind({});i.args={label:"Mi etiqueta",size:"normal"};const c=r.bind({});c.args={label:"Mi etiqueta",size:"normal",allCaps:!0};const d=r.bind({});d.args={label:"Mi etiqueta",size:"normal",color:"secondary"};const p=r.bind({});p.args={label:"Mi etiqueta",size:"normal",color:"tertiary"};const y=r.bind({});y.args={label:"Mi etiqueta",fontColor:"#5517ac",size:"h1"};const f=["Basic","AllCaps","Secondary","Tertiary","custoFormColor"];export{c as AllCaps,i as Basic,d as Secondary,p as Tertiary,f as __namedExportsOrder,y as custoFormColor,b as default};
//# sourceMappingURL=MyLabel.stories.c200d2e1.js.map
