import { useForm } from '@mantine/form';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, updateUser } from '../redux/slices/userSlice';
import { IFormValues } from '../interfaces/IFormValues';
import { IUserSlice } from '../interfaces/IUserSlice';

export const useFormAddUser = () => {
  // Map anchor
  const [anchor, setAnchor] = useState<[number, number]>([20.6721374, -103.3258491]);

  // Form values
  const [, setSubmittedValues] = useState('');

  const form = useForm({
    initialValues: {
      name: '',
      lat: '',
      long: '',
      avatar: '',
    },

    validate: {
      name: (value) => {
        if (!/^[a-zA-Z\s]+$/.test(value)) {
          return 'El user solo puede contener letras';
        }
        return value.trim().length < 1 ? 'El user debe de ser más largo' : null;
      },
      lat: (value) => {
        if (!/^-?\d+(\.\d+)?$/.test(value)) {
          return 'Aquí solo puede haber coordenadas';
        }
        return value.trim().length === 0
          ? 'Ingresa la latitud o mueve el marcador en el mapa'
          : null;
      },
      long: (value) => {
        if (!/^-?\d+(\.\d+)?$/.test(value)) {
          return 'Aquí solo puede haber coordenadas';
        }
        return value.trim().length === 0
          ? 'Ingresa la longitud o mueve el marcador en el mapa'
          : null;
      },
      avatar: (value) => (value.trim().length === 0 ? 'Elige un avatar' : null),
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

  // Submit New User Form
  const dispatch = useDispatch();
  const { idCount } = useSelector((state: IUserSlice) => state.user);
  const handleSubmit = (values: IFormValues) => {
    setSubmittedValues(JSON.stringify(values));
    const newData = {
      id: idCount,
      ...values,
    };
    dispatch(setUser(newData));
  };

  // Submit Edit Form
  const handleEditSubmit = (values: IFormValues, id: number) => {
    setSubmittedValues(JSON.stringify(values));
    const newData = {
      id: id,
      ...values,
    };
    dispatch(updateUser(newData));
  };

  return {
    //* Props
    anchor,
    form,
    //* Methods
    handleDragEnd,
    handleSubmit,
    handleEditSubmit,
    setAnchor,
  };
};
