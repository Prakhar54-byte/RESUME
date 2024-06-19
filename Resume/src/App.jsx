import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Social from "./components/social_media";

function App() {
  const [count, setCount] = useState(0);
  let mySocialMedia = {
    website_name: ["Github", "LinkedIn", "Instagram"],
    link: [
      "https://github.com/Prakhar54-byte",
      "https://www.linkedin.com/in/prakhar-chauhan-9a32b52b4/",
      "https://www.instagram.com/your_instagram_handle", // Replace with a valid URL
    ],
  };

  return (
    <>
      <main className="flex min-h-screen flex-col items-center min-width-1000px">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl text-red-600">Hello my name is Prakhar!</h1>
          <br />
          <br />
          <br />
          <Social
            website_name={mySocialMedia.website_name}
            link={mySocialMedia.link}
          />
          <section className="bg-white rounded-lg shadow m-4 dark:bg-orange-600 h-1 w-full mx-auto"></section>
        </div>
      </main>
    </>
  );
}

export default App;
