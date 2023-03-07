import { FooterProps } from './Footer.props';
import styles from './Footer.module.css';
import cn from 'classnames';
import { format } from 'date-fns';

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
	return (
		<footer className={cn(className, styles.footer)} {...props}>
			<span className={styles.copyright}>OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены</span>
			<a className={styles.user_agreement} href="#">Пользовательское соглашение</a>
			<a className={styles.privacy_policy} href="#">Политика конфиденциальности</a>
		</footer>
	);
};