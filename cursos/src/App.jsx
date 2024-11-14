import react, {useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [formData, setFromData] = useState({
    name: '',
    email: '',
    idade: '',
    sexo: ''
  });

  useEffect(() => {
    //carrega os usuarios ao montar o componente
    fetchUsuarios();
  }, []);
}

const fetchUsuarios = async () =>