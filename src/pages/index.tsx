const Index = ({ name }) => {
  return (
    <div>
      <p>Hello, {name}!</p>
    </div>
  );
};

export default Index;

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/spotify");
  const data = await res.json();

  return {
    props: data,
  };
}
