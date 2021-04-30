import { Impress, Step } from "react-impressjs";
import { SlideAboutMike } from "./components/slide-about-me/SlideAboutMike";
import { Floppy } from "./components/flop/Floppy";
import { Container, Icon, Item, Label } from "semantic-ui-react";

import "react-impressjs/styles/react-impressjs.css";
import "./App.css";
import "./Impress.css";
import { SliderSkillSemantic } from "./components/slider-skill-semantic/SliderSkillSemantic";
import { Programmer } from "./components/programmer/Programmer";
import { RandomSemanticColor } from "./utils/RandomSemanticColor";
import { BirdsProgramming } from "./components/birds-programming/BirdsProgramming";
import { MoonFestival } from "./components/moon-festival/MoonFestival";

const skillsOne = [
  {
    name: "Java",
    value: 90,
  },
  {
    name: "JavaScript",
    value: 65,
  },
  {
    name: "TypeScript",
    value: 50,
  },
  {
    name: "Python",
    value: 50,
  },
  {
    name: "HTML5",
    value: 65,
  },
  {
    name: "CSS",
    value: 70,
  },
  {
    name: "React",
    value: 65,
  },
];

const skillsTwo = [
  {
    name: "Angular",
    value: 65,
  },
  {
    name: "PostgreSQL / MySQL",
    value: 60,
  },
  {
    name: "C#",
    value: 68,
  },
  {
    name: "Unity3D",
    value: 80,
  },
  {
    name: "AWS Lamba",
    value: 50,
  },
  {
    name: "Serverless",
    value: 30,
  },
  {
    name: "UI/UX",
    value: 40,
  },
];

