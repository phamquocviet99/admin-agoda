import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="w-full mx-auto md:py-8">
        <hr className="my-6 border-gray-200  dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="https://agoda.com/" className="hover:underline">
            agoda™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
