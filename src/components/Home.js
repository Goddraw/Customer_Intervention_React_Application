import InterventionList from "./InterventionList";
import useFetch from "./useFetch";

// All of the interventions with data from backend, into the usestate call API
const Home = () => {
  const {
    data: interventions,
    isLoading,
    error,
  } = useFetch("http://localhost:8000/Interventions");

  // const [name, setName] = useState("mario");

  // const handleDelete = (id) => {
  //   const newInterventions = interventions.filter(
  //     (intervention) => intervention.id !== id
  //   );
  //   setInterventions(newInterventions);
  // };

  //[] makes it so that it only runs the function after the first initial render. Dependancy array, when something happens to what is in [], the function is called. Use effect is where we fetch the data.

  // This is how you make the list with the properties you need. For each
  // {interventions} here is a prop
  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {interventions && (
        <InterventionList
          interventions={interventions}
          title="All Interventions"
          // handleDelete={handleDelete}
        />
      )}
      {/* <InterventionList
        interventions={interventions.filter(
          (intervention) => intervention.author === "mario"
        )}
        title="Mario Intervention"
        handleDelete={handleDelete}
      /> */}
    </div>
  );
};

export default Home;
