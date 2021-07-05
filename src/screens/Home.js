import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, StatusBar, Button } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import Cards from "../components/Cards";
import axios from "axios";

export default function Home({navigation}) {
  let url =
    "https://api.brasil.io/v1/dataset/covid19/caso/data/?is_last=True&state=PA";
  let token = "36ebf67e9b4996dece53cc43683fa3bdf8d0d82e";
  const [dados, setDados] = useState([]);
  const [para, setPara] = useState([]);

  useEffect(() => {
    axios
      .get(url, {
        method: "get",
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((response) => {
        setDados(response.data.results);
        setPara(response.data.results[0]);
      });
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Text style={styles.textDash}>RELATÓRIO COVID 19</Text>
      <View style={styles.viewNacional}>
      </View>
      <Text style={styles.att}> Última atualização: {para.date}</Text>

      <View style={styles.colContainer}>
        <Text style={styles.textGlobal}>PARÁ</Text>
      </View>
      <View>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
          <Cards
            icon="md-pulse"
            title="CONFIRMADOS"
            bg="#f1404b"
            number={para.confirmed}
          />
          <Cards
            icon="ios-heart-dislike"
            title="MORTES"
            bg="#D0DFE6"
            number={para.deaths}
          />
          <Cards
            icon="ios-alert"
            title="TAXA / MÉDIA"
            bg="#B9EDF8"
            number={para.death_rate}
          />
        </ScrollView>
      </View>
      <Text style={styles.titleView2}>CIDADES</Text>
      <FlatList
        style={{ marginTop: 10 }}
        data={dados}
        keyExtractor={(item) => item.city}
        renderItem={({ item }) => {
          if (item.city == null) {
          } else {
            return (
              <View style={styles.flatList}>
                <Text
                  style={{
                    color: "#010101",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                  }}
                >
                  {item.city}
                </Text>
                <View style={styles.itensList}>
                  <Text
                    style={{
                      color: "#010101",
                      fontWeight: "bold",
                      marginRight: 10,
                    }}
                  >
                    Casos: {item.confirmed}
                  </Text>
                  <Text style={{ color: "#010101", fontWeight: "bold" }}>
                    Mortes: {item.deaths}
                  </Text>
                </View>
              </View>
            );
          }
        }}
      />
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
  viewNacional: {
    color: "#010101",
    backgroundColor: "#fff1ac",
    borderRadius: 30,
    marginLeft: 80,
    marginRight: 80,
    marginTop: 10,
  },
});
