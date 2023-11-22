export function PersonInfo({ person }) {
  const telSection = (
    <div>
      Telefon: <a href={`tel:${person.tel}`}>{person.tel}</a>
    </div>
  );

  return (
    <address>
      <div>
        <span>
          {person.name} {person.lastName}
        </span>
      </div>
      <div>
        Email: <a href={`mailto:${person.mail}`}>{person.mail}</a>
      </div>
      {person.tel === undefined ? null : telSection}
    </address>
  );
}
