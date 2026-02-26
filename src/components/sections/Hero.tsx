import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";

export const Hero = () => {
    return <section className="relative pt-32 lg:pt-36 ">
        {""}
        <Container className="flex flex-col lg:flex-row gap-10 lg:gap-12 ">
            <div className="absolute w-full lg:w-1/2 inset-y-0 lg:right-0">
                <span className="absolute -left-6 md:left-4 top-24 lg:top-28 w-24 h-24 rotate-90 skew-x-12 rounded-3xl bg-gradient-to-r from-blue-600 to-violet-600 blur-xl opacity-80 lg:opacity-95 lg:block hidden">

                </span>
                <span className="absolute right-4 bottom-12 w-24 h-24 rounded-3xl bg-primary blur-xl opacity-80"></span>
            </div>
            <div className="relative flex flex-col items-center text-center lg:text-left lg:py-8 lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2">
                {""}
                <h1 className="text-heading-1 text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold">Empowered Your Business {""}<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">with AI</span></h1>

                <Paragraph className="mt-8 ">
                    Our AI SaaS platform seamlessly integrates with your existing
                    workflows to deliver real‑time insights, intelligent automation, and
                    data‑driven decision-making. Experience a future where your business
                    runs smarter, faster, and more efficiently.

                </Paragraph>

                <div className="mt-10 w-full flex max-w-md mx-auto lg:mx-0">
                    <div className="flex sm:flex-row flex-col gap-5 w-full ">
                        <form action="#" className="py-1 px-6 w-full pr-1 flex gap-3 items-center text-heading-3 shadow-lg shadow-box-shadow border border-box-border bg-box-bg rounded-full ease-linear focus-within:bg-body focus-within:border-primary">

                        </form>
                    </div>
                </div>
            </div>
        </Container>

    </section>;
};