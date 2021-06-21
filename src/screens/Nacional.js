import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, StatusBar, Button } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import Cards from "../components/Cards";
import axios from "axios";

export default function Home({navigation}) {
  let url =
    "https://api.brasil.io/v1/dataset/covid19/caso/data/";
  let token = "36ebf67e9b4996dece53cc43683fa3bdf8d0d82e";
  const [dados, setDados] = useState([]);
  const [ac, setAC] = useState([]);
  const [al, setAL] = useState([]);
  const [am, setAM] = useState([]);
  const [ap, setAP] = useState([]);
  const [bh, setBH] = useState([]);
  const [ce, setCE] = useState([]);
  const [df, setDF] = useState([]);
  const [es, setES] = useState([]);
  const [go, setGO] = useState([]);
  const [ma, setMA] = useState([]);
  const [mg, setMG] = useState([]);
  const [mt, setMT] = useState([]);
  const [pa, setPA] = useState([]);
  const [pb, setPB] = useState([]);
  const [pe, setPE] = useState([]);
  const [pi, setPI] = useState([]);
  const [pr, setPR] = useState([]);
  const [rj, setRJ] = useState([]);
  const [ro, setRO] = useState([]);
  const [rs, setRS] = useState([]);


  useEffect(() => {
    axios
      .get(url, {
        method: "get",
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data.results);
        setDados(response.data.results);
        setAC(response.data.results[0]);
        setAL(response.data.results[1]);
        setAM(response.data.results[2]);
        setAP(response.data.results[3]);
        setBH(response.data.results[4]);
        setCE(response.data.results[5]);
        setDF(response.data.results[6]);
        setES(response.data.results[7]);
        setGO(response.data.results[8]);
        setMA(response.data.results[9]);
        setMG(response.data.results[10]);
        setMT(response.data.results[11]);
        setPA(response.data.results[12]);
        setPB(response.data.results[13]);
        setPE(response.data.results[14]);
        setPI(response.data.results[15]);
        setPR(response.data.results[16]);
        setRJ(response.data.results[17]);
        setRO(response.data.results[18]);
        setRS(response.data.results[19]);
      });
  }, []);

  

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Text style={styles.textDash}>RELATÓRIO COVID 19</Text>
      <View style={styles.viewButton}>
      <Button color="#fff" title="Relatório Paraense" onPress={() => navigation.navigate('Home')}/>
      </View>

      <View style={styles.colContainer}>
        <Text style={styles.textGlobal}>ESTADOS</Text>
      </View>
      <Text style={styles.textConfirmed}>Casos confirmados:</Text>
      <View>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
          <Cards 
            title="ACRE"
            bg="#D0DFE6"
            number={ac.confirmed}
          />
          <Cards 
            title="ALAGOAS"
            bg="#D0DFE6"
            number={al.confirmed}
          />
          <Cards
            title="AMAZONAS"
            bg="#D0DFE6"
            number={am.confirmed}
          />
          <Cards
            title="AMAPÁ"
            bg="#D0DFE6"
            number={ap.confirmed}
          />
          <Cards
            title="BAHIA"
            bg="#D0DFE6"
            number={bh.confirmed}
          />
          <Cards
            title="DISTRITO FEDERAL"
            bg="#D0DFE6"
            number={df.confirmed}
          />
          <Cards
            title="ESPIRITO SANTO"
            bg="#D0DFE6"
            number={es.confirmed}
          />
          <Cards
            title="GOIANIA"
            bg="#D0DFE6"
            number={go.confirmed}
          />
          <Cards
            title="MARANHÃO"
            bg="#D0DFE6"
            number={ma.confirmed}
          />
          <Cards
            title="MINAS GERAIS"
            bg="#D0DFE6"
            number={mg.confirmed}
          />
          <Cards
            title="MT"
            bg="#D0DFE6"
            number={mt.confirmed}
          />
          <Cards
            title="PARÁ"
            bg="#D0DFE6"
            number={pa.confirmed}
          />
          <Cards
            title="PARAÍBA"
            bg="#D0DFE6"
            number={pb.confirmed}
          />
          <Cards
            title="PERNAMBUCO"
            bg="#D0DFE6"
            number={pe.confirmed}
          />
          <Cards
            title="PIAUÍ"
            bg="#D0DFE6"
            number={pi.confirmed}
          />
          <Cards
            title="PARANÁ"
            bg="#D0DFE6"
            number={pr.confirmed}
          />
          <Cards
            title="RIO DE JANEIRO"
            bg="#D0DFE6"
            number={rj.confirmed}
          />
          <Cards
            title="RONDÔNIA"
            bg="#D0DFE6"
            number={ro.confirmed}
          />
          <Cards
            title="RIO GRANDE DO SUL"
            bg="#D0DFE6"
            number={rs.confirmed}
          />
        </ScrollView>
      </View>
      <Text style={styles.titleView2}>INFORMAÇÕES</Text>
      <Text style={styles.descAPI}>
      App desenvolvido com React Native e Expo usando Axios para consumir a api e React Hooks para manipular os dados. Todos os dados foram obtidos pelas Secretarias de Saúde das Unidades Federativas e foram tratados por Álvaro Justen e colaboradores da Brasil.io. Os dados dados convertidos estão sob a licença Creative Commons Attribution ShareAlike.
      </Text>
      <Text style={styles.titleView2}>EQUIPE</Text>
      <Text style={styles.titleView2}>FELIPE MATHEUS</Text>
      <Text style={styles.titleView2}>PAULA JATENE</Text>
      <Text style={styles.titleView2}>JOÃO PEDRO</Text>
      <Text style={styles.titleView2}>JOSÉ PAULO</Text>
      <Text style={styles.titleView2}>MARCELO VINÍCIUS</Text> 
      <Text style={styles.titleView2}>MARCELO GIOVANE</Text>  
      <Text style={styles.titleView2}>MÁRIO FERNANDES</Text>   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#252c41",
  },
  cardContainer: {
    height: 150,
    width: 320,
    alignSelf: "center",
    backgroundColor: "#6A706E",
    borderRadius: 30,
  },
  card: {
    height: 150,
    width: 260,
    paddingTop: 10,
    paddingHorizontal: 30,
    backgroundColor: "#2b3240",
    borderRadius: 30,
    flexDirection: "row",
  },
  title: {
    color: "#6A706E",
    width: 100,
    fontSize: 12,
    fontWeight: "bold",
  },
  number: {
    color: "#FFF",
    width: 100,
    fontSize: 22,
    fontWeight: "bold",
    marginTop: -10,
  },
  textCovid: {
    transform: [{ rotate: "-90deg" }],
    color: "#3a4b4f",
    fontSize: 14,
    width: 90,
    marginLeft: -35,
    fontWeight: "bold",
    marginTop: 20,
  },
  noCard: {
    marginBottom: 10,
    color: "#FFF",
    alignSelf: "center",
  },
  map: {
    height: 200,
    paddingTop: 25,
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  col: {
    flexDirection: "row",
  },
  minusIcon: {
    marginTop: -20,
    marginLeft: 5,
  },
  avatarContainer: {
    width: "50%",
    alignItems: "flex-end",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  textDash: {
    color: "#FFF",
    fontSize: 20,
    alignSelf: "center",
    marginTop: 40,
    fontWeight: "bold",
  },
  colContainer: {
    flexDirection: "row",
    paddingHorizontal: 30,
    marginTop: 0,
    alignItems: "center",
  },
  textGlobal: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#fff",
    margin: 10,
    alignSelf: "center"
  },
  textRussia: {
    fontWeight: "bold",
    fontSize: 16,
    paddingHorizontal: 30,
    color: "#6a706e",
  },
  reloadContainer: {
    backgroundColor: "#FFF",
    elevation: 2,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 50,
  },
  att: {
    alignSelf: "center",
    color: "#fff",
    margin: 10,
    fontSize: 15,
    fontWeight: "bold",
  },
  titleView2: {
    alignSelf: "center",
    color: "#fff",
    margin: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
  flatList: {
    flexDirection: "row",
    margin: 5,
    alignSelf: "center",
    backgroundColor: "#D0DFE6",
    borderRadius: 13,
    padding: 10,
    width: 360,
    height: 50,
    justifyContent: "space-between",
    flex: 1,
    flexWrap: "wrap",
  },
  itensList: {
    flexDirection: "row",
    alignSelf: "center",
    flexWrap: "wrap",
  },
  viewButton: {
    color: "#010101",
    backgroundColor: "#f1404b",
    borderRadius: 30,
    marginLeft: 80,
    marginRight: 80,
    marginTop: 10,
  },
  textConfirmed: {
    color: "#f1404b",
    marginBottom: 10,
    fontWeight: "bold",
    marginLeft: 20,
    alignSelf: "center"
  },
  descAPI: {
    color: "#fff",
    textAlign: "center"
  }
});
