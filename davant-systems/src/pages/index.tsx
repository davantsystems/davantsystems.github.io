import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

const IndexPage: React.FC<PageProps> = () => {
	return (
		<main>
			<div className="hero" style={
				{
					// backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'
				}
				}>
				{/* <div className="hero-overlay bg-opacity-60"></div> */}
				<div className="hero-content text-center text-neutral-content py-20">
					<div className="max-w-md">
						<div className="logo">
							<h1 className="relative block py-5 mb-20">
								<span className="font-orbitron text-fx__title">
									Davant </span>
								<span className="font-yellowtail text-fx__title-secondary">
									Systems
								</span>

								<svg
									height="320"
									width="400"
									viewBox="0 0 400 300"
									className="
									logo-triangle
									absolute
									block
									top-0
									left-1/2
									-translate-x-1/2
								"
								>
									<defs>
										<linearGradient id="grad1" x1="0%" y1="100%" x2="100%" y2="0%">
											<stop offset="0%" style={{ stopColor: 'rgb(50,50,50)', stopOpacity: 0.2 }} />
											<stop offset="100%" style={{ stopColor: 'black', stopOpacity: 0.2 }} />
										</linearGradient>
									</defs>
									<filter id="dropshadow" height="130%">
										<feGaussianBlur in="SourceAlpha" stdDeviation="3" />
										<feOffset dx="2" dy="2" result="offsetblur" />
										<feMerge>
											<feMergeNode />
											<feMergeNode in="SourceGraphic" />
										</feMerge>
									</filter>
									<polygon points="0,0 400,0 200,300" stroke="#36e2f8" strokeWidth="3" />
								</svg>
							</h1>
						</div>
						<p className="mb-5">AI Image Engine for mind-blowing interactive experiences & next-generation creative tools.</p>
						<button className="btn btn-primary">Download Davant Studio Beta</button>
					</div>
				</div>
			</div>
		</main>
	)
}

export default IndexPage

export const Head: HeadFC = () => <title>Davant Systems | Open Beta available now</title>
