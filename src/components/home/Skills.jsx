import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Jumbotron } from "./migration";
import { Container, Card } from "react-bootstrap";

const Skills = React.forwardRef(({ heading, categories = [] }, ref) => {
  const [activeKey, setActiveKey] = React.useState("0");

  const handleTabSelect = (key) => setActiveKey(key);

  return (
    <Jumbotron
      ref={ref}
      fluid
      className="m-0" // Removed bg-light, as we're using inline style
      id="skills"
      style={{ backgroundColor: "#FFFFFF" }} // Explicitly set background color to Bootstrap's bg-light value
    >
      <Container className="p-5">
        <h2 className="display-4 pb-5 text-center text-dark">{heading}</h2>
        <Tabs
          className="skills-tabs border-0 mb-4"
          activeKey={activeKey}
          onSelect={handleTabSelect}
          id="skills-tabs"
          fill
          variant="underline"
        >
          {categories.map((cat, idx) => (
            <Tab
              key={idx}
              eventKey={idx.toString()}
              title={cat.title}
              tabClassName="skills-tab lead text-dark"
            >
              <Row className="pt-4">
                <Col>
                  <Card className="border-0 shadow-lg rounded-4">
                    <Card.Body className="p-4">
                      <div className="d-flex justify-content-end align-items-center mb-3">
                        <span className="badge bg-dark rounded-pill px-3 py-2 fs-6">
                          {cat.proficiency}
                        </span>
                      </div>

                      <div className="skills-grid">
                        {cat.skills.map((skill, i) => (
                          <div key={i} className="skill-item">
                            <div className="skill-bullet"></div>
                            <span className="skill-text">{skill}</span>
                          </div>
                        ))}
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Tab>
          ))}
        </Tabs>
      </Container>

      <style jsx>{`
        .skills-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.75rem 2rem;
          margin-top: 1rem;
        }

        .skill-item {
          display: flex;
          align-items: center;
          padding: 0.5rem 0;
          transition: all 0.2s ease;
        }

        .skill-item:hover {
          transform: translateX(4px);
        }

        .skill-bullet {
          width: 8px;
          height: 8px;
          background: linear-gradient(135deg, #000000, #343a40);
          border-radius: 50%;
          margin-right: 0.75rem;
          flex-shrink: 0;
        }

        .skill-text {
          font-size: 0.95rem;
          color: #495057;
          font-weight: 500;
        }

        .skills-tabs .nav-link {
          border: none;
          border-bottom: 3px solid transparent;
          color: #6c757d;
          font-weight: 400;
          padding: 1rem 1.5rem;
          transition: all 0.3s ease;
          border-top-left-radius: 0 !important;
          border-top-right-radius: 0 !important;
          border-bottom-left-radius: 0 !important;
          border-bottom-right-radius: 0 !important;
          position: relative;
        }

        .skills-tabs .nav-link::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 3px;
          background-color: #000000;
          transition: width 0.6s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .skills-tabs .nav-link.active::after {
          width: 100%;
        }

        .skills-tabs .nav-link:hover::after {
          width: 100%;
        }

        .skills-tabs .nav-item:first-child .nav-link {
          border-top-left-radius: 0.5rem !important;
          border-bottom-left-radius: 0.5rem !important;
          border-top-right-radius: 0 !important;
          border-bottom-right-radius: 0 !important;
        }

        .skills-tabs .nav-item:last-child .nav-link {
          border-top-right-radius: 0.5rem !important;
          border-bottom-right-radius: 0.5rem !important;
          border-top-left-radius: 0 !important;
          border-bottom-left-radius: 0 !important;
        }

        .skills-tabs .nav-link:hover {
          color: #000000;
          background: rgba(0, 0, 0, 0.05);
        }

        .skills-tabs .nav-link.active {
          color: #000000;
          background: rgba(0, 0, 0, 0.1);
        }

        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr;
            gap: 0.5rem;
          }

          .skills-tabs .nav-link {
            padding: 0.75rem 1rem;
            font-size: 0.9rem;
          }
        }
      `}</style>
    </Jumbotron>
  );
});

export default Skills;