import React, { useState } from "react";

function Input({ onClose }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Your login logic here, for example:
    console.log("Username:", username);
    console.log("Password:", password);
    // Close the modal after successful login
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg w-80">
        <h2
          className="text-2xl font-bold mb-4 text-center"
          onClick={handleLogin}
        >
          Login
        </h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm  font-semibold text-gray-700"
            >
              Add an Email
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              required
              placeholder="Abc@gmail.com"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm  font-semibold text-gray-700"
            >
              Add a Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              required
            />
            <p></p>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default function Header() {
  const handleLogin = () => {
    console.log("handler console works successful");
    // Redirect to the dashboard page after successful login
    // window.location.href = "./Formulaire.js";
  };
  const LoginPage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [On, setOn] = useState(false);
    const openModal = () => {
      setIsOpen(!isOpen);
      document.getElementById("kolchi").classList.add("blur");
    };
    // const addForm = () => {
    //   setOn(!On);
    //   document.getElementById("kolchi").classList.add("hidden");
    // };
    const closeModal = () => {
      setIsOpen(!isOpen);

      document.getElementById("kolchi").classList.remove("blur");
    };

    return (
      <div>
        <div id="doc" className="flex flex-col md:flex-row">
          <div className="basis-1/3 md:hidden"></div>
          <div className="basis-1/3"></div>
          <div className="basis-2/4 flex justify-center md:justify-end space-x-6 mt-3 md:w-auto">
            <button
              className="button rounded-2xl bg-red-600 text-white hover:bg-white hover:border-2 border-red-600 hover:text-rose-600  font-bold py-3 px-9 rounded "
              onClick={handleLogin}
            >
              Post a Job
            </button>

            <button
              className="button  font-bold rounded-2xl bold  pr-4 pl-4 hover:bg-white hover:border-2 border-blue-600 hover:text-blue-600"
              onClick={openModal}
            >
              Login
            </button>
          </div>
        </div>
        {isOpen && <Input onClose={closeModal} />}
      </div>
    );
  };
}
