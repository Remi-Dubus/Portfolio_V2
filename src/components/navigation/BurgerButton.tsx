export default function BurgerButton({ handleClickMenu, openMenu }: {
    handleClickMenu: React.MouseEventHandler<HTMLButtonElement>;
    openMenu: boolean;
}) {
    return (
        <button
            onClick={handleClickMenu}
            type="button"
            className="fixed z-30 right-2 top-2 sm:top-4 sm:right-4 lg:hidden"
        >
            <div className="relative flex items-center justify-center rounded-lg w-[3rem] h-[3rem] bg-dark border-2 border-light active:bg-active-dark sm:w-[3.5rem] sm:h-[3.5rem]">
                <div className="flex flex-col justify-between w-[20px] h-[20px] origin-center">
                    <div
                        className={`bg-light h-[2px] transition-all duration-300 origin-left ${
                            openMenu ? "rotate-[42deg] w-7" : "w-5"
                        }`}
                    />
                    <div
                        className={`bg-light h-[2px] transition-all duration-300 ${
                            openMenu ? "-translate-x-10 hidden" : "w-5"
                        }`}
                    />
                    <div
                        className={`bg-light h-[2px] transition-all duration-300 origin-left ${
                            openMenu ? "-rotate-[42deg] w-7" : "w-5"
                        }`}
                    />
                </div>
            </div>
        </button>
    );
};