import React, { useState } from "react";
import { View, Text, FlatList, TextInput } from "react-native";
import useCsLatest from "../hooks/cs/useCsLatest";
import styles from "../styles";
import { CSCurrencies, CSRates } from "../interfaces/cs";
import SearchableDropdown from "../components/common/SearchableDropdown";
import { useEffect } from "react";

interface CSRate {
  currency: string;
  rate: number;
}

export default function Currencies() {
  const [query, setQuery] = useState("");
  const [base, setBase] = useState<CSCurrencies>("USD");

  const { data, error } = useCsLatest(base) || {};

  const rates = sortRatesArray(ratesToArray(data?.rates), "currency", 1);
  let filteredRates = sortRatesArray(ratesToArray(data?.rates), "rate", 1);
  if (query.length > 0) filteredRates = filterRatesArray(filteredRates, query);

  return (
    <View style={styles.misc.screen}>
      <Text style={styles.text.h3}>Currencies</Text>

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
          options={rates.map((rate) => ({
            value: rate.currency,
            title: rate.currency,
          }))}
          onChange={(value) => setBase(value as CSCurrencies)}
          initialValue={base}
        />
      </View>

      <TextInput
        style={{
          ...styles.inputs.outlined,
          marginTop: 16,
          width: "100%",
          textAlign: "center",
        }}
        placeholder="Search Currencies"
        value={query}
        onChangeText={(text) => setQuery(text)}
      />

      {error != null && (
        <Text style={{ ...styles.text.h6, ...styles.text.red }}>{error}</Text>
      )}

      {data == null && (
        <Text style={{ ...styles.text.h6, marginTop: 32 }}>Loading...</Text>
      )}

      {data != null && (
        <FlatList
          data={filteredRates}
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

function sortRatesArray(rates: CSRate[], key: keyof CSRate, direction: 1 | -1) {
  return rates.sort((a, b) => {
    const [aIndexed, bIndexed] = [a[key], b[key]];
    if (typeof aIndexed === "string" && typeof bIndexed === "string") {
      return direction > 0
        ? aIndexed.localeCompare(bIndexed)
        : bIndexed.localeCompare(aIndexed);
    } else if (typeof aIndexed === "number" && typeof bIndexed === "number") {
      return direction > 0 ? aIndexed - bIndexed : aIndexed - bIndexed;
    }
    return 0;
  });
}
