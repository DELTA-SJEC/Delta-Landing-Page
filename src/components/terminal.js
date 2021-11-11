import React from "react";
import Terminal from "terminal-in-react";
const TerminalX = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Terminal
        color="green"
        backgroundColor="black"
        barColor="black"
        style={{ fontWeight: "bold", fontSize: "1em" }}
        commands={{
          "open-google": () => window.open("https://www.google.com/", "_blank"),
          "open-github": () =>
            window.open("https://www.github.com/DELTA-SJEC", "_blank"),
          "type-text": (args, print, runCommand) => {
            const text = args.slice(1).join(" ");
            print("");
            for (let i = 0; i < text.length; i += 1) {
              setTimeout(() => {
                runCommand(`edit-line ${text.slice(0, i + 1)}`);
              }, 100 * i);
            }
          },
          showmsg: () => {
            "Hello World";
          },
          popup: () => alert("Terminal in React"),
        }}
        descriptions={{
          "open-google": "opens google.com",
          "open-github": "opens github.com",
          "type-text": "type text",
          showmsg: "shows a message",
          alert: "alert",
          popup: "alert",
        }}
        msg="You can write anything here. Example - Hello! My name is Foo and I like Bar."
      />
    </div>
  );
};

export default TerminalX;
