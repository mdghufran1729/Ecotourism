import React from "react";
import "./App.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Provider } from "react-redux";
import store from "./Redux/store";
import AllRoutes from "./Routes/AllRoutes";
import { BrowserRouter as Router } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        height: "100%",
      },
    },
  },
});

function App() {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Router>
          <Auth0Provider
            domain="dev-4hfinyqk536afex2.us.auth0.com"
            clientId="0tABiSQgYlPIMW1n7ifHalYBCukvJXLu"
            redirectUri={window.location.origin}
          >
            <div
              className="App"
              style={{
                backgroundImage:
                  "url(https://img.freepik.com/premium-vector/mountain-green-field-alpine-landscape-nature-with-wooden-houses_194708-1779.jpg?w=1380)",
                backgroundPosition: "center",
                backgroundSize: "cover",
                minHeight: "100vh",
              }}
            >
              <Navbar />
              <AllRoutes />
              <Footer />
            </div>
          </Auth0Provider>
        </Router>
      </ChakraProvider>
    </Provider>
  );
}

export default App;
