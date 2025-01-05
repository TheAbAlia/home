import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import SkillsTab from "./SkillsTab";
import Row from "react-bootstrap/Row";
import { Jumbotron } from "./migration";
import { Container } from "react-bootstrap";
import { useScrollPosition } from "../../hooks/useScrollPosition";

const Skills = React.forwardRef(({ heading, hardSkills, softSkills, mixSkills }, ref) => {
  const skillsTabRef = React.useRef(null);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [activeKey, setActiveKey] = React.useState('hard-skills');

  console.log('Skills component render:', {
    activeKey,
    hardSkillsLength: hardSkills?.length,
    softSkillsLength: softSkills?.length,
    mixSkillsLength: mixSkills?.length
  });

  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (!isScrolled && currPos.y - 400 < 0) setIsScrolled(true);
    },
    [],
    skillsTabRef
  );

  const handleTabSelect = (key) => {
    console.log('Tab selected:', key);
    setActiveKey(key);
  };

  return (
    <Jumbotron ref={skillsTabRef} fluid className="bg-white m-0" id="skills">
      <Container className="p-5">
        <h2 ref={skillsTabRef} className="display-4 pb-5 text-center">
          {heading}
        </h2>
        <Tabs
          className="skills-tabs"
          activeKey={activeKey}
          onSelect={handleTabSelect}
          id="skills-tabs"
          fill
        >
          <Tab
            tabClassName="skills-tab lead"
            eventKey="hard-skills"
            title="Programming & Product Management"
          >
            <Row className="pt-3 px-1">
              <SkillsTab skills={hardSkills} isScrolled={isScrolled} />
            </Row>
          </Tab>
          <Tab
            tabClassName="skills-tab lead"
            eventKey="soft-skills"
            title="Data Engineering & Databases"
          >
            <Row className="pt-3 px-1">
              <SkillsTab skills={softSkills} isScrolled={isScrolled} />
            </Row>
          </Tab>
          <Tab
            tabClassName="skills-tab lead"
            eventKey="mix-skills"
            title="Data Visualization & Analytics"
          >
            <Row className="pt-3 px-1">
              <SkillsTab 
                skills={mixSkills} 
                isScrolled={isScrolled}
              />
            </Row>
          </Tab>
        </Tabs>
      </Container>
    </Jumbotron>
  );
});

export default Skills;