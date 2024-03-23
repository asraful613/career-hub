const Banner = () => {
    return (
        <div>
           <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
        <img src="/src/assets/images/user.png" className="max-w-sm rounded-lg shadow-xs" />
        <div>
      <h1 className="text-5xl font-bold">One Step Closer To Your <br></br><span className="text-blue-500"> Dream Job!</span></h1>
      <p className="py-6">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. <br/> Manage all your job application from start to finish.</p>
      <button className="btn text-white bg-slate-800">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;