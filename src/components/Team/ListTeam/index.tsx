import React, { useEffect, useState } from "react";
import axios from "axios";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  img: string;
}

const TeamList: React.FC = () => {
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://a98dd46ab27ae7d5.mokky.dev/dteam"
        );
        setMembers(response.data);
      } catch (err) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <p>Загрузка...</p>;
  }

  if (error) {
    return <p>Ошибка: {error}</p>;
  }

  return (
    <ul className="list__team">
      {members.map((member) => (
        <li key={member.id}>
          <img className="img__team" src={member.img} alt={member.name} />
          <div>
            <h3 className="name__title">{member.name}</h3>
            <p className="title__under">{member.role}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TeamList;
