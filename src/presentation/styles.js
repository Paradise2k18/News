import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  segmentBox: {
    flex: 1, 
    alignItems: 'center',
    borderTopWidth: 0,
    borderWidth: 2,  
    borderColor: '#0003', 
    paddingTop: 10,
    borderRadius: 5,
  },
  segmentBoxSelected: {
    flex: 1, 
    alignItems: 'center', 
    borderWidth: 2,  
    borderColor: '#0080ff', 
    paddingTop: 10,
    borderRadius: 5,
  }
});
