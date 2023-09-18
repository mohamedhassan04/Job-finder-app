import React from "react";

const Footer = () => {
  return (
    <div>
      <footer class="bg-white rounded-lg shadow m-4">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div class="sm:flex sm:items-center sm:justify-between">
            <a
              href="https://flowbite.com/"
              class="flex items-center mb-4 sm:mb-0"
            >
              <h1 className="logo text-[25px] text-blueColor">
                <strong>Job</strong>Finder
              </h1>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 ">
              <li>
                <a href="#" class="mr-4  md:mr-6 ">
                  About
                </a>
              </li>
              <li>
                <a href="#" class="mr-4  md:mr-6">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" class="mr-4  md:mr-6 ">
                  Licensing
                </a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-autolg:my-8" />
          <span class="block text-sm text-gray-500 sm:text-center">
            © 2023
            <a class="hover:underline">JobFinder™</a>. All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
