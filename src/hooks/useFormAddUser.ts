import { useForm } from '@mantine/form';
import { useEffect, useState } from 'react';

interface FormValues {
  user: string;
  lat: string;
  long: string;
  img: string;
}

export const useFormAddUser = () => {
  // Map anchor
  const [anchor, setAnchor] = useState<[number, number]>([20.6721374, -103.3258491]);

  // Form values
  const [, setSubmittedValues] = useState('');
  const form = useForm({
    initialValues: {
      user: '',
      lat: '',
      long: '',
      img: '',
    },

    validate: {
      user: (value) => {
        if (!/^[a-zA-Z\s]+$/.test(value)) {
          return 'El user solo puede contener letras';
        }
        return value.trim().length < 1 ? 'El user debe de ser más largo' : null;
      },
      lat: (value) =>
        value.trim().length === 0
          ? 'Ingresa la latitud o mueve el marcador en el mapa'
          : null,
      long: (value) =>
        value.trim().length === 0
          ? 'Ingresa la longitud o mueve el marcador en el mapa'
          : null,
      img: (value) => (value.trim().length === 0 ? 'Elige un avatar' : null),
    },
  });

  // Update marker position when coordinates change in form inputs
  useEffect(() => {
    if (form.values.lat && form.values.long) {
      setAnchor([Number(form.values.lat), Number(form.values.long)]);
    }
  }, [form.values.lat, form.values.long]);

  // Update form fields when marker is dragged
  const handleDragEnd = (newAnchor: [number, number]) => {
    form.setFieldValue('lat', String(newAnchor[0]));
    form.setFieldValue('long', String(newAnchor[1]));
    setAnchor(newAnchor);
  };

  // Submit Form
  const handleSubmit = (values: FormValues) => {
    setSubmittedValues(JSON.stringify(values));
    // console.log(values);
  };

  return {
    //* Props
    anchor,
    form,
    //* Methods
    handleDragEnd,
    handleSubmit,
    setAnchor,
  };
};
