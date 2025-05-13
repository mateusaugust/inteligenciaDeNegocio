import { Box, TextField, Typography } from "@mui/material";
import { ChartContainer, ChartsXAxis, ChartsYAxis } from "@mui/x-charts";
import { BarLabel, BarPlot } from "@mui/x-charts/BarChart";
import { useState } from "react";
import { LinearSimples, PolinomialSimples } from "../Hooks/CalculosRegression";

export const CalcView = () => {

    const [year, setYear] = useState<number>(2025);
    const [inflation, setInflation] = useState(6.03);
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
         <TextField id="filled-basic" label="Previsão inflação para o ano:" variant="filled" onChange={(e)=>setInflation(Number(e.target.value))} value={inflation} type="number"/>
        <ChartContainer
          xAxis={[{ scaleType: "band", data: ["L Simples", "P Simples", "P Múltipla"] }]}
          series={[
            {
              type: "bar",
              id: "base",
              data: [LinearSimples(year), PolinomialSimples(year,inflation), year+6*2],
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
