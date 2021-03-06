import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  segmentBoxLeft: {
    flex: 1, 
    alignItems: 'center',
    borderTopWidth: 0,
    borderWidth: 2,  
    borderColor: '#0003', 
    paddingTop: 10,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  segmentBoxCenter: {
    flex: 1, 
    alignItems: 'center',
    borderTopWidth: 0,
    borderWidth: 2,  
    borderColor: '#0003', 
    paddingTop: 10,
  },
  segmentBoxRight: {
    flex: 1, 
    alignItems: 'center',
    borderTopWidth: 0,
    borderWidth: 2,  
    borderColor: '#0003', 
    paddingTop: 10,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  segmentBoxSelectedLeft: {
    flex: 1, 
    alignItems: 'center', 
    borderWidth: 2,  
    borderColor: '#0080ff', 
    paddingTop: 10,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  segmentBoxSelectedCenter: {
    flex: 1, 
    alignItems: 'center', 
    borderWidth: 2,  
    borderColor: '#0080ff', 
    paddingTop: 10,
  },
  segmentBoxSelectedRight: {
    flex: 1, 
    alignItems: 'center', 
    borderWidth: 2,  
    borderColor: '#0080ff', 
    paddingTop: 10,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  menuContainerStyle: {
    alignItems: 'center', 
    borderBottomWidth: 2, 
    borderBottomColor: '#0003', 
    paddingBottom: 10,
  },
  menuTextSize: {
    fontSize: 18,
  }
});
