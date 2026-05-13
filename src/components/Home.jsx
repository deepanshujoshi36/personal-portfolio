import photo from "../images/sj.jpg";
function Home() {
  return (
    <section id="home" className="home">
      <div className="home-text">
        <h1>Hi, I'm Deepanshu Joshi</h1>

        <h3>BTech Student | React Developer</h3>

        <p>
          I am passionate about web development and building modern responsive
          websites.
        </p>

        <a href="/DJcv.pdf" download>
          <button>Download Resume</button>
        </a>
      </div>

      <div className="home-image">
        <img src={photo} alt="profile" />
      </div>
    </section>
  );
}

export default Home;
