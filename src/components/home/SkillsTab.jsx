import React from "react";
import Col from "react-bootstrap/Col";
import SkillsBar from "./SkillsBar";

function SkillsSection({ skills, isScrolled }) {
  console.log('SkillsSection received:', {
    skillsLength: skills?.length,
    firstSkill: skills?.[0],
    isScrolled
  });

  if (!skills || !Array.isArray(skills)) {
    console.error('Invalid skills array in SkillsSection');
    return <div>Error: Invalid skills data</div>;
  }

  return (
    <div className="skills-section">
      {skills.map((skill, index) => {
        console.log('Rendering skill:', skill);
        return (
          <SkillsBar
            key={`${skill.name}-${index}`}
            skill={skill.name}
            value={skill.value}
            isScrolled={isScrolled}
          />
        );
      })}
    </div>
  );
}

function SkillsTab({ skills = [], isScrolled }) {
  console.log('SkillsTab received:', {
    skillsType: typeof skills,
    isArray: Array.isArray(skills),
    length: skills?.length,
    skills: skills
  });

  if (!skills || !Array.isArray(skills)) {
    console.error('Skills prop must be an array');
    return <div>Error: Invalid skills data</div>;
  }

  if (skills.length === 0) {
    console.warn('Skills array is empty');
    return <div>No skills data available</div>;
  }

  const midPoint = Math.floor(skills.length / 2);
  const firstHalf = skills.slice(0, midPoint);
  const secondHalf = skills.slice(midPoint);

  console.log('Split skills:', {
    firstHalf,
    secondHalf
  });

  return (
    <>
      <Col xs={12} md={6}>
        <SkillsSection
          skills={firstHalf}
          isScrolled={isScrolled}
        />
      </Col>
      <Col xs={12} md={6}>
        <SkillsSection
          skills={secondHalf}
          isScrolled={isScrolled}
        />
      </Col>
    </>
  );
}

export default SkillsTab;