export default function BurgerButton({ handleClickMenu, openMenu }: {
    handleClickMenu: React.MouseEventHandler<HTMLButtonElement>;
    openMenu: boolean;
}) {
    return (
        <button
            onClick={handleClickMenu}
            type="button"
            className="fixed z-30 right-2 top-2 shadow-shadow shadow-md sm:top-4 sm:right-4 lg:hidden"
        >
            <div className="relative flex items-center justify-center rounded-lg w-[3rem] h-[3rem] bg-dark border-2 border-light active:bg-active-dark sm:w-[3.5rem] sm:h-[3.5rem]">
                <div className="flex flex-col justify-between w-[23px] h-[23px] origin-center">
                    <div
                        className={`bg-light h-[2px] transition-all duration-300 origin-left ${
                            openMenu ? "rotate-[43deg] w-[31.1px]" : "w-full"
                        }`}
                    />
                    <div
                        className={`bg-light h-[2px] transition-all duration-300 ${
                            openMenu ? "-translate-x-10 hidden" : "w-full"
                        }`}
                    />
                    <div
                        className={`bg-light h-[2px] transition-all duration-300 origin-left ${
                            openMenu ? "-rotate-[43deg] w-[31.1px]" : "w-full"
                        }`}
                    />
                </div>
            </div>
        </button>
    );
};