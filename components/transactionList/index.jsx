import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../../constants/colors';

function TransactionList({onPress}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <View style={styles.iconBackground}>
            <Image source={require('../../assets/images/logoc.png')} style={styles.icon} />
          </View>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.name}>Jordan</Text>
          <Text style={styles.subtitle}>02.25 PM</Text>
        </View>
      </View>
      <Text style={styles.amount}>-800000 KHS</Text>

    </TouchableOpacity>
  );
}

export default TransactionList;

const styles = {
  container: {
    height: 48,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: 'gray',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    justifyContent:'space-between',
    flexDirection:'row',
    paddingHorizontal:10,
    alignItems:'center',
    marginVertical:6
  },
  amount:{
fontSize:12,
color:colors.primary,
fontWeight:'800',
fontFamily:'Poppins'
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    height: 28,
    width: 28,
    borderRadius: 50,
    backgroundColor: '#D3DCFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconBackground: {
    height: 18,
    width: 18,
  },
  icon: {
    height: 18,
    width: 18,
  },
  detailsContainer: {
    marginLeft: 5,
  },
  name: {
    fontWeight: '700',
    fontSize: 12,
    color: colors.black,
    fontFamily:'Poppins'
  },
  subtitle: {
    fontWeight: '600',
    fontSize: 10,
    color: '#717070',
    fontFamily:'Poppins'
  },
  // Additional styles
};