function App() {
  return (
    <Impress
      progress={true}
      fallbackMessage={
        <p>
          I'm sorry but your <b>device or browser</b> is not supported.
        </p>
      }
    >
      <Step className="slide-transparent" data={{ x: 0, y: 0, z: 0 }}>
        <Floppy />
      </Step>

      <Step data={{ x: 1000, y: 1000 }}>
        <SlideAboutMike />
      </Step>

      <Step className="slide" data={{ x: 2000, y: 0 }}>
        <Container text>
          <h4 className="glass-text">Skills</h4>
          <SliderSkillSemantic skills={skillsOne} />
        </Container>
      </Step>

      <Step
        className="slide"
        data={{
          x: 3500,
          y: 1500,
          z: -250,
          rotateZ: 45,
          rotateY: -45,
          rotateOrder: "zyx",
        }}
      >
        <Container text>
          <h4 className="glass-text">Skills</h4>
          <SliderSkillSemantic skills={skillsTwo} />
        </Container>
      </Step>

      <Step
        className="slide"
        data={{
          x: 7500,
          y: 3500,
          z: 0,
          rotateZ: 90,
          rotateY: -90,
          rotateOrder: "zyx",
        }}
      >
        <Programmer />
      </Step>

      <Step
        className="slide"
        data={{
          x: 5000,
          y: 5000,
          z: -250,
          rotateZ: 135,
          rotateY: -135,
          rotateOrder: "zyx",
        }}
      >
        <Item.Group>
          <Item>
            <Icon name="flag" color={RandomSemanticColor()} />
            <Item.Content>
              <Item.Header as="a">UAGRM – CIDOB - IBIS</Item.Header>
              <Item.Description>
                <p className="glass-text">Software Development Manager</p>
                <p>
                  An information system was developed to manage surveys
                  conducted in nine indigens towns in Bolivia{" "}
                </p>
              </Item.Description>
              <br />
              <Item.Extra>
                <Icon name="calendar" /> August, 2011 – October, 2011
              </Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
      </Step>

      <Step
        className="slide"
        data={{
          x: 2500,
          y: 2500,
          z: -180,
          rotateZ: 180,
          rotateY: -180,
          rotateOrder: "zyx",
        }}
      >
        <Item.Group>
          <Item>
            <Icon name="flag" color={RandomSemanticColor()} />
            <Item.Content>
              <Item.Header as="a">Productos: “EL COCINERO”</Item.Header>
              <Item.Description>
                <p className="glass-text">System’s Manager</p>
                <p>
                  An information system was developed for commercial management.
                </p>
              </Item.Description>
              <br />
              <Item.Extra>
                <Icon name="calendar" /> November, 2012 – October, 2013
              </Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
      </Step>

      <Step
        className="slide"
        data={{
          x: 5000,
          y: 8000,
          z: 0,
          rotateZ: 135,
          rotateY: -225,
          rotateOrder: "zyx",
        }}
      >
        <Item.Group>
          <Item>
            <Icon name="flag" color={RandomSemanticColor()} />
            <Item.Content>
              <Item.Header>
                <a href="http://www.cleartec.net.bo/">CLEARTEC</a>
              </Item.Header>
              <Item.Description>
                <p className="glass-text">Senior Developer</p>
                <p>Web Application Development and ERP manager.</p>
              </Item.Description>
              <br />
              <Item.Extra>
                <Icon name="calendar" /> December, 2013 – February, 2015
              </Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
      </Step>

      <Step
        className="slide"
        data={{
          x: 1500,
          y: 10000,
          z: 0,
          rotateZ: 180,
          rotateY: -270,
          rotateOrder: "zyx",
        }}
      >
        <Item.Group>
          <Item>
            <Icon name="flag" color={RandomSemanticColor()} />
            <Item.Content>
              <Item.Header as="a">Bad Mike Studio</Item.Header>
              <Item.Description>
                <p className="glass-text">Game Developer & Project Lead</p>
                <p>
                  Game development with two releases in AppStore and PlayStore
                  and the development of a crowfunding MMORPG Project: Infetic.
                </p>
              </Item.Description>
              <br />
              <Item.Extra>
                <Icon name="calendar" /> February, 2015 – August, 2016
              </Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
      </Step>

      <Step
        className="slide"
        data={{
          x: -500,
          y: 7500,
          z: 0,
          rotateY: 45,
          rotateZ: 270,
          rotateOrder: "zyx",
        }}
      >
        <Item.Group>
          <Item>
            <Icon name="flag" color={RandomSemanticColor()} />
            <Item.Content>
              <Item.Header>
                <a href="http://www.cleartec.net.bo/">CLEARTEC</a>
              </Item.Header>
              <Item.Description>
                <p className="glass-text">Lead Developer</p>
                <p>Lead Developer for a custom ERP implementation of Odoo 11</p>
              </Item.Description>
              <br />
              <Item.Extra>
                <Icon name="calendar" /> October, 2016 – July, 2018
              </Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
      </Step>

      <Step
        className="slide"
        data={{
          x: -1500,
          y: 5000,
          rotateY: 90,
          rotateZ: -90,
          rotateOrder: "zyx",
        }}
      >
        <Item.Group>
          <Item>
            <Icon name="flag" color="red" />
            <Item.Content>
              <Item.Header>
                <a href="http://www.swissbytes.ch/">Swissbytes</a>
              </Item.Header>
              <Item.Description>
                <p className="glass-text">Senior Full-Stack Developer</p>
                <p>
                  Senior full-stack developer on a self-development ERP
                  solution.
                </p>
              </Item.Description>
              <br />
              <Item.Extra>
                <Icon name="calendar" /> August, 2018 – March, 2021
              </Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
      </Step>

      <Step
        className="slide"
        data={{
          x: -2500,
          y: 2500,
          z: -30,
          rotateY: 180,
          rotateZ: -180,
          rotateOrder: "zyx",
        }}
      >
        <Container>
          <h4 className="glass-text">Education</h4>
          <BirdsProgramming />
        </Container>
      </Step>

      <Step
        className="slide"
        data={{ x: -3500, y: 0, rotateY: 90, rotateZ: -90, rotateOrder: "zyx" }}
      >
        <Item.Group>
          <Item>
            <Item.Image src="/images/logo_uagrm.jpg" size="medium" />
            <Item.Content>
              <Item.Header>
                <a href="http://www.uagrm.edu.bo/">UAGRM</a>
              </Item.Header>
              <Item.Description>
                <p className="glass-text">Software Engineering</p>
              </Item.Description>
              <br />
              <Item.Extra>
                <Icon name="calendar" /> 2008 - 2014
              </Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
      </Step>

      <Step
        className="slide"
        data={{
          x: -3500,
          y: 1800,
          rotateY: 180,
          rotateZ: -125,
          rotateOrder: "zyx",
        }}
      >
        <Item.Group>
          <Item>
            <Item.Image src="/images/logo_soe_uagrm.png" size="medium" />
            <Item.Content>
              <Item.Header>
                <a href="https://www.soe.uagrm.edu.bo/">UAGRM - SOE</a>
              </Item.Header>
              <Item.Description>
                <p className="glass-text">
                  Project Management in Software Development{" "}
                </p>
              </Item.Description>
              <br />
              <Item.Extra>
                <Icon name="calendar" /> 2014 - 2015
              </Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
      </Step>
      <Step
        className="slide"
        data={{
          x: 0,
          y: -1500,
          rotateY: 270,
          rotateZ: -180,
          rotateOrder: "zyx",
        }}
      >
        {" "}
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/wT-4vQ4OW34"
          title="Emergency911"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </Step>

      <Step
        className="slide"
        data={{
          x: -500,
          y: -3000,
          rotateY: -90,
          rotateZ: 180,
          rotateOrder: "zyx",
        }}
      >
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/cmkVonBThg0"
          title="Iqbal - No soy tu Propiedad"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </Step>

      <Step className="slide"
        data={{
          x: -1800,
          y: -2500,
          rotateY: -90,
          rotateZ: 180,
          rotateOrder: "zyx",
        }}>
            <MoonFestival />
      </Step>
    </Impress>
  );
}

export default App;
