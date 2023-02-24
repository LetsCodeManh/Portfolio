const HeroCase = () => {
  return (
    <div className="flex flex-col text-center items-center justify-center h-[50vh] bg-fixed bg-center bg-cover backgroundImage relative">
      <div className="absolute bg-dark inset-0 opacity-50" />
      <div className="flex flex-col z-10 gap-4 text-primary fixed">
        <h1 className="subheader">Case Study</h1>
        <h2 className="header">Developing a Modern <br/>Portfolio Website</h2>
        <p>Readtime: 10 min</p>
      </div>
    </div>
  );
};

export default HeroCase;
