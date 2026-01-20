const contact = [
  { text: "“A very stylish and delicious experience”", author: "Anna" },
  { text: "“A very stylish and delicious experience”", author: "Anna" },
  { text: "“A very stylish and delicious experience”", author: "Anna" },
  { text: "“A very stylish and delicious experience”", author: "Anna" },
];

export function Contact() {
  return (
    <section id="contact" className="contact">
      <h2 className="section-title">Contact</h2>

      {contact.map((c, i) => (
        <div className="contact-container" key={i}>
          <div className="contact-card">
            <p>{c.text}</p>
            <span>— {c.author}</span>
          </div>
        </div>
      ))}
    </section>
  );
}
