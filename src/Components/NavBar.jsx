import React from "react";

const NavBar = () => {
  return (
    <div>
      <navbar>
        <div class="w-full py-3 border-b">
          <div class="flex justify-between px-20 items-center font-semibold">
            <div>
              <h1 class="text-2xl">Ftech</h1>
            </div>
            <div class="flex xl:gap-10 md:gap-8 gap-2">
              <a href="/">Home</a>
              <a href="/">Our services</a>
              <a href="/">About us</a>
              <a href="/">Our work</a>
              <a href="/">Contact us</a>
              <a href="/">Carrers</a>
            </div>
            <div>
              <button class="py-2 px-6 bg-black text-white rounded-3xl font-semibold">
                Reach us
              </button>
            </div>
          </div>
        </div>
      </navbar>
    </div>
  );
};

export default NavBar;
