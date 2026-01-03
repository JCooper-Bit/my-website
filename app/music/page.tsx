export default function Music() {
	return (
		<main className="min-h-screen bg-base px-6 py-20">
			<div className="mx-auto w-full max-w-4xl flex flex-col gap-28 animate-[fade-in_600ms_ease-out]">

				<section id="hero" className="w-full text-center space-y-2 opacity-0 animate-[slide-up_700ms_ease-out_forwards] [animation-delay:80ms]">
					<div>
						<h1 className="text-3xl sm:text-3xl md:text-3xl font-semibold leading-tight">
							<span className="text-text/90"> 
								I'm also a muscian!!
								I play guitar and synth and I also produce and record and mix other peoples music/recordings
							</span>
						</h1>
					</div>
				</section>
				  <section
				          id="equipment"
				          className="w-full space-y-2 opacity-0 animate-[slide-up_700ms_ease-out_forwards] [animation-delay:200ms]"
				        >
				          <header className="space-y-2">
				            <h2 className="text-xl sm:text-2xl font-semibold text-text">
				              Equipment
				            </h2>
				            <p className="text-sm text-muted max-w-md">
				            	Here I have compiled a list of my music equipment
				            </p>
				          </header>
				          TBA
				        </section>
		</div>

		</main>

	);
}