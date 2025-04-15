import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',  
    alignItems: 'center',  
    backgroundColor: '#E0F7FA', 
  },
  image: {
    width: '100%',  
    height: 200,
    marginBottom: 20,
    resizeMode: 'contain', 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#00796b',  
    textAlign: 'center',  
  },
  label: {
    fontSize: 16,
    color: '#00796b',
    marginBottom: 8,
    textAlign: 'center',  
  },
  input: {
    width: '80%',
    padding: 10,
    borderColor: '#00796b',  
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#00796b',
    textAlign: 'center', 
  },
  item: {
    backgroundColor: '#ffffff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    borderColor: '#00796b',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  itemText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',  
  },
  actions: {
    marginTop: 10,
  },
  deleteButton: {
    backgroundColor: '#FF6347',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: '60%',
  },
  deleteButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  
  buttonContainer: {
    flexDirection: 'row',  
    justifyContent: 'space-between',  
    width: '100%',  
    marginTop: 20,
    paddingHorizontal: 0, 
  },
  button: {
    marginHorizontal:5,  
  },

  footer: {
    marginTop: 30,
    padding: 10,
    alignItems: 'center',
  },
  
  footerText: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
  },
  
});
