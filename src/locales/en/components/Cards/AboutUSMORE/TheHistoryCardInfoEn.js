import React from "react";
import { useParams } from "react-router-dom";
function  TheHistoryCardInfoEn() {
  const { cardId } = useParams();
  let cardText = "";
  let cardText2 = "";
  let cardTextMain = "";
  if (cardId === "1") {
    cardTextMain = `The most important legal act adopted by the new Supreme Council was the Declaration of State Sovereignty of the Kazakh SSR, adopted on October 25, 1990.`;
    cardText2 = `It proclaimed Kazakhstan's right to suspend on its territory laws and other acts of the Union that violated its sovereign rights and Constitution.`;
    cardText = `
    The political processes in society in the early 90s gained incredible momentum. In March 1990, amidst the slogans of reconstruction and openness, elections were held for the Supreme Council of the Kazakh SSR. These were the first democratic elections to the supreme legislative body. Representatives from various segments of the population were elected, including workers, servicemen, and those nominated from scientific institutions. The political inclinations of the deputies varied. While some adhered to old Soviet traditions, the majority of the people's representatives wanted and demanded significant changes. It was this group of deputies that passed a package of important acts, laying the foundation for independence.
    `;
  } else if (cardId === "2") {
    cardText = `
    In early December 1991, the leaders of three republics: Russia - B. Yeltsin, Ukraine - L. Kravchuk, and Belarus - S. Shushkevich, signed the Belovezh Agreement on the denunciation of the 1922 Union Treaty. In fact, the dissolution of the USSR was legally formalized.
    On December 10, 1991, the Supreme Council decided to rename the Kazakh SSR to the Republic of Kazakhstan, and on December 16, 1991, the Supreme Council declared the state independence of the Republic of Kazakhstan. A new chapter in the history of the republic began.
    A significant part of this process was the Constitutional Law passed on December 16, 1991.`;
    cardText2 = `Building on the key ideas of the Declaration of State Sovereignty, the Constitutional Law unequivocally established that the Republic of Kazakhstan would henceforth conduct its relations with all states on the principles of international law, as befitting an independent state. It introduced a unified Kazakhstani citizenship for the first time. It legalized the diversity of forms of ownership proclaimed by the Declaration, the principle of the separation of state powers into legislative, executive, and judicial, and affirmed the state's course towards an independent economic system with its own financial, credit, tax, and customs policies.
    `;
    cardTextMain = `“On the State Independence of the Republic of Kazakhstan”`;
  } else if (cardId === "3") {
    cardText = `
    The Constitution of the Republic of Kazakhstan, adopted in a nationwide referendum on August 30, 1995, is the country's fundamental law. It calls for the establishment of the constitutional system and its foundations, the rights and freedoms of individuals and citizens, the fundamentals of the state organization, and the principles of the exercise of power. The Constitution of the Republic of Kazakhstan has the highest legal force in relation to other legal acts: no legal act adopted in the country (constitutional law, Presidential Decree of the Republic of Kazakhstan, a legal act of a region, a court decision, etc.) can contradict the fundamental law, and in the case of a contradiction (legal collision), the norms of the Constitution take precedence.`;
    cardTextMain = `The Constitution of the Republic of Kazakhstan is the core of the state's legal system, the basis for the development of current (branch) legislation.`;
    cardText2 = `The Constitution of 1995 enshrined the constitutional status of the individual and citizen, the entire people as the source of state power and the social foundation of the state. The Constitution recognizes the state as social, which means that the state regards social policy as effective protection of the population and the creation of living conditions for the entire people.`;
  } else if (cardId === "4") {
    cardText = `
    The State Program "Cultural Heritage" is a cultural, economic, and social capital, a structural part of human culture, the origins of the development and formation of ethnicity, society, human reason, a program for the creation and protection of an important repository of historical memories. It explores the historical experience of a multifaceted society, necessary for humanity in modern disputes, creating a path that connects the foundations of ancient history with the present day, demonstrating the continuous connection of time. Therefore, 15 years ago, in April 2003, the head of state instructed the implementation of a special state program `;
    cardTextMain = `"Cultural Heritage."`;
    cardText2 = `The state program "Cultural Heritage," as mandated by the President's Address to the people of Kazakhstan, is evidence of the global prosperity of modern Kazakhstan.`;
  }
  else if (cardId === "5") {
    cardText = `
    The First Congress of World and Traditional Leaders took place in the capital of Kazakhstan, Astana, from September 23 to 24, 2003. This event was organized at the initiative of President Nursultan Nazarbayev of Kazakhstan and was a significant step in discussing issues of peace, tolerance, and interfaith dialogue.
    The congress was attended by over 100 religious leaders and representatives from more than 40 countries and various faiths, including Christianity, Islam, Buddhism, Judaism, and others.
    The main theme of the congress was the need to strengthen dialogue and understanding between different religions and cultures in the face of the threats of terrorism, xenophobia, and religious intolerance. Participants discussed issues of peace, morality, youth, and religious education.
    As part of the congress, the `;
    cardTextMain = `"Declaration on the Spiritual Foundations of Peace and the Prevention of War" was adopted.`;
    cardText2 = `This document expressed the commitment of the participants to strengthen peace, justice, and dialogue among faiths.
    The congress included various cultural events, exhibitions, and concerts to showcase the richness and diversity of cultural traditions.
    The First Congress of World and Traditional Leaders in Astana was recognized for its significance in promoting interreligious dialogue and peace. This event has become a tradition and is held every three years, attracting religious leaders and representatives from around the world.
    `;
  }
  else if (cardId === "7") {
    cardText = `
    The 2011 Asian Winter Games, also known as the 7th Asian Winter Games, were an international sporting event held in Kazakhstan from January 30 to February 6, 2011. These games became the largest event in the field of winter sports in the Asian region and brought together athletes from various Asian countries.
    The games took place in several cities in Kazakhstan, including Almaty, Astana, Taraz, and Shymkent. It was a significant event for Kazakhstan's sports infrastructure.
    The games gathered more than `;
    cardTextMain = `800 athletes from 25 Asian countries.`;
    cardText2 = `The competitions included sports such as cross-country skiing, biathlon, figure skating, speed skating, hockey, and many others.
    A special Olympic Village was built in Almaty to accommodate the participants of the Asian Winter Games.
    Kazakhstan invested in the development of its sports infrastructure, constructing new facilities and renovating existing ones to prepare for the event.
    One of the goals of the 2011 Asian Winter Games was to strengthen cooperation and friendship among Asian countries through sports and promote winter sports in the region.
    Athletes from different countries competed for medals in various disciplines. Kazakhstan secured top positions in the medal standings and demonstrated impressive results in several sports.
    `;
  }
  else if (cardId === "8") {
    cardText = `OSCE
    Kazakhstan's chairmanship in the Organization for Security and Cooperation in Europe (OSCE) in 2010 was a significant event for the country and the region as a whole. It was Kazakhstan's first chairmanship in the OSCE, and it lasted from January 1 to December 31, 2010. Kazakhstan became the first Asian country to chair the OSCE, attracting great interest and attention from the international community.`;
  
    cardTextMain = `Kazakhstan became the first Asian country to chair the OSCE, attracting great interest and attention from the international community.`;
  
    cardText2 = `
    During its chairmanship, Kazakhstan focused on several key areas:
    1. Combating transnational threats: Kazakhstan emphasized the fight against terrorism, transnational crime, and drug trafficking in the region. It called for enhanced international cooperation to address these threats.
    2. Development and facilitation of dialogue: Kazakhstan actively promoted the strengthening of political dialogue among OSCE participating states. This included mediating in conflict resolution and supporting diplomatic efforts.
    3. Promotion of human rights: Kazakhstan emphasized the importance of human rights during its chairmanship. It paid attention to issues such as freedom of the media, freedom of assembly, and minority rights.
    4. Economic cooperation: Kazakhstan also raised issues of economic cooperation and development within the framework of the OSCE.
  
    Kazakhstan's chairmanship in the OSCE in 2010 was assessed as constructive and positive, allowing the country to strengthen its international reputation. Kazakhstan continued active participation in OSCE activities after the conclusion of its chairmanship, continuing work on several important security and cooperation issues in the region.
    `;
  }
  else if (cardId === "9") {
    cardText = `
    The International Exhibition "EXPO 2017" was held in the capital of Kazakhstan, the city of Astana, from June 10 to September 10, 2017. This exhibition was organized under the theme "Future Energy" and was dedicated to issues of sustainable energy and innovation.
  
    The main theme of the event revolved around alternative energy sources, energy conservation, and sustainable energy. As a result, the event drew the attention of ecologists, engineers, scientists, and business representatives from around the world.
    
    Participants of "EXPO 2017" attracted a multitude of attendees from different countries.`;
  
    cardTextMain = `More than 100 countries and international organizations participated in the exhibition, showcasing their innovations and developments in the field of sustainable energy.`;
  
    cardText2 = `
    Pavilions and exhibition objects. Within the event, various pavilions and architectural structures were constructed, symbolizing the theme of energy and innovation. For example, the "Astana Sphere" - a giant sphere that became a symbol of the exhibition.
  
    EXPO 2017 in Astana was a significant event that brought global attention to the issues of sustainable energy and encouraged dialogue and collaboration between different countries in this field. Kazakhstan also used this event to showcase its potential in the development of innovations and sustainable technologies.
    `;
  }
  
  return (
    <div className=" px-4 flex flex-col mx-auto max-w-screen-xl   font-montserrat ">
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
            <span className="text-[#2C4FA4] font-bold text-xl  ">
              {cardTextMain}
            </span>
          </div>
          <span className="mt-4 text-[#333]   text-lg font-semibold">{cardText2}</span>
        </div>
      </div>
    </div>
  );
}

export default TheHistoryCardInfoEn;
