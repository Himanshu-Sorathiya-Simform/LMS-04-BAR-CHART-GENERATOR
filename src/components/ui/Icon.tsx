interface IconProps {
	id: string;
	className?: string;
	onClick?: () => void;
	onMouseEnter?: () => void;
	onMouseLeave?: () => void;
}

function Icon({
	id,
	className = "",
	onClick = () => {},
	onMouseEnter = () => {},
	onMouseLeave = () => {},
}: IconProps) {
	return (
		<svg
			className={className}
			onClick={onClick}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
		>
			<use href={`/icons/ui_icons_sprite.svg#${id}`}></use>
		</svg>
	);
}

export default Icon;
