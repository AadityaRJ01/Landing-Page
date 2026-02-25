import { Container } from "../shared/Container";
import { NavItem } from "../shared/NavItem";
import { BtnLink } from "../shared/BtnLink";
import logo from "/assets/icon.svg";
const navItems = [
    { href: "#", label: "Home" },
    { href: "services", label: "Services" },
    { href: "about-us", label: "About Us" },
    { href: "contact", label: "Contact" },
];

export const Navbar = () => {
    return <header className="absolute inset-x-0 top-0 z-50 py-6">
        {""}
        <Container>
            <nav className="w-full flex justify-betweengap-6 relative">
                {/* {Logo} */}
                <div className="min-w-max inline-flex relative">
                    <a href="/" className="flex relative items-center gap-3">
                        <img src={logo} alt="Edge-AI-Logo" className="w-10 h-10" />
                        <div className="inline-flex text-lg font-semibold text-heading-2">
                            Edge AI
                        </div>
                    </a>

                </div>

                <div className="flex flex-col lg:flex-row w-full lg:justify-between lg:items-center absolute top-full left-0 lg:static lg:top-0 bg-body lg:bg-transparent border-x-box-border lg:border-x-0 lg:h-auto h-0 overflow-hidden">
                    <ul className="border-t border-box-border lg:border-t-0 px-6 lg:px-0 pt-6 lg:pt-0 flex font-sans lf:flex-row gap-y-4 gap-x-3 text-lg text-heading-2 w-full lg:justify-center lg:items-center">
                        {navItems.map((item, key) => (
                            <NavItem href={item.href} text={item.label} key={key} />
                        ))}
                    </ul>
                    <div className="lg:min-w-max flex items-center sm:w-max w-full pb-6 lg:pb-0 border-b border-box-border lg:border-0 px-6 lg:px-0">
                        <BtnLink text="Get Started" href="#cta" classname=""/>

                    </div>

                </div>

            </nav>
        </Container>
    </header>;
};