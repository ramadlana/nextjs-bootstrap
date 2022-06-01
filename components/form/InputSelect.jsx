export default function InputSelect({ id, label, options, onChange }) {
  return (
    <>
      <div>
        <div className="form-label">{label}</div>
        <select className="form-select" id={id}>
          {options.map((opt) => {
            return (
              <option key={opt.value} value={opt.value}>
                {opt.text_display}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
}
