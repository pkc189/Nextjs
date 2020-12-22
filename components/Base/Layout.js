import Link from "next/link";
import Header from "./Header.js";

const Layout = (props) => {
  return (
    <>
     

      <Header />
      <div className="three_side">
      <div className="side_panel">1</div>
      <div className="main">
      {props.children}
      </div>
      <div className="blog_panel">3</div>
      </div>
      <h1>Layout</h1>







       <style jsx global>
        {`
          @import url("https://fonts.googleapis.com/css2?family=Andika+New+Basic:wght@700&display=swap");
          body {
            width:100%;
            padding: 0;
            margin: 0;
            font-family: "Andika New Basic", sans-serif;
          }

          a {
            text-decoration: none;
          }

          .three_side{
            display:grid;
            grid-template-coloumn:150px 1fr 200px;width:100%;
          }

.side_panel{
  grid-column:1/2;background:red
}

.main{
  grid-column:2/3;
}
.blog_panel{
  grid-column:3/4;background:red
}

        `}
      </style>
    </>
  );
};

export default Layout;
