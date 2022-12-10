import { useTheme } from "next-themes";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";

const Mode = () => {
  const { systemTheme, theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <div
          className="w-10 h-10 text-yellow-500 "
          role="button"
          onClick={() => setTheme("light")}
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-b from-yellow-200 to-orange-400 flex justify-center items-center  ">
            {" "}
            <div className="h-7 w-7 rounded-full bg-white flex justify-center items-center  ">
              {" "}
              <Icon
                className="h-full w-full p-0.5 "
                icon="mingcute:sun-fill"
              />{" "}
            </div>{" "}
          </div>
        </div>
      );
    } else {
      return (
        <div
          className="w-10 h-10 text-blue-900 "
          role="button"
          onClick={() => setTheme("dark")}
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-b from-blue-800 to-blue-500 flex justify-center items-center  ">
            {" "}
            <div className="h-7 w-7 rounded-full bg-white ">
              <Icon
                className="h-full w-full p-0.5 "
                icon="ph:moon-stars-fill"
              />{" "}
            </div>{" "}
          </div>
        </div>
      );
    }
  };

  return (
    <div className="h-15 ">
      <div className="container  px-4 sm:px-6 py-4 flex justify-between items-center">
        {renderThemeChanger()}
      </div>
    </div>
  );
};

export default Mode;
