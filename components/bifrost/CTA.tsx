// Generated with Bifrost on 8/15/2023, 7:12:55 AM
// Figma Link: https://www.figma.com/file/F3gVNpS59XymtzfPcVOTzE?node-id=305:674
import clsx from 'clsx';
type CTAProps = {
	Style?: 'Default' | 'Green' | 'Ghost white' | 'Ghost orange' | 'Ghost navy',
};

function CTA({ Style = 'Default' }: CTAProps) {
	return (
		<div
			className={clsx({
				'h-11 flex justify-center items-center gap-2.5 px-5 py-2 rounded-[6px]': true,
				'bg-[#eb8b5a]': Style === 'Default',
				'bg-[#3f9378]': Style === 'Green',
				'border border-white': Style === 'Ghost white',
				'border border-[#eb8b5a]': Style === 'Ghost orange',
				'border border-[#2e3855]': Style === 'Ghost navy',
			})}
		>
			<ArrowRightCircle />
			<div
				className={clsx({
					'text-base leading-[20px] font-semibold font-PublicSans': true,
					'text-white': Style === 'Default' || Style === 'Green' || Style === 'Ghost white',
					'text-[#eb8b5a]': Style === 'Ghost orange',
					'text-[#2e3855]': Style === 'Ghost navy',
				})}
			>
				Book a call with us
			</div>
		</div>
	);
}

function ArrowRightCircle() {
	return (
		<img src="/images/XNews/arrow-right-circle.svg" alt="arrow-right-circle" className="h-5 w-5" />
	);
}
export default CTA;
