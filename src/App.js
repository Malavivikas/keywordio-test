import { Container } from "@mui/material";
import Navbar from "./components/NavBar";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MultiStepForm from "./components/Forms/MultiStepForm";

function App() {
  return (
    <Router>
      <Navbar />
      <Container sx={{ marginTop: 2 }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create" element={<MultiStepForm />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
