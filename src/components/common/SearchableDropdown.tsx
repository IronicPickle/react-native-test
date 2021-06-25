import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useLayoutEffect } from "react";
import {
  Pressable,
  PressableProps,
  ScrollView,
  View,
  ViewProps,
} from "react-native";
import {
  Text,
  TextInput,
  TextInputProps,
  useWindowDimensions,
} from "react-native";
import { CSCurrencies } from "../../interfaces/cs";
import styles from "../../styles";

interface Option {
  value: string;
  title: string;
}

interface Props {
  inputProps?: TextInputProps;
  viewProps?: ViewProps;
  optionProps?: PressableProps;
  options?: Option[];
  initialValue?: string;
  onChange: (value: string) => void;
}

const SearchableDropdown = (props: Props) => {
  const {
    inputProps,
    viewProps,
    optionProps,
    options = [],
    initialValue = "",
    onChange,
  } = props;

  const windowDims = useWindowDimensions();

  const [{ width, height }, setCoordsSize] = useState({
    width: 0,
    height: 0,
  });
  const [modalVisible, setModalVisible] = useState(false);
  const [inputValue, setInputValue] = useState(initialValue);
  const [finalValue, setFinalValue] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(options);

  const inputRef = useRef<TextInput | null>(null);

  useLayoutEffect(
    () =>
      inputRef.current?.measure((x, y, width, height) => {
        setCoordsSize({
          width: width || 0,
          height: height || 0,
        });
      }),
    [windowDims, modalVisible]
  );

  useEffect(() => setFilteredOptions(options), [setFilteredOptions, options]);

  useEffect(() => {
    if (options.find((option) => finalValue === option.value))
      onChange(finalValue);
  }, [options, onChange, finalValue]);

  useEffect(() => {
    if (inputValue.length === 0) return;
    setFilteredOptions(
      options.filter((option) => {
        return option.value.toLowerCase().includes(inputValue.toLowerCase());
      })
    );
  }, [setFilteredOptions, options, inputValue]);

  return (
    <View {...viewProps}>
      <TextInput
        {...inputProps}
        style={[styles.inputs.outlined, inputProps?.style]}
        ref={inputRef}
        onFocus={() => setModalVisible(true)}
        onBlur={(event) => {
          //setModalVisible(false);
        }}
        value={inputValue}
        onChangeText={(text) => setInputValue(text)}
      />
      {modalVisible && (
        <ScrollView
          contentContainerStyle={{ flex: 1 }}
          style={[
            {
              left: 0,
              top: height,
              width,
            },
            styles.dropdowns.select.outlined,
          ]}
        >
          {filteredOptions.map((option, i) => (
            <Pressable
              style={styles.dropdowns.option}
              key={i}
              {...optionProps}
              android_ripple={{
                radius: 128,
              }}
              onPress={() => {
                setInputValue(option.value.toString());
                setFinalValue(option.value.toString());
                setModalVisible(false);
              }}
            >
              <Text>{option.title}</Text>
            </Pressable>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default SearchableDropdown;
