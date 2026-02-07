import React from "react";
import aboutImage from "../../assets/about.jpeg";
import {
  IntroContainer,
  ImageWrapper,
  ProfileImage,
  TextContainer,
  BioParagraph,
  SkillsHeader,
  SkillsContainer,
  SkillTag,
} from "./Intro.styles";

const skills = [
  { name: "HTML5", icon: "fab fa-html5" },
  { name: "CSS3", icon: "fab fa-css3-alt" },
  { name: "JavaScript", icon: "fab fa-js-square" },
  { name: "Git", icon: "fab fa-git-alt" },
  { name: "Python", icon: "fab fa-python" },
  { name: "Bootstrap", icon: "fab fa-bootstrap" },
  { name: "VS Code", icon: "fas fa-code" },
  { name: "Microsoft Office", icon: "fas fa-file-word" },
];

const Intro = () => {
  return (
    <IntroContainer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
    >
      <ImageWrapper>
        {/* Reminder: Replace this with your actual image in /src/assets */}
        <ProfileImage src={aboutImage} alt="Dileep" />
      </ImageWrapper>

      <TextContainer>
        <BioParagraph>
          I’m Dileep Nandavarapu, a passionate Front-End Web Developer and an
          Electronics and Communication Engineering student with a strong
          interest in building modern and responsive web experiences.
        </BioParagraph>
        <BioParagraph>
          I enjoy working with HTML, CSS, and JavaScript to create clean,
          user-friendly interfaces enhanced with smooth animations and intuitive
          interactions. I focus on writing well-structured, maintainable code
          while ensuring websites perform seamlessly across all devices.
        </BioParagraph>
        <BioParagraph>
          I’m a continuous learner who values problem-solving, adaptability, and
          teamwork. I enjoy exploring new technologies, improving my technical
          skills, and growing as a developer through hands-on practice and
          real-world challenges.
        </BioParagraph>

        <SkillsHeader>
          Here are a few technologies I've been working with recently:
        </SkillsHeader>
        <SkillsContainer>
          {skills.map((skill) => (
            <SkillTag
              key={skill.name}
              whileHover={{ y: -5, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <i className={skill.icon}></i>
              <span>{skill.name}</span>
            </SkillTag>
          ))}
        </SkillsContainer>
      </TextContainer>
    </IntroContainer>
  );
};

export default Intro;
