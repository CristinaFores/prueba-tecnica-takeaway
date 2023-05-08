import React from "react";
import image from "../../assets/logo.png";
import * as Menubar from "@radix-ui/react-menubar";

const Header: React.FC = () => {
  return (
    <>
      <header className=" bg-gradient-to-r from-slate-100 to-primary py-4 px-8 font-semibold text-lg">
        <div className="flex justify-between ">
          <div>
            <img src={image} alt="" width={150} />
          </div>

          <Menubar.Root className=" text-primary-dark py-2 px-4 font-semibold text-lg ">
            <Menubar.Menu>
              <Menubar.Trigger className="relative cursor-pointer group">
                <span className="inline-block text-primary-light">Inicio</span>
                <span className="absolute inset-x-0 bottom-0 h-0.5 -mx-2 bg-gradient-to-r from-sky-950 to-slate-300 transform scale-x-0 transition-all duration-300 group-hover:scale-x-100"></span>
              </Menubar.Trigger>
              <Menubar.Portal>
                <Menubar.Content
                  className="bg-primary text-primary-light
                          rounded-md shadow-xl w-52 m-1   "
                >
                  <Menubar.Item
                    className="focus:outline-none focus:ring-0 focus:border-none cursor-pointer
                               focus:text-primary-dark  focus:bg-primary-light
                            hover:text-primary-dark  hover:bg-primary-light hover:rounded-md block w-full  p-3"
                  >
                    Servicios
                  </Menubar.Item>
                  <Menubar.Item
                    className="focus:outline-none focus:ring-0 focus:border-none cursor-pointer
                               focus:text-primary-dark  focus:bg-primary-light
                            hover:text-primary-dark  hover:bg-primary-light hover:rounded-md block w-full  p-3"
                  >
                    Contacto
                  </Menubar.Item>
                  <Menubar.Item
                    className="focus:outline-none focus:ring-0 focus:border-none cursor-pointer
                               focus:text-primary-dark  focus:bg-primary-light
                            hover:text-primary-dark  hover:bg-primary-light hover:rounded-md block w-full  p-3"
                  >
                    Acerca de
                  </Menubar.Item>
                </Menubar.Content>
              </Menubar.Portal>
            </Menubar.Menu>
          </Menubar.Root>
        </div>
      </header>
      <div className=" bg-gradient-to-r from-slate-900 to-slate-1s00 "></div>
    </>
  );
};

export default Header;
