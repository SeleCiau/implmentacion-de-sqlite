import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',  // Centra los elementos verticalmente
    alignItems: 'center',  // Centra los elementos horizontalmente
    backgroundColor: '#E0F7FA',  // Fondo azul claro (tema de agua)
  },
  image: {
    width: '100%',  // Ajuste para que la imagen se adapte al contenedor
    height: 200,
    marginBottom: 20,
    resizeMode: 'contain',  // Evita distorsión de la imagen
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#00796b',  // Verde, relacionado con el agua limpia
    textAlign: 'center',  // Centrado del texto
  },
  label: {
    fontSize: 16,
    color: '#00796b',
    marginBottom: 8,
    textAlign: 'center',  // Centrado del texto
  },
  input: {
    width: '80%',
    padding: 10,
    borderColor: '#00796b',  // Verde
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#00796b',
    textAlign: 'center',  // Centrado del texto
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
    textAlign: 'center',  // Centrado del texto
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
  // Estilo para el contenedor de los botones
  buttonContainer: {
    flexDirection: 'row',  // Distribuye los botones en fila
    justifyContent: 'space-between',  // Deja espacio entre los botones
    width: '100%',  // Asegura que ocupe todo el ancho posible
    marginTop: 20,
    paddingHorizontal: 0,  // Agrega espacio a los lados
  },
  button: {
    marginHorizontal:5,  // Añadimos un margen horizontal para separar los botones
  },
});
