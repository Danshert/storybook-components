import './myLabel.css';

export interface MyLabelProps {
	/**
	 * Este es el mensaje a mostrar en la etiqueta
	 */
	label: string;
	/**
	 * Este es el tamano de la etiqueta
	 */
	size: 'normal' | 'h1' | 'h2' | 'h3';
	/**
	 * capitaliza todas las palabras
	 */
	allCaps?: boolean;
	/**
	 * Este es el color de la etiqueta
	 */
	color?: 'primary' | 'secondary' | 'tertiary';

	/**
	 * Color personalizado de la fuente
	 */
	fontColor?: string;
}

export const MyLabel = ({
	label = 'No label',
	size = 'normal',
	allCaps = false,
	color = 'primary',
	fontColor,
}: MyLabelProps) => {
	return (
		<span
			className={` ${size}  text-${color}`}
			style={{ color: fontColor }}
		>
			{allCaps ? label.toUpperCase() : label}
		</span>
	);
};
