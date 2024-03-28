import {ClassNames} from '@lib/helpers/ClassNames';
import {type FC} from 'react';
import {Link, type LinkProps} from 'react-router-dom';
import styles from './AppLink.module.scss';

type AppLinkProps = {
	classNames?: string;
	name: string;
	theme?: AppLinkTheme;
} & LinkProps;

export enum AppLinkTheme {
	// Noinspection JSUnusedGlobalSymbols
	PRIMARY = 'primary',
	INVERTED = 'inverted',
}

export const AppLink: FC<AppLinkProps> = props => {
	const {classNames, to, name, theme, ...otherProps} = props;

	return (
		<Link
			to={to}
			className={ClassNames(styles.AppLink, {}, [classNames, styles[theme]])}
			{...otherProps}
		>
			{name}
		</Link>
	);
};
