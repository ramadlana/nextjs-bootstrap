export default function InputForm({ id, label, type, value, onChange }) {
  return (
    <>
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input
        type={type}
        className="form-control mb-2"
        id={id}
        onChange={onChange}
        value={value}
      />
    </>
  );
}
