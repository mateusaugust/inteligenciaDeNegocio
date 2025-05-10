import { Box, TextField, Typography } from "@mui/material";
import { ChartContainer, ChartsXAxis, ChartsYAxis } from "@mui/x-charts";
import { BarLabel, BarPlot } from "@mui/x-charts/BarChart";
import { useState } from "react";

export const CalcView = () => {

    const [year, setYear] = useState<number>(2025);
  return (
    <Box
      sx={{
        boxShadow: 3,
        width: "100%",
        borderRadius: "10px",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box sx={{ gap:'20px',padding: "10px", width:'100%', display:'flex', alignItems:'center', flexDirection:'column' }}>
        <TextField id="filled-basic" label="Previsão Para:" variant="filled" onChange={(e)=>setYear(Number(e.target.value))} value={year}/>

        <ChartContainer
          xAxis={[{ scaleType: "band", data: ["L Simples", "P Simples", "P Múltipla"] }]}
          series={[
            {
              type: "bar",
              id: "base",
              data: [year+1, year+5*2, year+6*2],
            },
          ]}
          colors={['#213435']}
          
          
        >
          <BarPlot barLabel="value" slots={{ barLabel: BarLabel }} />
          <ChartsXAxis />
          <ChartsYAxis />
        </ChartContainer>

       
      </Box>
      <Box sx={{width:'100%'}}>
         <Typography sx={{paddingLeft:'50px'}}>
            1°- Linear Simples <br/>
            2°- Polinomial Simples<br/>
            3°- Polinomial Múltipla
        </Typography>
      </Box>
    </Box>
  );
};
