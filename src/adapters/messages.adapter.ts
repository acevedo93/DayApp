const DEFAULT_MESSAGES = {
  createDaySuccess: {
    type: 'success',
    content: (aditionalContent: any) =>
      `se agendo el dia correctamente ${aditionalContent || ''}`,
  },
  createDayError: {
    type: 'danger',
    content: (aditionalContent: any) =>
      `upps Ocurrio un error creando el dia intentalo nuevamente ${
        aditionalContent || ''
      }`,
  },
  getCurrentDayError: {
    type: 'danger',
    content: (aditionalContent: any) =>
      `Uups Ocurrio un error obteniendo los datos ${aditionalContent || ''}`,
  },
};

export const formatMessage = (
  type: 'createDaySuccess' | 'createDayError' | 'getCurrentDayError',
  aditionalContent: any,
) => {
  return {
    ...DEFAULT_MESSAGES[type],
    content: DEFAULT_MESSAGES[type].content(aditionalContent),
  };
};
