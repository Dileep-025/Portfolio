import React from "react";
import {
  MobileEducationContainer,
  SectionTitle,
  EducationList,
  EducationItem,
  Institution,
  Degree,
  Year,
} from "./MobileEducation.styles";

const educationData = [
  {
    institution: "Bharath Institute of Higher Education and Research, Chennai",
    degree: "B.Tech – Electronics and Communication Engineering (73.3%)",
    year: "2022– 2026",
  },
  {
    institution: "Sri Pratibha Junior College, Pernamitta",
    degree: "Intermediate – MPC (57.1%)",
    year: "2020 – 2022",
  },
  {
    institution: "sri Chaitanya High School, Kanigiri",
    degree: "Secondary School Certificate – SSC (88.8%)",
    year: "2019 – 2020",
  },
];

const MobileEducation = () => {
  return (
    <MobileEducationContainer>
      <SectionTitle>Educational Milestones</SectionTitle>
      <EducationList>
        {educationData.map((edu, index) => (
          <EducationItem key={index}>
            <Institution>{edu.institution}</Institution>
            <Degree>{edu.degree}</Degree>
            <Year>{edu.year}</Year>
          </EducationItem>
        ))}
      </EducationList>
    </MobileEducationContainer>
  );
};

export default MobileEducation;
