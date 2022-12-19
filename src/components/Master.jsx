import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { useGlobal } from "./context";

import LoadingState from "./Loading";

import Search from "./Search";
import ToTop from "./ToTop";

const Master = () => {
  const { loading, todos } = useGlobal();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <ToTop />

      <div className="mx-5">
        <h2 className="text-center my-4">React Test Project</h2>
        <Search />

        <div className="grid-4 my-5">
          {loading ? (
            <LoadingState />
          ) : (
            todos.map((todo) => {
              const { id, title } = todo;
              return (
                <div className="single-grid" data-aos="zoom-in" key={id}>
                  <h5>{title}</h5>
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

export default Master;
