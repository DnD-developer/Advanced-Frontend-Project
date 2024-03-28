import {routesPath} from '@config/pagesPathsNames';
import {ClassNames} from '@lib/helpers/ClassNames';
import {AppLink, AppLinkTheme} from '@ui/AppLink';
import {type FC, type PropsWithChildren} from 'react';
import {useTranslation} from 'react-i18next';
import styles from './Header.module.scss';

type HeaderProps = {
	classNames?: string;
} & PropsWithChildren;
export const Header: FC<HeaderProps> = props => {
	const {classNames, children} = props;
	const {t} = useTranslation();

	return (
		<div className={ClassNames(styles.Header, {}, [classNames])}>
			{children}
			<ul className={styles.linkList}>
				{Object.entries(routesPath).map(([name, path]) => (
					<li
						key={path}
						className={styles.link}
					>
						<AppLink
							name={t(name)}
							to={path}
							theme={AppLinkTheme.INVERTED}
						/>
					</li>
				))}
			</ul>
		</div>
	);
};
