//Graphic
export default function Form(props) {
  const day = new Date();
  const getday = day.getDay();
  //
  return (
    <div className=" rounded rounded-lg rounded-2xl border border-gray-400 widge">
      <div class="flex flex-row ">
        <div className="basis-1/6 ">
          <div className="flex flex-row ">
            <div className="flex justify-center">
              <div className="basis-1/6">
                <img
                  className="w-16 h-16 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 mt-10 ml-8"
                  src={props.iconUrl}
                  alt="Bordered avatar"
                />
              </div>
            </div>
            <div className="basis-1/3">
              <div></div>
            </div>
          </div>
        </div>
        <div className="basis-1/3 flex-col pl-4">
          <p className="font-bold pt-4">{props.jobTitle}</p>
          <h3 className="pt-4">create By {props.posterName}</h3>
          <div className="skill-list">
            {props.countries.map((country) => (
              <p className="skill">{country}</p>
            ))}
            <p className="skill">Eroupe</p>
          </div>
        </div>
        <div className="basis-1/3 pl-6 pt-4">
          <div className="skill-list">
            {props.skills.map((skill) => (
              <p className="skill">{skill}</p>
            ))}

            <p className="skill">Java</p>
            <p className="skill">Python</p>
            <p className="skill">django</p>
          </div>
        </div>
        <div className="basis-1/5 font-bold textm">
          {calculateDateDifference(props.Date)},00 ago 📌
        </div>
      </div>
    </div>
  );
}
function calculateDateDifference(dateString) {
  // Convert the date string to a Date object
  const date = new Date(dateString);

  // Get the current date
  const currentDate = new Date();

  // Calculate the difference in milliseconds
  const differenceInMilliseconds = currentDate - date;

  // Convert milliseconds to days
  const differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24);

  // Return the difference in days
  return differenceInDays;
}
