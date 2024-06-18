const Blogs = () => {

  const styles = {
      "font-weight": "500",
      "color": "#646cff",
      "text-decoration": "none",
  }

  return (
    <>
      <h1>Blog Articles</h1>
      <p>
        This is a website I make when I learn about ReactJS in 2024.<br/>
        Well, I joined in a project for my school so I tried my best to finish it at good as I can.<br/>
        First, in Tutorial, I sumarized some basics in React such as components, JSX, props, state,... and an important notion in ReactJS which is Hook.<br/>
        Second, in Fetch Data, I learned how to use AXIOS and how to fetch API data in ReactJS, which help to interact with BackEnd.<br/>
        Third, I learned about some advanced problems such as Performan Optimization, ReactJS with Boostrap and NextJS.<br/>
        Beside that, I made some small applications to practice with what I learned, these applications are very simple but basic for begginer in ReactJS.<br/>
        If there are any mistake, you can mail me at <a style={styles} href="#">phat.nguyen221252729@hcmut.edu.vn</a>.
      </p>
    </>
  );
};
  
  export default Blogs;