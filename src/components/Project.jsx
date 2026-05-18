function Project({ title, image }) {
  return (
    <div className="col-6 mb-3">

      <div className="border text-center">

        <img src={image} alt={title} style={{ width: "100%", height: "150px", objectFit: "cover" }}/>

        <div className="p-2">
          {title}
        </div>

      </div>

    </div>
  );
}

export default Project;