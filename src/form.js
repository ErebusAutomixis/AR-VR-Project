//Graphic
export default function Form() {
  const day = new Date();
  const getday = day.getDay();
  return (
    <div className=" rounded rounded-lg rounded-2xl border border-gray-400 widge">
      <div class="flex flex-row ">
        <div className="basis-1/6 ">
          <div className="flex flex-row ">
            <div className="flex justify-center">
              <div className="basis-1/6">
                <img
                  className="w-16 h-16 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 mt-10 ml-8"
                  src="/public/images/asset.jpg"
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
          <p className="font-bold pt-4">Title of Job</p>
          <h3 className="pt-4">create By</h3>
          <div className="skill-list">
            <p className="skill">eroupe</p>

            <p className="skill">north amirican</p>
            <p className="skill">5000k</p>
          </div>
        </div>
        <div className="basis-1/3 pl-6 pt-4">
          <div className="skill-list">
            <p className="skill">eroupe</p>

            <p className="skill">north amirican</p>
            <p className="skill">5000k</p>
          </div>
        </div>
        <div className="basis-1/5 font-bold textm"> ₻ {getday} ago</div>
      </div>
    </div>
  );
}
