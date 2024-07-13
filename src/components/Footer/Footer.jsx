import react from "react";
import logo from "../../assets/Images/Paul/logo.png";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="z-30 w-full px-12 lg:px-24">
      <div className="mx-auto w-full max-w-full py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center cursor-pointer">
              <img src={logo} className="h-4 sm:h-8 me-1 sm:me-3" alt="DEVTIFE Logo" />
              <span className="self-center text-base sm:text-2xl font-semibold whitespace-nowrap">
                Devtife
              </span>
            </div>
          </div>
          {/* <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Follow Me
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <a
                    href="https://github.com/themesberg/flowbite"
                    className="hover:underline "
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    className="hover:underline"
                  >
                    Discord
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Legal
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div> */}
        </div>
        <hr className="my-6 border-b-2 border-sky-400 sm:mx-auto lg:my-8" />
        <div className="flex items-center justify-between flex-col sm:flex-row gap-4">
          <span className="text-xs sm:text-sm text-gray-500 sm:text-center">
            © {year}{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              DEVTIFE™
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex justify-center mt-0">
            <a href="#" className="text-gray-500 hover:text-gray-900 ms-5">
              <FaYoutube/>
              <span className="sr-only">Instagram Account</span>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900 ms-5">
              <FaXTwitter />
              <span className="sr-only">Twitter page</span>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900 ms-5">
              <FaGithub />
              <span className="sr-only">GitHub account</span>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900 ms-5">
              <FaInstagram />

              <span className="sr-only">Youtube Account</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
