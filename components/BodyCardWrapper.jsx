export default function BodyCardWrapper({ title, content }) {
  return (
    <div className="card mt-3">
      <div className="card-header">
        <h1 className="card-title">{title}</h1>
      </div>

      <div className="card-body">{content}</div>
    </div>
  );
}
