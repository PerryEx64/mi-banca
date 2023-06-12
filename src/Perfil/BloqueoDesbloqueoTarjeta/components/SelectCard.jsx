import { StyleSheet } from 'react-native';
import { IndexPath, Layout, Select, SelectItem } from '@ui-kitten/components';
import { DataUsers } from '../../../../utils/constants';
import { useContext } from 'react';
import { MainContext } from '../../../../context/MainContext';
import React from 'react'

const SelectCard = () => {

    const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));
  

  return (
    <Layout
    style={styles.container}
    level='1'
  >
    <Select
      selectedIndex={selectedIndex}
      onSelect={index => setSelectedIndex(index)}
    >

      <SelectItem title='s' />
      <SelectItem title='Option 2' />
      <SelectItem title='Option 3' />
    </Select>
  </Layout>
  )
}

export default SelectCard

const styles = StyleSheet.create({
    container: {
      minHeight: 128,
    },
  });
  