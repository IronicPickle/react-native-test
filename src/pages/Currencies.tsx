import React, { useState } from "react";
import { View, Text, FlatList, TextInput } from "react-native";
import useCsLatest from "../hooks/cs/useCsLatest";
import styles from "../styles";
import { CSCurrencies, CSRates } from "../interfaces/cs";
import { currencies } from "../utils/generic";
import SearchableDropdown from "../components/common/SearchableDropdown";

interface CSRate {
  currency: string;
  rate: number;
}

export default function Currencies() {
  const [query, setQuery] = useState("");
  const [base, setBase] = useState<CSCurrencies>("USD");

  const { data, error } = useCsLatest(base) || {};

  let rates = ratesToArray(data?.rates);
  if (query.length > 0) rates = filterRatesArray(rates, query);
  rates = sortRatesArray(rates, 1);
  console.log(base);

  return (
    <View style={styles.misc.screen}>
      <Text style={styles.text.h3}>Currencies</Text>

      <TextInput
        style={{
          ...styles.inputs.outlined,
          marginTop: 16,
          width: 180,
          textAlign: "center",
        }}
        placeholder="Search Currencies"
        value={query}
        onChangeText={(text) => setQuery(text)}
      />

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 16,
          zIndex: 10000,
        }}
      >
        <Text style={{ ...styles.text.h6, marginRight: 16 }}>
          Base Currency
        </Text>
        <SearchableDropdown
          options={rates.map((rate, i) => ({
            value: rate.currency,
            title: rate.currency,
          }))}
          onChange={(value) => setBase(value as CSCurrencies)}
          initialValue={base}
        ></SearchableDropdown>
        {/*<Picker
          selectedValue={base}
          onValueChange={(currency: CSCurrencies) => setBase(currency)}
          mode="dropdown"
          style={styles.pickers.outlined}
          itemStyle={styles.pickers.item}
        >
          {currencies.map((currency, i) => (
            <Picker.Item key={i} label={currency} value={currency} />
          ))}
          </Picker>*/}
      </View>

      {error != null && (
        <Text style={{ ...styles.text.h6, ...styles.text.red }}>{error}</Text>
      )}

      {data != null && (
        <FlatList
          data={rates}
          renderItem={({ item }) => {
            const { currency, rate } = item;
            return (
              <View
                style={{
                  marginVertical: 8,
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.text.h6}>1 {data.base}</Text>
                <Text style={styles.text.h6}>
                  {rate} {currency}
                </Text>
              </View>
            );
          }}
          keyExtractor={(item) => item.currency}
          style={{
            width: "100%",
            padding: 16,
            marginTop: 16,
            flexShrink: 1,
            height: "50%",
          }}
        />
      )}
    </View>
  );
}

function ratesToArray(rates?: CSRates) {
  if (rates == null) return [];
  return Object.entries(rates).map((entry) => ({
    currency: entry[0],
    rate: entry[1],
  }));
}

function filterRatesArray(rates: CSRate[], query: string) {
  return rates.filter((rate) => rate.currency.includes(query.toUpperCase()));
}

function sortRatesArray(rates: CSRate[], direction: 1 | -1) {
  return rates.sort((a, b) =>
    direction > 0 ? a.rate - b.rate : a.rate - b.rate
  );
}
