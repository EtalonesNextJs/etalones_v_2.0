import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";

const NavbarPage = () => {
  return (
    <div className="">
      <nav className="h-16 bg-primary ">
        <div className="h-full flex items-center justify-between max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-8">
            <Logo />

            {/* Desktop Menu */}
            <NavMenu className="hidden md:block " />
          </div>

          <div className="flex items-center gap-3">
            {/* <Button>
              Заполнить заявку <ArrowUpRight />
            </Button> */}

            {/* Mobile Menu */}
            <div className="md:hidden">
              <NavigationSheet />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarPage;
