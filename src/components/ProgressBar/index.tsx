import React from 'react';
import { Container, ContainerProgress, Progress, Step, Bullet } from './styles';
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const ProgressBar = () => {
  let location = useLocation();
  let progressBarUpdate = 0;
  var wasActive = true;

  const steps = [
    {
      name: 'Home',
      route: '/',
    },
    {
      name: 'Events',
      route: '/events',
    },
    {
      name: 'Contacts',
      route: '/contacts',
    },
    {
      name: 'AboutUs',
      route: '/aboutus',
    },
  ];
  const widthStepsUpdate = 100 / steps.length;


  function handleLength (number: number) {
    progressBarUpdate = number;
  }

  return (
    <Container>
      <ContainerProgress width={widthStepsUpdate}>
        {
          steps.map((step, index) => (
            <React.Fragment key={step.name}>
              {
                location.pathname === step.route && handleLength((Math.round((index * 75) / (steps.length - 1))))
              }

              <Step width={widthStepsUpdate}>
                {
                  (location.pathname === step.route && (wasActive = false))
                }

              <Link to={step.route}>
                <Bullet active={location.pathname === step.route} inverted={wasActive} />
              </Link>

              <span>
                <Link to={step.route}>{step.name}</Link>
              </span>
              </Step>
            </React.Fragment>
          ))
        }
        <Progress width={widthStepsUpdate} progress={progressBarUpdate}/>
      </ContainerProgress>
    </Container>
  )
}

export default ProgressBar;
