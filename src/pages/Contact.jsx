import { useLocation } from "react-router-dom";

function Contact() {
  const queryString = useLocation().search;
  console.log(queryString);

  const queryParams = new URLSearchParams(queryString);
  const name = queryParams.get("name");

  return (
    <div>
      <h2>Hey {name}, Contact us here...</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores
        debitis optio quasi maxime quos? Tempore officiis commodi reprehenderit,
        mollitia velit quasi molestias facilis rem voluptate ab provident, amet
        explicabo odio.
      </p>
    </div>
  );
}

export default Contact;
