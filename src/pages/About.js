const About = () => {
  const myYear = new Date().getFullYear();

  return (
    <div className="container">
      <div className="mt-4 p-5 bg-secondary text-black rounded">
        <h1>flyup.uk</h1>
        <br />
        <p>Hi, my name is Jason, welcome to my website.</p>
        <p>
          This site is currently used for code practice but feel free to browse.
          The content of the site is based on my hobbies including:
          Paramotoring, Paragliding, Kitesurfing, Wakeboarding and Snowboarding.
        </p>
        <p>New for 2022 Wingfoiling.</p>
      </div>
      <br></br>
      <p>Web Master: Jason Grunill</p>
      <p>&copy; {`flyup.uk - ${myYear}`}</p>
    </div>
  );
};

export default About;
