import { Box, Typography, Link } from "@mui/material";

export const About = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
      <Box
        sx={{ backgroundColor: "#213435", borderRadius: "10px", boxShadow: 3 }}
      >
        <Typography sx={{ color: "white", textAlign: "center" }}>
          SOBRE
        </Typography>
      </Box>

      <Box
        sx={{
          backgroundColor: "#213435",
          borderRadius: "10px",
          boxShadow: 3,
          padding: "15px",
          gap: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems:'center'
        }}
      >
        <Typography
          sx={{ color: "white", textAlign: "center", fontSize: "15px" }}
        >
          <b>Base de dados usada</b>
        </Typography>

        <Link sx={{textAlign:"center"}} href="https://www.kaggle.com/datasets/timmofeyy/-coffee-rice-and-beef-price-changes-for-30-years">
          ☕Coffee, Rice and Beef Prices Changes for 30 Years
        </Link>

        <Typography
          sx={{ color: "white", textAlign: "center", fontSize: "15px" }}
        >
          <b>Motivação pela Escolha da Base de Dados</b>
          <br />
        </Typography>

        <Typography sx={{color:'white', fontSize:'10px', textAlign:'justify'}}>
        <br />A escolha desta base de dados se deu por sua consistência e
          relevância em relação à minha atuação atual no mercado de trabalho.<br/>
          Apesar de conter informações sobre diversas commodities, o café foi o
          principal foco de interesse devido à riqueza e profundidade dos dados
          disponíveis. <br/>A base inclui variáveis fundamentais como preço, ano,
          mês, inflação e o preço ajustado pela inflação, o que possibilita
          análises mais precisas e contextualizadas.<br/> Esses dados serviram como
          base para prever as tendências do mercado de café, permitindo que
          usuários explorem a evolução dos preços ao longo do tempo.
        </Typography>

        <Link sx={{textAlign:"center"}} href="https://docs.google.com/document/d/1--YVrjdmaflTVIKWeFdowR8bbyJhfHki1RfTzL0l2lw/edit?usp=sharing">
          Questões Respondidas 
        </Link>
      </Box>
    </Box>
  );
};
