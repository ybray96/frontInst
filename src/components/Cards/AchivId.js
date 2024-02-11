import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function AchivId() {
  const { id } = useParams();
  const [achievement, setAchievement] = useState(null);

  useEffect(() => {
    const fetchAchievement = async () => {
      try {
        if (id) {
          const { data } = await axios.get(
            `http://91.147.92.207:3000/api/v1/achievements-list/${id}/`,
            {
              withCredentials: true,
            }
          );
          setAchievement(data);
        }
      } catch (error) {
        console.error("Error fetching achievement:", error);
      }
    };

    fetchAchievement();
  }, [id]);

  return (
    <div className="px-4 flex flex-col mx-auto max-w-screen-xl font-nunito">
      {achievement ? (
        <>
          <h2>{achievement.title}</h2>
          <p>{achievement.description}</p>
        </>
      ) : (
        <div className="w-600px mx-auto p-24 animate-pulse text-lg font-bold">
          Loading...
        </div>
      )}
    </div>
  );
}

export default AchivId;
