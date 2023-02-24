const renderAdoptee = (adoptee) => `  
    <article class="card">
      <img src="${adoptee.relativeImagePath}" alt="${adoptee.name}" />
        <div class="card-body">
          <h1 class="card-title">${adoptee.name}</h1>
          ${adoptee.summary}
          <a href="#" class="card-link upper">Adopt Me</a>
        </div>
    </article>
`;

const renderAdoptees = (adoptees) => `
  ${adoptees.map((adoptee) => renderAdoptee(adoptee)).join("")}
`;

export const adoptView = (adoptees) => `

        <section class="adopt">
          <h1 class="section-title upper">adopt</h1>
          <div class="cards">
            ${renderAdoptees(adoptees)}
          </div>
        </section>

`;
