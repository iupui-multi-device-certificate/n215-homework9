const renderTeaser = (teaser) => `
      <figure class="teaser">
        <img src="${teaser.relativeImagePath}" alt="${teaser.title}" />
        <figcaption>
          <a href="#" class="upper">Adopt Me</a>
        </figcaption>
      </figure>

`;

const renderTeasers = (teasers) => `
  ${teasers.map((teaser) => renderTeaser(teaser)).join("")}
`;

export const homeView = (teasers) => `
  <section class="home ">
    <h1 class="section-title upper">Home</h1>
    <div class="teasers">
      ${renderTeasers(teasers)}
    </div>

    <div class="home-body">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, nam
        aperiam, eveniet qui odit cum sunt ipsam inventore aspernatur rem
        quae eum id, temporibus delectus voluptates nulla deleniti aliquam
        aliquid.
      </p>
      <p>
        Veniam aliquid quidem, nobis omnis non amet! Consequuntur odit
        dolore nihil laudantium sunt fugiat labore, sapiente error unde
        commodi consequatur impedit, debitis, temporibus adipisci eveniet
        laboriosam quae sit esse vitae.
      </p>
      <p>
        Nisi quaerat, voluptatibus non repudiandae eligendi, fugit aperiam
        reprehenderit vero amet dolorem vitae iusto pariatur architecto
        beatae harum laborum odio! Laboriosam vitae assumenda quibusdam
        consequuntur pariatur numquam esse rem ab.
      </p>
      <p>
        Qui quas quo dolore quia, impedit accusantium officiis aperiam
        unde animi odit laborum beatae labore temporibus et veritatis
        consequatur explicabo, quos neque aliquam. Vero suscipit
        dignissimos autem quam nisi atque?
      </p>
      <p>
        Aspernatur aliquam mollitia atque animi explicabo ad at.
        Voluptatem qui, architecto iusto voluptatibus ullam excepturi
        inventore perferendis officia est fugiat neque maiores illum nam
        quasi molestiae, dolore quam dignissimos possimus!
      </p>
    </div>
  </section>
`;
