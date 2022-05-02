const InterventionList = ({ interventions, title }) => {
  // up there, the props are deconstructed, I dont need to declare consts if I do that
  //   const title = props.title;
  //   console.log(props, interventions);
  return (
    <div className="intervention-list">
      <h2>{title}</h2>
      {interventions.map((intervention) => (
        <div className="intervention-preview" key={intervention.id}>
          <a href={`/interventions/${intervention.id}`}>
            <h2>{intervention.title}</h2>
            <p>Written by {intervention.author}</p>
          </a>
          {/* <button onClick={() => handleDelete(intervention.id)}>delete intervention</button> */}
        </div>
      ))}
    </div>
  );
};

export default InterventionList;
