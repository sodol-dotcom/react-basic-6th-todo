// Layout.jsx
import React from "react";

const Layout = ({ children }) => {
  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <header>
        <h1>Todo Application</h1>
      </header>
      <main>{children}</main>
      <footer>
        <p>© 2024 My Todo App</p>
      </footer>
    </div>
  );
};

export default Layout;
