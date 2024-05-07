import React, { useState, useEffect } from "react";
import Form from "./form.js";

export default function Header() {
  return (
    <div>
      <div>
        <div id="kolchi">
          <Navbar />
          <Space />
          <Center />
        </div>

        <Space />
        <Space />
        <Space />
      </div>
    </div>
  );
}
// function Input({ onClose }) {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = (e) => {
//     e.preventDefault();
//     // Your login logic here, for example:
//     console.log("Username:", username);
//     console.log("Password:", password);
//     // Close the modal after successful login
//     onClose();
//   };

//   return (
//     <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
//       <div className="bg-white p-8 rounded-lg w-80">
//         <h2
//           className="text-2xl font-bold mb-4 text-center"
//           onClick={handleLogin}
//         >
//           Login
//         </h2>
//         <form onSubmit={handleLogin}>
//           <div className="mb-4">
//             <label
//               htmlFor="username"
//               className="block text-sm  font-semibold text-gray-700"
//             >
//               Add an Email
//             </label>
//             <input
//               type="text"
//               id="username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//               required
//               placeholder="Abc@gmail.com"
//             />
//           </div>
//           <div className="mb-4">
//             <label
//               htmlFor="password"
//               className="block text-sm  font-semibold text-gray-700"
//             >
//               Add a Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//               required
//             />
//             <p></p>
//           </div>
//           <div className="flex justify-end">
//             <button
//               type="submit"
//               className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
//             >
//               Login
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }
function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`backdrop-blur-sm shadow-sm p-6 flex justify-between items-center ${
        isScrolled ? "fixed top-0 w-full z-50" : ""
      }`}
    >
      <div>
        <a
          href="#"
          className="bg-white px-4 py-3 font-extrabold border-2 border-rose-500 text-red-500 rounded-md transition duration-300 hover:text-white hover:bg-red-500"
        >
          Login
        </a>
      </div>
      <div className="hidden md:block">
        <a
          href="#"
          className="text-white font-bold px-4 mr-10 py-3.5 bg-red-500 rounded-md transition duration-300 hover:text-red hover:bg-white hover:border-2 border-rose-500 hover:text-red-500 "
        >
          Find a Job
        </a>
      </div>
      {/* Fixed Find a Job button */}
      <div
        className={`md:hidden ${
          isScrolled ? "fixed bottom-4 right-4" : "hidden"
        }`}
      ></div>
    </nav>
  );
}

function Space() {
  return <div className="space"></div>;
}

