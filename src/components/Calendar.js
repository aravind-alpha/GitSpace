import React from "react";
import styled from "styled-components";
import GitHubCalendar from "react-github-calendar";
import { GithubContext } from "../context/context";
import ReactTooltip from "react-tooltip";

const Calendar = () => {
  const { githubUser } = React.useContext(GithubContext);
  const { login } = githubUser;

  return (
    <section className="section">
      <Wrapper className="section-center">
        <h4>GitHub Contributions</h4>
        <GitHubCalendar username={login} blockSize={18} tooltips={true}>
          <ReactTooltip delayShow={50} html />
        </GitHubCalendar>
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.nav`
  padding: 1rem;
  margin-bottom: 1em;
  background: var(--clr-white);
  text-align: center;
  display: relative;
  grid-template-columns: auto auto 100px;
  justify-content: center;
  align-items: center;
`;

export default Calendar;
