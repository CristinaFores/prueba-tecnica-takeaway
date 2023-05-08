import * as Separator from "@radix-ui/react-separator";
import {
  FaTwitter,
  FaFacebook,
  FaAddressBook,
  FaLinkedin,
  FaPhone,
} from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
const Footer = (): JSX.Element => {
  return (
    <footer className="bg-gray-800 text-white p-8">
      <div className="grid grid-cols-2 gap-4 container mx-auto">
        <section className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold mb-2">Contacto</h3>{" "}
          <Separator.Root
            orientation="horizontal"
            className="border-white h-0.5 w-full bg-primary-light border-opacity-95 mb-4"
          />
          <p className="flex items-center gap-4">
            <FaAddressBook /> Dirección: Calle 123, Ciudad, País
          </p>
          <p className="flex  items-center gap-4">
            <FaPhone /> Teléfono: +1 (123) 456-7890
          </p>
          <p className="flex  items-center gap-4">
            <MdAlternateEmail /> Email: info@ejemplo.com
          </p>
        </section>

        <div className=" flex flex-col gap-2">
          <h3 className="text-xl font-semibold mb-2">Redes sociales</h3>
          <Separator.Root
            orientation="horizontal"
            className="border-white h-0.5 w-full bg-primary-light border-opacity-95 mb-4"
          />
          <div className="flex space-x-4 gap-2">
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 ease-in-out transform hover:scale-125"
            >
              <FaTwitter className="w-6 h-6" />
            </a>
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 ease-in-out transform hover:scale-125"
            >
              <FaFacebook className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 ease-in-out transform hover:scale-125"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
