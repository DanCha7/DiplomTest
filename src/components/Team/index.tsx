import TeamList from "./ListTeam";
import styled from "styled-components";

const Team = () => {
  return (
    <TeamStyle>
      <section className="team">
        <div className="container team__content">
          <h1 id="aboutus" className="team__title">
            Наша команда
          </h1>
          <TeamList />
        </div>
      </section>
    </TeamStyle>
  );
};
const TeamStyle = styled.section`
  // .team {
  //   background-color: var(--purple);
  //   background-image: url("/src/assets/images/krug.png");
  //   background-repeat: no-repeat;
  //   background-position: right top;
  //   background-size: 541px;
  // }

  // .team__content {
  //   color: white;
  //   padding: 40px 0px;
  // }

  // .team__title {
  //   font-size: 30px;
  //   font-family: Intro Bold;
  //   line-height: 30px;
  //   font-weight: 700;
  // }

  // .list__team {
  //   display: grid;
  //   grid-template-columns: repeat(3, 1fr);
  //   gap: 30px;
  //   padding: 10px 5px;
  // }

  // .img__team {
  //   width: 387px;
  //   height: 462px;
  //   margin-bottom: 15px;
  //   border-radius: 4px;
  // }

  // .name__title {
  //   font-family: Intro Bold;
  //   font-size: 24px;
  //   line-height: 24px;
  //   font-weight: 700;
  //   margin-bottom: 15px;
  // }

  // .title__under {
  //   font-size: 16px;
  //   line-height: 16px;
  //   font-weight: 400;
  // }
`;

export default Team;
