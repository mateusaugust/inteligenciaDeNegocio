import { Alert, Box, Link, TextField, Typography } from "@mui/material";
import { ChartContainer, ChartsXAxis, ChartsYAxis, Gauge } from "@mui/x-charts";
import { BarLabel, BarPlot } from "@mui/x-charts/BarChart";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import {
  LinearSimples,
  PolinomialSimples,
  PolinomialMultipla,
} from "../Hooks/CalculosRegression";

export const CalcView = () => {
  const [year, setYear] = useState<number>(2025);
  const [inflation, setInflation] = useState(6.03);
  const [icms, setIcms] = useState(18.0);
  const [real, setReal] = useState(5.66);

  return (
    <Box
      sx={{
        boxShadow: 3,
        width: "100%",
        borderRadius: "10px",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          gap: "20px",
          padding: "10px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Grid container spacing={1}>
          <Grid size={6} sx={{ justifyContent: "center", display: "flex" }}>
            <TextField
              id="filled-basic"
              label="Previsão Para:"
              variant="filled"
              onChange={(e) => setYear(Number(e.target.value))}
              value={year}
            />
          </Grid>

          <Grid size={6} sx={{ justifyContent: "center", display: "flex" }}>
            <TextField
              id="filled-basic"
              label="Previsão inflação para o ano:"
              variant="filled"
              onChange={(e) => setInflation(Number(e.target.value))}
              value={inflation}
              type="number"
            />
          </Grid>

          <Grid size={6} sx={{ justifyContent: "center", display: "flex" }}>
            <TextField
              id="filled-basic"
              label="ICMS"
              variant="filled"
              onChange={(e) => setIcms(Number(e.target.value))}
              value={icms}
              type="number"
            />
          </Grid>

          <Grid size={6} sx={{ justifyContent: "center", display: "flex" }}>
            <TextField
              id="filled-basic"
              label="Valor Real Frente ao Dolar"
              variant="filled"
              onChange={(e) => setReal(Number(e.target.value))}
              value={real}
              type="number"
            />
          </Grid>
        </Grid>

        <ChartContainer
          xAxis={[
            {
              scaleType: "band",
              data: ["L Simples", "P Simples", "P Múltipla(/10000.5)"],
            },
          ]}
          series={[
            {
              type: "bar",
              id: "base",
              data: [
                LinearSimples(year),
                PolinomialSimples(year),
                PolinomialMultipla(year, inflation),
              ],
            },
          ]}
          colors={["#213435"]}
        >
          <BarPlot barLabel="value" slots={{ barLabel: BarLabel }} />
          <ChartsXAxis />
          <ChartsYAxis />
        </ChartContainer>
      </Box>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          padding: "15px",
          alignItems: "center",
          justifyContent: "center",
          gap: "15px",
        }}
      >
        <Typography>
          1°- Linear Simples <br />
          2°- Polinomial Simples
          <br />
          3°- Polinomial Múltipla
        </Typography>
        <Alert severity="info">
          O melhor resultado foi o calculo com a Regressão Linear Simples.
          <br /> O Polinomial Simples tive que deixar Grau 2 <br />
          para nao dar overfitting como demonstrado no Polinomial Múltipla{" "}
        </Alert>
      </Box>

      <Box>
        <Grid container spacing={2}>
          <Grid
            size={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#213435",
              borderRadius: "15px",
              padding: "5px",
              color: "white",
            }}
          >
            <Typography>Valor em Real</Typography>
          </Grid>

          <Grid
            size={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography>Linear Simples</Typography>
            <Gauge
              width={100}
              height={100}
              valueMax={1000}
              value={Number((LinearSimples(year) * real).toFixed(2))}
            />
          </Grid>

          <Grid
            size={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography>Polinomial Simples</Typography>
            <Gauge
              width={100}
              height={100}
              valueMax={1000}
              value={Number((PolinomialSimples(year) * real).toFixed(2))}
            />
          </Grid>

          <Grid
            size={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#213435",
              borderRadius: "15px",
              padding: "5px",
              color: "white",
            }}
          >
            <Typography>Valor em Real + Inflção</Typography>
          </Grid>

          <Grid
            size={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography>Linear Simples</Typography>
            <Gauge
              width={100}
              height={100}
              valueMax={1000}
              value={Number(
                (LinearSimples(year) * real * (1 + inflation / 100)).toFixed(2)
              )}
            />
          </Grid>

          <Grid
            size={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography>Polinomial Simples</Typography>
            <Gauge
              width={100}
              height={100}
              valueMax={1000}
              value={Number(
                (
                  PolinomialSimples(year) *
                  real *
                  (1 + inflation / 100)
                ).toFixed(2)
              )}
            />
          </Grid>

          <Grid
            size={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#213435",
              borderRadius: "15px",
              padding: "5px",
              color: "white",
            }}
          >
            <Typography>Valor em Real + Inflção + ICMS</Typography>
          </Grid>

          <Grid
            size={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography>Linear Simples</Typography>
            <Gauge
              width={100}
              height={100}
              valueMax={1000}
              value={Number(
                (
                  (LinearSimples(year) * real * (1 + inflation / 100)) /
                  (1 - icms / 100)
                ).toFixed(2)
              )}
            />
          </Grid>

          <Grid
            size={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography>Polinomial Simples</Typography>
            <Gauge
              width={100}
              height={100}
              valueMax={1000}
              value={Number(
                (
                  (PolinomialSimples(year) * real * (1 + inflation / 100)) /
                  (1 - icms / 100)
                ).toFixed(2)
              )}
            />
          </Grid>

          <Grid
            size={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              borderRadius: "15px",
              padding: "5px",
              color: "white",
            }}
          >
            <Alert severity="warning">
              Lembrando que esses valores não incluem gastos como: transporte,
              percentual de lucro e entre outros...
            </Alert>
          </Grid>

          <Grid
            size={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              borderRadius: "15px",
              padding: "5px",
              color: "white",
            }}
          >
            <Alert severity="info">
              <Link
                sx={{ textAlign: "center" }}
                href="https://www.taxgroup.com.br/intelligence/icms-mg-tabela-atualizada/"
              >
                Referência para calculo ICMS
              </Link>

              
              <br />
              <Link
                sx={{ textAlign: "center" }}
                href="https://g.co/kgs/y7vCWYF"
              >
                Referência para valor do Real Frente ao Dolar
              </Link>

              <br />
           
              <Link
                sx={{ textAlign: "center" }}
                href="https://inesc.org.br/controlar-a-inflacao-de-alimentos-requer-mais-estado/?gad_source=1&gad_campaignid=12590076447&gbraid=0AAAAADN7M0cEoeO_Lys8QeV-hTBviWwc5&gclid=CjwKCAjw24vBBhABEiwANFG7y-FsH_kJ0P300lMHhKj7T_GxMMWKBOLv0AWDOmiwNpgLtx6GyvvulxoCPzkQAvD_BwE"
              >
                Referência Sobre outros Fatores que pode afetar o preço do café alem da inflação e impostos
              </Link>
            </Alert>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
