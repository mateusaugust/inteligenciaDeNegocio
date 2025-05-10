import { Box, Button } from "@mui/material";
import { About } from "./Components/About";
import { useState } from "react";
import { CalcView } from "./Components/CalcView";

export function App() {
  const [menuType, setMenuType] = useState<string>("calc");
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#213435",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button sx={{ width: "50%", color: "white" }} onClick={()=> setMenuType('calc')}>Calculo</Button>
        <Button sx={{ width: "50%", color: "white" }} onClick={()=> setMenuType('about')}>Sobre</Button>
      </Box>

      {menuType == "calc" && <CalcView />}

      {menuType == "about" && <About />}
    </Box>
  );
}
