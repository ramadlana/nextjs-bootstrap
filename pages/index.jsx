import Link from "next/link";

export default function Home() {
  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">Home</h2>
      </div>
      <div className="card-body">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
          architecto rerum facilis perspiciatis expedita laudantium neque
          accusamus, voluptatibus exercitationem, vero nemo! Veritatis eveniet
          vero exercitationem quaerat maxime repellendus temporibus nobis!
        </p>
        <Link href="/dashboard">
          <button className="btn btn-primray">Go Dashboard</button>
        </Link>
      </div>
    </div>
  );
}
