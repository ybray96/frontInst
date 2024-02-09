import React from "react";
import { useParams } from "react-router-dom";
function TheAchievementCardEn() {
  const { cardId } = useParams();
  let cardText = "";
  let cardText2 = "";
  let cardTextMain = "";
  if (cardId === "1") {
    cardTextMain = `The most important legal act adopted by the new Supreme Council was the "declaration of state sovereignty", adopted on October 25, 1990.`;
    cardText2 = `He proclaimed the right of Kazakhstan to suspend on its territory laws and other acts of the Supreme bodies of the Union that violate its sovereign rights and the Constitution`;
    cardText = `
    
In the early 90s, the political processes taking place in society took on an amazing pace. On the wave of slogans of perestroika and Publicity, elections to the Supreme Soviet of the Kazakh SSR were held in March 1990. This was the first democratic election to the supreme legislature. Representatives of different segments of the population were elected: workers, military personnel, those represented from scientific institutions. The political passions of the deputies were also different. Although some of them followed the old Soviet traditions, moreover, most of the people's deputies wanted and demanded rapid changes. It was this Corps of Deputies that adopted a whole package of important acts that became the basis for the formation of Independence.`;
  } else if (cardId === "2") {
    cardTextMain = `“On State Independence of the Republic of Kazakhstan”`;
    cardText2 = `dated December 16, 1991. Developing the key ideas of the Declaration on State Sovereignty, the Constitutional Law clearly stated that the Republic of Kazakhstan from now on builds its relations with all states on the principles of international law, as befits an independent state. For the first time, a single Kazakh citizenship was established. The diversity of forms of ownership proclaimed by the Declaration was legalized, the principle of separation of state power into legislative, executive and judicial, the state's course towards an independent economic system with its own financial, credit, tax and customs policy was consolidated
    `;
    cardText = `
    In early December 1991, the leaders of three republics: Russia - Boris Yeltsin, Ukraine - L. Kravchuk and Belarus – S. Shushkevich signed the Belovezhskaya Agreement on the denunciation of the Union Treaty of 1922. In fact, the collapse of the USSR was legally formalized.
On December 10, 1991, the Supreme Council decided to rename the Kazakh SSR to the Republic of Kazakhstan, and on December 16, 1991, the Supreme Council proclaimed the state independence of the Republic of Kazakhstan. A new stage in the history of the republic has begun.
The process of the birth of a new state, the successor of the Kazakh SSR and the Union of the USSR, has begun.
A special stage of this process was the Constitutional Law  `;
  } else if (cardId === "3") {
    cardText2 = `The Constitution of 1995 enshrined the constitutional status of man and citizen, the entire people as the source of state power and the social base of the state. The Constitution recognizes the state as social, which means that the state considers social policy as the effective protection of the population and the creation of living conditions for the entire people.`;
    cardTextMain = ` The Constitution of the Republic of Kazakhstan is the core of the legal system of the state, the basis for the development of current (sectoral) legislation.`;
    cardText = `
    The Constitution of the Republic of Kazakhstan, adopted at the republican referendum on August 30, 1995, is the basic law of the country. He calls for the establishment of the constitutional system and its foundations, human and civil rights and freedoms, the Foundations of State Organization, as well as the foundations of the organization of the exercise of power. The Constitution of the Republic of Kazakhstan has the highest legal force in relation to other legal acts: no legal act adopted in the country (constitutional law, Decree of the President of the Republic of Kazakhstan, legal act of the region, court decision, etc.) can contradict the basic law, and in case of contradiction (legal conflict) the norms of the Constitution have priority.
`;
  } else if (cardId === "4") {
    cardText = `
    The state program" cultural heritage " is a program of cultural, economic and social capital, a structural part of universal culture, the beginning of the development and creation of an ethnic group, society, human reason, the creation and protection of an important repository of historical memories. It examines the historical experience of a multifaceted society necessary for humanity in modern disputes, which reflects the uninterrupted connection of time, forming a path connecting the foundations of ancient history with the present.Informing with the historical and cultural heritage, it tells not only the history, but also the situation that will happen in the future. Therefore, 15 years ago, in April 2003, in his address to the people of Kazakhstan, the head of state instructed to implement a special state program  `;
    cardTextMain = ` "Declaration on the Spiritual Foundations of Peace and the Prevention of Wars" `;
    cardText2 = `The state program "cultural heritage", adopted by the president's address, is a proof of the world prosperity of modern Kazakhstan`;
  } else if (cardId === "5") {
    cardText = `
    "The congress was attended by more than 100 religious leaders and representatives from more than 40 countries and various faiths, including Christianity, Islam, Buddhism, Judaism, Islam and others.
    The main theme of the congress was the need to strengthen dialogue and understanding between different religions and cultures in the light of the threat of terrorism, xenophobia and religious intolerance. The participants discussed issues of peace, morality, youth and religious education.
    Within the framework of the congress, the`;
    cardTextMain = ` "Declaration on the Spiritual Foundations of Peace and the Prevention of Wars" `;
    cardText2 = `This document expressed the commitment of the participants to strengthen peace, justice and dialogue between faiths.
    The congress included a variety of cultural events, exhibitions and concerts to showcase the richness and diversity of cultural traditions.
   The First Congress of World Leaders and Leaders of Traditional Religions in Astana was recognized for its importance in promoting interreligious dialogue and peace. This event has become a tradition and is held every three years, attracting religious leaders and representatives from all over the world.
   The Congress of World Leaders and Leaders of Traditional Religions in Astana stressed the importance of cooperation between different faiths and the desire for peace, tolerance and understanding in the world arena. Kazakhstan has become a place where world religious leaders could meet and discuss common issues and challenges.
   `;
  } else if (cardId === "7") {
    cardText = `
    The 2011 Asian Winter Games, also known as the 7th Asian Winter Games, was an international sporting event held in Kazakhstan from January 30 to February 6, 2011. These Games became the largest winter sports event in the Asian region and brought together athletes from various Asian countries.
The games were held in several cities of Kazakhstan, including Almaty, Astana, Taraz and Shymkent. It was an important event for the sports infrastructure of Kazakhstan.
`;
    cardTextMain = ` The Games brought together more than 800 athletes from 25 Asian countries `;
    cardText2 = `Competitions included sports such as cross-country skiing, biathlon, figure skating, speed skating, hockey and many others.
    A special Olympic village was built in Almaty to accommodate the participants of the Asian Winter Games.
    Kazakhstan has invested in the development of its sports infrastructure, building new facilities and updating existing ones to prepare for the event.
   `;
  } else if (cardId === "8") {
    cardText = `
    Kazakhstan's chairmanship in the Organization for Security and Co-operation in Europe (OSCE) in 2010 was a significant event for this country and for the region as a whole. This was the first chairmanship of Kazakhstan in the OSCE, and it lasted from January 1 to December 31, 2010.   `;
    cardTextMain = `For the first time Kazakhstan became an Asian country that chaired the OSCE, and this aroused great interest and attention of the international community.`;
    cardText2 = (
      <div className="  text-lg">
        <h1 className="font-semibold">
          During its presidency, Kazakhstan has focused on several key areas:
        </h1>
        1. Combating transnational threats: Kazakhstan focused on the fight
        against terrorism, transnational crime and drug trafficking in the
        region. He called for increased international cooperation to combat
        these threats.
        <br />
        2. Development and promotion of dialogue: Kazakhstan actively
        contributed to strengthening the political dialogue between the OSCE
        participating states. This included mediation in conflict resolution and
        support for diplomatic efforts.
        <br />
        3. Promotion of human rights: Kazakhstan emphasized the importance of
        respect for human rights in its presidency. He paid attention to the
        issues of media freedom, freedom of assembly and minority rights.
        <br />
        4. Economic cooperation: Kazakhstan has also raised issues of economic
        cooperation and development within the OSCE.
        <p>
          Kazakhstan's chairmanship in the OSCE in 2010 was assessed as
          constructive and positive, and it allowed the country to strengthen
          its international reputation. Kazakhstan continued to actively
          participate in the OSCE activities after the end of its chairmanship,
          continuing to work on a number of important issues related to security
          and cooperation in the region.
        </p>
      </div>
    );
  } else if (cardId === "9") {
    cardText = `
    The international exhibition "EXPO 2017" was held in the capital of Kazakhstan, Astana, from June 10 to September 10, 2017. This exhibition was organized under the motto "Energy of the Future" and was dedicated to sustainable energy and innovation.

    The main topic of the event was the issues of alternative energy sources, energy conservation and sustainable energy. In this regard, the event attracted the attention of environmentalists, engineers, scientists and business representatives from all over the world. EXPO 2017 participants attracted many participants from different countries. `;
    cardTextMain = ` More than 100 countries and international organizations took part in the exhibition, presenting their innovations and developments in the field of sustainable energy. `;
    cardText2 = `Pavilions and exhibition facilities**: Various pavilions and architectural objects symbolizing the theme of energy and innovation were built within the framework of the event. For example, the Astana Sphere is a giant ball that has become a symbol of the exhibition.

    Expo 2017 in Astana was an important event that allowed the world to pay attention to the issues of sustainable energy and encourage dialogue and cooperation between different countries in this area. Kazakhstan also used this event to demonstrate its potential in the development of innovation and sustainable technologies.`;
  }
  return (
    <div className=" px-4 flex flex-col mx-auto max-w-screen-xl    ">
      {/* карточки */}
      <div>
        <div className="flex flex-col w-full ">
          <span className="mt-4 text-[#333]   text-lg font-semibold">{cardText}</span>
          <div className="flex-col p-4 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="65"
              height="45"
              viewBox="0 0 65 45"
              fill="none"
              className="mb-2"
            >
              <path
                d="M51.56 44.043C57.9106 43.2799 62.7408 38.5683 63.463 32.4505C63.7812 29.782 63.0383 26.5085 61.6305 24.3192C59.5063 21.0237 56.3844 19.1622 52.3266 18.7697C49.3295 18.4694 48.478 17.8759 48.933 16.3958C49.2896 15.2419 51.6304 12.5133 53.516 11.0668C55.4632 9.56199 58.4831 7.70666 60.6897 6.65602C63.4634 5.33689 64.4487 3.87954 63.8427 1.9925C63.6077 1.23535 62.8424 0.478673 62.0281 0.176457C61.2016 -0.125748 59.4011 -0.0192688 57.9955 0.413105C56.479 0.880533 54.4573 1.77953 52.6946 2.78316C45.9274 6.62264 40.9738 11.3344 37.5876 17.1516C36.2454 19.4599 35.2241 22.0941 34.6837 24.6114C34.303 26.4061 34.2815 29.9482 34.6405 31.4859C36.3987 39.1512 42.4956 44.2725 49.7102 44.1612C50.2528 44.149 51.079 44.09 51.56 44.043Z"
                fill="#2C4FA4"
              />
              <path
                d="M17.0906 44.0855C20.2228 43.6749 22.8979 42.4374 25.0419 40.4081C29.6751 36.0346 30.3716 28.7516 26.6547 23.5116C25.8891 22.4287 24.0624 20.7991 22.9396 20.2059C21.7798 19.5777 20.2871 19.1013 19.0043 18.9277C18.4863 18.8583 17.6475 18.7425 17.1419 18.6847C15.7728 18.4995 15.3286 18.3484 14.8843 17.9294C14.5757 17.6383 14.4769 17.4403 14.4766 17.1258C14.476 16.45 14.9191 15.5407 15.7938 14.433C17.9126 11.7512 21.1416 9.34807 26.1464 6.74525C28.6488 5.44966 29.5235 4.48178 29.5222 3.01367C29.5213 2.04657 29.2371 1.41763 28.5213 0.812384C27.8178 0.218775 27.2503 0.0328559 26.128 0.0338614C23.5752 0.0361487 19.7042 1.69416 15.0945 4.7627C6.79949 10.2698 1.1337 18.3728 0.104722 26.1571C-0.0422791 27.2641 0.0341802 30.0139 0.244817 31.1089C0.60418 33.0195 1.53131 35.4539 2.49468 37.026C4.10023 39.5879 6.84023 41.9741 9.45575 43.067C11.1706 43.7762 12.6755 44.0895 14.6241 44.146C15.5368 44.1685 16.6467 44.1442 17.0906 44.0855Z"
                fill="#2C4FA4"
              />
            </svg>
            <span className="text-[#2C4FA4] font-bold text-xl ">
              {cardTextMain}
            </span>
          </div>
          <span className="mt-4 text-[#333]   text-lg font-semibold">{cardText2}</span>
        </div>
      </div>
    </div>
  );
}

export default TheAchievementCardEn;
