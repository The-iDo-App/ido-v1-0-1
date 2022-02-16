import React from 'react';
import { View, Text } from 'react-native';
import COLORS from '../../src/consts/color';
import { DataTable } from 'react-native-paper';

export default function InfoComponent({name, email}) {
  return (
    <View  style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row', paddingHorizontal: 20 }}  >
        <DataTable>
            <DataTable.Header>
                <DataTable.Title><Text style={{color: COLORS.blue, fontWeight: '700'}}  >IDENTITY</Text></DataTable.Title>
                <DataTable.Title><Text style={{color: COLORS.blue, fontWeight: '700'}}  >DATA INFORMATION</Text></DataTable.Title>
            </DataTable.Header>
            <DataTable.Row>
                <DataTable.Cell><Text style={{color: COLORS.grey, fontWeight: '700'}}  >Name</Text></DataTable.Cell>
                <DataTable.Cell ><Text style={{color: COLORS.grey}}  >{name}</Text></DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
                <DataTable.Cell><Text style={{color: COLORS.grey, fontWeight: '700'}}  >Email Address</Text></DataTable.Cell>
                <DataTable.Cell ><Text style={{color: COLORS.grey}}  >{email}</Text></DataTable.Cell>
            </DataTable.Row>
            
        </DataTable>

       
    </View>
  );
}

//Dagdag na lang ng iba pang Identity Set (Name, age, email etc.)