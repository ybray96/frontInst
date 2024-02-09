import React from "react";
import { Link } from "react-router-dom";
import worker1 from "../../../../../../components/images/Management/245516 copy.png";
import worker2 from "../../../../../../components/images/Management/image.png";
import worker3 from "../../../../../../components/images/Management/00bc5c49-165f-400a-b65e-55680ee1bd34 copy.png";
import worker4 from "../../../../../../components/images/Management/4.png";
import orcid from "../../../../../../components/imgwork/orcid.png";
const profiles = [
  {
    name: "Pusyrmanov Nurbek Serikovich",
    photo: worker1,
    post: "Director, PhD",
    link: "https://orcid.org/0000-0001-9905-0320",
  },
  {
    name: "Ayagan Burkitbay Gelmanovich ",
    photo: worker2,
    post: "Deputy Director, D. and. Sc.,",
    link: "https://orcid.org/0000-0001-9498-0000",
  },
  {
    name: "Kaliyev Zhabay Nurmakovich",
    photo: worker3,
    post: "Deputy Director, Ph.D.",
    link:"https://orcid.org/0000-0002-7469-0396"
  },
  {
    name: "Gabdullina Anara Yenizovna",
    photo: worker4,
    post: "Scientific Secretary, K. and. n.",
    link:"https://orcid.org/0000-0001-7854-8867"
  },
];

function ProfileInfoEn() {
  return (
    <div className="max-w-screen-xl mx-auto font-nunito ">
      <div className="mt-2 grid xl:grid-cols-4  md:grid-cols-4 grid-cols-2 gap-2 xl:gap-0 ">
        {profiles.map((profile, index) => (
          <div key={index} className="mb-6 w-full">
            <div className="px-2">
              <img
                src={profile.photo}
                alt={`Фотография ${profile.name}`}
                className="w-full"
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
      <Link to="/en/aboutus">
        <button className=" px-2  text-lg font-nunito  hover:text-blue-400">
          Go back
        </button>
      </Link>
    </div>
  );
}

export default ProfileInfoEn;
