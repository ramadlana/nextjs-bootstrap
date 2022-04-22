import NavbarMember from "../../components/NavbarMember";

// for Server side rendering every request
function GetServerSideProps({ album }) {
  return (
    <>
      <NavbarMember></NavbarMember>
      <div className="container col-12">
        <table>
          <tbody>
            {album.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

// This gets called and rendered every request (Server Side)
export async function getServerSideProps(context) {
  // you also can Intercept access context.req|res
  // Fetch data from external API
  const res = await fetch(`https://jsonplaceholder.typicode.com/albums`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { album: data } };
}

export default GetServerSideProps;
