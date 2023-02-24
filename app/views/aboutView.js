const renderTeamMember = (teamMember) => `  
    <div class="team-member-container">
      <img src="${teamMember.relativeImagePath}" alt="${teamMember.name}" />
      <div class="team-member-body">
        <h2 class="team-member">${teamMember.name}</h2>
        ${teamMember.summary}
      </div>
    </div>
`;

const renderTeamMembers = (teamMembers) => `

  ${teamMembers.map((teamMember) => renderTeamMember(teamMember)).join("")}
`;

export const aboutView = (teamMembers) => `

        <section class="about">
        <h1 class="section-title upper">About</h1>
        <div class="intro">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus a voluptas distinctio voluptate, sit quasi non quam
            iusto officiis in eveniet dolores ad deserunt! Asperiores.
          </p>
          <p>
            Dolorem expedita voluptas et sed ullam, minus numquam, rerum
            pariatur laboriosam dolores eos! Atque quam odio totam similique
            voluptas magni quisquam qui fugit rerum explicabo?
          </p>
        </div>
          <div class="team">
            ${renderTeamMembers(teamMembers)}
          </div>
        </section>

`;
