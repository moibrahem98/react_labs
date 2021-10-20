/* eslint-disable jsx-a11y/img-redundant-alt */
import {Card} from "./components/Card";

export const App = () => {
    const informations = [
    { title: "John Smith", mail: 'John@gmail.com', body: "my first information in react app" },
    { title: "Smith Brado", mail: 'Smith@yahoo.com', body: "my second information in react app" },
    { title: "Rocky Balboa", mail: 'Rocky@hotmail.com', body: "my Third information in react app" },
  ];
  return (
    <div>
      <img alt='image' src=""></img>
      {
        informations.map((info) =>(
          <Card title={info.title} mail={info.mail} body={info.body} />
        ))
      }
    </div>
  );
};
