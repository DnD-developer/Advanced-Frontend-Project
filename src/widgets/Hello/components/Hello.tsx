import {type FC, type PropsWithChildren} from 'react';
import styles from './Hello.module.scss';

export const Hello: FC<PropsWithChildren> = ({children}) => (
	<p className={styles.testClass}>{children}</p>
);
