import { useState } from "react";
import JobLocationSelector from "./JobLocation";
export default function Data() {
  // const [formData, setFormData] = useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  // });
  const [name, setname] = useState("");
  const [position, setposition] = useState("");
  const [company, setcompany] = useState("");
  // // Event handler for input change
  // const handleChange = (event) => {
  //   // Destructure event properties
  //   const { name, value } = event.target;
  //   // Update component state with new input value
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };
  function handleClick(e) {
    // e.preventDefault();
    const Item = { name, position, company };
    console.log(Item);
  }
  return (
    <div>
      <form className="p-6 block" onSubmit={handleClick}>
        <div className=" grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              for="first_name"
              className=" mb-2 text-lg font-bold text-red-900 dark:text-black"
            >
              Full Name
            </label>
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-50 dark:border-gray-60 dark:placeholder-gray-400 dark:text-blue dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="John"
              value={name}
              onChange={(e) => setname(e.target.value)}
              required
            />
          </div>
          <div>
            <label
              for="position_name"
              className="block mb-2 text-sm text-lg font-bold text-red-900 dark:text-black"
            >
              Position*
            </label>
            <input
              type="text"
              id="position_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-50 dark:border-gray-60 dark:placeholder-gray-400 dark:text-red dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Doe"
              value={position}
              onChange={(e) => setposition(e.target.value)}
              required
            />
          </div>
          <div>
            <label
              for="company"
              className="block mb-2 text-sm text-lg font-bold text-red-900 dark:text-black"
            >
              Company name*
            </label>
            <input
              type="text"
              id="company"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-50 dark:border-gray-60 dark:placeholder-gray-400 dark:text-red dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Flowbite"
              value={company}
              onChange={(e) => setcompany(e.target.value)}
              required
            />
            <select id="select" className="border border-gray-400 rounded-md">
              <option value="full_time">Full-time</option>
              <option value="part_time">Part-time</option>
              <option value="contractor">Contractor</option>
              <option value="temporary">Temporary</option>
              <option value="intern">Internship</option>
              <option value="intern">Per diem</option>
              <option value="volunteer">Volunteer</option>
            </select>
          </div>

          <div>
            <label
              for="position_name"
              className="block mb-2 text-sm text-lg font-bold text-red-900 dark:text-black"
            >
              Tags, keywords or stack*{" "}
            </label>
            <input
              type="text"
              id="position_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-50 dark:border-gray-60 dark:placeholder-gray-400 dark:text-red dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Type a tag or keyword to search and add it"
              value={position}
              onChange={(e) => setposition(e.target.value)}
              required
            />
          </div>
          <div>
            <div class="relative font-[sans-serif] w-max mx-auto">
              <button
                type="button"
                class="px-6 py-2.5 rounded text-[#333] text-sm font-semibold border-2 border-blue-600 outline-none hover:bg-blue-50"
              >
                Country list dropdown
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-3 fill-[#333] inline ml-3"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                    clip-rule="evenodd"
                    data-original="#000000"
                  />
                </svg>
              </button>
              <ul class="absolute shadow-lg bg-white py-2 px-2 z-[1000] min-w-full w-max rounded max-h-96 overflow-auto">
                <li class="mb-2">
                  <input
                    placeholder="Text input"
                    class="px-4 py-2.5 w-full rounded text-gray-500 text-sm font-semibold border-none outline-blue-600 bg-gray-50"
                  />
                </li>
                <li class="py-2.5 px-4 hover:bg-blue-50 text-black text-sm cursor-pointer">
                  <div class="flex items-center">
                    <img
                      src="https://readymadeui.com/usa_flag.webp"
                      class="w-6 mr-3"
                    />
                    USA
                  </div>
                </li>
                <li class="py-2.5 px-4 hover:bg-blue-50 text-black text-sm cursor-pointer">
                  <div class="flex items-center">
                    <img
                      src="https://readymadeui.com/uk_flag.webp"
                      class="w-6 mr-3"
                    />
                    England
                  </div>
                </li>
                <li class="py-2.5 px-4 hover:bg-blue-50 text-black text-sm cursor-pointer">
                  <div class="flex items-center">
                    <img
                      src="https://readymadeui.com/india_flag.webp"
                      class="w-6 mr-3"
                    />
                    India
                  </div>
                </li>
                <li class="py-2.5 px-4 hover:bg-blue-50 text-black text-sm cursor-pointer">
                  <div class="flex items-center">
                    <img
                      src="https://readymadeui.com/singapore_flag.webp"
                      class="w-6 mr-3"
                    />
                    Singapore
                  </div>
                </li>
                <li className="py-2.5 px-4 hover:bg-blue-50 text-black text-sm cursor-pointer">
                  <div className="flex items-center">
                    <img
                      src="https://readymadeui.com/germany _flag.webp"
                      className="w-6 mr-3"
                    />
                    DE
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <JobLocationSelector />
          </div>
          <div>
            <label
              for="phone"
              className="block mb-2 text-sm text-lg font-bold text-red-900 dark:text-black"
            >
              Phone number
            </label>
            <input
              type="tel"
              id="phone"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-50 dark:border-gray-60 dark:placeholder-gray-400 dark:text-red dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="123-45-678"
              required
            />
          </div>
          <div>
            <label>Primary tag</label>
            <select id="select">
              <option value="">Select a primary tag</option>
              <option value="dev">Software Development</option>
              <option value="customer support">Customer Support</option>
              <option value="sales">Sales</option>
              <option value="marketing">Marketing</option>
              <option value="design">Design</option>
              <option value="front end">Front End</option>
              <option value="backend">Back End</option>
              <option value="legal">Legal</option>
              <option value="testing">Testing</option>
              <option value="quality assurance">Quality Assurance</option>
              <option value="non tech">Non-Tech</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label
              for="website"
              className="block mb-2 text-sm text-lg font-bold text-red-900 dark:text-black"
            >
              Website URL
            </label>
            <input
              type="url"
              id="website"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-50 dark:border-gray-60 dark:placeholder-gray-400 dark:text-red dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="flowbite.com"
              required
            />
          </div>

          <div>
            <label
              for="visitors"
              className="block mb-2 text-sm text-lg font-bold text-red-900 dark:text-black"
            >
              Unique visitors (per month)
            </label>
            <input
              type="number"
              id="visitors"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-50 dark:border-gray-60 dark:placeholder-gray-400 dark:text-red dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
            />
          </div>
        </div>

        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
              required
            />
          </div>
          <label
            for="remember"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            I agree with the{" "}
            <a
              href="#"
              className="text-blue-600 hover:underline dark:text-blue-500 text-center"
            >
              terms and conditions
            </a>
          </label>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
