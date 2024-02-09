import React from "react";
import { Link } from "react-router-dom";
import worker1 from "../../../images/Management/245516 copy.png";

import worker2 from "../../../images/Management/image.png";
import worker3 from "../../../images/Management/00bc5c49-165f-400a-b65e-55680ee1bd34 copy.png";
import worker4 from "../../../images/Management/4.png";
import orcid from "../../../imgwork/orcid.png";
const profiles = [
  {
    name: "Пұсырманов Нұрбек Серікұлы",
    photo: worker1,
    post: "Директор, PhD",
    link: "https://orcid.org/0000-0001-9905-0320",
  },
  {
    name: "Аяған Бүркітбай Ғелманұлы ",
    photo: worker2,
    post: " Заместитель директора, Д.и.н.,",
    link: "https://orcid.org/0000-0001-9498-0000",
  },
  {
    name: "Қалиев Жабай Нұрмақұлы",
    photo: worker3,
    post: "Заместитель директора, К. п. н.",
    link: "https://orcid.org/0000-0002-7469-0396",
  },
  {
    name: "Ғабдуллина Анара Жеңізқызы",
    photo: worker4,
    post: "Ученый секретарь, К. и. н.",
    link: "https://orcid.org/0000-0001-7854-8867",
  },
];

function ProfileInfo() {
  return (
    <div className="max-w-screen-xl mx-auto font-nunito ">
      <div className="mt-2 grid xl:grid-cols-4  md:grid-cols-2 grid-cols-2 gap-2 xl:gap-0 ">
        {profiles.map((profile, index) => (
          <div key={index} className="mb-6 w-full">
            <div className="px-2">
              <img
                src={profile.photo}
                alt={`Фотография ${profile.name}`}
                className="w-full  object-cover"
              />

              <div className="bg-[#2C4FA4] p-2 text-white rounded-b-md flex relative ">
                <div>
                  <p className="text-lg">{profile.name}</p>
                  <p className="text-[#CFCFCF]">{profile.post}</p>
                </div>
                <div className="mt-5">
                  <a
                    href={profile.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={orcid}
                      className="object-cover absolute right-2 top-8 "
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link to="/ru/aboutus">
        <button className=" px-2  text-lg font-nunito  hover:text-blue-400">
          Вернуться назад
        </button>
      </Link>
    </div>
  );
}

export default ProfileInfo;