function Center() {
  const [salary, setSalary] = useState(0);

  const handleSalaryChange = (event) => {
    setSalary(parseInt(event.target.value));
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="p-8 rounded-lg text-center">
        <p
          className="khat text-xs  text-gray-900 dmb-4 font-extrabold leading-none tracking-tight lg:text-4xl dark:text-black px-9"
          id="Login"
        >
          Find a Job
        </p>
        <p className="mb-6 text-base font-semibold text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-red-600 ">
          Manage your professional identity.
          <br /> Build and engage with your professional network. Access
          knowledge, insights and opportunities.
        </p>
      </div>
      <form className="flex items-center max-w-sm mx-auto">
        <label htmlFor="simple-search" className="sr-only">
          Search
        </label>
        <div className="relative w-full">
          <input
            type="text"
            id="simple-search"
            className="gooovyy rounded-2xl bg-white border border-red-900 text-gray-900 text-base rounded-lg focus:ring-red-500 focus:border-red-500 block w-full px-4 py-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-blue dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search For a Job..."
            required
          />
          <div className="selectors">
            <select
              id="benefits"
              class="bg-white mt-3 font-extrabold border-2 border-black-500 text-black-400 rounded-md transition duration-300 block w-18 p-1.5 placeholder-blue-400 "
            >
              💰 401(k)
              <option selected>🎪 Benefits</option>
              <option
                value="CA"
                className="text-black hover:text-rose-500 focus:text-rose-500"
              >
                🦷 Dental insurance{" "}
              </option>
              <option
                value="CA"
                className="text-black hover:text-rose-500 focus:text-rose-500"
              >
                🚑 Medical insurance{" "}
              </option>
              <option
                value="CA"
                className="text-black hover:text-rose-500 focus:text-rose-500"
              >
                🏖 Unlimited vacation{" "}
              </option>
              <option
                value="CA"
                className="text-black hover:text-rose-500 focus:text-rose-500"
              >
                🏖 Paid time off{" "}
              </option>
              <option
                value="CA"
                className="text-black hover:text-rose-500 focus:text-rose-500"
              >
                📆 4 day workweek{" "}
              </option>
              <option
                value="CA"
                className="text-black hover:text-rose-500 focus:text-rose-500"
              >
                💰 401k matching{" "}
              </option>
              <option
                value="CA"
                className="text-black hover:text-rose-500 focus:text-rose-500"
              >
                🏔 Company retreats
              </option>
              <option
                value="CA"
                className="text-black hover:text-rose-500 focus:text-rose-500"
              >
                🏬 Coworking budget{" "}
              </option>
              <option
                value="CA"
                className="text-black hover:text-rose-500 focus:text-rose-500"
              >
                📚 Learning budget
              </option>
              <option
                value="CA"
                className="text-black hover:text-rose-500 focus:text-rose-500"
              >
                💪 Free gym membership
              </option>
              <option
                value="CA"
                className="text-black hover:text-rose-500 focus:text-rose-500"
              >
                🧘 Mental wellness budget{" "}
              </option>
              <option
                value="CA"
                className="text-black hover:text-rose-500 focus:text-rose-500"
              >
                🖥 Home office budget
              </option>
              <option
                value="CA"
                className="text-black hover:text-rose-500 focus:text-rose-500"
              >
                🥧 Pay in crypto{" "}
              </option>
              <option
                value="CA"
                className="text-black hover:text-rose-500 focus:text-rose-500"
              >
                🥸 Pseudonymous{" "}
              </option>
              <option
                value="CA"
                className="text-black hover:text-rose-500 focus:text-rose-500"
              >
                💰 Profit sharing
              </option>
              <option
                value="CA"
                className="text-black hover:text-rose-500 focus:text-rose-500"
              >
                💰 Equity compensation{" "}
              </option>
              <option
                value="CA"
                className="text-black hover:text-rose-500 focus:text-rose-500"
              >
                ⬜️ No whiteboard interview
              </option>
              <option
                value="CA"
                className="text-black hover:text-rose-500 focus:text-rose-500"
              >
                👀 No monitoring system{" "}
              </option>
              <option
                value="CA"
                className="text-black hover:text-rose-500 focus:text-rose-500"
              >
                🚫 No politics at work{" "}
              </option>
              🎅 We hire old (and young)
              <option
                value="US"
                className="text-black hover:text-rose-500 focus:text-rose-500 "
              >
                🌎 Distributed team
              </option>
              <option
                value="CA"
                className="text-black hover:text-rose-500 focus:text-rose-500"
              >
                ⏰ Async
              </option>
              <option
                value="FR"
                className="text-black hover:text-rose-500 focus:text-rose-500"
              >
                🤓 Vision insurance
              </option>
            </select>

            <select
              id="Location"
              // style={{
              //   display: "block",
              //   position: "absolute",
              //   left: "228.267px",
              //   top: "226.8px",

              // }}
              placeholder="Location"
              class="bg-white mt-2 font-extrabold border-2 border-black-500 text-black-900 rounded-md transition duration-300 block w-18 p-1.5 placeholder-blue-400 focus:text-black-100"
            >
              <optgroup label="Regions">
                <option>🌏 Worldwide</option>
                <option>⛰️ North America</option>
                <option>💃 Latin America </option>
                <option>🇪🇺 Europe</option>
                <option>🦁 Africa</option>
                <option>🕌 Middle East</option>
                <option>⛩ Asia </option>
                <option>🌊 Oceania</option>
              </optgroup>
              <optgroup label="countries" className="text-bold">
                <option>🇺🇸 United States </option>
                <option>🇨🇦 Canada </option>
                <option>🇬🇧 United Kingdom </option>
                <option>🇦🇺 Australia </option>
                <option>🇳🇿 New Zealand </option>
                <option>🇮🇳 India </option>
                <option>🇵🇹 Portugal </option>
                <option>🇩🇪 Germany </option>
                <option>🇳🇱 Netherlands </option>
                <option>🇸🇬 Singapore </option>
                <option>🇫🇷 France </option>
                <option>🇭🇰 Hong Kong </option>
                <option>🇧🇷 Brazil </option>
                <option>🇬🇷 Greece </option>
                <option>🇸🇪 Sweden </option>
                <option>🇵🇱 Poland </option>
                <option>🇪🇸 Spain </option>
                <option>🇲🇽 Mexico </option>
                <option>🇺🇦 Ukraine </option>
                <option>🇯🇵 Japan </option>
                <option>🇹🇭 Thailand </option>
                <option>🇨🇿 Czechia </option>
                <option>🇷🇺 Russia </option>
                <option>🇮🇱 Israel </option>
                <option>🇫🇮 Finland </option>
                <option>🇨🇳 China </option>
                <option>🇮🇩 Indonesia </option>
                <option>🇦🇫 Afghanistan </option>
                <option>🇦🇱 Albania </option>
                <option>🇩🇿 Algeria </option>
                <option>🇦🇸 American Samoa </option>
                <option>🇦🇩 Andorra </option>
                <option>🇦🇴 Angola </option>
                <option>🇦🇮 Anguilla </option>
                <option>🇦🇶 Antarctica </option>
                <option>🇦🇬 Antigua and Barbuda </option>
                <option>🇦🇷 Argentina </option>
                <option>🇦🇲 Armenia </option>
                <option>🇦🇼 Aruba </option>
                <option>🇦🇹 Austria </option>
                <option>🇦🇿 Azerbaijan </option>
                <option>🇧🇸 The Bahamas </option>
                <option>🇧🇭 Bahrain </option>
                <option>🇧🇩 Bangladesh </option>
                <option>🇧🇧 Barbados </option>
                <option>🇧🇾 Belarus </option>
                <option>🇧🇪 Belgium </option>
                <option>🇧🇿 Belize </option>
                <option>🇧🇯 Benin </option>
                <option>🇧🇲 Bermuda </option>
                <option>🇧🇹 Bhutan </option>
                <option>🇧🇴 Bolivia </option>
                <option>🇧🇦 Bosnia </option>
                <option>🇧🇼 Botswana </option>
                <option>🇧🇻 Bouvet Island </option>
                <option>🇧🇳 Brunei </option>
                <option>🇧🇬 Bulgaria </option>
                <option>🇧🇫 Burkina Faso </option>
                <option>🇧🇮 Burundi </option>
                <option>🇰🇭 Cambodia </option>
                <option>🇨🇲 Cameroon </option>
                <option>🇨🇻 Cape Verde </option>
                <option>🇰🇾 Cayman Islands </option>
                <option>🇹🇩 Chad </option>
                <option>🇨🇱 Chile </option>
                <option>🇨🇽 Christmas Island </option>
                <option>🇨🇨 Cocos Islands </option>
                <option>🇨🇴 Colombia </option>
                <option>🇰🇲 Comoros </option>
                <option>🇨🇬 Congo </option>
                <option>🇨🇩 DR Congo </option>
                <option>🇨🇰 Cook Islands </option>
                <option>🇨🇷 Costa Rica </option>
                <option>🇭🇷 Croatia </option>
                <option>🇨🇺 Cuba </option>
                <option>🇨🇼 Curaçao </option>
                <option>🇨🇾 Cyprus </option>
                <option>🇩🇰 Denmark </option>
                <option>🇩🇯 Djibouti </option>
                <option>🇩🇲 Dominica </option>
                <option>🇩🇴 Dominican Republic </option>
                <option>🇪🇨 Ecuador </option>
                <option>🇪🇬 Egypt </option>
                <option>🇸🇻 El Salvador </option>
                <option>🇬🇶 Equatorial Guinea </option>
                <option>🇪🇷 Eritrea </option>
                <option>🇪🇪 Estonia </option>
                <option>🇪🇹 Ethiopia </option>
                <option>🇫🇰 Falkland Islands </option>
                <option>🇫🇴 Faroe Islands </option>
                <option>🇫🇯 Fiji </option>
                <option>🇬🇫 French Guiana </option>
                <option>🇹🇱 East Timor </option>
                <option>🇬🇦 Gabon </option>
                <option>🇬🇲 Gambia </option>
                <option>🇬🇪 Georgia </option>
                <option>🇬🇭 Ghana </option>
                <option>🇬🇮 Gibraltar </option>
                <option>🇬🇱 Greenland </option>
                <option>🇬🇩 Grenada </option>
                <option>🇬🇵 Guadeloupe </option>
                <option>🇬🇺 Guam </option>
                <option>🇬🇹 Guatemala </option>
                <option>🇬🇬 Guernsey </option>
                <option>🇬🇳 Guinea </option>
                <option>🇬🇼 Guinea Bissau </option>
                <option>🇬🇾 Guyana </option>
                <option>🇭🇹 Haiti </option>
                <option>🇭🇳 Honduras </option>
                <option>🇭🇺 Hungary </option>
                <option>🇮🇸 Iceland </option>
                <option>🇮🇷 Iran </option>
                <option>🇮🇶 Iraq </option>
                <option>🇮🇪 Ireland </option>
                <option>🇮🇲 Isle of Man </option>
                <option>🇮🇹 Italy </option>
                <option>🇨🇮 Cote d'Ivoire </option>
                <option>🇯🇲 Jamaica </option>
                <option>🇯🇪 Jersey </option>
                <option>🇯🇴 Jordan </option>
                <option>🇽🇰 Kosovo </option>
                <option>🇽🇰 Kosovo </option>
                <option>🇰🇿 Kazakhstan </option>
                <option>🇰🇪 Kenya </option>
                <option>🇰🇮 Kiribati </option>
                <option>🇰🇵 North Korea </option>
                <option>🇰🇷 South Korea </option>
                <option>🏴 Kurdistan </option>
                <option>🇰🇼 Kuwait </option>
                <option>🇰🇬 Kyrgyzstan </option>
                <option>🇱🇦 Laos </option>
                <option>🇱🇻 Latvia </option>
                <option>🇱🇧 Lebanon </option>
                <option>🇱🇸 Lesotho </option>
                <option>🇱🇷 Liberia </option>
                <option>🇱🇾 Libya </option>
                <option>🇱🇮 Liechtenstein </option>
                <option>🇱🇹 Lithuania </option>
                <option>🇱🇺 Luxembourg </option>
                <option>🇲🇴 Macau </option>
                <option>🇲🇰 North Macedonia </option>
                <option>🇲🇬 Madagascar </option>
                <option>🇲🇼 Malawi </option>
                <option>🇲🇾 Malaysia </option>
                <option>🇲🇻 Maldives </option>
                <option>🇲🇱 Mali </option>
                <option>🇲🇹 Malta </option>
                <option>🇲🇭 Marshall Islands </option>
                <option>🇲🇶 Martinique </option>
                <option>🇲🇷 Mauritania </option>
                <option>🇲🇺 Mauritius </option>
                <option>🇾🇹 Mayotte </option>
                <option>🇫🇲 Micronesia </option>
                <option>🇲🇩 Moldova </option>
                <option>🇲🇨 Monaco </option>
                <option>🇲🇳 Mongolia </option>
                <option>🇲🇪 Montenegro </option>
                <option>🇲🇸 Montserrat </option>
                <option>🇲🇦 Morocco </option>
                <option>🇲🇿 Mozambique </option>
                <option>🇲🇲 Myanmar </option>
                <option>🇳🇦 Namibia </option>
                <option>🇳🇷 Nauru </option>
                <option>🇳🇵 Nepal </option>
                <option>🇧🇶 Caribbean Netherlands </option>
                <option>🇳🇨 New Caledonia </option>
                <option>🇳🇮 Nicaragua </option>
                <option>🇳🇪 Niger </option>
                <option>🇳🇬 Nigeria </option>
                <option>🇳🇺 Niue </option>
                <option>🇳🇫 Norfolk Island </option>
                <option>🇲🇵 Northern Mariana Islands </option>
                <option>🇳🇴 Norway </option>
                <option>🇴🇲 Oman </option>
                <option>🇵🇸 Palestine </option>
                <option>🇵🇰 Pakistan </option>
                <option>🇵🇼 Palau </option>
                <option>🇵🇦 Panama </option>
                <option>🇵🇬 Papua New Guinea </option>
                <option>🇵🇾 Paraguay </option>
                <option>🇵🇪 Peru </option>
                <option>🇵🇭 Philippines </option>
                <option>🇵🇳 Pitcairn Island </option>
                <option>🇵🇫 Polynesia </option>
                <option>🇵🇷 Puerto Rico </option>
                <option>🇶🇦 Qatar </option>
                <option>🇷🇪 Reunion </option>
                <option>🇷🇴 Romania </option>
                <option>🇷🇼 Rwanda </option>
                <option>🇸🇭 Saint Helena </option>
                <option>🇰🇳 Saint Kitts and Nevis </option>
                <option>🇱🇨 Saint Lucia </option>
                <option>🇼🇸 Samoa </option>
                <option>🇸🇲 San Marino </option>
                <option>🇸🇹 Sao Tome and Principe </option>
                <option>🇸🇦 Saudi Arabia </option>
                <option>🇸🇳 Senegal </option>
                <option>🇷🇸 Serbia </option>
                <option>🇸🇨 Seychelles </option>
                <option>🇸🇱 Sierra Leone </option>
                <option>🇲🇫 Saint-Martin </option>
                <option>🇸🇽 Sint Maarten </option>
                <option>🇸🇰 Slovakia </option>
                <option>🇸🇮 Slovenia </option>
                <option>🇸🇧 Solomon Islands </option>
                <option>🇸🇴 Somalia </option>
                <option>🇿🇦 South Africa </option>

                <option>🇸🇸 South Sudan </option>
                <option>🇱🇰 Sri Lanka </option>
                <option>🇸🇩 Sudan </option>
                <option>🇸🇷 Suriname </option>
                <option>🇸🇿 Swaziland </option>
                <option>🇨🇭 Switzerland </option>
                <option>🇸🇾 Syria </option>
                <option>🇹🇼 Taiwan </option>
                <option>🇹🇯 Tajikistan </option>
                <option>🇹🇿 Tanzania </option>
                <option>🇹🇬 Togo </option>
                <option>🇹🇰 Tokelau </option>
                <option>🇹🇴 Tonga </option>
                <option>🇹🇹 Trinidad and Tobago </option>
                <option>🇹🇳 Tunisia </option>
                <option>🇹🇷 Turkey </option>
                <option>🇹🇲 Turkmenistan </option>
                <option>🇹🇻 Tuvalu </option>
                <option>🇺🇬 Uganda </option>
                <option>🇺🇾 Uruguay </option>
                <option>🏝 Hawaii </option>
                <option>🇺🇿 Uzbekistan </option>
                <option>🇻🇺 Vanuatu </option>
                <option>🇻🇦 Vatican City </option>
                <option>🇻🇪 Venezuela </option>
                <option>🇻🇳 Vietnam </option>
                <option>🇻🇬 British Virgin Islands </option>
                <option>🇪🇭 Western Sahara </option>
                <option>🇾🇪 Yemen </option>
                <option>🇿🇲 Zambia </option>
                <option>🇿🇼 Zimbabwe </option>
              </optgroup>
            </select>
            <div className="mt-4">
              <div
                style={{
                  float: "left",
                  fontWeight: "bold",
                  marginBottom: "7px",
                }}
              >
                Minimum
              </div>
              <div style={{ float: "right", marginBottom: "7px" }}>
                $<span className="salary-filter-input-amount">{salary}</span>
                k/year
              </div>
              <div style={{ clear: "both" }}></div>
              <input
                autocomplete="google_chrome_fix"
                min="0"
                max="25"
                value={salary}
                onChange={handleSalaryChange}
                className="salary-filter-input"
                type="range"
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </div>
      </form>
      <Space />
      <FormOne />
      <Form />
      <Form /> <Form /> <Form />
    </div>
  );
}
function FormOne() {
  const handleClick = () => {
    const hide = document.getElementById("hideit");
    hide.classList.add("hidden");
  };

  useEffect(() => {
    const btnHide = document.getElementById("btnHide"); // Corrected selector
    btnHide.addEventListener("click", handleClick);

    return () => {
      btnHide.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div
      className="drop-shadow-lg rounded rounded-lg rounded-2xl FormOne"
      id="hideit"
    >
      <div className="flex flex-row ">
        <div className="basis-2/1 pl-5">
          👉 Hiring remotely? Reach 2,800,000+ remote workers on the 🏆 #1
          Remote Job
        </div>
        <div className="basis-1/6 ">
          <button
            className="button text-rose-600 font-bold rounded-2xl bold hover:bg-red-600 pr-4 pl-4 hover:text-white border-2 border-rose-600 font-bold py-3 px-9 rounded hover:rounded-2xl hover:text-white"
            id="btnHide" // Added id to the button
          >
            Hide it
          </button>
        </div>
        <div className="basis-1/4">
          <button className="rounded-2xl  bg-rose-600 text-white hover:bg-white hover:border-2 hover:border-red-600 hover:text-red-600 py-3 px-9 ">
            Post a Job
          </button>
        </div>
      </div>
    </div>
  );
}
