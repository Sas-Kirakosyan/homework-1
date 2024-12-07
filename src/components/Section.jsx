import Button from "./Button";

function Section({ contents }) {
    return (
        <section>
          <h2>{contents.title}</h2>
          {contents.buttonsTitle.map((title) => (
            <Button key={title} title={title} />
          ))}
        </section>
    )
}

export default Section;