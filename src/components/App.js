import Editor from "./Editor";
import { useState, useEffect } from "react";

function App() {
  const [html, setHtml] = useState("<h1>Start Coding here..</h1>");
  const [css, setCss] = useState("");
  const [javascript, setJavascript] = useState("");
  const [preview, setPreview] = useState("");

  const srcDoc1 =
    "<body>" +
    html +
    "</body>" +
    "<style>" +
    css +
    "</style>" +
    "<script>" +
    javascript +
    "</script>";

  const srcDoc = "<html>" + srcDoc1 + "</html>";

  useEffect(() => {
    setTimeout(() => setPreview(srcDoc), 2000);
  });

  return (
    <>
      <div className="top-card">
        <div className="nav">
          <table>
            <th colSpan="1">
              {" "}
              <img
                src="https://img.freepik.com/free-icon/html-5_318-674234.jpg"
                alt=""
              />{" "}
              HTML
            </th>
            <th colSpan="1">
              {" "}
              <img
                src="https://cdn.worldvectorlogo.com/logos/css-3.svg"
                alt=""
              />{" "}
              CSS
            </th>
            <th colSpan="1">
              {" "}
              <img
                src="https://cdn.iconscout.com/icon/free/png-256/free-javascript-2038874-1720087.png"
                alt=""
              />
              JS
            </th>
          </table>
        </div>
        <div className="App">
          <Editor
            className="Editors"
            mode="html"
            onChange={(e) => {
              setHtml(e);
            }}
            value={html}
          />
          <Editor
            mode="css"
            onChange={(e) => {
              setCss(e);
            }}
            value={css}
          />

          <Editor
            mode="javascript"
            onChange={(e) => {
              setJavascript(e);
            }}
            value={javascript}
          />
        </div>
      </div>
      <div>
        <div>
          <iframe
            srcDoc={preview}
            title="output"
            sandbox="allow-scripts"
            frameborder="0"
            width="100%"
            height="100%"
          />
        </div>
      </div>
      <p className="footer">Developed By : Priyansh Jha</p>
    </>
  );
}

export default App;
