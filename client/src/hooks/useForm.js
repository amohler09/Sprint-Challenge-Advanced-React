import {useLocalStorage} from './useLocalStorage'

export const useForm = (key, initialValue) => {
    const [values, setValues] = useLocalStorage(key, initialValue);

    const handleChange = e => {
        console.log(e.target.name);
        setValues({
          ...values,
          [e.target.name]: e.target.value
        });
      };
      const clearForm = e => {
        e.preventDefault();
        setValues(initialValue);
      };
    
      return [values, handleChange, clearForm];
    };
    