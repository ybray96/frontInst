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
    <div className="mt-4 grid xl:grid-cols-4  md:grid-cols-4 grid-cols-2  lg:w-5/6 w-full mx-auto">
        {profiles.map((profile, index) => (
          <div key={index} className=" mb-4">
            <div className="px-2">
              <img
                src={profile.photo}
                alt={`Фотография ${profile.name}`}
                className="w-full  object-cover rounded-t-md"
              />

              <div className="bg-[#2C4FA4] p-2 text-white rounded-b-md flex relative ">
                <div>
                  <p className="text-base">{profile.name}</p>
                  <p className="text-[#CFCFCF] lg:line-clamp-0 line-clamp-1">{profile.post}</p>
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
      <Link to="/en/aboutus">
        <button className=" ml-2 text-blue-500  border border-blue-500 hover:border-purple-500 py-2.5 px-4 rounded hover:text-purple-700">
          Go back
        </button>
      </Link>
      </div>
     
    </div>
  );
}

export default ProfileInfoEn;
