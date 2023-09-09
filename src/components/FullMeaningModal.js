import {
  View,
  Text,
  Modal,
  Pressable,
  StyleSheet,
  ScrollView,
  Dimensions
} from 'react-native';
import React from 'react';


const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

const FullMeaningModal = ({modalVisible, setModalVisible, meaning}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#00000050',
          justifyContent: 'center',
        }}>
        <View style={Styles.modalView}>
          <ScrollView
            fadingEdgeLength={1000}
          >
            <Text style={Styles.modalText}>{meaning}</Text>
          </ScrollView>
          <Pressable
            style={[Styles.button, Styles.buttonClose]}
            onPress={() => setModalVisible(!modalVisible)}>
            <Text style={Styles.textStyle}>Close</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default FullMeaningModal;

const Styles = StyleSheet.create({
  modalView: {
    backgroundColor: '#2e3856',
    borderRadius: 10,
    padding: 25,
    width: SCREEN_WIDTH*0.8,
    elevation: 5,
    alignSelf: 'center',
    maxHeight: SCREEN_HEIGHT*0.9
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    color: 'white',
    fontSize: 16,
  },
});
