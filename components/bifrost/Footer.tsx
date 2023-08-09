// Generated with Bifrost on 8/9/2023, 6:18:38 AM
// Figma Link: https://www.figma.com/file/F3gVNpS59XymtzfPcVOTzE?node-id=405:3158
import clsx from 'clsx';
type FooterProps = {
	Format?: 'Desktop' | 'Mobile',
};

function Footer({ Format = 'Desktop' }: FooterProps) {
	return (
		<div
			className={clsx({
				'flex items-center h-fit': true,
				'w-[1060px] justify-between pt-[30px] pb-[50px]': Format === 'Desktop',
				'flex-col w-[360px] gap-5 pt-5 pb-10': Format === 'Mobile',
			})}
		>
			<div
				className={clsx({
					'text-xs font-semibold text-[#2e3855] font-PublicSans': true,
					'leading-[14px] w-[530px]': Format === 'Desktop',
					'leading-[15px] text-center w-[360px]': Format === 'Mobile',
				})}
			>
				Copyright © 2023 Power for Planet
			</div>
			<div
				className={clsx({
					'flex items-center': true,
					'flex-1 justify-end gap-10': Format === 'Desktop',
					'w-full flex-col justify-center gap-[30px]': Format === 'Mobile',
				})}
			>
				<div
					className={clsx({
						'text-xs font-semibold text-[#2e3855] font-PublicSans': true,
						'leading-[14px]': Format === 'Desktop',
						'leading-[15px]': Format === 'Mobile',
					})}
				>
					Privacy Policy
				</div>
				<div
					className={clsx({
						'flex items-center': true,
						'gap-5': Format === 'Desktop',
						'gap-[30px]': Format === 'Mobile',
					})}
				>
					<MdiLinkedin />
					<MdiTwitter />
					<CTAMdiInstagram />
				</div>
			</div>
		</div>
	);
}

function CTAMdiInstagram() {
	return (
		<img
			src="/images/XGreen energy/CTA/mdi:instagram.svg"
			alt="CTA/mdi:instagram"
			className="h-6 w-6"
		/>
	);
}

function MdiTwitter() {
	return <img src="/images/XGreen energy/mdi:twitter.svg" alt="mdi:twitter" className="h-6 w-6" />;
}

function MdiLinkedin() {
	return (
		<img src="/images/XGreen energy/mdi:linkedin.svg" alt="mdi:linkedin" className="h-6 w-6" />
	);
}
export default Footer;
