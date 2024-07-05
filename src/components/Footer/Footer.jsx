import react from "react";
import logo from "../../assets/Images/Paul/logo.png"

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="z-30 w-full px-24">
      <div className="mx-auto w-full max-w-full py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center cursor-pointer">
              <img
                src={logo}
                className="h-8 me-3"
                alt="DEVTIFE Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap">
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
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center">
            © {year}{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              DEVTIFE™
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 ms-5"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.33 3.608 1.305.975.975 1.244 2.242 1.306 3.608.057 1.266.068 1.645.068 4.85s-.012 3.584-.07 4.85c-.062 1.366-.33 2.633-1.305 3.608-.975.975-2.242 1.244-3.608 1.306-1.266.057-1.645.068-4.85.068s-3.584-.012-4.85-.07c-1.366-.062-2.633-.33-3.608-1.305-.975-.975-1.244-2.242-1.306-3.608C2.175 15.62 2.163 15.24 2.163 12s.012-3.584.07-4.85c.062-1.366.33-2.633 1.305-3.608.975-.975 2.242-1.244 3.608-1.306C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.74 0 8.332.012 7.053.07 5.725.129 4.462.34 3.407 1.396 2.352 2.452 2.141 3.715 2.082 5.043.973 8.332.973 15.668 2.082 18.957c.059 1.328.27 2.591 1.325 3.646 1.055 1.055 2.318 1.266 3.646 1.325 1.328.109 1.737.121 4.926.121s3.598-.012 4.926-.07c1.328-.059 2.591-.27 3.646-1.325 1.055-1.055 1.266-2.318 1.325-3.646.109-1.328.121-1.737.121-4.926s-.012-3.598-.07-4.926c-.059-1.328-.27-2.591-1.325-3.646-1.055-1.055-2.318-1.266-3.646-1.325C15.668.012 15.26 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-8 3.999 3.999 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" />
              </svg>
              <span className="sr-only">Instagram Account</span>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 ms-5"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 17"
              >
                <path
                  fill-rule="evenodd"
                  d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="sr-only">Twitter page</span>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 ms-5"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="sr-only">GitHub account</span>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 ms-5"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M23.498 6.186c-.27-1.026-1.082-1.84-2.105-2.108C19.378 3.499 12 3.499 12 3.499s-7.378 0-9.394.579C1.583 4.856.771 5.67.502 6.696.001 8.716 0 12 0 12s0 3.284.502 5.304c.27 1.026 1.082 1.84 2.105 2.108C4.622 20.501 12 20.501 12 20.501s7.378 0 9.394-.579c1.023-.269 1.835-1.082 2.105-2.108C24 15.284 24 12 24 12s0-3.284-.502-5.304zm-13.47 8.083V9.731l6.234 2.27-6.234 2.268z" />
              </svg>

              <span className="sr-only">Youtube Account</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
