import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import homeImage from "../../assets/home.jpeg";

import {
  HeroSection,
  HeroContent,
  HeroLeft,
  HeroRight,
  GreetingBadge,
  HeroTitle,
  NameHighlight,
  HeroSubtitle,
  SubtitleHighlight,
  HeroDescription,
  CTAButtonGroup,
  PrimaryCTA,
  SecondaryCTA,
  SocialLinks,
  SocialIcon,
  ProfileImageContainer,
  ProfileImage,
  ImageGlow,
} from "./Hero.styles";

function Hero({ setActivePage }) {
  const heroData = {
    greeting: "👋 Hello There",
    name: "Dileep",
    subtitle: "Frontend Developer",
    description:
      "Welcome to my digital space! I’m a passionate developer who enjoys crafting visually appealing and user-friendly web experiences.\n\nWith a strong foundation in HTML, CSS, and JavaScript, I build responsive websites enhanced with animations and interactive elements. I’m always excited to learn new technologies and bring creative ideas to life through code.",
    profileImage: homeImage,
    social: {
      linkedin: "https://www.linkedin.com/in/dileep-nandavarapu",
      github: "https://github.com/Dileep-025",
      instagram:
        "https://www.instagram.com/dileep.nandavarapu?igsh=aWUyazluZG4wZXQ0",
    },
  };

  return (
    <HeroSection>
      <HeroContent>
        <HeroLeft>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <GreetingBadge>{heroData.greeting}</GreetingBadge>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <HeroTitle>
              I'm <NameHighlight>{heroData.name}</NameHighlight>
            </HeroTitle>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <HeroSubtitle>
              I'm a <SubtitleHighlight>{heroData.subtitle}</SubtitleHighlight>
            </HeroSubtitle>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <HeroDescription>{heroData.description}</HeroDescription>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <CTAButtonGroup>
              <PrimaryCTA
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActivePage("projects")}
              >
                View Projects
              </PrimaryCTA>
              <SecondaryCTA
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActivePage("contact")}
              >
                Contact Me
              </SecondaryCTA>
            </CTAButtonGroup>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <SocialLinks>
              <SocialIcon
                href={heroData.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaLinkedin />
              </SocialIcon>

              <SocialIcon
                href={heroData.social.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub />
              </SocialIcon>

              <SocialIcon
                href={heroData.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaInstagram />
              </SocialIcon>
            </SocialLinks>
          </motion.div>
        </HeroLeft>

        <HeroRight>
          <motion.div
            initial={{ x: 50, opacity: 0, scale: 0.9 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              type: "spring",
              stiffness: 100,
            }}
          >
            <ProfileImageContainer>
              <ImageGlow />
              <ProfileImage src={heroData.profileImage} alt={heroData.name} />
            </ProfileImageContainer>
          </motion.div>
        </HeroRight>
      </HeroContent>
    </HeroSection>
  );
}

export default Hero;
